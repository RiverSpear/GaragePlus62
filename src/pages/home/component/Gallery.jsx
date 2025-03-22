import React from "react";
import gallery1 from "../../../assets/image/gallery.webp";
import gallery2 from "../../../assets/image/gallery2.webp";
import gallery3 from "../../../assets/image/gallery3.webp";

function Gallery() {
    return (
        <>
            <div className="container hidden sm:block">
                <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
                    <div className="w-full md:w-[70%] h-[200px] md:h-[450px]">
                        <img
                            src={gallery1}
                            alt=""
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                    <div className="flex flex-row md:flex-col gap-4 lg:gap-8 w-full md:w-[30%] h-full">
                        <img
                            src={gallery2}
                            alt=""
                            className="w-1/2 md:w-full h-[209px] object-cover rounded-3xl"
                        />
                        <img
                            src={gallery3}
                            alt=""
                            className="w-1/2 md:w-full h-[209px] object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
