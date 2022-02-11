// in JavaScript, functions are what's called first class objects.
// JavaScript'te işlevler birinci sınıf nesneler olarak adlandırılır. Yani nesnelerin tüm özelliklerine sahipler.
/* 
Assigned to variables and properties of other objects
Passed as arguments into functions
Returned as values from functions
*/

function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

// üstteki fonksiyonda, copyArrayAndManipulate isimli fonksiyona high order function adı verilir.
// multiplyBy2 isimli fonksiyona da callback fonksiyonu adı verilir.

// JavaScript'te, bir işlevi alan veya otomatik olarak dışarı döndüren herhangi bir işlev, daha yüksek dereceli bir işlevdir.

// High Order Functions ve callbacks kodumuzu daha temiz tutar.

/* 
Callbacks and Higher Order Functions simplify our code and keep it DRY
Declarative readable code: Map, filter, reduce - the most readable way to write code to work with data

Asynchronous JavaScript: Callbacks are a core aspect of async JavaScript, and are
under-the-hood of promises, async/await
 */
