// Block scoping : encapsulation

var teacher = "Kyle";

{
  let teacher = "Suzy";
  console.log(teacher); // Suzy
}

console.log(teacher); //Kyle

function diff(x, y) {
  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  return y - x;
}
