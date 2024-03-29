import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Component/Home/Home';
import Orders from './Component/Orders/Orders';
import About from './Component/About/About';
import Grandpa from './Component/Grandpa/Grandpa';

function App() {
  const router = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: () => fetch('tshirt.json'),
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/orders',
        element: <Orders></Orders>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/grandpa',
        element: <Grandpa></Grandpa>
      }
    ]
   }
  ]);
  return (
    <div className="App">
      

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
