import { CharacterListFields } from "../store/defaultStoreCharacterSheet"
import { ActionTypeCharacterSheet } from "../store/reducerCharacterSheet"

const updateCorrectFiledInStore = (
  state: CharacterListFields,
  { type, payload }: ActionTypeCharacterSheet
) => ({
  ...state,
  [type.replace("Change", "")]: payload,
});

export default updateCorrectFiledInStore;
