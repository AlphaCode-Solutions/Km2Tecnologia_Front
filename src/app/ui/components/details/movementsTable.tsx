"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Función para crear datos de movimientos
function createMovementData(
  companyId: string,
  amount: number,
  registerType: string,
  categoryId: string,
  subCategoryId: string,
  description: string,
  date: string,
  quantity?: string,
) {
  return {
    companyId,
    amount,
    registerType,
    categoryId,
    subCategoryId,
    description,
    date,
    quantity,
    history: [
      {
        date: '2025-04-10',
        transactionId: 'TXN001',
        amount: amount * 0.8,
        type: 'Parcial',
      },
      {
        date: '2025-04-11',
        transactionId: 'TXN002',
        amount: amount * 0.2,
        type: 'Restante',
      },
    ],
  };
}

// Componente Row para cada fila expandible
function Row(props: { row: ReturnType<typeof createMovementData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.description}
        </TableCell>
        <TableCell align="right">{row.registerType}</TableCell>
        <TableCell align="right">${row.amount}</TableCell>
        <TableCell align="right">{row.categoryId}</TableCell>
        <TableCell align="right">{row.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, maxWidth: '100%', overflow: 'auto' }}>
              <Typography variant="h6" gutterBottom component="div">
                Historial de Transacciones
              </Typography>
              <Table size="small" aria-label="transactions">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ minWidth: '120px' }}>Fecha</TableCell>
                    <TableCell sx={{ minWidth: '150px' }}>ID Transacción</TableCell>
                    <TableCell align="right" sx={{ minWidth: '100px' }}>Monto</TableCell>
                    <TableCell align="right" sx={{ minWidth: '100px' }}>Tipo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.transactionId}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.transactionId}</TableCell>
                      <TableCell align="right">${historyRow.amount}</TableCell>
                      <TableCell align="right">{historyRow.type}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Datos de ejemplo basados en movimientos reales
const rows = [
  createMovementData(
    "KM2Ferreteria",
    30,
    "Ingreso",
    "Metalurgica",
    "Clavos 9mm",
    "Venta de clavos del 9mm",
    "2025-04-10",
    "100"
  ),
  createMovementData(
    "KM2Ferreteria",
    20,
    "Costos",
    "Metalurgica",
    "Clavos 9mm",
    "Compra de clavos del 9mm",
    "2025-04-10",
    "100"
  ),
  createMovementData(
    "KM2Ferreteria",
    300,
    "Ingreso",
    "Metalurgica",
    "Caños tipo C de 1/2",
    "Venta de caños tipo C de 1/2",
    "2025-04-10",
    "50"
  ),
  createMovementData(
    "KM2Ferreteria",
    100,
    "Costos",
    "Metalurgica",
    "Caños tipo C de 1/2",
    "Compra de caños tipo C de 1/2",
    "2025-04-10",
    "50"
  ),
  createMovementData(
    "KM2Ferreteria",
    1000,
    "Gastos",
    "Sueldos y Beneficios",
    "Sueldos empleados",
    "Pago de sueldos mensual",
    "2025-04-10"
  ),
];

export default function MovementsTable() {
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
          '& .MuiTable-root': {
            minWidth: 650,
          },
          '& .MuiTableContainer-root': {
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }
        }}
      >
        <Table 
          aria-label="collapsible table"
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
              <TableCell sx={{ width: '50px', minWidth: '50px' }} />
              <TableCell sx={{ width: '25%', minWidth: '200px' }}>Descripción</TableCell>
              <TableCell align="right" sx={{ width: '15%', minWidth: '120px' }}>Tipo de Registro</TableCell>
              <TableCell align="right" sx={{ width: '15%', minWidth: '100px' }}>Monto</TableCell>
              <TableCell align="right" sx={{ width: '20%', minWidth: '150px' }}>Categoría</TableCell>
              <TableCell align="right" sx={{ width: '15%', minWidth: '120px' }}>Fecha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.companyId + row.date + row.description} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}