import createModifierRepresentation from "../utils/createModifierRepresentation";
import updateCorrectFiledInStore from "../utils/updateCorrectFiledInStore";
import fieldsDefaults, { CharacterListFields } from "./defaultStoreCharacterSheet";

export enum PossibleAction {
  CharacterClear = "characterClear",
  CharacterFetch = "CharacterFetch",
  CharacterStrengthChange = "characterStrengthChange",
  characterDexterityChange = "characterDexterityChange",
  characterConstitutionChange = "characterConstitutionChange",
  characterWisdomChange = "characterWisdomChange",
  characterIntelligenceChange = "characterIntelligenceChange",
  characterCharismaChange = "characterCharismaChange",
}

export type ActionTypeCharacterSheet = {
  type: PossibleAction | string;
  payload: any;
};

const reducerCharacterSheet = (
  state: CharacterListFields,
  action: ActionTypeCharacterSheet
): CharacterListFields => {
  switch (action.type) {
    case PossibleAction.CharacterClear:
      return {
        ...fieldsDefaults,
      };
    case PossibleAction.CharacterFetch:
      return {
        ...action.payload,
      };
    case PossibleAction.CharacterStrengthChange:
      return {
        ...state,
        characterStrength: action.payload,
        characterStrengthmod: createModifierRepresentation(action.payload),
      };
    case PossibleAction.characterDexterityChange:
      return {
        ...state,
        characterDexterity: action.payload,
        characterDexteritymod: createModifierRepresentation(action.payload),
      };
    case PossibleAction.characterConstitutionChange:
      return {
        ...state,
        characterConstitution: action.payload,
        characterConstitutionmod: createModifierRepresentation(action.payload),
      };
    case PossibleAction.characterWisdomChange:
      return {
        ...state,
        characterWisdom: action.payload,
        characterWisdommod: createModifierRepresentation(action.payload),
      };
    case PossibleAction.characterIntelligenceChange:
      return {
        ...state,
        characterIntelligence: action.payload,
        characterIntelligencemod: createModifierRepresentation(action.payload),
      };
    case PossibleAction.characterCharismaChange:
      return {
        ...state,
        characterCharisma: action.payload,
        characterCharismamod: createModifierRepresentation(action.payload),
      };
    default:
      return updateCorrectFiledInStore(state, action);
  }
};

export default reducerCharacterSheet;
