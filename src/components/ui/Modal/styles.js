import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transition: all 0.5s linear;
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: ${({ show }) =>
    show ? "translate(-50%, -50%)" : "translate(-50%, -200px)"};
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 10px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  & label {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: 0.5rem;
  }
  & input {
    border: none;
    outline: none;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    background: transparent;
    border-bottom: 2px solid grey;
    width: 300px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  & button {
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: white;
    margin: 0 1rem;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  & .submit:disabled {
    background: lightgreen;
    cursor: not-allowed;
  }
  & .submit {
    background: green;
  }
  & .close {
    background: red;
  }
`;
