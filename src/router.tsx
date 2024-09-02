
import { ViewList } from './pages/ViewList';
import { TDLPage } from './pages/TDLPage';
import { NotFound } from './pages/404';
import { createBrowserRouter } from 'react-router-dom';
import { ItemInfo } from './pages/ItemInfo';
import { Layout } from './layouts/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    // Дочерние элементы рендарятся на место Outlet в компоненте Layout
    children: [
      { path: '/', element: <TDLPage /> },
      { path: '/list', element: <ViewList /> },
      { path: '/list/:id', element: <ItemInfo /> },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])