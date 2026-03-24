import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from './app/components/Header';
import Home from "./app/view/home";

function App() {
  const route = createBrowserRouter([{
    path: '/',
    element:<>
      <Header/>
      <Home/>
    </>


  }])
  return (
   <div className="bg-gray-200 min-h-screen w-full">
     <RouterProvider router={route}/>
    </div>
  );
 
}

export default App;
