import { CharacterFormState } from '@app/app/interfaces/CharacterFormState'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CharacterFormState = {
    characterName: '',
    level: 1,
    class: '',
    race: '',
    background: '',
    alignment: '',
    bio: '',
}

const characterFormSlice = createSlice({
    name: 'characterForm',
    initialState,
    reducers: {
        setCharacterForm(state: CharacterFormState, action: PayloadAction<CharacterFormState>) {
            state = { ...action.payload }
        }
    },
})

export const { setCharacterForm } = characterFormSlice.actions
export default characterFormSlice.reducer