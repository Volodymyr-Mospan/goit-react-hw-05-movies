import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  gap: 45px;

  padding-top: 45px;
  padding-bottom: 45px;

  border-bottom: 1px solid black;
`;

export const FlexComponent = styled.div``;

export const Link = styled(NavLink)`
  display: block;
  width: 100px;

  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 4px;

  text-align: center;
  text-decoration: none;

  color: black;
`;
