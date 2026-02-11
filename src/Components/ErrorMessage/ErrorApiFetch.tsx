import Typography from '@mui/material/Typography';


type ErrorApiFetchProps = {
  msg: string;
}

export const ErrorApiFetch = ({ msg }: ErrorApiFetchProps) => 
   <Typography variant="subtitle2" gutterBottom 
       sx={{fontSize:"20px",color:"red"}}>
        Error:{msg}
        </Typography>
      
  
