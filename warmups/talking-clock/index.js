let talkingClock = (time) => {
  let hoursMap = new Map();
  hoursMap.set(1, "one");
  hoursMap.set(2, "two");
  hoursMap.set(3, "three");
  hoursMap.set(4, "four");
  hoursMap.set(5, "five");
  hoursMap.set(6, "six");
  hoursMap.set(7, "seven");
  hoursMap.set(8, "eight");
  hoursMap.set(9, "nine");
  hoursMap.set(10, "ten");
  hoursMap.set(11, "eleven");
  hoursMap.set(0, "twelve");
  hoursMap.set(13, "one");
  hoursMap.set(14, "two");
  hoursMap.set(15, "three");
  hoursMap.set(16, "four");
  hoursMap.set(17, "five");
  hoursMap.set(18, "six");
  hoursMap.set(19, "seven");
  hoursMap.set(20, "eight");
  hoursMap.set(21, "nine");
  hoursMap.set(22, "ten");
  hoursMap.set(23, "eleven");
  hoursMap.set(24, "twelve");

  let minutesMap = new Map();
  minutesMap.set(0, "o' clock");
  minutesMap.set(1, "one");
  minutesMap.set(2, "two");
  minutesMap.set(3, "three");
  minutesMap.set(4, "four");
  minutesMap.set(5, "five");
  minutesMap.set(6, "six");
  minutesMap.set(7, "seven");
  minutesMap.set(8, "eight");
  minutesMap.set(9, "nine");
  minutesMap.set(10, "ten");
  minutesMap.set(11, "eleven");
  minutesMap.set(12, "twelve");
  minutesMap.set(13, "thirteen");
  minutesMap.set(14, "fourteen");
  minutesMap.set(15, "fifteen");
  minutesMap.set(16, "sixteen");
  minutesMap.set(17, "seventeen");
  minutesMap.set(18, "eighteen");
  minutesMap.set(19, "nineteen");
  minutesMap.set(20, "twenty");
  minutesMap.set(21, "twent-yone");
  minutesMap.set(22, "twenty-two");
  minutesMap.set(23, "twenty-three");
  minutesMap.set(24, "twenty-four");
  minutesMap.set(25, "twenty-five");
  minutesMap.set(26, "twenty-six");
  minutesMap.set(27, "twenty-seven");
  minutesMap.set(28, "twenty-eight");
  minutesMap.set(29, "twenty-nine");
  minutesMap.set(30, "thirty");
  minutesMap.set(31, "thirty-one");
  minutesMap.set(32, "thirty-two");
  minutesMap.set(33, "thirty-three");
  minutesMap.set(34, "thirty-four");
  minutesMap.set(35, "thirty-five");
  minutesMap.set(36, "thirty-six");
  minutesMap.set(37, "thirty-seven");
  minutesMap.set(38, "thirty-eight");
  minutesMap.set(39, "thirty-nine");
  minutesMap.set(40, "forty");
  minutesMap.set(41, "forty-one");
  minutesMap.set(42, "forty-two");
  minutesMap.set(43, "forty-three");
  minutesMap.set(44, "forty-four");
  minutesMap.set(45, "forty-five");
  minutesMap.set(46, "forty-six");
  minutesMap.set(47, "forty-seven");
  minutesMap.set(48, "forty-eight");
  minutesMap.set(49, "forty-nine");
  minutesMap.set(50, "fifty");
  minutesMap.set(51, "fifty-one");
  minutesMap.set(52, "fifty-two");
  minutesMap.set(53, "fifty-three");
  minutesMap.set(54, "fifty-four");
  minutesMap.set(55, "fifty-five");
  minutesMap.set(56, "fifty-six");
  minutesMap.set(57, "fifty-seven");
  minutesMap.set(58, "fifty-eight");
  minutesMap.set(59, "fifty-nine");

  let splitTime = time.split(":");
  if (splitTime.length != 2) {
    throw "invalid input";
  }

  let hours = parseInt(splitTime[0]);
  let minutes = parseInt(splitTime[1]);

  if (!(hours < 24) || !(minutes < 60)) {
    throw "invalid input";
  }

  let str = "it is ";

  str += hoursMap.get(hours);
  str += " " + minutesMap.get(minutes);

  if (hours < 12) {
    str += " am";
  } else {
    str += " pm";
  }

  return str;
}

module.exports = talkingClock;