import { useState } from 'react';
import CustomPieChart from './ui/CustomPiechart';
import InfoButton from './ui/InfoButton'

export default function RegionDetails({ region }) {
  const [highlightedItem, setHighlightedItem] = useState(null);

  if (!region) {
    return <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <h3 className='mb-5 text-center'>Region Details
      <InfoButton
        href="https://api.carbonintensity.org.uk/"
        placement='bottom'
      />
      </h3>
      <p>Select a region on the map to see more details.</p>
    </div>;
  }

  const {
    Region,
    generation_biomass_perc,
    generation_coal_perc,
    generation_gas_perc,
    generation_hydro_perc,
    generation_imports_perc,
    generation_nuclear_perc,
    generation_other_perc,
    generation_solar_perc,
    generation_wind_perc,
  } = region.properties;

  const generationData = [
    { label: 'Biomass', value: generation_biomass_perc, color: '#8B4513' },
    { label: 'Coal', value: generation_coal_perc, color: '#333333' },
    { label: 'Gas', value: generation_gas_perc, color: '#FFA500' },
    { label: 'Hydro', value: generation_hydro_perc, color: '#00BFFF' },
    { label: 'Imports', value: generation_imports_perc, color: '#808080' },
    { label: 'Nuclear', value: generation_nuclear_perc, color: '#FF69B4' },
    { label: 'Other', value: generation_other_perc, color: '#A9A9A9' },
    { label: 'Solar', value: generation_solar_perc, color: '#FFD700' },
    { label: 'Wind', value: generation_wind_perc, color: '#90EE90' },
  ].filter(item => item.value > 0);


  return (
    <div className="region-details" >
      <h3>Generation Mix for {Region}
      <InfoButton
          href="https://bmrs.elexon.co.uk/api-documentation/endpoint/generation/outturn/current"
          placement='bottom'
        />
      </h3>
      <div className='region-piechart'>
        <CustomPieChart
          data={generationData}
          innerRadius={'65%'}
          outerRadius={'100%'}
          highlightedItem={highlightedItem}
          setHighlightedItem={setHighlightedItem}
          arcLabel={(item) => `${item.value}%`}
          legendProps={{
            direction: 'column',
            padding: -10,
          }}
        />
      </div>
    </div>
  )
}
