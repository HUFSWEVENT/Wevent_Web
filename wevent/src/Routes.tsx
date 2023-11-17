import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import LoginPage from 'pages/account/LoginPage';
import SignupPage from 'pages/account/SignupPage';

export interface RouteProps {
  path: string;
  element: ReactNode;
}
export const routes: RouteProps[] = [
  { path: '/', element: <Home /> },
  { path: '/search', element: <Search /> },
  { path: '/account/login', element: <LoginPage /> },
  { path: '/account/signup', element: <SignupPage /> },
];
const RoutesSetting = () => (
  <Routes>
    {routes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);
export default RoutesSetting;
