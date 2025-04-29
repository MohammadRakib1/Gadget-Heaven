import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Deshboard from './components/Deshboard/Deshboard.jsx';
import GadgetDetail from './components/GadgetDetail/GadgetDetail.jsx';
import AddToCard from './components/AddToCard/AddToCard.jsx';
import toast, { Toaster } from 'react-hot-toast';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import WishList from './components/WishList/WishList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'gadgets/:product_id',
        element: <GadgetDetail></GadgetDetail>,
        loader: () => fetch('/gadgetData.json')
      },
      {
        path: '/addToCard',
        element: <AddToCard></AddToCard>,
        loader: () => fetch('/gadgetData.json')
      },
      {
        path: '/wishlist',
        element: <WishList></WishList>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/deshboard',
        element: <Deshboard></Deshboard>,
        loader: () => fetch('/gadgetData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </StrictMode>,
)
