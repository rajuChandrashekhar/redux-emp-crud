import { Store, configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import logger from "redux-logger"
import thunk from "redux-thunk"
import { useDispatch } from "react-redux";
 

const store:Store=configureStore({
    reducer:RootReducer,
    middleware:[logger,thunk]
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()
