"use strict";

var curNum = 0;

// self.onmessage = onMessage;
self.postMessage("Hello from the webworker");

self.onMessage=onMessage;

// **********************************


function onMessage(evt) {
	getNextFib();

}
// Bir worker dan veri alma
function getNextFib() {
	var curFib = fib(curNum);
	self.postMessage({ num: curNum, fib: curFib });
	curNum++;
	getNextFib();
}


/* function onMessage() {
	getNextFib();
}
 */
// function getNextFib() {
// 	var curFib = fib(curNum);
// 	self.postMessage({ num: curNum, fib: curFib });
// 	curNum++;
// 	getNextFib();
// }

function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n-1) + fib(n-2);
}
