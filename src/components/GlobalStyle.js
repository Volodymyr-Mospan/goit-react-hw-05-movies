const { createGlobalStyle, default: styled } = require('styled-components');

export const GlobalStyle = createGlobalStyle`

/* ul {
    list-style: none;
} */

`;

export const Container = styled.div`
  max-width: 1900px;
  margin-left: auto;
  margin-right: auto;

  padding-left: 45px;
  padding-right: 45px;
`;
