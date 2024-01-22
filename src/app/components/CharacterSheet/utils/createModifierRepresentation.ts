import calculateModifier from "./calculateModifier";
import checkIfModifierIsPositive from "./checkIfModifierIsPositive";

const createModifierRepresentation = (characteristicValue: string) => {
  if (checkIfModifierIsPositive(characteristicValue))
    return `+${calculateModifier(characteristicValue)}`;

  return calculateModifier(characteristicValue);
};

export default createModifierRepresentation;
