import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./app/view/home";
import Layout from "./app/components/Layout";
import ShoppingCart from "./app/view/ShoppingCart";

function App() {
  const route = createBrowserRouter([
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
     <RouterProvider router={route}/>
    </div>
  );
 
}

export default App;
