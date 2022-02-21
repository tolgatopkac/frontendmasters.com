// Special Values
// Negative Zero

var trendRate = -0;
trendRate === -0; //true

trendRate.toString(); // "0" OOPS!
trendRate === 0; // true OOPS!
trendRate < 0; // false
trendRate > 0; // false

Object.is(trendRate, -0); //true
Object.is(trendRate, 0); //false

Math.sign(-3); // - 1
Math.sign(3); // 1
Math.sign(-0); // -0   ???
Math.sign(0); // 0   ???

// "fix" Math.sign(..)

function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}

sign(-3); // -1
sign(3); // 1
sign(-0); // -1
sign(0); // 1

function formatTrend(trendRate) {
  var direction = trendRate < 0 || Object.is(trendRate, -0) ? "🔻" : "🔺";
  return `${direction} ${Math.abs(trendRate)}`;
}

formatTrend(-3); // 3
formatTrend(3); // 3
formatTrend(0); // 0
formatTrend(0); //0
