"use client"

import { Card, CardContent, Divider, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';

interface ComparePeriodsCardProps {
  first: [string, string];
  second: [string, string];
  onFirstChange: (v: [string, string]) => void;
  onSecondChange: (v: [string, string]) => void;
  firstTotal?: number;
  secondTotal?: number;
  variationPct?: number; // porcentaje (positivo/negativo)
}

const currency = (v?: number) =>
  typeof v === 'number' ? new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(v) : '-';

export default function ComparePeriodsCard({ first, second, onFirstChange, onSecondChange, firstTotal, secondTotal, variationPct }: ComparePeriodsCardProps) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>Comparar períodos</Typography>
        <Stack spacing={2}>
          <div>
            <Typography variant="caption" color="text.secondary">Primera fecha</Typography>
            <Stack direction="row" spacing={1}>
              <TextField type="date" size="small" value={first[0]} onChange={(e) => onFirstChange([e.target.value, first[1]])} InputLabelProps={{ shrink: true }} />
              <TextField type="date" size="small" value={first[1]} onChange={(e) => onFirstChange([first[0], e.target.value])} InputLabelProps={{ shrink: true }} />
            </Stack>
          </div>
          <div>
            <Typography variant="caption" color="text.secondary">Segunda fecha</Typography>
            <Stack direction="row" spacing={1}>
              <TextField type="date" size="small" value={second[0]} onChange={(e) => onSecondChange([e.target.value, second[1]])} InputLabelProps={{ shrink: true }} />
              <TextField type="date" size="small" value={second[1]} onChange={(e) => onSecondChange([second[0], e.target.value])} InputLabelProps={{ shrink: true }} />
            </Stack>
          </div>
          <Divider />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography variant="caption" color="text.secondary">Primera: {currency(firstTotal)}</Typography>
            <Typography variant="caption" color="text.secondary">Segunda: {currency(secondTotal)}</Typography>
            <Typography variant="caption" color={typeof variationPct === 'number' ? (variationPct >= 0 ? 'success.main' : 'error.main') : 'text.secondary'}>
              {typeof variationPct === 'number' ? `${variationPct.toFixed(1)}%` : '-'}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}


