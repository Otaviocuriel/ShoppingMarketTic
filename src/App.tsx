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
   <div className="min-h-screen w-full bg-gradient-to-b from-[#f3efdf] via-[#eee9d7] to-[#e8e3cf]">
     <RouterProvider router={route}/>
    </div>
  );
 
}

export default App;
