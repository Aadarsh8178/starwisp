import React from "react";
import { Line } from "react-chartjs-2";

import { AreaChartWrapper } from "./styles";

function AreaChart({ data, lightShadow }) {
  return (
    <AreaChartWrapper lightShadow={lightShadow}>
      <Line data={data} />
    </AreaChartWrapper>
  );
}

export default AreaChart;
