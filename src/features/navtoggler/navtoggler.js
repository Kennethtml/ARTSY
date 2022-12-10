import { createSlice } from "@reduxjs/toolkit";

const initialState={
    toggle:false
}

 const navToggler=createSlice({
    name:"navToggler",
    initialState,
    reducers:{
        setToggle:(state)=>{
            state.toggle=!state.toggle

        }
    }
})

export const navToggle =navToggler.reducer;
export const {setToggle}=navToggler.actions;