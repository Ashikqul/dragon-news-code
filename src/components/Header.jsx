import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center mt-10 flex-col items-center gap-4'>
            <img  src={logo}alt="" />

            <p  className='font-normal text-accent'>  Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format ( new Date,'EEEE, MMMM MM, yyyy' )}</p>
        </div>
    );
};

export default Header;