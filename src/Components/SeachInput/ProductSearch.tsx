
import { TextField, InputAdornment, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearch } from '../../Contexts/SearchContext';

// 1. We created a "Styled" version of the TextField
const CustomSearchField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',      // Makes the corners rounded
    backgroundColor: '#fff',
    '& fieldset': {
      borderColor: '#f48fb1', // The pink border color from your image
      borderWidth: '1.5px',
    },
    '&:hover fieldset': {
      borderColor: '#f06292', // Darker pink when mouse hovers
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ec407a', // Pink color when typing
    },
  },
});

// 2. The Component
const ProductSearch = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <CustomSearchField
      variant="outlined"
      placeholder="Search products..."
      sx={{ width: '25%' }}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: '#90a4ae', ml: 1 }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default ProductSearch;