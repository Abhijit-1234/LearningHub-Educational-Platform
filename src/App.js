import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import login from './components/login';
import { BiLogIn } from 'react-icons/bi';
import login from './components/login';
// import signup from "./components/signup";
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <login/>
      <Routes>
        <Route path = "/" element = {<login/>} />
        {/* <Route path='/signup' element = {<signup />}/> */}
        <Route path='/home' element = {<Home />} />
        <Route path = "/courses/:id" element = {<SingleCourse />} />
        <Route path = "/category/:category" element = {<Courses />} />
        <Route path = "/cart" element = {<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
