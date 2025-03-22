import React from "react";

function Index(props) {
    const handleClick = () => {
        window.history.back();
    };

    return (
        <>
            <section className="flex flex-col items-center gap-10 text-center py-56 px-10">
                <div className="flex flex-col items-center gap-5">
                    <p className="worksans-600 text-[31px] md:text-[39px] text-slate-800">
                        {props.title}
                    </p>
                    <p className="worksans text-[15px] leading-7 text-slate-800 w-full sm:w-3/4">
                        {props.description}
                    </p>
                </div>
                {props.showBackbutton && (
                    <div
                        onClick={handleClick}
                        className="group relative flex items-center justify-center bg-black text-white worksans text-[14px] w-[150px] py-3 rounded-xl cursor-pointer"
                    >
                        <div className="absolute top-1/2 -translate-y-1/2 left-2 group-hover:left-[7.5rem] opacity-0 group-hover:opacity-100 duration-100 ease-out">
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
                                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                />
                            </svg>
                        </div>
                        <span className="group-hover:opacity-0 duration-100">
                            Kembali
                        </span>
                    </div>
                )}
            </section>
        </>
    );
}

export default Index;
