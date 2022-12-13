import App from "./App"
import Home from "./pages/Home"
import PrivateRoute from "./components/PrivateRoute";

import EditPage from "./pages/EditPage";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Controlled from "./pages/Controlled";
import Uncontrolled from "./pages/Uncontrolled";
import Something from "./pages/Something";
import Reducerhook from "./pages/Reducerhook";
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
      },
      {
        path: "control",
        element: <Controlled />,
      },
      {
        path: "uncontrol",
        element: <Uncontrolled />,
      }
     
  ]
},
{
  path: "/something",
  element: <Something />,
},
{
  path: "/reducerhook",
  element: <Reducerhook />,
}


]

export default routes;

// React setup ==>
//About react --->spa ,what is library ,what is react

// how to structure your project 
//state in react
// how to handle events in react
// useState hook
// useEffect hook

// props in react --prop drilling -->how to pass from parent to child --->child to parent
//conditional rendering
//form validation
// conditional styling 
// api calls (crud operation);
// axios calls
// life cycle phases
// how to visualize life cylce in class based and fucntion based
// routes
// authentication ,
// Protectted routes


//-------
/**
 * Pagination sorting ,filtering 
 */
// useRef ,context api ,useReducer hook  ,redux -

// Advanced 
// useMemo ,useCallback ,suspense ,react query -->
// Next js basics -->