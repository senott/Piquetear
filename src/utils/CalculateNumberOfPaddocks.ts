const CalculateNumberOfPaddocks = (
  rest: number,
  occupation: number,
  batches: number,
): number => {
  return rest / occupation + batches;
};

export default CalculateNumberOfPaddocks;
