
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


const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
