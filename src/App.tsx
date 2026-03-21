import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from './app/components/Header';

function App() {
  const route = createBrowserRouter([{
    path: '/',
    element:(
       <Header/>
      ),
  }])
  return (
   <div className="flex justify-center items-center bg-gray-200 h-full h-screen">
     <RouterProvider router={route}/>
    </div>
  );
 
}

export default App;
