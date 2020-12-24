import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.sidebarWidth};
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const NavItems = styled.ul`
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.mediumBig};
  color: white;
  text-align: left;
  font-weight: 700;
  & svg {
    margin: 0 1rem;
  }
  & a {
    text-decoration: none;
    color: white;
  }
  & .active {
    background: #ffc480;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  padding: 1.5rem 0;
  align-items: center;
  background: ${({ onit }) => onit && "#ffc480"};
  & hover {
    background: #ffc480;
  }
`;
