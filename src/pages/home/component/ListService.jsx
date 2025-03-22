import React from "react";
import ServisBox from "../../../components/common/ServisBox.jsx";
import Button from "../../../components/common/Button.jsx";
import ArrowIcon from "../../../assets/icon/ArrowIcon.jsx";

function ListService() {
    return (
        <>
            <div id="servis" className="flex flex-col items-center gap-20">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                    <p className="worksans-600 text-[2rem] md:text-[2.5rem]">
                        Layanan Servis
                    </p>
                    <div className="flex flex-col gap-4 w-full md:w-1/3">
                        <p className="worksans text-slate-700 text-[15px]">
                            Servis motor nggak pake ribet, ada beragam paket
                            yang bisa kamu pilih! Di sini, kamu bisa temukan
                            berbagai paket servis, Tinggal pilih paket yang
                            sesuai dengan kebutuhanmu.
                        </p>
                        <Button
                            buttonName="Lihat Servis"
                            to="/servis"
                            icon={ArrowIcon}
                        />
                    </div>
                </div>
                <ServisBox />
            </div>
        </>
    );
}

export default ListService;
