import styled from "styled-components";

export const AreaChartWrapper = styled.div`
  background: white;
  width: 100%;
  border-radius: 15px;
  box-shadow: ${({ lightShadow }) =>
    lightShadow ? "" : "-2px 2px 4px 2px rgba(15, 38, 242, 0.5)"};
  border-radius: 15px;
  & canvas {
    padding: 0.5rem;
  }
`;
