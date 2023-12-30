import { createBrowserRouter } from 'react-router-dom'
import Home from '../page/Home'
import SignUp from '../page/SignUp'
import Price from '../page/Price'
import Order from '../page/Order'
import Products from '../page/Products'
import Sketch from '../page/Sketch'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/pricing',
        element: <Price />
    },
    {
        path: '/orders',
        element: <Order />
    },
    {
        path: '/products',
        element: <Products />
    },
    {
        path: '/sketch',
        element: <Sketch />
    },
])

export default router