import "./style/App.css";
import "./style/font.css";
import "./components/layout/loading/loading.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Servis from "./pages/servis/Servis";
import ServisDetail from "./pages/servis/servisDetail/servisDetail";
import Lokasi from "./pages/lokasi/Lokasi";
import Faq from "./pages/faq/Faq";
import Testimoni from "./pages/testimoni/Testimoni";
import PageNotFound from "./components/errors/PageNotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/servis" element={<Servis />} />
                <Route path="/servis/:slug" element={<ServisDetail />} />
                <Route path="/lokasi" element={<Lokasi />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/testimoni" element={<Testimoni />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
