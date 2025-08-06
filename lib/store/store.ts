import { configureStore } from '@reduxjs/toolkit'
import buttonHamburgerReducer from '@/app/design-system/02-molecules/button-hamburger/button-hamburger-slice'
import dataReducer from '@/lib/store/populate-store-slice'

let store: AppStore | null = null

export const makeStore = () => {
  return configureStore({
    reducer: {
      buttonHamburger: buttonHamburgerReducer,
      data: dataReducer,
    },
  })
}

export const getStore = () => {
  if (typeof window === 'undefined') {
    return makeStore()
  }

  if (!(window as any).__REDUX_STORE__) {
    (window as any).__REDUX_STORE__ = makeStore()
  }

  return (window as any).__REDUX_STORE__
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
