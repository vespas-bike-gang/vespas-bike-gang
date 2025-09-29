import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store/store'

export type ButtonHamburger = {
    show: boolean,
    icon: string
}

const initialState: ButtonHamburger = {
    show: false,
    icon: 'HamburgerOpen'
}

export const formSlice = createSlice({
    name: 'buttonHamburger',
    initialState,
    reducers: {
        setShow: (state) => { state.show = !state.show},
        setIcon: (state) => {
            if(state.show) state.icon = 'HamburgerClose'
            state.icon = 'HamburgerOpen'
        }
    }
})

export const {
    setShow,
    setIcon
} = formSlice.actions

export const selectShow = (state: RootState) => state.buttonHamburger.show
export const selectIcon = (state: RootState) => state.buttonHamburger.icon

export default formSlice.reducer