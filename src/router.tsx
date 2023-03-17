import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import HelloWorld from "./component/HelloWorld"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Layout } from "./pages/Layout"

// import StackLayout from aui
import { StackLayout } from "./component/aui"

const router = createBrowserRouter([
	{
		path: "",
		element: <StackLayout />,
		children: [
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
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
])
export { router }
