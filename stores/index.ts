import { combineReducers, configureStore } from "@reduxjs/toolkit"

import productSlice from "./productSlice"


const store = configureStore({
	reducer: productSlice,
  })


//   const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof store.getState>

export default store;


//   export type RootState =
//   ReturnType<typeof rootReducer> 

//  export default configureStore({
//  	reducer: {
//  		product: productSlice
	
//  	},
//  })