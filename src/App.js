
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Grandpa from './Components/Grandpa/Grandpa';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Orders from './Components/Orders/Orders';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('t-shirt.json'),
          element:<Home></Home>
        },
        {
          path:'/orders',
          element:<Orders></Orders>
        },
        {
          path:'*',
          element:<div><h3>404 error</h3></div>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/grandpa',
          element:<Grandpa></Grandpa>

        },{
          path:'/grandpa',
          element:<Grandpa></Grandpa>
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
