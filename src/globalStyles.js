import styled from "styled-components";

export const Card = styled.div`
  color: black;
  background: ${({ background }) => background || "#FFFFFF"};
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  & p {
    font-size: 20px;
  }
  & small {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;
