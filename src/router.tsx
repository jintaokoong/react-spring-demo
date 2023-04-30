import { createBrowserRouter } from "react-router-dom";
import Index from "./pages";
import I from "./pages/i";
import II from "./pages/ii";
import III from "./pages/iii";

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  {
    path: "/i",
    element: <I />,
  },
  {
    path: "/ii",
    element: <II />,
  },
  {
    path: "/iii",
    element: <III />,
  },
]);

export default router;
