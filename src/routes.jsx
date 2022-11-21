import App from "./App"
import Home from "./pages/Home"
import PrivateRoute from "./components/PrivateRoute";

import EditPage from "./pages/EditPage";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
const routes=[
    {
      path: "/",
      element: <App />,
      children: [

        {
          path: "signup",
          element: <Signup />,
        },

        {
          path: "login",
          element: <Login />,
        },


        {
          path: "home",
          element:<PrivateRoute>
          <Home />
        </PrivateRoute>,
        },

        {
          path: "search",
          element: <PrivateRoute>
          <Search />
        </PrivateRoute>
        }
       ,
       {
        path: "/edit/:id",
        element: <EditPage />,
      }
     
  ]
}]

export default routes;