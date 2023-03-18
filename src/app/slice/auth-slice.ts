import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthModel {
	token: string
	isLogedIn: boolean
}

const initialState: AuthModel = {
	token: "",
	isLogedIn: false,
}
const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		login: (state, action: PayloadAction<AuthModel>) => {
			state = action.payload
		},
		loginSuccess: (state, action: PayloadAction<string>) => {
			state.isLogedIn = true
			state.token = action.payload
			// state = { isLogedIn: true, token: action.payload }
		},
		logout: (state) => {
			state.isLogedIn = false
			state.token = ""
			// state = { isLogedIn: false, token: "" }
		},
	},
})

export const { loginSuccess, logout } = authSlice.actions
export const authReducer = authSlice.reducer
