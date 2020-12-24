import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 1rem;
  & textarea {
    border: none;
    outline: none;
    background: #fafafa;
    border-radius: 15px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: 1rem 1rem;
    min-height: 100px;
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  & p {
    color: #ef3e36;
  }
  & button {
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 11px;
    font-size: 20px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    cursor: pointer;
  }
  & button:disabled {
    background: #fa7e59b9;
    cursor: not-allowed;
  }
`;
