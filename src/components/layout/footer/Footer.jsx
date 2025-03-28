import React from "react";
import About from "./component/About";

function Footer() {
    return (
        <>
            <div className="px-5 sm:px-10 md:px-16 xl:px-32 py-14 md:py-20 bg-yellow-400/40 backdrop-blur-xl">
                <div className="w-full 2xl:w-[1500px] mx-auto">
                <About />
                </div>
            </div>
        </>
    );
}

export default Footer;
