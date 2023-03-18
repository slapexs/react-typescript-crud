import { FC } from "react"
import { TextInput } from "./TextInput"

const FormLogin: FC = () => {
	return (
		<>
			<div className="bg-zinc-50 p-4 shadow-md rounded w-2/5">
				<h1 className="text-2xl">Login form</h1>
				<hr />
				{/* Card body */}
				<div className="mt-3">
					<TextInput
						id="username"
						label=""
						placeholder="Username"
						type="text"
					/>
					<TextInput
						id="password"
						label=""
						placeholder="Password"
						type="password"
					/>
				</div>

				<div className="mt-3">
					<button className="btn-primary">Submit</button>
				</div>
			</div>
		</>
	)
}

export { FormLogin }
