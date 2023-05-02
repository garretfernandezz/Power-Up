import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{
          width: '48px', height: '48px', margin: '0px 20px'}} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fonrSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{textDecoration: 'none', color: "#3A1212", borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a href="/features" style={{textDecoration: 'none', color: '#3A1212'}}>Features</a>
        <a href="/workouts" style={{textDecoration: 'none', color: '#3A1212'}}>Workout Planner</a>
        <a href="/pages/calorielog" style={{textDecoration: 'none', color: '#3A1212'}}>Calorie Log</a>
      </Stack>
    </Stack>
  )
} 

export default Navbar
