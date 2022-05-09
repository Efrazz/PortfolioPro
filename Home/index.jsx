import { Link } from 'react-router-dom';
import { Main, Wrapper, Header, P, StyledLink, ButtonsWrap } from './styled';

const Home = () => {
    // const navigate = useNavigate();
    // navigate('../');

    return (
        <Main>
            <Wrapper>
                <Header>
                    A beatiful <br /> Adventure awaits
                </Header>

                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco
                </P>
                <ButtonsWrap>
                    <StyledLink>
                        <Link to="/">Subscribe</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/products">Shop</Link>
                    </StyledLink>
                </ButtonsWrap>
            </Wrapper>
        </Main>
    );
};

export default Home;
