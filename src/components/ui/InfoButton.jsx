import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';

export default function InfoButton({href, placement}) {
  return (
    <Tooltip
      arrow
      placement={placement}
      title={
        <Link
          target="_blank"
          href={href}
        >
        Data Source
        </Link>
      }
    >
    <IconButton
      color="primary"
      aria-label="data source"
      // onClick={() => {
      //   alert('clicked');
      // }}
      >
      <InfoIcon />
    </IconButton>
  </Tooltip>
  )
}
