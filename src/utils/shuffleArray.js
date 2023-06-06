export function shuffleArray(array) {
  const newArray = [...array];
  const arrayLength = newArray.length;

  for (let i = 0; i < arrayLength; i++) {
    const randomPosition = Math.floor((arrayLength - i) * Math.random());
    const randomItem = newArray.splice(randomPosition, 1);

    newArray.push(...randomItem);
  }

  return newArray;
}
