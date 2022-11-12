import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import Menu from "../src/components/Menu";
import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Favorites from "../src/components/Favorites";

function HomePage() {
    const playlists = config.playlists;
    
    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Header />
                <Timeline playlists={playlists}/>
                <Favorites />
            </div>
        </>
    );
}

export default HomePage;