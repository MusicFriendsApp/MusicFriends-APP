import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path:'/',
        element: <Home />
      }
    ]
  }
])