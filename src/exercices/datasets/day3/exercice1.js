export function getDatasetAndDomain(threshold = 5) {
  const dataset = [];
  const domain = [];

  for (let i = 0; i < threshold; i++) {
    domain.push("A".repeat(i+1));
    dataset.push(Math.random() * 250 + threshold);
  }

  return {
    domain,
    dataset,
  };
}
