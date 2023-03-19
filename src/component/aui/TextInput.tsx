import { FC, memo } from "react"

interface SettingInput {
	id: string
	type: string
	label: string
	value: string
	setValue: (s: string) => void
}

const TextInput: FC<SettingInput> = ({ id, type, label, value, setValue }) => {
	console.log(id)

	return (
		<>
			<div className="my-2">
				<label htmlFor="username" className="font-Prompt font-medium">
					{label}
				</label>
				<input
					id={id}
					type={type}
					required={true}
					onChange={(e) => setValue(e.target.value)}
					className="p-2 w-full border-2 border-indigo-100 rounded"
					autoComplete="off"
				/>
			</div>
		</>
	)
}

export { TextInput }
export default memo(TextInput)
