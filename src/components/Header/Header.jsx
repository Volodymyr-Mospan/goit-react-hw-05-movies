import { HeaderStld, ListStld } from 'components/Header/Header.styled';
import { Container } from 'components/GlobalStyle';

export const Header = () => {
  return (
    <HeaderStld>
      <Container>
        <nav>
          <ListStld>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Movies</a>
            </li>
          </ListStld>
        </nav>
      </Container>
    </HeaderStld>
  );
};
