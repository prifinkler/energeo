import { PieChart, pieArcLabelClasses } from '@mui/x-charts';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function CustomPieChart({
  data,
  height = 400,
  innerRadius = 80,
  outerRadius = 140,
  centerLabel,
  valueFormatter = (v) => `${v.value}%`,
  arcLabel,
  highlightedItem,
  setHighlightedItem,
  legendProps,
  ...props
}) {
  const pieChartProps = {
    series: [
      {
        data,
        highlightScope: { highlighted: 'item', faded: 'global' },
        innerRadius,
        outerRadius,
        paddingAngle: 2,
        cornerRadius: 2,
        valueFormatter,
        arcLabel,
        arcLabelMinAngle: 15,
      },
    ],
    height,
  };

  return (
    <PieChart
      {...pieChartProps}
      {...props}
      highlightedItem={highlightedItem}
      onHighlightChange={setHighlightedItem}
      slotProps={{
        legend: {
          direction: 'column',
          labelStyle: {
            fontSize: 14,
          },
          ...legendProps,
        },
      }}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontSize: 12,
        },
      }}
    >
      {centerLabel && <PieCenterLabel>{centerLabel}</PieCenterLabel>}
    </PieChart>
  );
}
