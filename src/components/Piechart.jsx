import { useState } from 'react'
import { PieChart } from '@mui/x-charts';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import TimeToggleButton from './ui/TimeToggleButton'

// import FireIcon from '@mui/icons-material/LocalFireDepartment';
// import AirIcon from '@mui/icons-material/Air';
// import WaterIcon from '@mui/icons-material/Water';
// import EarthIcon from '@mui/icons-material/Public';

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
}));

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

export default function Piechart({ data, timePeriod, setTimePeriod, colorMapping }) {
  const [highlightedItem, setHighLightedItem] = useState(null);

  const chartData = Object.entries(data.elements).map(([name, element]) => ({
    label: name.charAt(0).toUpperCase() + name.slice(1),
    value: element[timePeriod],
    color: colorMapping[name.toLowerCase()],
    // icon: getElementIcon(name)
  }))

  const pieChartProps = {
    series: [
      {
        id: 'sync',
        data: chartData,
        highlightScope: { highlighted: 'item', faded: 'global' },
        innerRadius: 100,
        outerRadius: 160,
        paddingAngle: 2,
        cornerRadius: 2,
        valueFormatter: (v) => `${v.value} GW`,
      },
    ],
    height: 400,
  };

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        <tspan x={left + width / 2} dy="-3em" fontSize="12">Total energy </tspan>
        <tspan x={left + width / 2} dy="1.5em" fontSize="12">produced in the UK</tspan>
        <tspan x={left + width / 2} dy="1.5em" fontSize="12">in the last {timePeriod.replace('_', ' ')}:</tspan>
        <tspan x={left + width / 2} dy="1.5em" fontSize="20" >{`${children.toFixed(1)} GW`}</tspan>
      </StyledText>
    );
  }

  const totalEnergy = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Stack className="cards-bg h-100"
      direction='column'
      spacing={0}
      sx={{ width: '100%', padding:'16px' }}
      justifyContent="center"
      alignItems="center"
    >
      <TimeToggleButton
        timePeriod={timePeriod}
        setTimePeriod={setTimePeriod}
        aria-label="Time Comparison"
      />
      <PieChart
        {...pieChartProps}
        highlightedItem={highlightedItem}
        onHighlightChange={setHighLightedItem}
        margin={{ top: 0, bottom: 20, left: 10, right:10 }}

        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'middle' },
            padding: 0,
            labelStyle: {
              fontSize: 16,
            },
          },
        }}
      >
      <PieCenterLabel>{totalEnergy}</PieCenterLabel>
      </PieChart>
    </Stack>

  );
}
