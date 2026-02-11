
import { RouterProvider } from 'react-router-dom'
import Routers from './Routes/Routers'
import { AuthProvider } from './Contexts/AuthContext'


const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={Routers} />
    </AuthProvider>
  )
}

export default App