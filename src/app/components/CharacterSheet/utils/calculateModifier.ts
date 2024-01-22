const calculateModifier = (characteristicValue: string) => {
  if (Number.isNaN(characteristicValue))
    throw new Error("Значение характеристики не является числом");

  const parsedValue = Number(characteristicValue);
  return Math.floor((parsedValue - 10) / 2).toString();
};

export default calculateModifier;
