import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'app', label: 'App', minWidth: 170 },
  { id: 'category', label: 'Category', minWidth: 100 },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
  },
];

function createData(app, category, price) {
  return { app, category, price };
}

const rows = [
    createData('Im Rich - Trump Edition', 'LIFESTYLE', 400),
  createData('most expensive app (H)', 'FAMILY', 399.99),
  createData(' im rich', 'LIFESTYLE', 399.99),
  createData('I am rich', 'LIFESTYLE', 399.99),
  createData('I am Rich Plus', 'FAMILY', 399.99),
  createData('I am Rich Premium', 'FINANCE', 399.99),
  createData('I am Rich!', 'FINANCE', 399.99),
  createData('I am rich(premium)', 'FINANCE', 399.99),
  createData('I am Rich Pro', 'FAMILY', 399.99),
  createData('I am rich (Most expensive app)', 'FINANCE', 399.99),
  createData('I am extemely Rich', 'LIFESTYLE', 379.99),
  createData('I am rich VIP', 'LIFESTYLE', 299.99),
  createData('Vargo Anesthesia Mega Appa', 'MEDICAL', 79.99),
  createData('Vargo Anesthesia Mega Appa', 'MEDICAL', 79.99)
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(17);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
