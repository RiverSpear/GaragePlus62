import React from "react";

const Breadcrumb = ({ paths }) => {
    return (
        <nav className="hidden sm:flex items-center gap-2 worksans text-sm text-slate-500">
            {paths.map((path, index) => (
                <div key={index} className="flex items-center gap-2">
                    {index > 0 && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m9 20.247 6-16.5"
                            />
                        </svg>
                    )}
                    {path.href ? <p>{path.label}</p> : <p>{path.label}</p>}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumb;
