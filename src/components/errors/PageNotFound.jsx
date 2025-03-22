import React from "react";
import Index from "./Index";

export default function PageNotFound() {
    return (
        <>
            <Index
                title="Oops, Halaman Tidak Ditemukan!"
                page="404"
                description="Kami tidak dapat menemukan halaman yang Anda tuju. Mungkin sudah dipindahkan atau dihapus. Coba kembali ke beranda untuk melanjutkan perjalanan Anda."
                showBackbutton={true}
            />
        </>
    );
}
