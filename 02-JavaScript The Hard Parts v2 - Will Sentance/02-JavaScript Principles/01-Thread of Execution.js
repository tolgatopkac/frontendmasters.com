/* 
When JavaScript code runs, it:

1) Goes through the code line-by-line and runs/ ’executes’ each line - known as the thread of execution

2) Saves ‘data’ like strings and
arrays so we can use that data
later - in its memory
We can even save code
(‘functions’)
*/

const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

/* MEMORY
num : 3
multiplyBy2 :  > f > 

output : ? 

*/

/* 
ouput = multiplyBy2(num)
*/
