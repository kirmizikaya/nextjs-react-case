import { configureStore, ThunkAction } from "@reduxjs/toolkit"
import productSlice from "./productSlice"


const store = configureStore({
	reducer: productSlice,
  })


export type RootState = ReturnType<typeof store.getState>

export default store;
