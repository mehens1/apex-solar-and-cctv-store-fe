import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './app/layout';
import InnerLayout from './app/inner';
import Home from './app/pages/home';
import Store from './app/pages/store';

function App() {

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path='/store' element={
            <InnerLayout>
              <Store />
            </InnerLayout>
          }></Route>

        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;