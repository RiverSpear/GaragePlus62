import React from "react";
import useFetchArticles from "../../hooks/useFetchArticle";

import whatsapp_icon from "../../assets/icon/whatsapp.svg";
import instagram_icon from "../../assets/icon/instagram.svg";
import tiktok_icon from "../../assets/icon/tiktok.svg";
import Button from "./Button";
import ArrowIcon from "../../assets/icon/ArrowIcon";

function LokasiBox({
    boxClass,
    typeClass,
    contentContainer,
    addressClass,
    socmedContainerClass,
    buttonClass,
    showMap,
}) {
    const { articles } = useFetchArticles("location");

    return (
        <>
            {articles.map((article, index) => (
                <div key={index} className={boxClass}>
                    <p className={typeClass}>
                        {article.fields.type ? "Pusat" : "Cabang"}
                    </p>
                    <div className={contentContainer}>
                        <div className={addressClass}>
                            <p className="worksans text-gray-700 leading-6 text-[15px]">
                                {article.fields.longAddress}
                            </p>
                            <div className={socmedContainerClass}>
                                <a
                                    href={article.fields.whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-5"
                                >
                                    <img
                                        src={whatsapp_icon}
                                        alt="Whatsapp icons"
                                        title="whatsapp icons"
                                        className="w-[24px] h-full"
                                    />
                                </a>
                                <a
                                    href={article.fields.instagramUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-5"
                                >
                                    <img
                                        src={instagram_icon}
                                        alt="Instagram icons"
                                        title="instagram icons"
                                        className="w-[24px] h-full"
                                    />
                                </a>
                                <a
                                    href={article.fields.tikTokUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-5"
                                >
                                    <img
                                        src={tiktok_icon}
                                        alt="Tiktok icons"
                                        title="tiktok icons"
                                        className="w-[24px] h-full"
                                    />
                                </a>
                            </div>
                        </div>
                        {showMap && article.fields.googleMapsEmbed && (
                            <div className="map-container">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: article.fields.googleMapsEmbed.replace(
                                            "<iframe",
                                            '<iframe title="Google Maps Location"'
                                        ),
                                    }}
                                    width="575"
                                    height="450"
                                    frameBorder="0"
                                    allowFullScreen
                                ></div>
                            </div>
                        )}
                    </div>
                    <div className={buttonClass}>
                        <Button
                            buttonName="Lihat Google Maps"
                            name="Lihat Google Maps"
                            to={article.fields.googleMapsLink}
                            icon={ArrowIcon}
                        />
                    </div>
                </div>
            ))}
        </>
    );
}

export default LokasiBox;
