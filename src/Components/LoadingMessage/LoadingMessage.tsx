import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'


const LoadingMessage = () => {
  return (
<>
  <Typography variant="subtitle2" gutterBottom sx={{fontSize:"20px",color:"green"}}>
    Loading products, please wait...
      </Typography><br />
<LinearProgress color="secondary" />
</>
  )
}

export default LoadingMessage