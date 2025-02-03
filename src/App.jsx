import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/App.css'
import {About, Contact, Home, Homelayout, Service, Resume } from "./pages";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Homelayout />,
    children: [
      {
        index:true,
        element:<Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "homelayout",
        element: <Homelayout />,
      },
      
    ]
},
]);

function App() {
  
  return <RouterProvider router={router} />;  
}

export default App;
