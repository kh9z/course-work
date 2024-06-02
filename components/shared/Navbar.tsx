"use client"
import Link from "next/link";
import Button from "@/components/ui/Button";
import Route from "@/components/ui/Route";
import {navLinks} from "@/constants";
import MobileMenu from "@/components/shared/MobileMenu";
import {useEffect, useState} from "react";
import clsx from "clsx";

const Navbar = () =>{
    return(
        <nav className="py-4 w-full">
            <div className="w-[95%] mx-auto max-w-[1450px] flex items-center justify-between pb-5 border-b border-gray-100">
                <div className="flex-1">
                    <Link href={"/"}>
                        <h1 className="text-3xl font-extrabold text-secondary">
                            Traveler
                        </h1>
                    </Link>
                </div>
                <ul className="flex items-center justify-center gap-16 flex-2 max-md:hidden">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Route route={link.route} label={link.label}/>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-5 flex-1 justify-end max-md:hidden">
                    <Button text="Log In" onClick={() => null} aria="Log in button"/>
                    <Button text="Sign Up" onClick={() => null} aria="Sign up button"/>
                </div>
                <div>
                    <MobileMenu/>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;