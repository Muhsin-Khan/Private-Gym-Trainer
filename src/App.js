
import './App.css';
import app from './firebase.init';
import {getAuth} from 'firebase/auth';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Signup from './components/Sign Up/Signup';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Checkout from './components/Checkout/Checkout';
import RequireAuth from './components/RequireAuth/RequireAuth';




function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={
          <RequireAuth>
            <Services></Services>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
