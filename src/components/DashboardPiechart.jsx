import { useState } from 'react'
import Stack from '@mui/material/Stack';
import TimeToggleButton from './ui/TimeToggleButton'
import InfoButton from './ui/InfoButton'
import CustomPieChart from './ui/CustomPiechart';

// import FireIcon from '@mui/icons-material/LocalFireDepartment';
// import AirIcon from '@mui/icons-material/Air';
// import WaterIcon from '@mui/icons-material/Water';
// import EarthIcon from '@mui/icons-material/Public';


// const getElementIcon = (name) => {
//   switch (name.toLowerCase()) {
//     case 'fire':
//       return FireIcon;
//     case 'air':
//       return AirIcon;
//     case 'water':
//       return WaterIcon;
//     case 'earth':
//       return EarthIcon;
//     default:
//       return null;
//   }
// }

const valueFormatter = (value) => +(value / 1000).toFixed(2)

export default function DashboardPiechart({ data, timePeriod, setTimePeriod, colorMapping }) {
  const [highlightedItem, setHighlightedItem] = useState(null);

  const chartData = Object.entries(data.elements).map(([name, element]) => ({
    label: name.charAt(0).toUpperCase() + name.slice(1),
    value: valueFormatter(element[timePeriod]),
    color: colorMapping[name.toLowerCase()],
    // icon: getElementIcon(name)
  }))

  const totalEnergy = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Stack className="cards-bg h-100"
      direction='column'
      spacing={1}
      sx={{ width: '100%', padding:'16px' }}
      justifyContent="center"
      alignItems="start"
    >
      <TimeToggleButton
        timePeriod={timePeriod}
        setTimePeriod={setTimePeriod}
      />
      <InfoButton
        href="https://bmrs.elexon.co.uk/api-documentation/endpoint/generation/outturn/current"
        placement='right'
      />
      <CustomPieChart
        data={chartData}
        height={400}
        innerRadius={100}
        outerRadius={160}
        valueFormatter={(v) => `${v.value} GW`}
        highlightedItem={highlightedItem}
        setHighlightedItem={setHighlightedItem}
        legendProps={{
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'middle' },
          padding: 0,
          labelStyle: {
            fontSize: 16,
          },
        }}
        margin={{ top: 0, bottom: 80, left: 10, right: 10 }}
        centerLabel={
          <>
            <tspan x="50%" dy="-3em" fontSize="12">Total energy </tspan>
            <tspan x="50%" dy="1.5em" fontSize="12">produced in the UK</tspan>
            <tspan x="50%" dy="1.5em" fontSize="12">in the last {timePeriod.replace('_', ' ')}:</tspan>
            <tspan x="50%" dy="1.5em" fontSize="20">{`${totalEnergy.toFixed(2)} GW`}</tspan>
          </>
        }
      />
    </Stack>
  );
}
