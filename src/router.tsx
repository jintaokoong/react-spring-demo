import { createBrowserRouter } from "react-router-dom";
import Index from "./pages";
import I from "./pages/i";
import II from "./pages/ii";

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
]);

export default router;
