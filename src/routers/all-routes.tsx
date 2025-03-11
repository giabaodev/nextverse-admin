import { PATH_NAME, PathNameValue } from '@/constants';
import { Auth, Product } from '@/pages';

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
  { path: PATH_NAME.PRODUCTS, element: <Product /> },
];
