import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";

export default function Icon({ onSelect, activeType }) {
  const iconStyle = (type, color) => ({
    margin: "0 15px",
    cursor: "pointer",
    fontSize: "30px",
    transition: "0.3s",
    color: activeType == type ? color : "dimgrey",
  });
  return(
    <div className="char" style={{ textAlign: "center", marginTop: "20px",backgroundColor:"rgba(4, 4, 43, 1)" }}>
      <FaChartBar className="bar" style={iconStyle("bar", "#2196f3")} onClick={()=> onSelect("bar")} />
      <FaChartLine className="line" style={iconStyle("line", "#4caf50")} onClick={() => onSelect("line")} />
      <FaChartPie className="pie" style={iconStyle("pie", "#ff9800")} onClick={() => onSelect("pie")} />
    </div>
     );
}  