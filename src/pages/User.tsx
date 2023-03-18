import { FC, useState } from "react"
import { Button, PanelTitle } from "../component/aui"

interface UserModel {
	id: number
	code: string
	name: string
	email: string
}

interface UserResp {
	success: boolean
	data: UserModel[]
}

interface ColProps {
	values: number
}

const Col: FC<ColProps> = ({ values }) => {
	return <td className="text-center">{values}</td>
}

const User: FC = () => {
	const [user, setUser] = useState<UserResp>({ success: false, data: [] })
	const getusers = async () => {
		const token =
			"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsIm5hbWUiOiJhQGEuY29tIn0.eIdaMkVzp-KVr9B14A2frSrFBdI_bv6q95iKgTSRIao"
		const res = await fetch("http://54.254.44.166:3000/user", {
			headers: { Authorization: `Bearer ${token}` },
		})
		const data = await res.json()
		setUser(data)
		console.log(user)
	}

	return (
		<>
			<PanelTitle title="Users">
				<Button onClick={getusers} label="Load data" />
				{/* Table */}
				<table className="w-full mt-3">
					<thead className="bg-indigo-200">
						<th>ID</th>
						<th>Code</th>
						<th>Name</th>
						<th>Email</th>
					</thead>

					<tbody>
						{user.data.map((elem, index) => (
							<tr key={index} className="bg-white py-3 hover:bg-indigo-100">
								<Col values={elem.id} />
								<td>{elem.code}</td>
								<td>{elem.name}</td>
								<td>{elem.email}</td>
							</tr>
						))}
					</tbody>
				</table>
			</PanelTitle>
		</>
	)
}

export { User }
