import App from "./App"
import Home from "./pages/Home"

import EditPage from "./pages/EditPage";
const routes=[
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "home",
          element: <Home />,
        }
       ,
       {
        path: "/edit/:id",
        element: <EditPage />,
      }
     
  ]
}]

export default routes;