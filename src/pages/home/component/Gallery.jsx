import React from "react";
import gallery1 from "../../../assets/image/gallery.webp";
import gallery2 from "../../../assets/image/gallery2.webp";
import gallery3 from "../../../assets/image/gallery3.webp";

function Gallery() {
    return (
        <>
            <div className="container hidden sm:block">
                <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
                    {/* Gambar utama (prioritas tinggi) */}
                    <div className="w-full md:w-[70%] h-[200px] md:h-[450px]">
                        <img
                            src={gallery1}
                            srcSet={`${gallery1} 600w, ${gallery1} 1200w`}
                            sizes="(max-width: 600px) 100vw, 50vw"
                            alt="Gallery image 1 - Large showcase"
                            title="Gallery image 1 - Large showcase"
                            loading="eager"
                            fetchPriority="high"
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                    {/* Gambar tambahan */}
                    <div className="flex flex-row md:flex-col gap-4 lg:gap-8 w-full md:w-[30%] h-full">
                        <img
                            src={gallery2}
                            alt="Gallery image 2 - Secondary showcase"
                            title="Gallery image 2 - Secondary showcase"
                            loading="lazy"
                            className="w-1/2 md:w-full h-[209px] object-cover rounded-3xl"
                        />
                        <img
                            src={gallery3}
                            alt="Gallery image 3 - Secondary showcase"
                            title="Gallery image 3 - Secondary showcase"
                            loading="lazy"
                            className="w-1/2 md:w-full h-[209px] object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
