//functional progamming encoperating chaining

//the replace method for string returns a template string
// const template = "hh:mm:ss tt";
// const clockTime = template
//   .replace("hh", "03")       
//   .replace("mm", "33")
//   .replace("ss", "33")
//   .replace("tt", "PM");

// console.log(clockTime);


//imperative functional programming of a clock:
// Log Clock Time every Second
// 

const compose = (...fns) => arg =>
  fns.reduce((composed, f) => f(composed), arg);

//declarative functional programming of a clock using compose

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

//serializeClockTime - Takes a date object and returns an object for clock time that contains hours, minutes, and seconds.
const serializeClockTime = date => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds()
});

//civilianHours - Takes the clock time object and returns an object where hours are converted to civilian time. For example: 1300 becomes 1:00.
const civilianHours = clockTime => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
});

//appendAMPM - Takes the clock time object and appends time of day (AM or PM) to that object.
const appendAMPM = clockTime => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? "PM" : "AM"
});

//display - Takes a target function and returns a function that will send a time to the target. In this example, the target will be console.log
const display = target => time => target(time);

//formatClockTakes a template string and uses it to return clock time formatted based on the criteria from the string. In this example, the template is “hh:mm:ss tt”. From there, formatClock will replace the placeholders with hours, minutes, seconds, and time of day.

const formatClock = format => time =>
  format
    .replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);

//prependZero - Takes an object’s key as an argument and prepends a zero to the value stored under that object’s key. It takes in a key to a specific field and prepends values with a zero if the value is less than 10.
const prependZero = key => clockTime => ({
  ...clockTime,
  key: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key]
});

//using compose to put the clock together
const convertToCivilianTime = clockTime =>
  compose(
    appendAMPM,
    civilianHours
  )(clockTime);

const doubleDigits = civilianTime =>
  compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
  )(civilianTime);

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      serializeClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    ),
    oneSecond()
  );

startTicking();