import './App.css'
import {createBrowserRouter, Route, RouterProvider} from "react-router-dom";

import About from './pages/About';
import Home from './pages/Home';
import {Movie} from './pages/Movie';

import ErrorPage from './pages/ErrorPage';
import { getMoviesData } from './api/GetAPIData';
import { AppLayout } from './Components/layout/AppLayout';
import { MovieDetails } from './Components/UI/MovieDetails';
import getMovieDetails from './api/GetMovieDetails';
import Contact, { contactData } from './pages/Contact';
import SignIn from './Components/layout/SignIn';
import SignUp from './Components/layout/SignUp';

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
          path:"/signin",
          element:<SignIn/>

        },
        {
          path:"/signUp",
          element:<SignUp/>
        },
// Dynamic routing to get more about particular card

        {
          path:"/movie/:movieID",
          element:<MovieDetails/>,
          loader:getMovieDetails,
        },
        {
          path:"/contact",
          element:<Contact/>,
          action:contactData,
        },
    ]
  },
  
])

  return <RouterProvider router={router}/>



}

export default App
