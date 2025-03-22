import React from "react";
import About from "./component/About";
import Location from "./component/Location";

function Footer() {
    return (
        <>
            <div className="px-5 sm:px-10 md:px-16 xl:px-32 py-14 md:py-20">
                <About />
            </div>
        </>
    );
}

export default Footer;
