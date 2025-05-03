import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
<div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-white min-h-screen">



           <header className="w-11/12 mx-auto py-5 ">
            <Navber ></Navber>
           </header>

           <main className="w-11/12 mx-auto py-5" >
<Outlet></Outlet>

           </main>
        </div>
    );
};

export default AuthLayout;