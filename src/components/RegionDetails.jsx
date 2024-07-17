import { PieChart, pieArcLabelClasses } from '@mui/x-charts';
import { useState } from 'react';

export default function RegionDetails({ region }) {
  const [highlightedItem, setHighLightedItem] = useState(null);

  if (!region) {
    return <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <h3 className='mb-5 text-center'>Region Details</h3>
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

  const pieChartProps = {
    series: [
      {
        id: 'sync',
        data: generationData,
        highlightScope: { highlighted: 'item', faded: 'global' },
        innerRadius: 80,
        outerRadius: 140,
        paddingAngle: 2,
        cornerRadius: 2,
        valueFormatter: (v) => `${v.value}%`,
        arcLabel: (item) => `${item.value}%`,
        arcLabelMinAngle: 15,
      },
    ],
    height: 400,
  };

  return (
    <div className="region-details">
      <h3>Generation Mix for {Region}</h3>
      <div className="chart-container">

      <PieChart
        {...pieChartProps}
        highlightedItem={highlightedItem}
        onHighlightChange={setHighLightedItem}
        width={500}
        height={400}
        slotProps={{
          legend: {
            direction: 'column',
            // padding: -5,
            labelStyle: {
              fontSize: 14,
            },
          },
        }}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontSize: 12,
          },
        }}
      >
      </PieChart>
      </div>
    </div>
  )
}
