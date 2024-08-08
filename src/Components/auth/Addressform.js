import React from 'react'
import { TextField, Grid, Select, MenuItem, Button, InputLabel, FormControl } from '@mui/material';

export const Addressform = ({setAddress, setCity , setLocality , setName , setNumber , locality ,setState , setPincode , city , state , handleformsubmit}) => {
  return (
    <Grid container spacing={1}>
    <Grid item xs={12} md={6}>
      <TextField
        type='text'
        label="Name"
        variant="outlined"
        fullWidth
        onChange={e => setName(e.target.value)}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField
        type='number'
        label="Mobile Number"
        variant="outlined"
        fullWidth
        onChange={e => setNumber(e.target.value)}
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
        onChange={e => setAddress(e.target.value)}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField
        type='text'
        label='Pincode'
        variant="outlined"
        fullWidth
        onChange={e => setPincode(e.target.value)}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField
        type='text'
        label='Locality'
        variant="outlined"
        fullWidth
        onChange={e => setLocality(e.target.value)}
        value={locality}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <TextField
        type='text'
        label='City'
        variant="outlined"
        fullWidth
        onChange={e => setCity(e.target.value)}
        value={city}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel>District</InputLabel>
        <Select
          label="District"
          defaultValue=""
          onChange={e => setState(e.target.value)}
          value={state}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* Add your state options here */}
          <MenuItem value="state1"></MenuItem>
          <MenuItem value="state2">State 2</MenuItem>
          <MenuItem value="state3">State 3</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12} className="text-center">
      <Button variant="contained" color="primary" className='mt-4' onClick={handleformsubmit}>
        Submit
      </Button>
    </Grid>
  </Grid>
  )
}
