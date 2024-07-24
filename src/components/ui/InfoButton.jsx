import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';
import { useState } from 'react';

export default function InfoButton({href, placement}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <Tooltip
      arrow
      placement={placement}
      enterTouchDelay={0}
      open={open}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -14],
              },
            },
          ],
        },
      }}
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
      onClick={handleClick}

      // onClick={() => {
        // alert('clicked');
      // }}
      >
      <InfoIcon />
    </IconButton>
  </Tooltip>
  )
}
