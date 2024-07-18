import Button from '@mui/material/Button';
// import logoImage from '../../images/logo.jpeg';
import PositionedMenu from '../mui comp/dropdown';
import { Link } from 'react-router-dom';
import React from "react";

export default function Nav() {
    return (
        <div className="bg-black h-[70px] flex items-center justify-between px-10">
            <div className="flex items-center gap-6">
                <Link to='/'>
                    {/* <img src={logoImage} alt="Logo" className="h-12" /> */}
                </Link>
                <h1 className="text-white text-3xl">Sahara Motors</h1>
            </div>
            <div className="flex items-center gap-6">
                <Link to='/enquiry'>
                    <Button variant="outlined" sx={{ color: "white", borderColor: "white", ":hover": { backgroundColor: "white", color: "black" } }}>Service Enquiry</Button>
                </Link>
                <Link to='/about'>
                    <Button variant="outlined" sx={{ color: "white", borderColor: "white", ":hover": { backgroundColor: "white", color: "black" } }}>About</Button>
                </Link>
                <PositionedMenu />
            </div>
        </div>
    );
}
