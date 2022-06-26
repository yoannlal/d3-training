export const dataset = [5, 10, 15, 20, 25];

export function getRandomDataset(threshold = 30) {
  const dataset = [];

  for (let i = 0; i < threshold; i++) {
    dataset.push(Math.random() * 25 + 5);
  }

  return dataset;
}
