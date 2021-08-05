const getResultOfTest = (result: number) => {
  if (result <= 4) return 'none';
  if (result <= 9) return 'mild';
  if (result <= 14) return 'moderate';
  if (result <= 19) return 'moderately severe';
  return 'severe';
};

export const analyzeResultOfPsytest = (mark: any) => {

};
