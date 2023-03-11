import { HeaderStld, ListStld, Link } from 'components/Header/Header.styled';
import { Container } from 'components/GlobalStyle';

export const Header = () => {
  return (
    <HeaderStld>
      <Container>
        <nav>
          <ListStld>
            <li>
              <Link to="/" end>
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ListStld>
        </nav>
      </Container>
    </HeaderStld>
  );
};
