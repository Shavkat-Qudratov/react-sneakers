import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AddNewSneakers} from './pages/'
import { Favorites } from './pages';
import { Home } from './pages';
import { NotFound } from './pages';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/allSneakers/*',
      element: <Home />,
    },
    {
      path: '/favorites',
      element: <Favorites />,
    },
    {
      path: '/addNewSneakers',
      element: <AddNewSneakers />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<h3>loading</h3>} />;
}

export default App;
// <Route path="*" element={<PageNotFound />} />