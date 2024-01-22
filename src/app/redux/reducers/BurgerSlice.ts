import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BurgerState {
    burger: boolean
}

const initialState: BurgerState = {
    burger: true,
}

const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        setBurger(state: BurgerState, action: PayloadAction<boolean>) {
            state.burger = action.payload
        },
    },
})

export const { setBurger } = burgerSlice.actions
export default burgerSlice.reducer