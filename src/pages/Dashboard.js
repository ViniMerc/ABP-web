import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

//tabela
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const theme = createTheme();

function createData(name, entrada, saida) {
    return { name, entrada, saida};
  }

  var rows = [
    createData('Vinicius', "08:00","18:00")
  ];

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box bgcolor= "#f1f1f1" borderRadius={5} padding={4}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',}}>

          <Typography component="h1" variant="h5">
            Dashboard
          </Typography>
          
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            V
          </Avatar>
        
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 150 }} size="small" aria-label="a dense table">
              <TableHead>
                 <TableRow>
                   <TableCell>Nome</TableCell>
                   <TableCell align="left">Entrada</TableCell>
                   <TableCell align="left">Saida</TableCell>
                 </TableRow>
              </TableHead>
              <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.entrada}</TableCell>
                      <TableCell align="left">{row.saida}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </TableContainer>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>              
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}> Marcar ponto </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}