import React, { useState } from "react";
import Chart from "../Pages/chart.jsx";
import Icon from "../Pages/Icon.jsx";

export default function Chartcom() {
  const [chartType, setChartType] = useState("bar");

  const colorMap = {
    bar: "#2196f3", 
    line: "#4caf50",  
    pie: "#ff9800",  
  };

  const players =["Dhoni", "Raina", "Rutu", "Bravo", "Dube", "Faf", "Brenden"];
  const runs =[120, 180, 150, 200, 130, 160, 210];
  const hoverColors =[
    "#6b6108ff",
    "red",
    "#054a07ff",
    "#6c0b04ff",
    "#e91e63",
    "#5c3905ff",
    "#450251ff",  
  ];

  const createData = (values, baseColor) =>
    values.map((value, i) => ({
      value,
      itemStyle:{ color: baseColor },
      emphasis:{ itemStyle:{color: hoverColors[i % hoverColors.length]}},
    }));
  const runsData = createData(runs, colorMap[chartType]);
    return (
    <>
      <Icon onSelect={setChartType} activeType={chartType}/>
      <Chart
        title="Player Runs Chart"
        labels={players}
        data={runsData}
        type={chartType}
        color={colorMap[chartType]}
      />
    </>
  );
}
