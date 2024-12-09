import Image from "next/image";
import Link from "next/link";
import LOGO from "@/app/images/LOGO.png";
import { GoBell } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

export default function Header() {
    return (
        <div>
            {/* Top Navbar */}
            <div className="bg-gray-800 text-white p-4">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-8">
                        <Link href={"/"} className="hover:text-yellow-400">Home</Link>
                        <Link href={"/courses"} className="hover:text-yellow-400">Courses</Link>
                        <Link href={"/about"} className="hover:text-yellow-400">About</Link>
                        <Link href={"/contact"} className="hover:text-yellow-400">Contact</Link>
                        <Link href={"/team"} className="hover:text-yellow-400">Become an Instructor</Link>
                    </div>
                    <div className="flex space-x-4">
                        <select className="bg-gray-700 text-white px-2 py-1 rounded">
                            <option value="1">USD</option>
                            <option value="2">PK</option>
                        </select>
                        <select className="bg-gray-700 text-white px-2 py-1 rounded">
                            <option value="1">English</option>
                            <option value="2">Turkish</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Second Navbar */}
            <div className="bg-white py-4 shadow-md">
                <div className="flex justify-between items-center px-6">
                    {/* Left Section */}
                    <div className="flex items-center space-x-6">
                        <div className="w-40">
                            <Image src={LOGO} alt="Logo" width={160} height={40} />
                        </div>
                        <select className="bg-gray-100 px-4 py-2 rounded-md text-gray-600">
                            <option value="1">Browse</option>
                        </select>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <CiSearch />
                            </span>
                            <input
                                type="text"
                                className="pl-10 pr-4 py-2 rounded-md bg-gray-100 placeholder-gray-500"
                                placeholder="What do you want to learn..."
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-6">
                        <div className="text-gray-500 hover:text-black cursor-pointer">
                            <GoBell />
                        </div>
                        <div className="text-gray-500 hover:text-black cursor-pointer">
                            <FaRegHeart />
                        </div>
                        <div className="text-gray-500 hover:text-black cursor-pointer">
                            <LuShoppingCart />
                        </div>
                        <div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Create Account
                            </button>
                        </div>
                        <div>
                            <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
