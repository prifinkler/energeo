import CarbonIntensityMap from "../components/CarbonIntensityMap";

export default function CarbonIntensity() {
  return (
  <div className="container-fluid">
    <div className="row carbon-intensity-block">
      <h2 className="mb-5 text-center">Carbon Intensity</h2>
      <p>National Grid Electricity System Operator (ESO), in partnership with Environmental Defense Fund Europe and WWF, has developed a series of Regional Carbon Intensity forecasts for the GB electricity system, with weather data provided by the Met Office.</p>
      <p>The map below shows the carbon intensity of electricity across Great Britain in real-time, connecting us to the elements that power our world.</p>
      <p>Carbon intensity measures how much carbon dioxide (CO2) is released when producing electricity. Lower values mean cleaner energy with fewer emissions.</p>
      <p>The map uses live National Grid data to display how &apos;clean&apos; or &apos;dirty&apos; electricity is in different regions:</p>
      <ul className="ms-3 ms-sm-4 ms-md-5">
        <li>🔥 Fire: Fossil fuels like coal and gas have high carbon intensity</li>
        <li>💨 Air: Wind power has very low carbon intensity</li>
        <li>☀️ Sun: Solar energy has very low carbon intensity</li>
        <li>💧 Water: Hydroelectric power has very low carbon intensity</li>
      </ul>
      <p className="mb-4">Colors on the map represent different levels of carbon intensity, measured in grams of CO2 per kilowatt-hour (gCO2/kWh).</p>
    </div>
    <div className='row'>
      <CarbonIntensityMap />
    </div>
  </div>
  )
}
