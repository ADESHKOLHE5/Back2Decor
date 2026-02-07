import { Height } from "@mui/icons-material";

export const Design1 = { 
      display: 'flex', 
      gap: 3,
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { xs: 'stretch', md: 'flex-start' }
  };

export const Design2 = { 
        flexShrink: 0,
        Height: 'fit-content',
        position: 'sticky',
        top: 20,
        width: { xs: '100%', md: '250px' }
      };

  export const Design3 = { 
        flex: 1,
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 3, 
        padding: 2,
        justifyContent: 'center'
      }    
