import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Contact from './pages/Contact';
import Movie from './pages/Movie';
import About from './pages/About';
import Home from './pages/Home';

function App() {
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>,
//   },
//   {
//     path:"/about",
//     element:<About/>,
//   },
//   {
//     path:"/movie",
//     element:<Movie/>,
//   },
//   {
//     path:"/contact",
//     element:<Contact/>,
//   },
// ])

//   return <RouterProvider router={router}/>


//Old Way:-

createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/movie" element={<Movie/>}/>
  </Route>

)
}




export default App
