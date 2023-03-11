import styled from 'styled-components';

export const Person = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;

  &:nth-child(odd) {
    background-color: rgb(255, 231, 203);
  }
`;
