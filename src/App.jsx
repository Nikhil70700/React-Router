import './App.css'
import {createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import Contact from './pages/Contact';
import Movie from './pages/Movie';
import About from './pages/About';
import Home from './pages/Home';
import AppLayout from './Components/layout/AppLayout';

function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
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
