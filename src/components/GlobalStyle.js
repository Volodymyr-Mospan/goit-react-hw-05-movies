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

  padding: 25px 45px;
  /* padding-left: 45px;
  padding-right: 45px; */
`;

export const Section = styled.section`
  display: flex;
  gap: 45px;

  padding-top: 45px;
  padding-bottom: 45px;

  border-bottom: 1px solid black;
`;
