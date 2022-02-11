function copyArrayAndDivideBy2(array) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndDivideBy2(myArray);

// Yukardaki fonksiyonu adım adım açıklarsak ;
/* 
Global Memory'de copyArrayAndDivideBy2 isimli fonksiyon tanımlanıyor.
const myArray = [1, 2, 3] sabit olarak myArray dizisi tanımlanıyor.
sabit result değişkenine copyArrayAndDivideBy2() fonksiyonu çağrılıyor ve argument olarak myArray dizini alıyor.


Local Memory'de parametre dizisi [1,2,3] geçen değerlerle tanımlarız.
Yine Local Memory'de const output şeklinde boş bir array tanımlanır.

for döngüsüne geçilir.
// output : [0.5, 1, 1.5]

Son olarak global memory'de atanan değeri döndürür.

result : [0.5,1,1.5]

Son olarak call Stack sırasına giren işlev görevini tamamladığı için stack'den çıkar.
*/

// Görselleştirmiş şekilde : https://drive.google.com/file/d/1izR-YQP4Nm5_CkLfIfXJTWkXszDDflvL/view?usp=sharing

//----------------------------------------------------------------
// High Order Functions
// ---------------------------------------------------------------

// diziyi 2 ile çarp
function copyArrayAndMultiplyBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}
const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);

// diziyi 2 böl
function copyArrayAndDivideBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}
const myArray = [1, 2, 3];
const result = copyArrayAndDivideBy2(myArray);

// diziye 3 ekle
function copyArrayAndAdd3(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] + 3);
  }
  return output;
}
const myArray = [1, 2, 3];
const result = copyArrayAndAdd3(myArray);

// yukarıdaki şekilde kurulan fonksiyonlarda sürekli olarak kendini tekrar edersin.
// High Order Functions şekliyle yazıldıklarında

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

function copyArrayAndDivideBy2(input) {
  return input / 2;
}

function copyArrayAndAdd3(input) {
  return input + 3;
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
// [2, 4, 6]
const result = copyArrayAndManipulate([1, 2, 3], copyArrayAndDivideBy2);
// [0.5, 1, 1.5]
const result = copyArrayAndManipulate([1, 2, 3], copyArrayAndAdd3);
// [4, 5, 6]

// bu şekilde hem kendini tekrar etmezsin hem düzenli şekilde kod yazmış olursun.
