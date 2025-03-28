import React, { useEffect, useState } from "react";
import useFetchArticles from "../../hooks/useFetchArticle";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import CallIcon from "../../assets/icon/CallIcon";

function Navbar() {
    const { articles } = useFetchArticles("aboutUs");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Function untuk toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Navbar */}
            <div
                className={`fixed top-0 left-0 w-full transition-all duration-300 z-10 ${
                    isScrolled
                        ? "bg-yellow-400/40 backdrop-blur-xl text-black"
                        : "bg-transparent"
                }`}
            >
                {articles.map((article, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between px-5 sm:px-10 lg:px-20"
                    >
                        <Link to="/">
                            <img
                                src={
                                    "https:" +
                                    article.fields.logo.fields.file.url
                                }
                                alt="Logo"
                                width="80"
                                height="80"
                                className="w-[80px]"
                            />
                        </Link>

                        {/* Mobile Menu Icon (Toggle) */}
                        <button
                            className="block md:hidden"
                            name="Mobile Menu Icon"
                            onClick={toggleSidebar}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 transition-transform duration-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                                />
                            </svg>
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden worksans md:flex gap-14 text-[0.9375rem]">
                            {[
                                "Home",
                                "Servis",
                                "Lokasi",
                                "FAQ",
                                "Testimoni",
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    to={`/${item.toLowerCase()}`}
                                    className="relative pb-1 after:absolute after:content-[''] after:w-0 after:h-[2px] after:bg-amber-500 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Call Icon */}
                        <div className="hidden md:block">
                            <Button
                                buttonName="Hubungi kami"
                                to="/lokasi"
                                icon={CallIcon}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Sidebar */}
            <div
                className={`block md:hidden fixed top-0 right-0 h-full w-64 bg-black text-white transition-transform duration-300 z-20 ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close Button */}

                <div
                    className="absolute top-8 right-8 text-white hover:rotate-45 duration-300"
                    onClick={toggleSidebar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </div>

                {/* Sidebar Menu */}
                <nav className="flex flex-col items-end pt-24 pr-10 space-y-5 text-white worksans text-xl">
                    {[
                        "Home",
                        "Servis",
                        "Lokasi",
                        "FAQ",
                        "Testimoni",
                        "Hubungi Kami",
                    ].map((item, index) => (
                        <Link
                            key={index}
                            to={`/${item.toLowerCase().replace(" ", "-")}`}
                            onClick={toggleSidebar}
                            className="hover:text-amber-500 hover:pr-4 duration-300"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}

export default Navbar;
