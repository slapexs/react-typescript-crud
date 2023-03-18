import { FC } from "react"

interface SettingInput {
	id: string
	type: string
	placeholder: string
	label: string
}

const TextInput: FC<SettingInput> = ({ id, type, placeholder, label }) => {
	return (
		<>
			<div className="my-2">
				<label htmlFor="username">{label}</label>
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					required={true}
					className="p-2 w-full border-2 border-indigo-100 rounded focus:outline-indigo-300"
					autoComplete="off"
				/>
			</div>
		</>
	)
}

export { TextInput }
