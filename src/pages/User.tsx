import { FC, useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { Button, ConfirmDialog, PanelTitle } from "../component/aui"
import { useNavigate, Navigate, NavLink } from "react-router-dom"

import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline"

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
	const [showConfirm, setShowConfirm] = useState(false)
	const [confirmDelete, setconfirmDelete] = useState(false)
	const navigate = useNavigate()

	const getusers = async () => {
		const res = await fetch("http://54.254.44.166:3000/user", {
			headers: { Authorization: `Bearer ${token}` },
		})
		const data = await res.json()
		setUser(data)
	}

	const DeleteUser = async (uid: number) => {
		const token =
			"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsIm5hbWUiOiJhQGEuY29tIn0.eIdaMkVzp-KVr9B14A2frSrFBdI_bv6q95iKgTSRIao"

		const url = "http://54.254.44.166:3000/user"
		const res = await fetch(`${url}/${uid}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		alert("Deleted")
		getusers()
	}

	useEffect(() => {
		getusers()
	}, [])

	const routeEdituser = (uid: number) => {
		navigate(`/adduser/${uid}`)
	}

	return (
		<>
			{isLogedIn ? (
				<PanelTitle title="Users">
					<Button onClick={getusers} label="Load data" />
					<NavLink
						to="/adduser"
						className="bg-emerald-100 hover:bg-emerald-300 hover:text-white py-3 px-4 mx-2 rounded-lg"
					>
						Add user
					</NavLink>
					{/* Table */}
					<table className="w-full mt-3">
						<thead className="bg-indigo-200">
							<th>ID</th>
							<th>Code</th>
							<th>Name</th>
							<th>Email</th>
							<th>Action</th>
						</thead>

						<tbody>
							{user.data.map((elem, index) => (
								<tr key={index} className="bg-white hover:bg-indigo-50">
									<Col values={elem.id.toString()} />
									<Col values={elem.code} />
									<Col values={elem.name} />
									<Col values={elem.email} />
									<td className="text-center flex">
										<button
											className="mr-2 hover:bg-yellow-500 bg-yellow-400 flex items-center my-2  border-2 border-yellow-300 rounded px-2 py-1"
											onClick={() => {
												routeEdituser(elem.id)
											}}
										>
											<PencilSquareIcon width={14} />
											Edit
										</button>
										<button
											className="hover:bg-red-400 flex items-center text-red-500 my-2 hover:text-white border-2 border-red-300 rounded px-2 py-1"
											onClick={() => {
												setShowConfirm(true)
												if (confirmDelete) {
													DeleteUser(elem.id)
												}
											}}
										>
											<TrashIcon width={14} />
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</PanelTitle>
			) : (
				<Navigate to="/login" />
			)}
			{showConfirm && (
				<ConfirmDialog
					title="Alert !"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vero, eaque libero aperiam quibusdam reprehenderit excepturi alias distinctio beatae dolore?"
					cancel="Cancel"
					confirm="Confirm"
					onConfirm={() => {
						setconfirmDelete(true)
					}}
				/>
			)}
		</>
	)
}

export { User }
