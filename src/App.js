
import './App.css';
import app from './firebase.init';
import {getAuth} from 'firebase/auth';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';


const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <h1>kha kha kha morubhumi</h1>
    </div>
  );
}

export default App;
