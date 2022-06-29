import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tabela from './Tabela';
import { lightGreen } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: lightGreen,
    secondary: grey,
  },
});

export default function SignIn() {
 const[visivel, setVisivel] = React.useState(true);
  return (<>
    {!visivel && <Tabela/>}
    {visivel &&
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box bgcolor= "#f1f1f1" borderRadius={5} padding={4}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" action='https://us-central1-sis-web-7d13b.cloudfunctions.net/api/login' method='POST' noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // eslint-disable-next-line react/jsx-no-undef
              onClick={() => {setVisivel(x => !x)}}
            >
              Log in
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" color="secondary"> 
                  {"Não possui conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>}
    </> );
}