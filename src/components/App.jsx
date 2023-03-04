import { Header } from 'components/Header/Header';
import { GlobalStyle } from 'components/GlobalStyle';
import { HomePage } from 'components/HomePage/HomePage';
import { fetchApi } from 'services/api';
import { useEffect, useState } from 'react';

export const App = () => {
  // const [query, setQuery] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'qwerty' },
    { id: 2, name: 'asdfg' },
  ]);
  const [path, setPath] = useState('/');

  useEffect(() => {
    fetchApi().then(result => setData(result));
  }, [path]);

  return (
    <div>
      <Header />
      <HomePage data={data} />
      <GlobalStyle />
    </div>
  );
};
