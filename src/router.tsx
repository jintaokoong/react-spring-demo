import { createBrowserRouter } from "react-router-dom";
import Index from "./pages";
import I from "./pages/i";

const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  {
    path: "/i",
    element: <I />,
  },
]);

export default router;
