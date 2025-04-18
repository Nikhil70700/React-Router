import './App.css'
import {createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import {Movie} from './pages/Movie';
import AppLayout from './Components/layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import { getMoviesData } from './api/GetAPIData';

function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/about",
          element:<About/>,
        },
        {
          path:"/movie",
          element:<Movie/>,
          loader:getMoviesData,
        },
        {
          path:"/contact",
          element:<Contact/>,
        },
        
    ]
  },
  
])

  return <RouterProvider router={router}/>



}

export default App
