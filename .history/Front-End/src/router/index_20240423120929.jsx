import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/layout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {

      }
    ]
  }
])