import { useState } from 'react';
import { 
  Box, 
  Typography, 
  FormGroup, 
  FormControlLabel, 
  Checkbox, 
  Slider, 
  Button, 
  styled 
} from '@mui/material';


// Custom Pink Slider
const PinkSlider = styled(Slider)({
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

// Custom Pink Checkbox
const PinkCheckbox = (props) => (
  <Checkbox 
    sx={{ color: '#f48fb1', '&.Mui-checked': { color: '#f48fb1' } }} 
    {...props} 
  />
);

const FilterSidebar = () => {
  const [price, setPrice] = useState([0, 200]);

  return (
    <Box sx={{ width: 280, p: 3, border: '1px solid #e0f2f1', borderRadius: '20px' }}>
      
      {/* Categories Section */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'serif' }}>
        Categories
      </Typography>
      <FormGroup>
        {['Baking Tools', 'Cake Essentials', 'Ingredients', 'Edible Prints'].map((label) => (
          <FormControlLabel 
            key={label}
            control={<PinkCheckbox />} 
            label={<Typography sx={{ color: '#2c3e50' }}>{label}</Typography>} 
          />
        ))}
      </FormGroup>

      {/* Price Range Section */}
      <Box sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'serif' }}>
            Price Range
          </Typography>
          <Typography sx={{ color: '#90a4ae' }}>
            Rs.{price[0]} - Rs.{price[1]}
          </Typography>
        </Box>
        
        <PinkSlider
          value={price}
          onChange={(e, newValue) => setPrice(newValue)}
          valueLabelDisplay="auto"
          max={200}
        />
      </Box>

      {/* Clear Button */}
      <Button 
        fullWidth 
        sx={{ mt: 4, textTransform: 'none', color: '#191a1aff', fontSize: '1.1rem' }}
      >
        Clear All Filters
      </Button>
    </Box>
  );
};

export default FilterSidebar;