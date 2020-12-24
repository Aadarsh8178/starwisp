import styled from "styled-components";

export const NotepadWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 100%;
  & .sideButton {
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 80%;
  }
`;

export const Notes = styled.div`
  flex: 1 auto;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  & span {
    margin-left: 0.3rem;
    color: #929292;
    text-overflow: ellipsis;
  }
`;
export const AddButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.8rem;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
