import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  margin: 1rem 0;
  & .hideandshow {
    text-align: left;
    color: #868686;
    margin: 1rem;
    cursor: pointer;
  }
`;
export const StyledPost = styled.div`
  display: flex;
  padding: 1rem;
  & .image {
    width: 60px;
    margin-right: 1rem;
  }
`;

export const Content = styled.div`
  flex: 1 auto;
  text-align: left;
  & .post {
    font-weight: 200;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  & p {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  & small {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: #868686;
  }
`;

export const Comments = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  padding: 1rem;
  background: #fafafa;
  width: 100%;
`;

export const Comment = styled.div`
  flex: 1 auto;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 1rem;
  & .image {
    width: 42px;
    margin-right: 1rem;
  }
  & img {
    width: 42px;
  }
  & .commented img {
    width: 30px;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex: 1 auto;
  align-items: center;
  & input {
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    margin: 1rem;
    margin-left: 0;
    flex: 1 auto;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  & svg {
    width: 40px;
    cursor: pointer;
  }
`;
