import { NavLink } from 'react-router-dom';
import { HeaderStld, ListStld } from 'components/Header/Header.styled';
import { Container } from 'components/GlobalStyle';

export const Header = () => {
  return (
    <HeaderStld>
      <Container>
        <nav>
          <ListStld>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ListStld>
        </nav>
      </Container>
    </HeaderStld>
  );
};
