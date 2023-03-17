import { FC, useState, useEffect } from "react"
// Import Home css
import "./Home.css"
// Import module style
import style from "../style/my-style.module.css" // <- recommend

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
			<button onClick={loadData}>Load</button>
			{/* Inline style */}
			<h1 style={{ color: "red" }}>Inline style</h1>
			<h1 style={style_json}>Inline style with json variable</h1>

			<p>Lorem, ipsum dolor.</p>

			<h2 className={style.textPurple}>My style with module.css</h2>
			<table>
				<thead>
					{headers.map((value) => (
						<th>{value}</th>
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
		</>
	)
}

export { Home }
