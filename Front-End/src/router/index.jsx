import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/layout";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path:'/',
        element: <Login />,
      },
      {
        path:'/home',
        element: <Home />, 
      }
    ]
  }
])

export default router