import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';

import {RouterProvider,createBrowserRouter} from "react-router-dom"
import DataContext from './context';
const router=createBrowserRouter(routes)
const Globalstate={
     name:"John",
     age:25

}

ReactDOM.createRoot(document.getElementById('root')).render(
     <DataContext.Provider value={Globalstate}>
 <RouterProvider router={router} />
     </DataContext.Provider>
    

  
)
