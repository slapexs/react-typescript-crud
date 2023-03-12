import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HelloWorld from "./component/HelloWorld";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "hello/:name",
    element: <HelloWorld />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);
export { router };
