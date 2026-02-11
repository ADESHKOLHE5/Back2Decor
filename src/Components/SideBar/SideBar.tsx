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
import { useSearch } from '../../Contexts/SearchContext';


const FilterSidebar = () => {
  const { selectedCategories, setSelectedCategories, priceRange, setPriceRange } = useSearch();
  const categories=['Toppers', 'Theme Toppers', 'Candles', 'Customized Topper', 'Knifes', 'Cake Essentials', 'Artificial Flower', 'Baking Tools', 'Colors']

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter(c => c !== category)
        : [...selectedCategories, category]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 5000]);
  };

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
            control={
              <PinkCheckbox
                checked={selectedCategories.includes(label)}
                onChange={() => handleCategoryChange(label)}
              />
            }
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
            ₹{priceRange[0]} - ₹{priceRange[1]}
          </Typography>
        </Box>

        <PinkSlider
          value={priceRange}
          onChange={(e, newValue) => setPriceRange(newValue as number[])}
          valueLabelDisplay="auto"
          max={5000}
        />
      </Box>

      {/* Clear Button */}
      <Button
        fullWidth
        sx={{ mt: 4, textTransform: 'none', color: '#191a1aff', fontSize: '1.1rem' }}
        onClick={handleClearFilters}
      >
        Clear All Filters
      </Button>
    </Box>
  );
};

export default FilterSidebar;