import { PATH_NAME, PathNameValue } from '@/constants';
import Auth from '@/pages/Auth';
import Dashboard from '@/pages/Dashboard';
import { JSX } from 'react';

export interface RouteItem {
  path: PathNameValue;
  element: JSX.Element;
  exact?: boolean;
  isPrivate?: boolean;
}

export const publicRoutes: RouteItem[] = [
  {
    path: PATH_NAME.LOGIN,
    element: <Auth />,
  },
];

export const privateRoutes: RouteItem[] = [
  { path: PATH_NAME.DASHBOARD, element: <Dashboard /> },
];
