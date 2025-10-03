function shuffleArray(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i (inclusive)
    const j = Math.floor(Math.random() * (i + 1))
    // Swap elements at indices i and j
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export {shuffleArray}