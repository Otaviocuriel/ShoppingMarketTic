import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from './app/components/Header';
import Home from "./app/view/home";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const route = createBrowserRouter([{
    path: '/',
    element:<>
      <Header onSearchChange={setSearchTerm} />
      <Home searchTerm={searchTerm} />
    </>


  }])
  return (
   <div className="bg-[#f5f0df] min-h-screen w-full">
     <RouterProvider router={route}/>
    </div>
  );
 
}

export default App;
