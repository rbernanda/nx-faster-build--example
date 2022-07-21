import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar, Footer } from '@nx-faster-build--example/shared-ui'

const Auth = React.lazy(() => import('auth/Module'));
const Profile = React.lazy(() => import('profile/Module'));
const Home = React.lazy(() => import('home/Module'));

import { BaseContainer } from './BaseContainer';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


export function App() {
  return (
    <React.Suspense fallback={null}>
      <BaseContainer>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/auth'} element={<Auth />} />
          <Route path={'/profile'} element={<Profile />} />
        </Routes>
        <Footer />
      </BaseContainer>
    </React.Suspense>
  );
}

export default App;
