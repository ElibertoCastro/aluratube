import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import Menu from "../src/components/Menu";
import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Favorites from "../src/components/Favorites";
import { useState } from "react";

function HomePage() {
    const playlists = config.playlists;
    const [valorDoFiltro,setValorDoFiltro] = useState("");
    
    return (
        <>
            <CSSReset />
            <div>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={playlists}/>
                <Favorites />
            </div>
        </>
    );
}

export default HomePage;