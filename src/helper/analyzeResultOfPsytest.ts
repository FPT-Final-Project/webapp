const getResultOfTest = (result: number) => {
  if (result <= 4) return 'none';
  if (result <= 9) return 'mild';
  if (result <= 14) return 'moderate';
  if (result <= 19) return 'moderately severe';
  return 'severe';
};

export const analyzeResultOfPsytest = (mark: any) => {
  let analyzeResult = '';
  switch (true) {
    case (mark <= 4):
      analyzeResult = 'Thanks for taking time to complete the questions. While you might be feeling down right now, you’re not showing signs of depression. Those low feelings should go away as the problem passes but you can help things along by trying some of the ideas below:';
      break;
    case (mark <= 9):
      analyzeResult = 'Your score shows you have some signs that may indicate depression. If you’re dealing with some hard things that are making you feel down right now, that’s pretty normal.  Things should look up as you deal with them, but you should keep an eye on it and definitely check out some of the helpful information on this website';
      break;
    case (mark <= 14):
      analyzeResult = 'Thanks for taking time to complete the questions. It sounds like you’re finding life a bit tough right now and it looks like you’re experiencing some symptoms of mild depression which is really common (it affects one in five New Zealanders). The good news is this will almost certainly pass and there are many things you can do to turn it around. The sooner you take some action, the sooner you’ll be on the road to recovery.';
      break;
    case (mark <= 19):
      analyzeResult = 'Your score falls into the middle (or moderate) range and depression could be what’s stopped you working or studying, meeting friends, or doing the things that make you happy. This isn’t a diagnosis but it looks like it’s time to get help, and get your life back (as hard as that might sound right now). Lots of people who experience depression have got through it by talking with someone who’s trained to help';
      break;
    case (mark <= 27):
      analyzeResult = 'If you’re having thoughts most days about hurting or killing yourself please reach out straight away and talk to someone who’s trained to help. Even if you feel like no-one in the world gets you right now, there are people who can support you. These thoughts are common in depression but if you find they are getting more frequent (most days) or you feel more like acting on them - call us straight away';
      break;
    default:
      return true;
  }
  return analyzeResult;
};
