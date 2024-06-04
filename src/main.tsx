// External libraries
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

// router
import router from "./config/router.tsx"

// style
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
