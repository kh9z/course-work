"use client"
import {FaSquareXTwitter, FaSquareInstagram} from "react-icons/fa6";
import {FaFacebookSquare} from "react-icons/fa";
import useMenuActive from "@/hooks/useMenuActive";
import {navLinks} from "@/constants";
import Route from "@/components/ui/Route";
import Link from "next/link";

const footer = () => {
    return (
        <div className="w-full py-5 bg-tertiary mt-10 ">
            <div className="w-[95%] mx-auto max-w-[1450px]">
                <div
                    className="py-5 border-b border-gray-300 border-opacity-20 flex justify-between items-center max-md:gap-8">
                    <div className="flex-1">
                        <Link href={"/"}>
                            <h1 className="text-3xl font-extrabold text-light">
                                Traveler
                            </h1>
                        </Link>
                    </div>
                    <ul className="flex items-center justify-center gap-16 flex-1 text-white max-md:flex-col max-md:gap-5">
                        {navLinks.map((link, index) => {
                            const isActive = useMenuActive(link.route)
                            return (
                                <li key={index}>
                                    <Route route={link.route} label={link.label}
                                           isActive={isActive}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex gap-5 text-white flex-1 justify-end text-2xl">
                        <FaFacebookSquare/>
                        <FaSquareInstagram/>
                        <FaSquareXTwitter/>
                    </div>
                </div>
                <div className="w-full text-center mt-3 text-sm text-white">
                    <span>Усі права захищені Traveler.com</span>
                </div>
            </div>
        </div>
    )
};

export default footer;