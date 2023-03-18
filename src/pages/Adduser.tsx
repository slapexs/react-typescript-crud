import { FC, useState } from "react"
import { PanelTitle, Button, TextInput } from "../component/aui"

const AddUser: FC = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const SubmitAddUser = async () => {
		const url = ""
		const res = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name: name, password: password, email: email }),
		})

		const data = await res.json()
		console.log(data)
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
						<TextInput
							id="password"
							label="password"
							type="password"
							value={password}
							setValue={setPassword}
						/>
					</div>

					<div className="mt-3">
						<Button label="Submit" onClick={SubmitAddUser} />
					</div>
				</div>
			</PanelTitle>
		</>
	)
}

export default AddUser
