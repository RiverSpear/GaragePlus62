import React from "react";
import { Link } from "react-router-dom";

function Button({ buttonName, to = "/", icon: Icon}) {
    return (
        <>
            <Link
                to={to}
                className="flex items-center gap-2 hover:gap-4 bg-black px-4 py-2.5 rounded-full w-max duration-300"
            >
                <p className="text-white worksans-500 text-[.875rem]">
                    {buttonName}
                </p>
				{Icon && <Icon className="size-4 text-white" />}
            </Link>
        </>
    );
}

export default Button;
