import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem;
  min-height: 100vh;
`;
export const SalesReport = styled.div`
  display: flex;
  text-align: left;
  padding: 1rem;
  padding-left: 0;
  width: 100%;
`;

export const ChartWrapper = styled.div`
  flex: 1 auto;
  background: white;
  border-radius: 15px;
  padding: 1rem;
  & p {
    font-size: ${({ theme }) => theme.fontSizes.mediumBig};
    color: #593636;
  }
  & span {
    color: #929292;
  }
`;

export const SideOrange = styled.div`
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 1rem;
  width: 150px;
  background: ${({ theme }) => theme.colors.primary};
  transform: translateX(-15px);
  font-size: ${({ theme }) => theme.fontSizes.mediumBig};
  font-weight: normal;
  color: white;
`;

export const SmallCard = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: -2px 2px 4px 2px rgba(15, 38, 242, 0.5);
  margin: 1rem;
  margin-top: 0;
  padding: 1rem;
  & p {
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 0.5px solid #707070;
    font-size: 15px;
  }
  & h2 {
    color: #0f26f2;
  }
`;
