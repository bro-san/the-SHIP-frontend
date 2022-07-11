import React from 'react';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <div className='header'>
      <Typography
        variant='h2'
        gutterBottom
        component='div'
        sx={{ margin: '10px' }}
      >
        <img
          src='https://cdn1.iconfinder.com/data/icons/honeymoon-filled/64/honeymoon-04-1024.png'
          alt='ship with heart'
          height='75px'
          title='the ship'
          className='ship'
        />
        THE SHIP
        <Typography
          variant='h4'
          gutterBottom
          component='div'
          sx={{ margin: '0px' }}
        >
          a safe space for weebs
        </Typography>
      </Typography>
    </div>
  );
}

export default Header;
