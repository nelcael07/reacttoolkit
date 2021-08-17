import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { AppThunk, AppDispatch } from './index';

const stock = createSlice({
  name:'stock',
  initialState:{
    counter:0
  },
  reducers:{
    // levando payload
    increment(state, action: PayloadAction<number>){
      state.counter += action.payload
    },
    decrement(state){
      state.counter-=1
    },
  }
});

export const {decrement, increment}  = stock.actions

export default stock.reducer


// para async
// fazer a chamada da api

// export function asyncIncrement():AppThunk {
//   return function (dispatch: AppDispatch) {
//     await fetch()
//   }
// }
