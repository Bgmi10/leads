import React from 'react';
import { TextField, Grid, Select, MenuItem, Button, InputLabel, FormControl } from '@mui/material';

export const Addressform = ({
  address,
  city,
  locality,
  name,
  mobilenumber,
  state,
  pincode,
  statesOptions, // Pass an array of state options
  onAddressChange,
  onCityChange,
  onLocalityChange,
  onNameChange,
  onNumberChange,
  onStateChange,
  onPincodeChange,
  handleFormSubmit
}) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <TextField
          type='text'
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={e => onNameChange(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          type='number'
          label="Mobile Number"
          variant="outlined"
          fullWidth
          value={mobilenumber}
          onChange={e => onNumberChange(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type='text'
          label='Address'
          variant="outlined"
          multiline
          rows={3}
          fullWidth
          value={address}
          onChange={e => onAddressChange(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          type='text'
          label='Pincode'
          variant="outlined"
          fullWidth
          value={pincode}
          onChange={e => onPincodeChange(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          type='text'
          label='Locality'
          variant="outlined"
          fullWidth
          value={locality}
          onChange={e => onLocalityChange(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          type='text'
          label='City'
          variant="outlined"
          fullWidth
          value={city}
          onChange={e => onCityChange(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>District</InputLabel>
          <Select
            label="District"
            value={state}
            onChange={e => onStateChange(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {statesOptions.map((stateOption, index) => (
              <MenuItem key={index} value={stateOption}>
                {stateOption}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} className="text-center">
        <Button variant="contained" color="primary" className='mt-4' onClick={handleFormSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
