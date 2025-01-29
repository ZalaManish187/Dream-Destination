import React, { useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import LoginPopUp from './component/LoginPopUp/LoginPopUp';
import ExploreMenu from './component/ExploreMenu/ExploreMenu';
import TourDetail from './pages/TourDetail/TourDetail';
import TourDisplay from './component/TourDisplay/TourDisplay';
import AdminPanel from './Admin/AdminPanel/AdminPanel';
import Package from './Admin/Package/Package';
import Payment from './Admin/Payment/Payment';
import Feedback from './Admin/Feedback/Feedback';
import User from './Admin/User/User';



const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} setUserName={setUserName} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} userName={userName} /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<ExploreMenu/>} />
          <Route path='/footer' element={<Footer/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/detail' element={<TourDetail/>}/>
          <Route path='/tour' element={<TourDisplay/>}/>
          <Route path='/admin' element={<AdminPanel/>}/>
          <Route path='/package' element={<Package/>}/>
          <Route path='/payment' element={<Payment/>} /> 
          <Route path='/feedback' element={<Feedback/>} />
          <Route path='/user' element={<User/>} />

        </Routes>
        
      </div>
    </>
  );
}

export default App;
