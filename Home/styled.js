import styled from 'styled-components';

export const Main = styled.main`
    height: 100vh;

    background-image: url(${require(`../../public/images/heroImage.png`)});
    background-size: cover;
`;
export const Wrapper = styled.main`
    background-size: cover;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    left: 30%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 40%;
    gap: 3rem;
`;

export const Header = styled.h2`
    font-size: 5.7rem;
    font-weight: bold;
    color: green;
`;

export const P = styled.p`
    font-size: 2.4rem;
    line-height: 1.5;
`;
export const ButtonsWrap = styled.div`
    display: flex;
    gap: 2rem;
`;
export const StyledLink = styled.div`
    border: none;
    background: #579500;
    padding: 2rem;
    color: #fff;
    cursor: pointer;
    font-size: 2.4rem;
    &:hover {
        background: #fff;
        color: green;
        box-shadow: inset 0 -2px 0 rgba(20, 167, 62, 1);
    }
    &:active {
        background: rgba(20, 167, 62, 0.3);
        color: #fff;
        border: 2px solied green;
    }
    a {
        color: #fff;

        &:hover {
            color: green;
        }
        &:active {
            color: #fff;
        }
    }
`;
