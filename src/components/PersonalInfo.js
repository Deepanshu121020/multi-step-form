import React from 'react';
import { TextField, Grid } from '@mui/material';

const PersonalInfo = ({ formData, errors, handleChange }) => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <TextField
        color='secondary'
        required
        id="name"
        name="name"
        label="Name"
        fullWidth
        value={formData.name}
        onChange={handleChange('name')}
        error={!!errors.name}
        helperText={errors.name}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        color='secondary'
        required
        id="email"
        name="email"
        label="Email"
        fullWidth
        value={formData.email}
        onChange={handleChange('email')}
        error={!!errors.email}
        helperText={errors.email}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        color='secondary'
        required
        id="phone"
        name="phone"
        label="Phone"
        fullWidth
        value={formData.phone}
        onChange={handleChange('phone')}
        error={!!errors.phone}
        helperText={errors.phone}
      />
    </Grid>
  </Grid>
);

export default PersonalInfo;
