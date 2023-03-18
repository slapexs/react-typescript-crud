import { FC, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { Button, PanelTitle } from "../component/aui"
import { Navigate } from "react-router-dom"

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
	values: string
}

const Col: FC<ColProps> = ({ values }) => {
	return <td className="text-center">{values}</td>
}

const User: FC = () => {
	const [user, setUser] = useState<UserResp>({ success: false, data: [] })
	const { isLogedIn, token } = useSelector((state: RootState) => state.auth)
	const getusers = async () => {
		const res = await fetch("http://54.254.44.166:3000/user", {
			headers: { Authorization: `Bearer ${token}` },
		})
		const data = await res.json()
		setUser(data)
		console.log(user)
	}

	return (
		<>
			{isLogedIn ? (
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
								<tr key={index} className="bg-white py-3 hover:bg-indigo-50">
									<Col values={elem.id.toString()} />
									<Col values={elem.code} />
									<Col values={elem.name} />
									<Col values={elem.email} />
								</tr>
							))}
						</tbody>
					</table>
				</PanelTitle>
			) : (
				<Navigate to="/login" />
			)}
		</>
	)
}

export { User }
