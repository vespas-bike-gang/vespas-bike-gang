import { configureStore } from '@reduxjs/toolkit'
import buttonHamburgerReducer from '@/app/design-system/02-molecules/button-hamburger/button-hamburger-slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      buttonHamburger: buttonHamburgerReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']