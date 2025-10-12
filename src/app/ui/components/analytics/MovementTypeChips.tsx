"use client"

import { Chip, Stack } from '@mui/material';
import * as React from 'react';

type MovementKey = 'income' | 'bills' | 'costs' | 'avg';

interface MovementTypeChipsProps {
  value: MovementKey;
  onChange: (value: MovementKey) => void;
}

export default function MovementTypeChips({ value, onChange }: MovementTypeChipsProps) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Ingresos" color={value === 'income' ? 'success' : 'default'} onClick={() => onChange('income')} size="small" />
      <Chip label="Gastos" color={value === 'bills' ? 'error' : 'default'} onClick={() => onChange('bills')} size="small" />
      <Chip label="Costos" color={value === 'costs' ? 'warning' : 'default'} onClick={() => onChange('costs')} size="small" />
      <Chip label="Ticket promedio" color={value === 'avg' ? 'info' : 'default'} onClick={() => onChange('avg')} size="small" />
    </Stack>
  );
}


