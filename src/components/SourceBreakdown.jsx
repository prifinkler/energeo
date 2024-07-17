import { BarChart } from '@mui/x-charts/BarChart';

export default function SourceBreakdown({ sources, timePeriod, elementColor, element }) {

  const chartData = sources.map(source => ({
    label: source.name,
    value: source[timePeriod]

  }));

  const valueFormatter = (value) => `${value} GW`;

  return (
    <BarChart
      // width={220}
      height={220}
      dataset={chartData}
      layout="vertical"
      xAxis={[{
        scaleType: 'band',
        dataKey: 'label',
        valueFormatter: (value) => value.split(' ').join('\n'),
        tickLabelStyle: {
          textAnchor: 'middle',
          fontSize: 6,
        },
      }]}
      yAxis={[{
        tickLabelStyle: {
          fontSize: 6,
        },
      }]}
      sx={{
        "& .MuiChartsLegend-series tspan": {
          fontFamily: 'DM Serif Display',
          fontSize: 16,
        }
      }}
      series={[
        {
          dataKey: 'value',
          label: `${element.charAt(0).toUpperCase() + element.slice(1)} Energy `,
          valueFormatter,
          color: elementColor,
        },
      ]}

    />
  );
}
