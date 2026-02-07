import {  Slider, styled } from '@mui/material';
// Custom Pink Slider
export const  PinkSlider = styled(Slider)({
  color: '#f48fb1',
  height: 8,
  '& .MuiSlider-track': { border: 'none' },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
  },
  '& .MuiSlider-rail': { opacity: 0.5, backgroundColor: '#bfdfed' },
});