import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/Product";


const initialState: Product = {  }


export const product = createSlice({
    name: "product",
    initialState: {responseData : initialState,loading:false},
    reducers: {
      
        setResponseData: (state, action: PayloadAction<Product>) => {
            state.responseData = action.payload;
       },
       setLoading:(state,action:PayloadAction<boolean>) =>{
        state.loading = action.payload;
       }
    }
});


export const {setResponseData,setLoading } = product.actions;

export default product.reducer;