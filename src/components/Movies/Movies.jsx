import { useState } from 'react';

export const Movies = () => {
  const [query, setQuery] = useState('');

  const heandleChange = e => {
    e.preventDefault();
    setQuery(e.currentTarget.value);
  };

  return (
    <form>
      <input type="text" value={query} onChange={heandleChange} />
      <button>Search</button>
    </form>
  );
};
