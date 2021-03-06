import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function NavBar() {
  return (
    <nav>
      <NavLink exact to='/'>
        <Typography variant='button' display='block' gutterBottom>
          Home
        </Typography>
      </NavLink>
      <NavLink exact to='/ships'>
        <Typography variant='button' display='block' gutterBottom>
          Browse Ships
        </Typography>
      </NavLink>
      <NavLink exact to='/characters'>
        <Typography variant='button' display='block' gutterBottom>
          Browse Characters
        </Typography>
      </NavLink>
      <NavLink exact to='/char-form'>
        <Typography variant='button' display='block' gutterBottom>
          Add Characters
        </Typography>
      </NavLink>
    </nav>
  );
}

export default NavBar;
