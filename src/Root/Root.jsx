import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-11/12 mx-auto min-h-screen bg-gradient-to-r from-purple-100 to-blue-50'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;