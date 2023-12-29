import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className="bg-black p-2 w-full fixed top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl border p-2">
                    <a href="#" className="hover:text-red-500">
                        THE TACO SHOP
                    </a>
                </div>
                <div className="lg:hidden">
                    <button className=" text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                        </svg>
                        <path d="m4 6h16m4 12h16m-7 6h7"></path>
                    </button>
                </div>
                <div className="hidden lg:flex space-x-4">
                    <a href="#" className="text-white text-xl hover:text-red-500">MENU</a>
                    <a href="#" className="text-white text-xl hover:text-red-500">LOCATIONS</a>
                    <a href="#" className="text-white text-xl hover:text-red-500">REWARDS</a>
                    <a href="#" className="text-white text-xl hover:text-red-500">ABOUT US</a>
                    <a href="#" className="text-white text-xl hover:text-red-500">CONTACT US</a>
                </div>
                <div className="flex items-center space-x-4 ">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-6 text-white hover:text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </a>
                    <a href="#" className="text-white text-xl hover:text-red-500">
                        Sign In/Sign Up
                    </a>
                </div>
                {menuOpen && (
                    <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
                        <div className="flex items-center">
                            <button
                                className="text-white focus:outline-none"
                                onClick={toggleMenu}>
                                <svg
                                    className="h-8 w-8 my-2 mx-2 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M6 18L18 6M6 6l12 12"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="white"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="#" className="text-white my-4">Menu</a>
                            <a href="#" className="text-white my-4">Locations</a>
                            <a href="#" className="text-white my-4">Rewards</a>
                            <a href="#" className="text-white my-4">About Us</a>
                            <a href="#" className="text-white my-4">Contact Us</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar; 
