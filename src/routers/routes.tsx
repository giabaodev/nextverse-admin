import { AuthLayout, MainLayout } from '@/layouts';
import { Routes as ReactRoutes, Route } from 'react-router';
import { privateRoutes, publicRoutes } from './all-routes';
export function Routes() {
  return (
    <ReactRoutes>
      <Route element={<MainLayout />}>
        {privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route element={<AuthLayout />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </ReactRoutes>
  );
}
