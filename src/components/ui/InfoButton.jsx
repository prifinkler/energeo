import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { useState } from 'react';

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip, .MuiTooltip-arrow::before {
    background: #111111;
    color: white;
    text-decoration-color: white;
  }
`;

export default function InfoButton({href, placement}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <StyledTooltip
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
  </StyledTooltip>
  )
}
