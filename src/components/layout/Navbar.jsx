import React, { useEffect, useState } from "react";
import useFetchArticles from "../../hooks/useFetchArticle";
import { Link } from "react-router-dom";

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
                        ? "bg-black text-white shadow-lg"
                        : "bg-transparent"
                }`}
            >
                {articles.map((article, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between px-5 sm:px-10 md:px-20"
                    >
                        <Link to="/">
                            <img
                                src={
                                    "https:" +
                                    article.fields.logo.fields.file.url
                                }
                                alt=""
                                className="w-[80px]"
                            />
                        </Link>

                        {/* Mobile Menu Icon (Toggle) */}
                        <button
                            className="block sm:hidden"
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
                        <div className="hidden worksans sm:flex gap-14 text-[0.9375rem]">
                            {["Servis", "Lokasi", "FAQ", "Testimoni"].map(
                                (item, index) => (
                                    <Link
                                        key={index}
                                        to={`/${item.toLowerCase()}`}
                                        className="relative pb-1 after:absolute after:content-[''] after:w-0 after:h-[2px] after:bg-amber-500 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                                    >
                                        {item}
                                    </Link>
                                )
                            )}
                        </div>

                        {/* Call Icon */}
                        <Link
                            to="/lokasi"
                            className={`hidden sm:block border p-2.5 rounded-full hover:rotate-45 transition-all duration-300 ${
                                isScrolled
                                    ? "border-transparent"
                                    : "border-gray-200"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className={`size-5 transition-all duration-300 ${
                                    isScrolled
                                        ? "stroke-amber-500"
                                        : "stroke-black"
                                }`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Sidebar */}
            <div
                className={`block sm:hidden fixed top-0 right-0 h-full w-64 bg-black text-white transition-transform duration-300 z-20 ${
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
                        "Servis",
                        "Lokasi",
                        "FAQ",
                        "Testimoni",
                        "Kontak Kami",
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
