export const analyzeResultOfPsytest = (typeOfQuiz: string, mark: any) => {
  let analyzeResult = '';
  if (typeOfQuiz.toLocaleLowerCase() === 'depress') {
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
  } else {
    switch (true) {
      case (mark <= 4):
        analyzeResult = 'Your score falls into the low range. Some anxiety can be good – it can help us react to potential threats, perhaps by quickening our reflexes or focusing our attention, and it usually passes once the stressful situation has passed. Even though you might be feeling awful it looks like you’re having a normal reaction to a tough situation. You can do some things to help yourself feel a bit better.';
        break;
      case (mark <= 9):
        analyzeResult = 'Your score shows you have some mild signs of anxiety. Maybe you’re in the middle of a stressful time, and your mind is responding to this. Chances are your anxiety will improve as time goes on, but it might be worth keeping an eye on how the anxiety’s impacting on your life.';
        break;
      case (mark <= 14):
        analyzeResult = 'Your score suggests that anxiety has started to get in the way of how you live your daily life. Don’t be alarmed, this is very common and there are things you can do to improve your situation. There are different levels of anxiety and yours can change from day to day. But it’s important to seek help early. The sooner you talk to someone, the sooner you’ll be on the road to recovery.';
        break;
      case (mark <= 21):
        analyzeResult = 'Your score falls into the high range - anxiety has probably gotten in the way of you going to work, meeting friends, or doing the stuff that matters to you. This isn’t a diagnosis but it looks like it’s time to get help.';
        break;
      default:
        return true;
    }
  }
  return analyzeResult;
};
