import { useState } from 'react';
import { Container } from 'components/GlobalStyle';

export const Movies = () => {
  const [query, setQuery] = useState('');

  const heandleChange = e => {
    e.preventDefault();
    setQuery(e.currentTarget.value);
  };

  return (
    <Container>
      <form>
        <input type="text" value={query} onChange={heandleChange} />
        <button>Search</button>
      </form>
    </Container>
  );
};
