import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import stockReducer from './Stock.store'
import { useDispatch } from 'react-redux';

  const store = configureStore({
    reducer: {
      stock: stockReducer
    }
  })

export type RootState = ReturnType<typeof store.getState>

// para usar typar no stock.store e conseguir realizar um função async
// export type AppDispatch = typeof store.dispatch
// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
// export const useAppDispatch = () => useDispatch<AppDispatch>()

// não faz parte, esse é a exportação do store mesmo
export default store