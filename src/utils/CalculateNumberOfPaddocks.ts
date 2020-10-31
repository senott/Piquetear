const CalculateNumberOfPaddocks = (
  rest: number,
  occupation: number,
  batches: number,
): number => {
  return Math.round(rest / occupation + batches);
};

export default CalculateNumberOfPaddocks;
