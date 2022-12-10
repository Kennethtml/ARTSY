import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url =
  "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/products.json";

export const getMarket = createAsyncThunk("market", () => {
  return fetch(url).then((res) => res.json());
});
const initialState = {
  marketData: [],
  isLoading: false,
};

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(getMarket.pending, (state, action) => {
         state.isLoading = true;
  })

    builder.addCase(getMarket.fulfilled,(state, action) => {
         state.isLoading = false;
      state.marketData = action.payload;
      console.log(action);
  })

    builder.addCase(getMarket.rejected, (state, action) => {
         state.isLoading = false;
  })
    
  
  }
});

export const market=marketSlice.reducer
