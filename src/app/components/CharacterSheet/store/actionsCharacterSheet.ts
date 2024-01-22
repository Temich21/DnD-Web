import { Dispatch } from "react";
import { CharacterListFields } from "./defaultStoreCharacterSheet";
import { ActionTypeCharacterSheet } from "./reducerCharacterSheet";
import charcteristicControler from "../utils/characteristicControler"

export const createActions = (
  data: CharacterListFields,
  dispatch: Dispatch<ActionTypeCharacterSheet>
) => ({
  characterNameSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "characterNameChange", payload: event.target.value }),
  characterClassAndLevelSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterClassAndLevelChange",
      payload: event.target.value,
    }),
  characterBackgroundlSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterBackgroundChange",
      payload: event.target.value,
    }),
  characterPlayerNameSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterPlayerNameChange",
      payload: event.target.value,
    }),
  characterRaceSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "characterRaceChange", payload: event.target.value }),
  characterAlignmentSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterAlignmentChange",
      payload: event.target.value,
    }),
  characterExperiencePointsSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterExperiencePointsChange",
      payload: event.target.value,
    }),
  characterStrengthSet: (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "characterStrengthChange",
      payload: charcteristicControler(Number(event.target.value))
    });
  },
  characterDexteritySet: (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "characterDexterityChange",
      payload: charcteristicControler(Number(event.target.value))
    });
  },
  characterConstitutionSet: (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "characterConstitutionChange",
      payload: charcteristicControler(Number(event.target.value))
    });
  },
  characterWisdomSet: (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "characterWisdomChange",
      payload: charcteristicControler(Number(event.target.value))
    });
  },
  characterIntelligenceSet: (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "characterIntelligenceChange",
      payload: charcteristicControler(Number(event.target.value))
    });
  },
  characterCharismaSet: (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "characterCharismaChange",
      payload: charcteristicControler(Number(event.target.value))
    });
  },
  characterProficiencyBonusSet: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: "characterProficiencyBonusChange",
      payload: charcteristicControler(Number(event.target.value))
    });
  },
  characterStrengthSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterStrengthSaveChange",
      payload: event.target.value,
    }),
  StrengthSaveProfSet: () =>
    dispatch({
      type: "StrengthSaveProfChange",
      payload: !data.StrengthSaveProf,
    }),
  characterDexteritySaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterDexteritySaveChange",
      payload: event.target.value,
    }),
  DexteritySaveProfSet: () =>
    dispatch({
      type: "DexteritySaveProfChange",
      payload: !data.DexteritySaveProf,
    }),
  characterConstitutionSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterConstitutionSaveChange",
      payload: event.target.value,
    }),
  ConstitutionSaveProfSet: () =>
    dispatch({
      type: "ConstitutionSaveProfChange",
      payload: !data.ConstitutionSaveProf,
    }),
  characterWisdomSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterWisdomSaveChange",
      payload: event.target.value,
    }),
  WisdomSaveProfSet: () =>
    dispatch({
      type: "WisdomSaveProfChange",
      payload: !data.WisdomSaveProf
    }),
  characterIntelligenceSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterIntelligenceSaveChange",
      payload: event.target.value,
    }),
  IntelligenceSaveProfSet: () =>
    dispatch({
      type: "IntelligenceSaveProfChange",
      payload: !data.IntelligenceSaveProf,
    }),
  characterCharismaSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterCharismaSaveChange",
      payload: event.target.value,
    }),
  CharismaSaveProfSet: () =>
    dispatch({
      type: "CharismaSaveProfChange",
      payload: !data.CharismaSaveProf,
    }),
  characterAcrobaticsSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterAcrobaticsSaveChange",
      payload: event.target.value,
    }),
  AcrobaticsSaveProfSet: () =>
    dispatch({
      type: "AcrobaticsSaveProfChange",
      payload: !data.AcrobaticsSaveProf,
    }),
  characterAnimalHandlingSaveSet: (
    event: React.ChangeEvent<HTMLInputElement>
  ) =>
    dispatch({
      type: "characterAnimalHandlingSaveChange",
      payload: event.target.value,
    }),
  AnimalHandlingSaveProfSet: () =>
    dispatch({
      type: "AnimalHandlingSaveProfChange",
      payload: !data.AnimalHandlingSaveProf,
    }),
  characterArcanaSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterArcanaSaveChange",
      payload: event.target.value,
    }),
  ArcanaSaveProfSet: () =>
    dispatch({ type: "ArcanaSaveProfChange", payload: !data.ArcanaSaveProf }),
  characterAthleticsSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterAthleticsSaveChange",
      payload: event.target.value,
    }),
  AthleticsSaveProfSet: () =>
    dispatch({
      type: "AthleticsSaveProfChange",
      payload: !data.AthleticsSaveProf,
    }),
  characterDeceptionSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterDeceptionSaveChange",
      payload: event.target.value,
    }),
  DeceptionSaveProfSet: () =>
    dispatch({
      type: "DeceptionSaveProfChange",
      payload: !data.DeceptionSaveProf,
    }),
  characterHistorySaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterHistorySaveChange",
      payload: event.target.value,
    }),
  HistorySaveProfSet: () =>
    dispatch({
      type: "HistorySaveProfChange",
      payload: !data.HistorySaveProf,
    }),
  characterInsightSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterInsightSaveChange",
      payload: event.target.value,
    }),
  InsightSaveProfSet: () =>
    dispatch({
      type: "InsightSaveProfChange",
      payload: !data.InsightSaveProf,
    }),
  characterIntimidationSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterIntimidationSaveChange",
      payload: event.target.value,
    }),
  IntimidationSaveProfSet: () =>
    dispatch({
      type: "IntimidationSaveProfChange",
      payload: !data.IntimidationSaveProf,
    }),
  characterInvestigationSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterInvestigationSaveChange",
      payload: event.target.value,
    }),
  InvestigationSaveProfSet: () =>
    dispatch({
      type: "InvestigationSaveProfChange",
      payload: !data.InvestigationSaveProf,
    }),
  characterMedicineSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterMedicineSaveChange",
      payload: event.target.value,
    }),
  MedicineSaveProfSet: () =>
    dispatch({
      type: "MedicineSaveProfChange",
      payload: !data.MedicineSaveProf,
    }),
  characterNatureSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterNatureSaveChange",
      payload: event.target.value,
    }),
  NatureSaveProfSet: () =>
    dispatch({ type: "NatureSaveProfChange", payload: !data.NatureSaveProf }),
  characterPerceptionSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterPerceptionSaveChange",
      payload: event.target.value,
    }),
  PerceptionSaveProfSet: () =>
    dispatch({
      type: "PerceptionSaveProfChange",
      payload: !data.PerceptionSaveProf,
    }),
  characterPerformanceSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterPerformanceSaveChange",
      payload: event.target.value,
    }),
  PerformanceSaveProfSet: () =>
    dispatch({
      type: "PerformanceSaveProfChange",
      payload: !data.PerformanceSaveProf,
    }),
  characterPersuasionSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterPersuasionSaveChange",
      payload: event.target.value,
    }),
  PersuasionSaveProfSet: () =>
    dispatch({
      type: "PersuasionSaveProfChange",
      payload: !data.PersuasionSaveProf,
    }),
  characterReligionSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterReligionSaveChange",
      payload: event.target.value,
    }),
  ReligionSaveProfSet: () =>
    dispatch({
      type: "ReligionSaveProfChange",
      payload: !data.ReligionSaveProf,
    }),
  characterSleightofHandSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterSleightofHandSaveChange",
      payload: event.target.value,
    }),
  SleightofHandSaveProfSet: () =>
    dispatch({
      type: "SleightofHandSaveProfChange",
      payload: !data.SleightofHandSaveProf,
    }),
  characterStealthSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterStealthSaveChange",
      payload: event.target.value,
    }),
  StealthSaveProfSet: () =>
    dispatch({
      type: "StealthSaveProfChange",
      payload: !data.StealthSaveProf,
    }),
  characterSurvivalSaveSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterSurvivalSaveChange",
      payload: event.target.value,
    }),
  SurvivalSaveProfSet: () =>
    dispatch({
      type: "SurvivalSaveProfChange",
      payload: !data.SurvivalSaveProf,
    }),
  characterPassivePerceptionSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterPassivePerceptionfChange",
      payload: event.target.value,
    }),
  characterOtherprofsSet: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({
      type: "characterOtherprofsChange",
      payload: event.target.value,
    }),
  characterArmorClassSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterArmorClassChange",
      payload: event.target.value,
    }),
  characterInitiativeSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterInitiativeChange",
      payload: event.target.value,
    }),
  characterSpeedSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "characterSpeedChange", payload: event.target.value }),
  characterMaxHPSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "characterMaxHPChange", payload: event.target.value }),
  characterCurrentHPSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterCurrentHPChange",
      payload: event.target.value,
    }),
  characterTempHPSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "characterTempHPChange", payload: event.target.value }),
  characterTotalHDSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "characterTotalHDChange", payload: event.target.value }),
  characterRemainingHDSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterRemainingHDChange",
      payload: event.target.value,
    }),
  characterdeathSuccess1Set: () =>
    dispatch({
      type: "characterdeathSuccess1Change",
      payload: !data.characterdeathSuccess1,
    }),
  characterdeathSuccess2Set: () =>
    dispatch({
      type: "characterdeathSuccess2Change",
      payload: !data.characterdeathSuccess2,
    }),
  characterdeathSuccess3Set: () =>
    dispatch({
      type: "characterdeathSuccess3Change",
      payload: !data.characterdeathSuccess3,
    }),
  characterDeathFail1Set: () =>
    dispatch({
      type: "characterDeathFail1Change",
      payload: !data.characterDeathFail1,
    }),
  characterDeathFail2Set: () =>
    dispatch({
      type: "characterDeathFail2Change",
      payload: !data.characterDeathFail2,
    }),
  characterDeathFail3Set: () =>
    dispatch({
      type: "characterDeathFail3Change",
      payload: !data.characterDeathFail3,
    }),
  characterAtkName1Set: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterAtkName1Change",
      payload: event.target.value,
    }),
  characterAtkbonus1Set: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterAtkbonus1Change",
      payload: event.target.value,
    }),
  characterAtkDamage1Set: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterAtkDamage1Change",
      payload: event.target.value,
    }),
  characterAtkName2Set: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterAtkName2Change",
      payload: event.target.value,
    }),
  characterAtkbonus2Set: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterAtkbonus2Change",
      payload: event.target.value,
    }),
  characterAtkDamage2Set: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterAtkDamage2Change",
      payload: event.target.value,
    }),
  characterAtkName3Set: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterAtkName3Change",
      payload: event.target.value,
    }),
  characterAtkbonus3Set: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterAtkbonus3Change",
      payload: event.target.value,
    }),
  characterAtkDamage3Set: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "characterAtkDamage3Change",
      payload: event.target.value,
    }),
  characterCPSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "characterCPChange", payload: event.target.value }),
  characterSPSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "characterSPChange", payload: event.target.value }),
  characterEPSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "characterEPChange", payload: event.target.value }),
  characterGPSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "characterGPChange", payload: event.target.value }),
  characterPPSet: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "characterPPChange", payload: event.target.value }),
  attacksAndSpellCastingSet: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({
      type: "attacksAndSpellCastingChange",
      payload: event.target.value,
    }),
  characterEquipmentSet: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({
      type: "characterEquipmentChange",
      payload: event.target.value,
    }),
  characterPersonalitySet: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({
      type: "characterPersonalityChange",
      payload: event.target.value,
    }),
  characterIdealsSet: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({ type: "characterIdealsChange", payload: event.target.value }),
  characterBondsSet: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({ type: "characterBondsChange", payload: event.target.value }),
  characterFlawsSet: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({ type: "characterFlawsChange", payload: event.target.value }),
  characterFeaturesSet: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({
      type: "characterFeaturesChange",
      payload: event.target.value,
    }),
  characterBioSet: (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({
      type: "characterBioChange",
      payload: event.target.value,
    }),
});
