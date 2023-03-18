import { FC, useState } from "react"
import { PanelTitle } from "../component/aui"
import { useDispatch } from "react-redux"
import { Button, TextInput } from "../component/aui"

import { loginSuccess } from "../app/slice/auth-slice"

const Login: FC = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const dispatch = useDispatch()

	const Login = async () => {
		const url = "http://54.254.44.166:3000/login"
		const res = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, password }),
		})

		const data = await res.json()
		console.log(data)
		dispatch(loginSuccess(data.token))

		// Promise (I don't want to use it.)
		// fetch(url, {
		// 	method: "POST",
		// 	headers: { "Content-Type": "application/json" },
		// 	body: JSON.stringify({ username: username, password: password }),
		// })
		// 	.then((value) => value.json())
		// 	.then((data) => {
		// 		console.log(data)
		// 	})
	}
	return (
		<>
			<PanelTitle title="Login">
				<div className="bg-zinc-50 p-4 shadow-md rounded md:w-2/5">
					<h1 className="text-2xl">Login form</h1>
					<hr />
					{/* Card body */}
					<div className="mt-3">
						<TextInput
							id="username"
							label="Username"
							type="text"
							value={username}
							setValue={setUsername}
						/>
						<TextInput
							id="password"
							label="Password"
							type="password"
							value={password}
							setValue={setPassword}
						/>
					</div>

					<div className="mt-3">
						<Button label="Submit" onClick={Login} />
					</div>
				</div>
			</PanelTitle>
		</>
	)
}

export default Login
