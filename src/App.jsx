import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from './pages/Contact';
import Movie from './pages/Movie';
import About from './pages/About';
import Home from './pages/Home';

function App() {
const router=createBrowserRouter([
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
])

  return <RouterProvider router={router}/>
}

export default App
