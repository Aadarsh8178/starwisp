import React from "react";
import Search from "../../components/Search";
import LineChart from "../../components/Charts/LineChart";
import Notepad from "../../components/Notepad";
import SideMenu from "../../components/SideMenu";

import blueline from "../../assets/bluepath.png";
import greenline from "../../assets/greenpath.png";
import { Card } from "../../globalStyles";
import {
  Wrapper,
  SalesReport,
  ChartWrapper,
  SideOrange,
  SmallCard,
} from "./styles";

function index(props) {
  const data = {
    labels: ["27", "28", "1", "2", "3"],
    datasets: [
      {
        label: "",
        data: [100, 200, 130, 390, 240, 310],
        backgroundColor: ["#00FF11"],
        borderColor: "#04a50f",
        borderWidth: 5,
      },
    ],
  };
  const salesdata = {
    labels: [""],
    datasets: [
      {
        label: "",
        data: [100, 200, 130, 390, 240, 310],
        backgroundColor: "#FFFFFF",
        borderColor: "red",
        borderWidth: 5,
      },
      {
        label: "",
        data: [200, 100, 230, 190, 540, 110],
        backgroundColor: "#FFFFFF",
        borderColor: "blue",
        borderWidth: 5,
      },
      {
        label: "",
        data: [30, 300, 430, 290, 140, 210],
        backgroundColor: "#FFFFFF",
        borderColor: "yellow",
        borderWidth: 5,
      },
    ],
  };
  return (
    <Wrapper>
      <div>
        <Search placeholder="search" />
      </div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div style={{ flex: "1 auto" }}>
          <SalesReport>
            <ChartWrapper>
              <p>
                Sales Report <span>September 2020</span>
              </p>
              <LineChart data={salesdata} lightShadow />
            </ChartWrapper>
            <SideOrange>
              <p>17 Sep</p>
              <Card background="#FFE700">
                <p>$1,204.33</p>
                <small>Revenue</small>
              </Card>
              <Card background="#1FFD77">
                <p>33</p>
                <small>Quotations</small>
              </Card>
            </SideOrange>
          </SalesReport>
          <div style={{ display: "flex" }}>
            <Notepad />
            <div style={{ width: "300px" }}>
              <LineChart data={data} />
              <Card style={{ marginTop: "1rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontSize: "20px" }}>Inbox</p>
                  <p style={{ fontSize: "40px" }}>23</p>
                </div>
              </Card>
            </div>
            <div>
              <SmallCard>
                <p>This Month</p>
                <div style={{ display: "flex" }}>
                  <h2>+7.8%</h2>
                  <img src={blueline} alt="path" />
                </div>
              </SmallCard>
              <SmallCard>
                <p>Last Month</p>
                <div style={{ display: "flex" }}>
                  <h2>+67.4%</h2>
                  <img src={greenline} alt="path" />
                </div>
              </SmallCard>
            </div>
          </div>
        </div>
        <SideMenu />
      </div>
    </Wrapper>
  );
}

export default index;
