import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './app/layout';
import InnerLayout from './app/inner';
import Home from './app/pages/home';
import Store from './app/pages/store';
import Login from './app/pages/login';
import Register from './app/pages/register';

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

        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;