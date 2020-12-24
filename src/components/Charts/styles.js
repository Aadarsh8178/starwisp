import styled from "styled-components";

export const AreaChartWrapper = styled.div`
  background: white;
  width: 100%;
  border-radius: 15px;
  box-shadow: ${({ lightShadow }) =>
    lightShadow
      ? "0px 0px 10px rgba(0, 0, 0, 0.05)"
      : "-2px 2px 4px 2px rgba(15, 38, 242, 0.5)"};
  border-radius: 15px;
`;
