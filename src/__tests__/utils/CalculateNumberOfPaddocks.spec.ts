import CalculateNumberOfPaddocks from '../../utils/CalculateNumberOfPaddocks';

describe('Calculate number of paddocks function', () => {
  it('should calculate number of paddocks correctly', () => {
    expect(CalculateNumberOfPaddocks(25, 1, 1)).toEqual(26);
    expect(CalculateNumberOfPaddocks(25, 2, 1)).toEqual(14);
  });
});
