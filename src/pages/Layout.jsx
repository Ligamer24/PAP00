import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

import {user} from "../Firebase";




const Layout = () => {

    return (
        
        <>
            <Navbar userInfo={user}/>
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;

