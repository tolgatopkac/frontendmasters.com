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
// [2, 4, 6]

/* 
Global memory'de copyArrayAndManipulate isimli fonksiyon tanımlanır.
Global Memory'de multiplyBy2 isimli fonksiyon tanımlanır.
Global Memory'de result değişkenine copyArrayAndManipulate fonksiyon çağrılır
*/

/* 
result değişkenine copyArrayAndManipulate fonksiyonu çağrıldıktan sonra
result = copyArrayAndManipulate([1,2,3],multiplyBy2)

*/

// Görselleştirilmiş şekilde
//https://drive.google.com/file/d/1c8pIILRfyFAXU5Iy2tdC7qrLoYG1V89a/view?usp=sharing
