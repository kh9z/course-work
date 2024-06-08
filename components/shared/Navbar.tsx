"use client"
import Link from "next/link";
import Button from "@/components/ui/Button";
import Route from "@/components/ui/Route";
import {navLinks} from "@/constants";
import MobileMenu from "@/components/shared/MobileMenu";
import {useEffect, useState} from "react";
import clsx from "clsx";
import useMenuActive from "@/hooks/useMenuActive";
import {User} from "@prisma/client";
import {useRouter} from "next/navigation";
import {signOut} from "next-auth/react";
import Image from "next/image";
import {router} from "next/client";

interface NavbarProps {
    user: User
}

const Navbar: React.FC<NavbarProps> = ({user}) => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolling(true)
            } else {
                setIsScrolling(false)
            }
        };
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);
    return (
        <nav className={clsx("py-4 w-full", isScrolling ? "fixed top-0 bg-white shadow-lg z-10" : "relative")}>
            <div
                className={clsx("w-[95%] mx-auto max-w-[1450px] flex items-center justify-between border-b border-gray-100", isScrolling && "pb-0 border-none", !isScrolling && "pb-5")}>
                <div className="flex-1">
                    <Link href={"/"}>
                        <h1 className="text-3xl font-extrabold text-secondary">
                            Traveler
                        </h1>
                    </Link>
                </div>
                <ul className="flex items-center justify-center gap-16 flex-2 max-md:hidden">
                    {navLinks.map((link, index) => {
                        const isActive = useMenuActive(link.route)
                        return (
                            <li key={index}>
                                <Route route={link.route} label={link.label}/>
                            </li>
                        );
                    })}
                </ul>
                {!user && (
                    <div className="flex gap-5 flex-1 justify-end max-md:hidden">
                        <Button text="Log In" onClick={() => router.push('/access')} aria="Log in button"/>
                        <Button text="Sign Up" onClick={() => router.push('/access')} aria="Sign up button"/>
                    </div>
                )}
                {user && (
                    <div className="flex gap-5 items-center flex-1 justify-end max-md:hidden">
                        <h1>{user.name}</h1>
                        <img src={user.image as string} alt={`Image of ${user.name}`}
                             className="rounded-full border-4 border-primary cursor-pointer w-[50px] h-[50px]"
                             onClick={() => setOpenUserMenu(!openUserMenu)}/>
                    </div>
                )}
                {openUserMenu && (
                    <ul className="z-10 absolute right-12 top-[70px] w-48 bg-white shadow-md rounded-md p-4">
                        <Link href="/create" onClick={() => setOpenUserMenu(false)}>
                            <li>Create a post</li>
                        </Link>
                        <Link href="/userposts" onClick={() => setOpenUserMenu(false)}>
                            <li>My Posts</li>
                        </Link>
                        <li className="cursor-pointer" onClick={() => signOut()}>Sign Out</li>
                    </ul>
                )}
                <div>
                    <MobileMenu/>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;