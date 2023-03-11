import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counter-slice';
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;