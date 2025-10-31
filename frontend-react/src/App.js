
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import Card from './pages/Card/Card'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import AppDownload from './components/AppDownload/AppDownload';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './pages/verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <> 
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
       <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Card/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
           <Route path='/verify' element={<Verify/>}/>
           <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
    </div>
    <AppDownload/>
    <Footer/>
    </>

  );
}

export default App;
