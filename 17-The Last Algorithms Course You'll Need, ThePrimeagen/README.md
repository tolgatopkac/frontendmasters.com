<h1 align="center"><a  href="https://frontendmasters.com/courses/algorithms/introduction/">The Last Algorithms Course You'll Need</a></h1>  <br>

**Start Date :** 15.04.2023

**End Date :**

## Introduction

```javascript
// is that a array  ?

const a = [];

// Arrays are the simplest Data Structure
```

Kitap önerileri

- <a  href="https://www.amazon.com/Introduction-Algorithms-fourth-Thomas-Cormen/dp/026204630X?keywords=introduction+to+algorithms&qid=1660584469&s=books&sprefix=introduction,stripbooks,93&sr=1-1&linkCode=sl1&tag=theprimeagen-20&linkId=83c55b2c018fbe94a1de79ebd447b66a&language=en_US&ref_=as_li_ss_tl">Introduction to Algorithms, fourth edition 4th Edition</a>

- <a  href="https://www.amazon.com/Common-Sense-Guide-Structures-Algorithms-Second/dp/1680507222?keywords=introduction+to+algorithms&qid=1660584469&s=books&sprefix=introduction,stripbooks,93&sr=1-16&linkCode=sl1&tag=theprimeagen-20&linkId=2000de29907b98b5ac7a98aa6b52c1d9&language=en_US&ref_=as_li_ss_tl">A Common-Sense Guide to Data Structures and Algorithms, Second Edition: Level Up Your Core Programming Skills 2nd Edition</a>

## Basics

### Big O Time Complexity

- Big O, girişe bağlı olarak algoritmanızı zaman veya bellek açısından sınıflandırır. K

- Kesin bir ölçüm olması amaçlanmamıştır. Bir algoritmanın 450 CPU birimini alacağı söylenemez.

- Bunun yerine giriş (input) büyüdükçe veya kullanılan şeyler büyüdükçe algoritmanın nasıl tepki vereceğini anlaman için genelleştirilmiş bir yoldur.

- Bu durumda **Big O N** karşına çıktığında algoritmanın girdisine bağlı olarak doğrusal olarak büyüdüğünü bilmelisin ve bunu ifade etmelisin.

Neden kullanılır ?

- Çoğu zaman bize belirli bir veri yapısı kullanıp kullanmamamız konusunda karar vermemize yardımcı olur. Veri yapıları giderek daha performanslı hale getirilirken bu kısıtlamaları yapmaya devam edilir.

- Yanlış kullanılırsa, performan büyük ölçüde azalır,

- Başka bir deyişle Big O, girişi büyüdükçe hesaplamanızın veya bellek kullanımının ne kadar büyüdüğünü belirler.
- **❗ Büyüme(Growth) girdiye göre belirlenir**

Örneğin O(N)

```javascript
// Programımız girdiye göre nasıl büyür ?
// aşağıdaki fonksiyonu Big O açısından yorumlayamıyorsan...
// Döngüye bak !

function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }
  return sum;
}
```

Örnek - 2 O(2N)

```javascript
function sum_char_codes(n: string): number {
  let sum = 0;

  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }

  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }
  return sum;
}
```

Örnek - 3 O(N)

```javascript
function sum_char_codes(n: string): number {
  let sum = 0;

  for (let i = 0; i < n.length; ++i) {
    const charCode = n.charCodeAt(i);
    // Capital E
    if (charCode === 69) {
      return sum;
    }
    sum += charCode;
  }
  return sum;
}
```

**‼ Important concepts ‼**

- growth is with respect to the input

- Constants are dropped

- Worst case is usually the way we measure

![https://theprimeagen.github.io/fem-algos/images/big-o-face.png](https://theprimeagen.github.io/fem-algos/images/big-o-face.png)

#### O(N^2)

```javascript
function sum_char_codes(n: string): number {
  let sum = 0;

  for (let i = 0; i < n.length; ++i) {
    for (let j = 0; j < n.length; ++j) {
      sum += charCode;
    }
  }
  return sum;
}
```

#### O(N^3)

```javascript
function sum_char_codes(n: string): number {
  let sum = 0;

  for (let i = 0; i < n.length; ++i) {
    for (let j = 0; j < n.length; ++j) {
      for (let k = 0; k < n.length; ++k) {
        sum += charCode;
      }
    }
  }
  return sum;
}
```

#### O(n log n)

- Quicksort

#### O(log n)

- Binary search trees

#### O(sqrt(n))

### Arrays Data Structure

**Array** : Bir array 'in en temel fikri, sadece ardışık bir bellek alanı olduğudur. Ardışık, belirli bir bayt içeren bölünmeyen bellek anlamına gelir.

```
// [  ] => memory space
```

```c
a = int[3]
a[0]
```

```javascript
const a = new ArrayBuffer(6);

a;
// ArrayBuffer {[Uint8Contents]: <00 00 00 00 00 00 00>, byteLength: 6 }

const a8 = new Uint8Array(a);
a8[0] = 45;

a;
// ArrayBuffer { [Uint8Contents]: <2d 00 00 00 00 00>, byteLength: 6}
```

## Search

**Linear Search Kata**

```typescript
function linear_search(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle) {
      return true;
    }
  }
  return false;
}
```

**Binary Search Algorithm**

Veri kümesinin (array or object) sıralı olup olmadığını sormak her zaman önemlidir. Eğer veri kümesi sıralıysa, o veri ile yapabileceğin bazı avantajların var.

**Pseudo Code Binary Search**

do {

- search(arr,low,high)
- [low - middle - high]
- m = [low +(high - low ) / 2]
- v = arr[m]
- if v = n return true;
- else if v > m {low = m + 1}
- else high = mid
  }while (low < high)
  return false

```typescript
function bs_list(haystack: number[], needle: number): boolean {
  let low = 0;
  let high = haystack.length;
  do {
    const mid = Math.floor((low + high) / 2);
    const v = haystack[mid];
    if (v === needle) {
      return true;
    } else if (v > needle) {
      high = mid;
    } else {
      low = mid + 1;
    }
  } while (low < high);
  {
    return false;
  }
}
```

**Two Crystal Balls Problem**
Given two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way.

```typescript
export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmount;
  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }
  i -= jmpAmount;

  for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}
```

## Sort

### BubbleSort

Implementing Buuble Sort

[0,.......,N]

```
for i...n

  for j...n-1-1

    if(arr[i] > arr[j])

      swap(i,j)
```

```typescript
export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; i < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}
```

### Linked List Data

```typescript
type Node<T> = {
  value: T;
  next?: Node<T>;
  prev?: T;
};
```

### Linked List Complexity

LinkedLists o kadar temeldir ki, her biri bir graph. Her biri teknik olarak bir tree'dir. LinkedLists en temel birimdir.

```typescript
interface LinkedList<T> {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}
```

### Queue

Queue is simply a FIFO(first in first out) structure

## Arrays

### Arrays vs Linked List

- Usability
- Time
- Space

Arraylist bad with enqueue and dequeue but good with push and pop.

Which one is better ?
which one would you rather use, an Array List or link list ?
"Whenever someone asks that in an interview, say it depends"

### ArrayBuffer

## Recursion

So the simplest way is a function that calls itself, and this keeps happening until it reaches something known as a base case.

The simplest example :

```typescript
function foo(n: number): number {
  // base case
  if (n === 1) {
    return 1;
  }

  //  we shall recurse!
  return n + foo(n - 1);
}
```

foo(n)
if n = 1
return 1;
else return n + foo(n-1)

- Recursion fonksiyonlar hakkında anlaşılması gereken önemli bir şey var ve gerçekten fonksiyon çağırmakla ilgili üç değer var ki bu görşelleştirmeye yardımcı olabilir.
- returnAddress
- returnValue
- Arguments
