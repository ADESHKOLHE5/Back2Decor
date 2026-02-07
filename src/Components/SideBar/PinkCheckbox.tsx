import { Checkbox } from "@mui/material";
type Props = {
  // You can add any additional props you want to pass to the Checkbox component
  [key: string]: any;
};

// Custom Pink Checkbox
export const PinkCheckbox = (props: Props) => (
  <Checkbox 
    sx={{ color: '#f48fb1', '&.Mui-checked': { color: '#f48fb1' } }} 
    {...props} 
  />
);