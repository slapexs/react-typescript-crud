import { FC, useState } from "react"
import { NavLink } from "react-router-dom"
import { PanelTitle, Button, TextInput } from "../component/aui"
import { useDispatch } from "react-redux"

const AddUser: FC = () => {
	const [code, setCode] = useState("")
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const dispatch = useDispatch()

	const SubmitAddUser = async () => {
		const url = "http://54.254.44.166:3000/user"
		const token =
			"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsIm5hbWUiOiJhQGEuY29tIn0.eIdaMkVzp-KVr9B14A2frSrFBdI_bv6q95iKgTSRIao"
		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ name: name, code: code, email: email }),
		})

		const data = await res.json()
		alert(data.success ? "Inserted" : "Not inserted")
	}
	return (
		<>
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
						<Button label="Submit" onClick={SubmitAddUser} />
						<NavLink
							to="/user"
							className="px-2 py-3 ml-2 hover:text-indigo-500 rounded-lg"
						>
							Cancel
						</NavLink>
					</div>
				</div>
			</PanelTitle>
		</>
	)
}

export default AddUser
