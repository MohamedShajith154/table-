import React from "react";
import ReactECharts from "echarts-for-react";

export default function Chart({ title, labels, data, type = "bar", color = "#2196f3" })
{
const option = {
  title: {
    text: title,
    left: "center",
    textStyle: { color: "white", fontSize: 18 },
},
tooltip: {
  trigger: "item",
  backgroundColor: "white",
  textStyle:{ color: "#000" },
  formatter:({ marker, name, value })=>
  `${marker} ${name}<br/><b>${value}</b>`,
},
xAxis:
  type !=="pie"
    ? { type: "category", data: labels, axisLabel: { color: "white" }}
: undefined,
yAxis:
  type!=="pie"
    ? { type: "value", axisLabel:{ color: "white"}}
    :undefined,
series:[
  {
    type,
    data:
      type =="pie"
        ? labels.map((name, i) => ({ name, value: data[i].value }))
        : data,
    radius: type =="pie" ? "60%" :undefined,
    itemStyle: {color},
    lineStyle: { color, width:3},
    areaStyle: type =="line" ? { color, opacity: 0.3 } : undefined,
    borderRadius: type == "bar" ? [6, 6, 0, 0] : undefined,
  },
],
};
return (
    <div className="cont"style={{width: 700, margin: "30px auto", textAlign: "center" }}>
      <ReactECharts option={option} style={{ height: 500}}/>
    </div>
  );
}