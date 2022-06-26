export function getDatasetAndDomain(factor = 1) {
  const dataset = [];
  const domain = [];

  for (let i = 0; i < 20; i++) {
    domain.push(i);
    dataset.push(Math.random() * 250 * factor + 20);
  }

  return {
    domain,
    dataset,
  };
}
