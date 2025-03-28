import React, { useEffect, useState } from "react";

function ScrollToTop() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <a href="#top" className={`fixed bottom-10 right-10 bg-amber-500 p-3 rounded-full z-50 ${isScrolled ? 'opacity-100' : 'opacity-0 invisible'} duration-200`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6 stroke-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                </svg>
            </a>
        </>
    );
}

export default ScrollToTop;
