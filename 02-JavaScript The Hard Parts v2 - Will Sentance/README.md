# JavaScript: The Hard Parts, v2

## Introduction

- JavaScript Principles ( JavaScript'de kod nasıl çalışır ? )
- Functional Programming ( High Order Function, Call back )
- Closure
- Classes Prototip (OOP)

Kursun amacı : "kodla sorun çözmek için gelecekte otonom olabilecek şekilde problem çözme becerilerimizi geliştirme"

## JavaScript Principles

### Thread Of Execution

JavaScript'te kod satır satır (line by line) okunur. Buna **"Thread of Execution"** adı verilir.
Verilerin depolandığı yer **Memory**

```javascript
const num = 3;

function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
```

### Functions

**Execution Content** :

Her fonksiyonun kendi yürütme bağlamı vardır, bu bağlam fonksiyonun çalıştığı ortamı ifade eder. Örneğin bir fonksiyonun içinde tanımlanan değişkenler ve fonksiyonlar kendi yürütme bağlamı içinde saklanır. Bu bağlam, fonksiyonun ne zaman çalıştırıldığını ve hangi verilere erişebileceğini belirler.

Yürütme bağlamı iki temel bileşeni içerir. Birincisi değişkenlerin saklandığı bellek alanıdır. Bu bellek alan değişkenlerin değerlerini ve fonksiyonların referanslarını tutar. İkincisi, yürütme sırasını kontrol eden bir yapı olan yığın (call stack) bulunur. Her fonksiyon çağrıldığında, bir yürütme bağlamı yığına eklenir ve fonksiyon tamamlandığında yığından çıkarılır.

Yürütme **Execution Content** sayesinde JavaScript kodun nasıl çalıştığını yönetir, değişkenlerin kapsamını belirler ve fonksiyon çağrılarını düzenler.

### Call Stack

## Functions & Callbacks

### Generalized Functions

### Repeating Functionality

```javascript
function copyArrayAndMultiplyBy2(array) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);
```

### Higher Order Functions

```javascript
function copyArrayAndDivideBy2(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
}

const myArray = [1, 2, 3];
const result = copyArrayAndDivideBy2(myArray);
```

---

```javascript
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
```
