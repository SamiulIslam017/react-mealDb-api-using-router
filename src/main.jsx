import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './componetnts/Header/Header';
import Error from './componetnts/Error/Error';
import Home from './componetnts/Home/Home';
import Resturent from './componetnts/Resturent/Resturent';
import SingleCategory from './componetnts/Resturent/Categories/SignleCategory/SingleCategory';
import MealDetails from './componetnts/Resturent/Categories/SignleCategory/SingleMeal/MealDetails/MealDetails';
const restaurant  = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/restaurant',
        element: <Resturent></Resturent>,
        errorElement: <Error></Error>,
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php')

      },
      {
        path:'/categories/:catId',
        element:<SingleCategory></SingleCategory>,
        errorElement: <Error></Error>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.catId}`)
      },
      {
        path:'/details/:singleId',
        element:<MealDetails></MealDetails>,
        errorElement: <Error></Error>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.singleId}`)
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={restaurant} />
    
  </React.StrictMode>,
)
