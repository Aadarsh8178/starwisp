import styled from "styled-components";

export const StyledApp = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.dull};
  padding-left: ${({ theme }) => theme.sidebarWidth};
`;
