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
import { blue } from '@mui/material/colors';
import { lightGreen } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import Home from './Home'

const theme = createTheme({
  palette: {
    primary: lightGreen,
    secondary: blue,
  },
});

function createData(name, entrada, deletar) {
    return { name, entrada, deletar};
  }
  var rows = [
    createData('Vinicius', "08:00", <DeleteIcon />)
  ];

export default function SignIn() {
  const[visivel, setVisivel] = React.useState(true);
  return (<>
    {!visivel && <Home/>}
    {visivel &&
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
                   <TableCell>Deletar</TableCell>
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
                      <TableCell align="left">{row.deletar}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </TableContainer>
          <Box component="form" noValidate sx={{ mt: 1 }}>              
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}> Marcar entrada </Button>
          </Box>
          <Box component="form" noValidate sx={{ mt: 1 }}>              
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              // eslint-disable-next-line react/jsx-no-undef
              onClick={() => {setVisivel(x => !x)}}> Voltar para página inicial </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  }</>);
}