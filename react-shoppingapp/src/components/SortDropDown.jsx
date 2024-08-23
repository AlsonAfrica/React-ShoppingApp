// SortDropdown.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SortDropdown = ({ sortOption, onSortChange, width = '200px' }) => {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <FormControl variant="outlined" sx={{ width }}>
      <InputLabel id="sort-dropdown-label">Sort By</InputLabel>
      <Select
        labelId="sort-dropdown-label"
        value={sortOption}
        onChange={handleSortChange}
        label="Sort By"
      >
        <MenuItem value="alphabetical">Alphabetical</MenuItem>
        <MenuItem value="reverseAlphabetical">Reverse Alphabetical</MenuItem>
        {/* Add more sorting options if needed */}
      </Select>
    </FormControl>
  );
};

export default SortDropdown;

