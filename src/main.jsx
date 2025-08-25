import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
// import { router } from ''
import './index.css'
import router from './Root/Root'
import AuthProvider from './Context/AuthProvider'
import { Toaster } from 'react-hot-toast'
// import router from './LayOut/LayOut'

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>
    <RouterProvider router={router} />
     <Toaster position="top-right" reverseOrder={false} />
</AuthProvider>
)
