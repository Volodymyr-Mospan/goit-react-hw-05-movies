import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStld = styled.header`
  /* padding-top: 25px; */
  /* padding-bottom: 25px; */

  outline: 1px solid red;

  ul {
    list-style: none;
  }
`;

export const ListStld = styled.ul`
  display: flex;
  gap: 15px;

  margin: 0;
  padding: 0;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: bolder;
  color: black;

  &.active {
    color: rgb(252, 97, 35);
  }
`;
