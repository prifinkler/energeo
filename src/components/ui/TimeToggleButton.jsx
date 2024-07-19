import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TimeToggleButton({ timePeriod, setTimePeriod }) {
  const handleChange = (event, newTimePeriod) => {
    if (newTimePeriod !== null) {
      setTimePeriod(newTimePeriod);
    }
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={timePeriod}
      exclusive
      onChange={handleChange}
      aria-label="Time Comparison"
      fullWidth={true}
    >
      <ToggleButton value="30_min">30 min</ToggleButton>
      <ToggleButton value="24_hours">24 hours</ToggleButton>
    </ToggleButtonGroup>
  );
}
