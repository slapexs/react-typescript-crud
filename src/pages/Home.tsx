import { FC, useState, useEffect } from "react"
// Import Home css
import "./Home.css"
// Import module style
import style from "../style/my-style.module.css" // <- recommend
// Import Button, StackLayout from aui
import { Button, PanelTitle } from "../component/aui"

interface GeoModel {
	lat: string
	lng: string
}

interface AddressModel {
	street: string
	geo: GeoModel
}

interface UserModel {
	name: string
	username: string
	address: AddressModel
}

const Home: FC = () => {
	// hook
	const [users, setUsers] = useState<UserModel[]>([])
	const [headers, setHeaders] = useState<string[]>(["name", "username"])
	useEffect(() => {
		loadData()
	}, [])

	// function
	const loadData = () => {
		fetch("https://jsonplaceholder.typicode.com/users").then((resp) => {
			resp.json().then((data: UserModel[]) => {
				setUsers(data)
				if (data.length > 0) {
					const d = data[0]
					const cols: string[] = []
					for (let k in d) {
						cols.push(k)
					}
					setHeaders(cols)
				}
			})
		})
	}

	const style_json = {
		backgroundColor: "#94958e", // camelCased - from background-color
		color: "#fffeff",
		padding: "10px",
		borderRadius: "6px",
		margin: "0 10px",
	}
	return (
		<>
			<PanelTitle title="Home">
				<button
					onClick={loadData}
					className="bg-red-200 py-1 px-2 rounded hover:bg-red-400 hover:text-white"
				>
					Load
				</button>
				{/* Inline style */}
				<h1 style={{ color: "red" }}>Inline style</h1>
				<h1 style={style_json}>Inline style with json variable</h1>

				<p>Lorem, ipsum dolor.</p>

				<h2 className={style.textPurple}>My style with module.css</h2>
				<h3 className="text-red-400">Use color from tailwindcss</h3>

				<div className="mb-5">
					<h1 className="text-2xl">Responsive</h1>
					<div className="sm:bg-green-400 md:bg-purple-400 lg:bg-red-400 bg-yellow-200 p-4 text-center">
						Test area
					</div>
					<button className="btn-primary">
						.btn-primary from @layer component
					</button>
				</div>

				<Button label="btn from components" onClick={loadData} />

				<table>
					<thead>
						{headers.map((value, index) => (
							<th key={index}>{value}</th>
						))}
					</thead>
					<tbody>
						{users.map((value, index) => {
							return (
								<tr key={index}>
									<td>{value.name}</td>
									<td>{value.username}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</PanelTitle>
		</>
	)
}

export { Home }
