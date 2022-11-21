import App from "./App"
import Home from "./pages/Home"

import EditPage from "./pages/EditPage";
import Search from "./pages/Search";
const routes=[
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "search",
          element: <Search />,
        }
       ,
       {
        path: "/edit/:id",
        element: <EditPage />,
      }
     
  ]
}]

export default routes;