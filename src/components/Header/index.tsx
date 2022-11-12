import config from "../../../config.json";
import styled from "styled-components"


const StyledHeader = styled.div`
    .banner {
        background-image: url("https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
        background-repeat: no-repeat;
        background-position-y: -250px;
        background-size: cover;
        height: 250px;
    }
    
    .user-img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        margin-top: 30px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px
    }
`;

function Header() {
    return (
        <StyledHeader>
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