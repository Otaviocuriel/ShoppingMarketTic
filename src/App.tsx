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
   <div className="flex justify-center items-center bg-gray-200 h-full h-screen">
     <RouterProvider router={route}/>
    </div>
  );
 
}

export default App;
