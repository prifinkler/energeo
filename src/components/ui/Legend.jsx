const Legend = () => {
    return (
        <div className="legend">
          <div>gCO2/kWh</div>
          <div style={{ "--color": 'darkred' }}>270 +</div>
          <div style={{ "--color": 'red' }}>190 - 270</div>
          <div style={{ "--color": 'orange' }}>110 - 189</div>
          <div style={{ "--color": 'yellow' }}>35 - 109</div>
          <div style={{ "--color": 'green' }}>0 - 34</div>
        </div>
    );
}
export default Legend;
