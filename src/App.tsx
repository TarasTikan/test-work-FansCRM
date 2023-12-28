import React from 'react';
import './App.css';

import { FormLogin } from './Components/FormLogin/FormLogin';
import { Route,Routes } from 'react-router-dom';
import { SharedLayout } from './Components/SharedLayout/SharedLayout';
import { User } from './Components/User/User';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<FormLogin />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
