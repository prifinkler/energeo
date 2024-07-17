import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import axios from 'axios'
import { MapContainer, GeoJSON, ScaleControl, TileLayer } from "react-leaflet";
import Legend from './ui/Legend'
import moment from 'moment-timezone';
import RegionDetails from "./RegionDetails";
import ProgressCircle from './ui/ProgressCircle'

export default function CarbonIntensityMap() {
  const [ukRegions, setUkRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const url = 'https://energeo-live-y2qdisfueq-ew.a.run.app/geo/regional/carbon_intensity'

  useEffect(() => {
    axios.get(url).then(res => {
      setUkRegions(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="container loading">{<ProgressCircle/>}</div>;
  }


  const regionStyle = {
    color: "black",
    weight: 0.7,
  };

  const carbonIntensityColor = (value) => {
    if (value <= 34) return 'green'; //very low
    else if (value > 34 && value <= 109) return 'yellow'; //low
    else if (value > 109 && value <= 189) return 'orange'; //moderate
    else if (value > 189 && value <= 270) return 'red'; //high
    else if (value > 270 ) return 'darkred'; //very high
  };

  const onEachRegion = (region, layer) => {

    const {
      Region,
      carbon_intensity_forecast,
      carbon_intensity_index,
      carbon_time_from,
      carbon_time_to,
    } = region.properties;

    const formatTime = (time) => moment(time).format('MMM D, HH:mm');
    const formatTimeZone = (time) => moment(time).tz("Europe/London").format('z')

    const popupContent = `
      <div class="region-popup">
        <h3>${Region}</h3>
        <p class="intensity-index ${carbon_intensity_index.toLowerCase()}">${carbon_intensity_index}</p>
        <div class="intensity-forecast">
          <strong>Carbon Intensity Forecast:</strong>
          <span>${carbon_intensity_forecast} gCO2/kWh</span>
        </div>
        <div class="time-range">
          ${formatTime(carbon_time_from)} - ${formatTime(carbon_time_to)} ${formatTimeZone(carbon_time_to)}
        </div>
      </div>
    `;

    if (region.properties && region.properties.Region) {
      layer.on("mouseover", function (e) {
        this.bindPopup(popupContent).openPopup(e.latlng);
      });

      layer.on("mouseout", function () {
        this.closePopup();
      });

      layer.on("click", function () {
        setSelectedRegion(region);
      });
    }

    layer.setStyle({
      fillColor: carbonIntensityColor(carbon_intensity_forecast),
      fillOpacity: 0.5,
    });
  }

  return (
    <>
      <div className="col-md-6">
        <MapContainer
          // style={{ height: '90vh' }}
          zoom={5}
          center={[55.378051, -3.8]}
          scrollWheelZoom={false}
        >
          <GeoJSON
            data={ukRegions.features}
            style={regionStyle}
            onEachFeature={onEachRegion}
          />
          <TileLayer
            url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=VimRXbyzy0EIuukcwwbw'
            attribution="<a href='https://www.maptiler.com/copyright/' target='_blank'>&copy; MapTiler</a>, Contains OS data © Crown copyright and database right 2023"
          />
          <ScaleControl position="topleft" left='40px'/>
          <Legend />
        </MapContainer>
      </div>
      <div className="col-md-6">
        <RegionDetails region={selectedRegion} />
      </div>
    </>
  )
}
