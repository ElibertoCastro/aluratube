import config from "../../../config.json";
import styled from "styled-components"


const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};
    
    .banner {
        background-image: url(${({bg})=>bg});
        background-repeat: no-repeat;
        background-size: cover;
        height: 250px;
    }

    @media screen and (max-width: 700px){
        .banner {
            height: 150px;
        }
    }
    
    .user-img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px
    }
`;

function Header() {
    return (
        <StyledHeader bg={config.bg}>
            <div className="banner"></div>
            <section className="user-info">
                <img className="user-img" src={`https://github.com/${config.github}.png`} alt={`foto perfil de ${config.name} github`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    );
}

export default Header;