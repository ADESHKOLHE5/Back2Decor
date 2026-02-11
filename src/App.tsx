
import { RouterProvider } from 'react-router-dom'
import Routers from './Components/Routes/Routers'


const App = () => {
  return (
    <div>
        <RouterProvider router={Routers} />
     </div>
  )
}

export default App