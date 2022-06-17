const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"; //maxValue is max amount of filtered year for each month
  }

  return (
    <div className="chartBar">
      <div className="chartBar-inner">
        <div className="chartBar-fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chartBar-lable">{props.label}</div>
    </div>
  );
};
export default ChartBar;
