import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  margin: 1rem;
  padding: 1rem;
  padding-top: 0;
  min-width: 250px;
`;
export const Notifications = styled.div`
  background: #fafafa;
  border-radius: 15px;
  padding: 1rem;
  padding-bottom: 0;
  transition: all 0.5s linear;
  position: relative;
  height: ${({ showAll }) => (showAll ? "80vh" : "60vh")};
  overflow: ${({ showAll }) => (showAll ? "auto" : "hidden")};
  & button {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px 15px 0px 0px;
    background: #dddddd;
    outline: none;
    border: none;
    margin-top: 1rem;
    font-size: 8px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;
export const StyledNotification = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  & .title {
    font-size: 15px;
  }
  & .desc {
    font-size: 12px;
    margin: 0.6rem 0;
  }
  & .time {
    font-size: 7px;
  }
  & .img {
    background: ${({ imgbackground }) => imgbackground || "#F5E764"};
    width: 46px;
    height: 54px;
    margin-right: 1rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const Separater = styled.div`
  border-bottom: 1px solid #ececec;
  margin: 1rem 0;
`;
export const Tabs = styled.div`
  display: flex;

  font-size: 20px;
  margin: 0 -1rem;
  margin-bottom: 1rem;
  & p {
    width: 50%;
    padding: 1rem 0;
  }
  & p:last-child {
    border-top-right-radius: 15px;
    background: #fafafa;
  }
`;
