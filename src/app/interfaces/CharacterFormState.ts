export interface CharacterFormState {
    characterName: string
    level: number
    class: string
    race: string
    background: string
    alignment: string
    bio: string
}

export interface CharacterFormSubmitState {
    submit: (values: CharacterFormState) => void
}