import styled from "styled-components";
import config from "../../../config.json";

const StyledFavs = styled.div`

    padding: 16px 32px;

    section {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }

    .fav-youtuber {
        text-align: center;
        align-items: center;
    }

    .fav-youtuber a {
        color: #1d1d1d;
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
                {config.favorites.map(youtuber => {
                    return(
                        <div className="fav-youtuber">
                            <a href={`https://www.youtube.com/c/${youtuber.url}`} target={"_blank"}>
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