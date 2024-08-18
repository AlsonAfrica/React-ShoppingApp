import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 100, // Make the dropdown smaller
  backgroundColor: theme.palette.background.paper, // Change background color
  borderRadius: 4,
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary, // Change label color
  },
  '& .MuiSelect-root': {
    padding: '6px 24px 6px 8px', // Adjust padding inside dropdown
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main, // Change border color
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.dark, // Change border color on hover
  },
}));

export default function Dropdown() {
  const [sortOption, setSortOption] = useState('');

  const handleChange = (event) => {
    setSortOption(event.target.value);
    // Add your sorting logic here
  };

  return (
    <CustomFormControl variant="outlined" sx={{backgroundColor:'transparent'}}>
      <InputLabel id="sort-label">Sort By</InputLabel>
      <Select
        labelId="sort-label"
        id="sort-select"
        value={sortOption}
        onChange={handleChange}
        label="Sort By"
      >
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="lastUpdated">Last Updated</MenuItem>
      </Select>
    </CustomFormControl>
  );
}
