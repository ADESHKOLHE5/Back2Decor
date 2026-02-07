import { useState } from 'react';
import { 
  Box, 
  Typography, 
  FormGroup, 
  FormControlLabel,  
  Button, 
} from '@mui/material';
import { PinkSlider } from './PinkSideBar';
import { PinkCheckbox } from './PinkCheckbox';
import { sideStyle1,sideStyle2,sideStyle3} from './SideBarStyled';


const FilterSidebar = () => {
  const [price, setPrice] = useState([0, 200]);
  const categories=['Baking Tools', 'Cake Essentials', 'Ingredients', 'Edible Prints']

  return (
    <Box sx={sideStyle1}>
      
      {/* Categories Section */}
      <Typography variant="h5" sx={sideStyle2}>
        Categories
      </Typography>
      <FormGroup>
        {categories.map((label) => (
          <FormControlLabel 
            key={label}
            control={<PinkCheckbox />} 
            label={<Typography sx={{ color: '#2c3e50' }}>{label}</Typography>} 
          />
        ))}
      </FormGroup>

      {/* Price Range Section */}
      <Box sx={{ mt: 4 }}>
        <Box sx={sideStyle3}>
          <Typography variant="h5" sx={sideStyle2}>
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