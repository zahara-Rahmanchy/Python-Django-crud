import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UpdateModal from './components/UpdateModal.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import AddStockData from './components/AddStockData.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/addstock",
        element: <AddStockData/>,
      },
      
      {
        path: "/update/:sid",
        element: (
        
            <UpdateModal/>
          
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      {" "}
      <div className="bg-base-50">
        <RouterProvider router={router} />
      </div>
    
  </React.StrictMode>
);

