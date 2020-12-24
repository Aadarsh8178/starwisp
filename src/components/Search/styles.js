import styled from "styled-components";

export const Wrapper = styled.div`
  background: #dad8d8;
  border: 2px solid #dad8d8;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 0.3rem 0.7rem;
  width: 50vw;
  min-width: 400px;
  display: flex;
  align-items: center;
  & svg {
    height: 15px;
    width: 15px;
    margin-right: 0.3rem;
  }
`;
export const SearchInput = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-transform: capitalize;
  flex: 1 auto;
  background: none;
  border: none;
  outline: none;
`;
