import React from 'react';
import Home from '../../components/Home/Home';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;