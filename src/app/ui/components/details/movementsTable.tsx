"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { movements } from '@/app/lib/constant/movements';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MovementsDetailsModal from './MovementsDetailsModal';

export default function MovementsTable() {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(value);

  const [openDetails, setOpenDetails] = React.useState(false);
  const [selected, setSelected] = React.useState<typeof movements[number] | null>(null);

  return (
    <Box sx={{
      width: '90%',
      height: '90%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <TableContainer
        component={Paper}
        sx={{
          height: '50%',
          flex: 1,
          overflow: 'auto',
          '& .MuiTable-root': { minWidth: 650 },
          '& .MuiTableContainer-root': {
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }
        }}
      >
        <Table
          aria-label="movements table"
          stickyHeader
          sx={{
            '& .MuiTableCell-root': {
              borderBottom: '1px solid rgba(224, 224, 224, 1)',
              padding: '12px 16px',
            },
            '& .MuiTableHead-root .MuiTableCell-root': {
              backgroundColor: 'background.paper',
              fontWeight: 'bold',
              fontSize: '0.875rem',
            },
            '& .MuiTableBody-root .MuiTableRow-root:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            }
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '45%' }}>Descripción</TableCell>
              <TableCell align="left" sx={{ width: '25%' }}>Categoría</TableCell>
              <TableCell align="center" sx={{ width: '10%' }}>Fecha</TableCell>
              <TableCell align="center" sx={{ width: '10%' }}>Monto</TableCell>
              <TableCell align="center" sx={{ width: '10%' }} />
            </TableRow>
          </TableHead>

          <TableBody>
            {movements.map((m, idx) => (
              <TableRow key={`${m.companyId}-${m.date}-${m.description}-${idx}`}>
                <TableCell component="th" scope="row" sx={{ width: '45%' }}>
                  {m.description}
                </TableCell>
                <TableCell align="left" sx={{ width: '25%' }}>
                  {m.categoryId}
                </TableCell>
                <TableCell align="center" sx={{ width: '10%' }}>
                  {m.date}
                </TableCell>
                <TableCell align="center" sx={{ width: '10%' }}>
                  {formatCurrency(m.amount)}
                </TableCell>
                <TableCell
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: 1,
                  }}
                >
                  <IconButton size="small" onClick={() => { setSelected(m); setOpenDetails(true); }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small">
                    <DeleteIcon onClick={() => {}} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MovementsDetailsModal
        open={openDetails}
        movement={selected}
        onClose={() => setOpenDetails(false)}
      />
    </Box>
  );
}