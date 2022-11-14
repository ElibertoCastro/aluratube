import styled from "styled-components";
import config from "../../../config.json";

const StyledFavs = styled.div`

    padding: 16px 32px;
    overflow: hidden;

    section {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 24px;
        overflow: hidden;
        overflow-x: scroll;
        width: calc(100vw - 16px * 4);
        grid-template-columns: repeat(auto-fill, minmax(150px,1fr));
        grid-auto-flow: column;
        grid-auto-columns: minmax(100px,1fr);
        scroll-snap-type: x mandatory;
        
        
    }

    .fav-youtuber {
            display: grid;
            align-items: center;
            text-align: center;
            grid-gap: 16px;

        }

    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }


    .fav-youtuber a {
        color: ${({ theme }) => theme.textColorBase};
        text-decoration: none;
    }

    .fav-youtuber img {
        border-radius: 50%;
        height: 100px;
        width: 100px;
    }

    .fav-youtuber p {
        text-align: center;
        font-weight: 600;
        font-size: 14px;
        padding-top: 8px;
    }
`;

function Favorites() {
    return(
        <StyledFavs>
            <h2>Youtubers Favoritos</h2>
            <section>
                {config.favorites.map((youtuber) => {
                    return(
                        <div key={youtuber.url} className="fav-youtuber">
                            <a  href={`https://www.youtube.com/c/${youtuber.url}`} target={"_blank"}>
                                <img src={youtuber.avatar} alt={`Foto do ${youtuber.url}`} />
                                <p>{youtuber.at}</p>
                            </a>
                        </div>
                    );
                })}
            </section>
        </StyledFavs>
    );
}

export default Favorites;