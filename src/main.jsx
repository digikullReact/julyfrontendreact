import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';

import {RouterProvider,createBrowserRouter} from "react-router-dom"
import DataContext from './context';
import Globalstate from './globalState';
const router=createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
     <DataContext.Provider value={Globalstate}>
{/**<App/> */} 
<RouterProvider router={router} /> 

     </DataContext.Provider>
    

  
)
