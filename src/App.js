import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import GuestGuard from './guards/GuestGuard';
import AuthGuard from './guards/AuthGuard';
import VerifyEmail from './pages/VerifyEmail';

const AppRouter = () => {
  return useRoutes([
    {
      path: '/', element: (
        <AuthGuard>
          <Home />
        </AuthGuard>
      )
    },
    {
      path: '/sign-up', element: (
        <GuestGuard >
          <Register />
        </GuestGuard>
      )
    },
    {
      path: '/sign-in', element: (
        <GuestGuard>
          <Login />
        </GuestGuard>
      )
    },
    {
      path: '/verify-email', element: (
        <GuestGuard>
          <VerifyEmail />
        </GuestGuard>
      )
    },
    { path: '/*', element: <NotFound /> },
  ]);
};

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
};
