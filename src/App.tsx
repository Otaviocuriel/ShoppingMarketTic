import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { ShoppingListProvider } from "./app/contexts/ShoppingCart";
import Home from "./app/view/home";
import Login from "./app/view/Login";
import SingUp from "./app/view/SingUp";
import Layout from "./app/components/Layout";
import ShoppingCart from "./app/view/ShoppingCart";

function App() {
  const route = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
		{
      path: "/register",
      element: <SingUp/>,
    },
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/ShoppingCart", element: <ShoppingCart /> }
      ]
    }
  ]);
  return (
   <div className="min-h-screen w-full bg-gradient-to-b from-[#f3efdf] via-[#eee9d7] to-[#e8e3cf]">
    <ShoppingListProvider>
     <RouterProvider router={route}/>
    </ShoppingListProvider>
    </div>
  );
 
}

export default App;
