import { FC } from "react"
import { Link } from "react-router-dom"

const TopMenu: FC = () => {
	const style_button =
		"border-b-2 transition border-b-purple-200 py-1 px-2 hover:border-b-purple-600 hover:border-b-2 transition"
	return (
		<nav>
			<ul className="flex justify-evenly">
				<li className={style_button}>
					<Link to="/">Root</Link>
				</li>
				<li className={style_button}>
					<Link to="/hello/z">Hello World</Link>
				</li>
				<li className={style_button}>
					<Link to="/home">Home</Link>
				</li>
			</ul>
		</nav>
	)
}

export { TopMenu }
