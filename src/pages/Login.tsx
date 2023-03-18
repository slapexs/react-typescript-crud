import { FC } from "react"
import { PanelTitle, FormLogin } from "../component/aui"

const Login: FC = () => {
	return (
		<>
			<PanelTitle title="Login">
				<FormLogin />
			</PanelTitle>
		</>
	)
}

export default Login
