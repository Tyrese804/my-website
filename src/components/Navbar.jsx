import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="relative flex justify-center items-center h-16">
                    {/* Logo on the left */}
                    <a
                        href="#home"
                        className="absolute left-4 font-mono text-xl font-bold text-white"
                    >
                        tyrese<span className="text-red-500">.codes</span>
                    </a>

                    {/* Centered nav links (desktop) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                            Home
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                            About
                        </a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                            Projects
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                            Contact
                        </a>
                    </div>

                    {/* Hamburger menu on the right */}
                    <div
                        className="absolute right-4 w-7 h-5 cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>
                </div>
            </div>
        </nav>

    );

};