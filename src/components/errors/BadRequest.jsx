import React from "react";
import Index from "./Index";

export default function BadRequest() {
    return (
        <>
            <Index
                title="Wah, Sepertinya Ada Gangguan!"
                page="400"
                description="Sepertinya ada sesuatu yang tidak berjalan dengan baik. Jangan cemas, kami sedang mengatasinya agar Anda bisa kembali menggunakan layanan kami tanpa hambatan!"
                showBackbutton={true}
            />
        </>
    );
}
