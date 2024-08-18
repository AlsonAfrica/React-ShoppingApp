import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const MiniSearchBar = styled(TextField)(({ theme }) => ({
  width: '200px',
  '& .MuiInputBase-root': {
    padding: '4px 8px', 
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px', 
    backgroundColor: theme.palette.background.paper, 
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.dark, 
    },
  },
}));

export default function SearchBar() {
  return (
    <MiniSearchBar
      variant="outlined"
      placeholder="Search..."
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
