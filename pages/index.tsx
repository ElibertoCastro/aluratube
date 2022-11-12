import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import Menu from "../src/components/Menu";
import config from "../config.json";
import { Playlist } from "../src/types/playlist";
import { CSSReset } from "../src/components/CSSReset";

function HomePage() {
    const playlists = config.playlists;
    
    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Header />
                <Timeline playlists={playlists}/>
            </div>
        </>
    );
}

export default HomePage;