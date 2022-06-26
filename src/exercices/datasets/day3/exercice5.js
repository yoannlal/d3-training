export function getDataset(factor = 1) {
  const dataset = [];

  for (let i = 0; i < 30; i++) {
    dataset.push([Math.random() * 400 * factor + 20, Math.random() * 400 * factor + 20]);
  }

  return dataset;
}
