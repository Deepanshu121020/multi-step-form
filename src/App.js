import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import StepperForm from './components/StepperForm';
import './App.css';

function App() {
  return (
    <Box component="main" height='100vh' maxWidth="100vw" display='flex' alignContent='center' flexDirection="column" justifyContent='center'>
      <Container maxWidth='sm'>
        <Typography component="h1" variant="h4" mb={4} align="center" color='secondary'>
          Multi-Step Form
        </Typography>
        <StepperForm />
      </Container>
    </Box>
  );
}

export default App;
