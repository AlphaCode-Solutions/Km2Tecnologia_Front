"use client"

import * as React from 'react';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import PeriodControls from '@/app/ui/components/analytics/PeriodControls';
import MovementTypeChips from '@/app/ui/components/analytics/MovementTypeChips';
import ComparePeriodsCard from '@/app/ui/components/analytics/ComparePeriodsCard';
import InsightsList, { InsightItem } from '@/app/ui/components/analytics/InsightsList';
import IncomeBarChart from '@/app/ui/components/analytics/IncomeBarChart';
import { movements } from '@/app/lib/constant/movements';

export default function AnalyticsPage() {
  const [quick, setQuick] = React.useState<'mes' | 'ultimos_12' | 'rango'>('mes');
  const [range, setRange] = React.useState<[string, string]>(['2025-01-01', '2025-12-31']);
  const [first, setFirst] = React.useState<[string, string]>(['2025-01-01', '2025-06-30']);
  const [second, setSecond] = React.useState<[string, string]>(['2025-07-01', '2025-12-31']);
  const [movementKey, setMovementKey] = React.useState<'income' | 'bills' | 'costs' | 'avg'>('income');

  // Actualiza el rango según selección rápida
  React.useEffect(() => {
    const toISO = (d: Date) => d.toISOString().slice(0, 10);
    const now = new Date();
    if (quick === 'mes') {
      const start = new Date(now.getFullYear(), now.getMonth(), 1);
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      setRange([toISO(start), toISO(end)]);
    } else if (quick === 'ultimos_12') {
      const end = now;
      const start = new Date(now);
      start.setFullYear(start.getFullYear() - 1);
      setRange([toISO(start), toISO(end)]);
    }
  }, [quick]);

  // Helpers
  const inRange = (date: string, [from, to]: [string, string]) => {
    const ts = new Date(date).getTime();
    return ts >= new Date(from).getTime() && ts <= new Date(to).getTime();
  };
  const movementFilter = (m: typeof movements[number]) => {
    if (movementKey === 'income') return m.registerType === 'Ingreso';
    if (movementKey === 'bills') return m.registerType === 'Gastos';
    if (movementKey === 'costs') return m.registerType === 'Costos';
    return true;
  };
  const filtered = movements.filter((m) => inRange(m.date, range) && movementFilter(m));
  const total = filtered.reduce((sum, m) => sum + m.amount, 0);

  // Para comparar períodos: filtra por primera y segunda fecha
  const firstItems = movements.filter((m) => inRange(m.date, first) && movementFilter(m));
  const secondItems = movements.filter((m) => inRange(m.date, second) && movementFilter(m));
  const firstTotal = firstItems.reduce((s, m) => s + m.amount, 0);
  const secondTotal = secondItems.reduce((s, m) => s + m.amount, 0);
  const variationPct = firstTotal === 0 ? (secondTotal === 0 ? 0 : 100) : ((secondTotal - firstTotal) / firstTotal) * 100;

  // Insight por categoría dominante (dentro del filtro actual)
  const topCategory = (() => {
    const map = new Map<string, number>();
    secondItems.forEach((m) => map.set(m.categoryId, (map.get(m.categoryId) || 0) + m.amount));
    let max = 0; let cat = '';
    map.forEach((v, k) => { if (v > max) { max = v; cat = k; } });
    return { category: cat, total: max };
  })();

  // Regla de positividad segun tipo: ingresos ↑ positivo; gastos/costos ↑ negativo
  const isPositiveAccordingType = (() => {
    if (movementKey === 'income') return variationPct >= 0;
    if (movementKey === 'bills' || movementKey === 'costs') return variationPct <= 0;
    return variationPct >= 0; // default para 'avg'
  })();

  // Insight específico: sueldos (disminuir es positivo)
  const normalize = (s: string) => s.toLowerCase();
  const isSalary = (c: string) => normalize(c).includes('sueldos');
  const sueldosFirst = movements
    .filter((m) => inRange(m.date, first) && m.registerType === 'Gastos' && isSalary(m.categoryId))
    .reduce((s, m) => s + m.amount, 0);
  const sueldosSecond = movements
    .filter((m) => inRange(m.date, second) && m.registerType === 'Gastos' && isSalary(m.categoryId))
    .reduce((s, m) => s + m.amount, 0);
  const sueldosVarPct = sueldosFirst === 0 ? (sueldosSecond === 0 ? 0 : 100) : ((sueldosSecond - sueldosFirst) / sueldosFirst) * 100;
  const sueldosPositive = sueldosVarPct <= 0; // bajar sueldos es positivo

  const formatCurrency = (v: number) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(v);

  const insights: InsightItem[] = [
    { text: `Los ${movementKey === 'income' ? 'ingresos' : movementKey === 'bills' ? 'gastos' : 'costos'} del período ${first[0]} a ${first[1]} son ${Math.abs(variationPct).toFixed(0)}% ${variationPct >= 0 ? 'mayores' : 'menores'} que los del período ${second[0]} a ${second[1]}.`, positive: isPositiveAccordingType },
    { text: `Los gastos en sueldos del período ${first[0]} a ${first[1]} son ${Math.abs(sueldosVarPct).toFixed(0)}% ${sueldosVarPct >= 0 ? 'mayores' : 'menores'} que los del período ${second[0]} a ${second[1]}.`, positive: sueldosPositive },
    { text: `En ${topCategory.category || 'todas las categorías'}, el total del segundo período es ${formatCurrency(topCategory.total)}.`, positive: true },
  ];

  // Mensaje final basado SIEMPRE en ingresos
  const incomeFirst = movements.filter((m) => inRange(m.date, first) && m.registerType === 'Ingreso').reduce((s, m) => s + m.amount, 0);
  const incomeSecond = movements.filter((m) => inRange(m.date, second) && m.registerType === 'Ingreso').reduce((s, m) => s + m.amount, 0);
  const incomeVarPct = incomeFirst === 0 ? (incomeSecond === 0 ? 0 : 100) : ((incomeSecond - incomeFirst) / incomeFirst) * 100;
  const finalMessage = `¡Felicidades! Tu negocio ha ${incomeVarPct >= 0 ? 'crecido' : 'disminuido'} un ${Math.abs(incomeVarPct).toFixed(0)}% entre el período ${first[0]} a ${first[1]} y el período ${second[0]} a ${second[1]}.`;

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>{'{Username o empresa}'}</Typography>
        <PeriodControls range={range} onRangeChange={setRange} quick={quick} onQuickChange={setQuick} />
      </Box>

      <Card variant="outlined">
        <CardContent>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems={{ xs: 'stretch', md: 'flex-start' }}>
            {/* Columna izquierda: título, monto y gráfico */}
            <Box sx={{ flex: 2, minWidth: 320 }}>
              <Typography variant="caption" color="text.secondary">{movementKey === 'income' ? 'INGRESOS' : movementKey === 'bills' ? 'GASTOS' : movementKey === 'costs' ? 'COSTOS' : 'TICKET PROMEDIO'}</Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>{formatCurrency(total)}</Typography>
              <IncomeBarChart
                firstItems={firstItems}
                secondItems={secondItems}
                firstColor={movementKey === 'income' ? '#22c55e' : movementKey === 'bills' ? '#ef4444' : movementKey === 'costs' ? '#f59e0b' : '#06b6d4'}
                secondColor={'#94a3b8'}
                firstLabel={'Primera'}
                secondLabel={'Segunda'}
                aggregate={true}
              />
            </Box>

            {/* Columna derecha: chips + comparar períodos */}
            <Stack spacing={2} sx={{ flex: 1, minWidth: 300 }}>
              <MovementTypeChips value={movementKey} onChange={setMovementKey} />
              <ComparePeriodsCard
                first={first}
                second={second}
                onFirstChange={setFirst}
                onSecondChange={setSecond}
                firstTotal={firstTotal}
                secondTotal={secondTotal}
                variationPct={variationPct}
              />
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <InsightsList items={insights} />
          <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>{finalMessage}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}


