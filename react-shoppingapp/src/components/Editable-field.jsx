import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function EditableTextField() {
  const [value, setValue] = useState('Editable Text');
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      variant="outlined"
      sx={{ width: 300 }} 
      disabled={!isEditing}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={toggleEdit} edge="end">
              <EditIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      onFocus={() => setIsEditing(true)}
      onBlur={() => setIsEditing(false)}
    />
  );
}

