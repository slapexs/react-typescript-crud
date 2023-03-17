import { FC, Fragment, ReactNode } from "react"
import { PanelTitle } from "./aui"
interface Props {
	children: ReactNode
}

const Panel: FC<Props> = ({ children }) => {
	return (
		<Fragment>
			<PanelTitle title="Root page">
				<h1>Panel Text</h1>
				{children}
			</PanelTitle>
		</Fragment>
	)
}

export { Panel }
