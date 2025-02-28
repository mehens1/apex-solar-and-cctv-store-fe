import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './app/layout';
import InnerLayout from './app/inner';
import Home from './app/pages/home';
import Store from './app/pages/store';
import Login from './app/pages/login';
import Register from './app/pages/register';
import Profile from './app/pages/profile';
import Cart from './app/pages/cart';
import Checkout from './app/pages/checkout';

function App() {

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path='/store' element={
            <InnerLayout title="Shop">
              <Store />
            </InnerLayout>
          }/>

          <Route path='/register' element={
            <InnerLayout title="Register">
              <Register />
            </InnerLayout>
          }/>

          <Route path='/login' element={
            <InnerLayout title="Login">
              <Login />
            </InnerLayout>
          }/>

          <Route path='/profile' element={
            <InnerLayout title="Profile">
              <Profile />
            </InnerLayout>
          }/>

          <Route path='/cart' element={
            <InnerLayout title="Cart">
              <Cart />
            </InnerLayout>
          }/>

          <Route path='/checkout' element={
            <InnerLayout title="Checkout">
              <Checkout />
            </InnerLayout>
          }/>

        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;