import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <>
            <p className="worksans-600 text-[2rem] md:text-[3rem]">
                {props.title}
            </p>
            <p className="worksans text-[14px] sm:text-[1rem] w-full md:w-3/5 leading-6 sm:leading-7">
                {props.description} <Link to="/lokasi" className="underline underline-offset-4">Hubungi Kami Sekarang!</Link>
            </p>
        </>
    );
}

export default Header;
