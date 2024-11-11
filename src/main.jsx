import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main.jsx';
import Login from './Components/Login/Login.jsx';
import Resgistion from './Components/Resgistion/Resgistion.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regeister",
        element:<Resgistion></Resgistion>
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
