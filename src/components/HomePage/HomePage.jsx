import { Container } from 'components/GlobalStyle';
export const HomePage = ({ data }) => {
  return (
    <Container>
      <h1>Trending today</h1>
      <ul>
        {data.map(el => {
          return <li key={el.id}>{el.title ?? el.name}</li>;
        })}
      </ul>
    </Container>
  );
};
