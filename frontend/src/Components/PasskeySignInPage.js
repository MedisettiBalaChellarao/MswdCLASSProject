import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default function PasskeySignInPage() {
  const [email, setEmail] = useState('');
  const [passkey, setPasskey] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    alert(`Signing in with email: ${email} and passkey: ${passkey}`);
    // Add your sign-in logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '45vh' }}>
        <Paper elevation={6} sx={{ padding: 2, borderRadius: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
              Sign In
            </Typography>
            <Box component="form" onSubmit={handleSignIn} noValidate sx={{ width: '100%' }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="passkey"
                label="Passkey"
                type="password"
                id="passkey"
                autoComplete="current-passkey"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
