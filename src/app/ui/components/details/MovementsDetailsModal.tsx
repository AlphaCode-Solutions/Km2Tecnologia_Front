"use client"

import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Chip, Stack, TextField } from '@mui/material';

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

interface MovementsDetailsModalProps {
  open: boolean;
  movement: MovementItem | null;
  onClose: () => void;
  onEdit?: (movement: MovementItem) => void;
}

export default function MovementsDetailsModal({ open, movement, onClose, onEdit }: MovementsDetailsModalProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [amount, setAmount] = React.useState<number>(0);
  const [description, setDescription] = React.useState<string>('');
  const [date, setDate] = React.useState<string>('');

  React.useEffect(() => {
    if (movement) {
      setAmount(movement.amount);
      setDescription(movement.description);
      setDate(movement.date);
      setIsEditing(false);
    }
  }, [movement]);

  if (!movement) return null;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(value);

  const handlePrimary = () => {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }
    const updated: MovementItem = {
      ...movement,
      amount: Number(amount) || 0,
      description: description.trim(),
      date,
    };
    onEdit?.(updated);
    setIsEditing(false);
    onClose();
  };

  const handleCancel = () => {
    if (isEditing) {
      // reset a valores originales y salir de edición
      setAmount(movement.amount);
      setDescription(movement.description);
      setDate(movement.date);
      setIsEditing(false);
      return;
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>{movement.registerType || 'Movimiento'}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <Stack direction="row" spacing={1}>
            {movement.subCategoryId && <Chip size="small" label={movement.subCategoryId} />}
            <Chip size="small" label={movement.categoryId} />
          </Stack>

          {isEditing ? (
            <Stack spacing={2}>
              <TextField
                label="Monto"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                fullWidth
              />
              <TextField
                label="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                multiline
                minRows={2}
              />
              <TextField
                label="Fecha"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Stack>
          ) : (
            <>
              <div>
                <Typography variant="body2" color="text.secondary">Monto</Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>{formatCurrency(movement.amount)}</Typography>
              </div>

              <div>
                <Typography variant="body2" color="text.secondary">Descripción</Typography>
                <Typography variant="body1">{movement.description}</Typography>
              </div>

              <div>
                <Typography variant="body2" color="text.secondary">Fecha</Typography>
                <Typography variant="body1">{movement.date}</Typography>
              </div>
            </>
          )}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleCancel}>Cancelar</Button>
        <Button variant="contained" onClick={handlePrimary}>{isEditing ? 'Guardar' : 'Editar'}</Button>
      </DialogActions>
    </Dialog>
  );
}


