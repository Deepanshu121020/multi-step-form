import React from 'react';
import { TextField, Grid } from '@mui/material';

const AddressInfo = ({ formData, errors, handleChange }) => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <TextField
        required
        id="address1"
        name="address1"
        label="Address Line 1"
        fullWidth
        value={formData.address1}
        onChange={handleChange('address1')}
        error={!!errors.address1}
        helperText={errors.address1}
        color='secondary'
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        id="address2"
        name="address2"
        label="Address Line 2"
        fullWidth
        value={formData.address2}
        onChange={handleChange('address2')}
        color='secondary'
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        required
        id="city"
        name="city"
        label="City"
        fullWidth
        value={formData.city}
        onChange={handleChange('city')}
        error={!!errors.city}
        helperText={errors.city}
        color='secondary'
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        required
        id="state"
        name="state"
        label="State"
        fullWidth
        value={formData.state}
        onChange={handleChange('state')}
        error={!!errors.state}
        helperText={errors.state}
        color='secondary'
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        required
        id="zip"
        name="zip"
        label="Zip Code"
        fullWidth
        value={formData.zip}
        onChange={handleChange('zip')}
        error={!!errors.zip}
        helperText={errors.zip}
        color='secondary'
      />
    </Grid>
  </Grid>
);

export default AddressInfo;
