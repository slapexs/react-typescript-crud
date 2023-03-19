import { FC, useState, useEffect } from "react"
import { PanelTitle, Button, TextInput } from "../component/aui"
import { Navigate, NavLink, useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"

const AddUser: FC = () => {
	const [code, setCode] = useState("")
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [addUser, setAddUser] = useState(false)

	// Edit section
	const { uid } = useParams()
	const { token } = useSelector((state: RootState) => state.auth)
	const navigate = useNavigate()

	const SubmitAddUser = async () => {
		const url = "http://54.254.44.166:3000/user" + (uid ? `/${uid}` : "")
		const res = await fetch(url, {
			method: !uid ? "POST" : "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ name: name, code: code, email: email }),
		})

		const data = await res.json()
		if (uid) {
			alert(data.success ? "Updated" : "Not Updated")
		} else {
			alert(data.success ? "Inserted" : "Not inserted")
		}
		navigate("/user")
		setAddUser(true)
	}

	// Load user data for edit
	const loadUserByID = async (uid: string) => {
		const url = `http://54.254.44.166:3000/user/by-id/${uid}`
		const res = await fetch(url, {
			method: "GET",
			headers: { Authorization: `Bearer ${token}` },
		})
		const data = await res.json()
		setCode(data.data.code)
		setName(data.data.name)
		setEmail(data.data.email)
	}

	useEffect(() => {
		if (uid) {
			loadUserByID(uid)
		}
	}, [])
	return (
		<>
			{!addUser ? (
				<PanelTitle title="Add new user">
					<div className="bg-zinc-50 p-4 shadow-md rounded md:w-2/5">
						<h1 className="text-2xl">Login form</h1>
						<hr />
						{/* Card body */}
						<div className="mt-3">
							<TextInput
								id="code"
								label="code"
								type="text"
								value={code}
								setValue={setCode}
							/>
							<TextInput
								id="name"
								label="name"
								type="text"
								value={name}
								setValue={setName}
							/>
							<TextInput
								id="email"
								label="email"
								type="email"
								value={email}
								setValue={setEmail}
							/>
						</div>

						<div className="mt-3">
							<Button label={!uid ? "Add" : "Update"} onClick={SubmitAddUser} />
							<NavLink
								to="/user"
								className="px-2 py-3 ml-2 hover:text-indigo-500 rounded-lg"
							>
								Cancel
							</NavLink>
						</div>
					</div>
				</PanelTitle>
			) : (
				<Navigate to="/user" />
			)}
		</>
	)
}

export default AddUser
