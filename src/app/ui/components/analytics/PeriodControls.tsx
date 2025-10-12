"use client"

import { Box, Button, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import * as React from 'react';

interface PeriodControlsProps {
  range: [string, string];
  onRangeChange: (range: [string, string]) => void;
  quick: 'mes' | 'ultimos_12' | 'rango';
  onQuickChange: (q: 'mes' | 'ultimos_12' | 'rango') => void;
}

export default function PeriodControls({ range, onRangeChange, quick, onQuickChange }: PeriodControlsProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
      <ToggleButtonGroup
        exclusive
        size="small"
        value={quick}
        onChange={(_, v) => v && onQuickChange(v)}
      >
        <ToggleButton value="mes">Mes</ToggleButton>
        <ToggleButton value="ultimos_12">Últimos 12 meses</ToggleButton>
        <ToggleButton value="rango">Seleccionar periodo</ToggleButton>
      </ToggleButtonGroup>

      <TextField
        label="Desde"
        type="date"
        size="small"
        value={range[0]}
        onChange={(e) => onRangeChange([e.target.value, range[1]])}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Hasta"
        type="date"
        size="small"
        value={range[1]}
        onChange={(e) => onRangeChange([range[0], e.target.value])}
        InputLabelProps={{ shrink: true }}
      />

      <Button variant="outlined" size="small">Aplicar</Button>
    </Box>
  );
}


