"use client"

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export interface MovementItem {
  companyId: string;
  amount: number;
  registerType: string;
  categoryId: string;
  subCategoryId?: string;
  description: string;
  date: string;
  quantity?: string;
}

function groupByYear(data: MovementItem[]) {
  const map = new Map<string, number>();
  data.forEach((m) => {
    const y = new Date(m.date).getFullYear().toString();
    map.set(y, (map.get(y) || 0) + m.amount);
  });
  const labels = Array.from(map.keys()).sort();
  const values = labels.map((y) => map.get(y) || 0);
  return { labels, values };
}

export default function IncomeBarChart({
  firstItems,
  secondItems,
  firstColor = '#22c55e',
  secondColor = '#06b6d4',
  firstLabel = 'Primera',
  secondLabel = 'Segunda',
  aggregate = true,
}: {
  firstItems: MovementItem[];
  secondItems: MovementItem[];
  firstColor?: string;
  secondColor?: string;
  firstLabel?: string;
  secondLabel?: string;
  aggregate?: boolean;
}) {
  const chartProps = React.useMemo(() => {
    if (aggregate) {
      const sum = (arr: MovementItem[]) => arr.reduce((s, m) => s + m.amount, 0);
      const s1 = sum(firstItems);
      const s2 = sum(secondItems);
      return {
        xAxis: [{ data: ['Períodos'], scaleType: 'band' as const }],
        series: [
          { data: [s1], color: firstColor, label: firstLabel },
          { data: [s2], color: secondColor, label: secondLabel },
        ],
      };
    }
    const g1 = groupByYear(firstItems);
    const g2 = groupByYear(secondItems);
    const allLabels = Array.from(new Set([...g1.labels, ...g2.labels])).sort();
    const v1 = allLabels.map((l) => {
      const idx = g1.labels.indexOf(l);
      return idx >= 0 ? g1.values[idx] : 0;
    });
    const v2 = allLabels.map((l) => {
      const idx = g2.labels.indexOf(l);
      return idx >= 0 ? g2.values[idx] : 0;
    });
    return {
      xAxis: [{ data: allLabels, scaleType: 'band' as const }],
      series: [
        { data: v1, color: firstColor, label: firstLabel },
        { data: v2, color: secondColor, label: secondLabel },
      ],
    };
  }, [aggregate, firstItems, secondItems, firstColor, secondColor, firstLabel, secondLabel]);

  return (
    <BarChart
      xAxis={chartProps.xAxis}
      series={chartProps.series}
      height={220}
      margin={{ left: 30, right: 10, top: 10, bottom: 20 }}
    />
  );
}


