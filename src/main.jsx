import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
// import { router } from ''
import './index.css'
import router from './Root/Root'
// import router from './LayOut/LayOut'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
