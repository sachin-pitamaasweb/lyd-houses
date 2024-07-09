import React from 'react';
import { TextField, Button, MenuItem, Grid, Box } from '@mui/material';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <Box className="search-form-container">
      <h2>Search Communities</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Minimum Price" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Maximum Price" fullWidth variant="outlined" select>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Counties" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="School District" fullWidth variant="outlined" select>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Button className="search-button" variant="contained" color="primary">
        SEARCH
      </Button>
    </Box>
  );
};

export default SearchForm;
