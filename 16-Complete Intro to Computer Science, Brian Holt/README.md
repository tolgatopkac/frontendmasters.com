<h1 align="center"><a  href="https://frontendmasters.com/courses/computer-science-v2/">Complete Intro to Computer Science: Algorithms and Data Structures</a></h1>  <br>

<p align="center">

As taught by Brian Holt for <a  href="https://www.frontendmasters.com">Frontend Masters</a>

</p>

Learn computer science with Brian Holt!

`npm install`

`npm run test`

**Start Date :** 14.03.2023

**End Date :**

### Course Content

- ✔ Introduction

- ✔ Algorithm Analysis

- ❌ Iterative Sorts

- ❌ Recursive Sorts

- ❌ Non-Comparison Sorts

- ❌ Binary Search

- ❌ Lists

- ❌ Trees

- ❌ Applying Tree Algorithms

- ❌ Other Data Structures

- ❌ Wrapping Up

## ✔ Introduction

## ✔ Algorithm Analysis

**Big O Time Complexity**

- Big O, bir algoritmanın ne kadar verimli olduğu hakkında konuşmanın bir yoludur.
- Big O, bir algoritmayı geniş bir perspektifte incelemek ve ne kadar verimli olduğuna bakmaktır.
  ❗ Sadece for döngülere (loop) bak, eğer bir döngü var ise bu n olacak, eğer bir döngü yer almazsa sabit adlandırılır. O(1)... Girdi ne kadar uzun olursa olsun daha uzun sürmeyecek anlamına gelir. For 'un içinde ne olduğunun veya işlemin ne kadar uzun olduğunun önemi yok önemli olan o for'un olması ve girdinin uzunluğu

```javascript
function crossAdd(input) {
  let answer = [];

  for (let i = 0; i < input.length; i++) {
    let goingUp = input[i];
    let goingDown = input[input.length - 1 - i];
    answer.push(goingUp + goingDown);
  }
  return answer;
}
```

Yukarıda yer alan fonksiyonda Döngü n kez çalışıyor. Döngü toplam n kez çalıştığından O(n) oluyor.

```javascript
function find(needle, haystack) {
  for (let i = 0; haystack.length; i++) {
    if (haystack[i] === needle) return tru;
  }
}
```

O(n) - (linear time) samanda aradığım iğne en son bakacağım yerde de olabilir.

Best Case : İğnenin samanlıkta bakılan ilk yerde olması
Bad Case : İğnenin samanlıkta bakılacak son yerde olması
Av. Case : Orta kısım bir yer

```javascript
function makeTuples(input) {
  let answer = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]]);
    }
  }
  return answer;
}
```

İç döngü ve dış döngü mevcut, iç içe geçmiş döngüleri görürsen n^2 olduğunu varsayabilirsin.
**O(n^2)** (quadratic time) - karesel zaman

```javascript
function getMiddleOfArray(array) {
  return array[Math.floor(array.length / 2)];
}
```

O(1) - (Constant Time) Sabit zaman

Temel olarak bir şeyin sabit O(1) zamanlı olup olmadığını anlamak için sorman gerken soru, bir array daha uzun olduğunda bu daha fazla zaman alıyor mu ?

**Why Use Big O**

Genel olarak bakman gereken for döngüleri ve şunu da düşünmelisin ki bu dizilime daha fazla öğe eklediğimde ne kadar uzun sürer ?

**Big O gerçek hayattaki kullanımı**

Bir web sitesi için yorum sistemi yazıyorsun ve bu yorum sistemin sıralama filtreleme özelliğine sahip. Bir yorum sistemi için uygun Big O nedir ?

-"Bir bilgisayar bilimcisine bir soru sorduğunuzda, cevabı genellikle "duruma göre değişir, daha fazla bilgiye ihtiyacım var" şeklindedir. "Duruma göre değişir" demek insanları rahatsız edebilir ama aslında bu sorunun doğru cevabıdır."

- Bu durumda sorunun her zaman " ne yapmamı istiyorsunuz ?" olmalıdır.

Not ❗ : Mülakatlarda mümkün olduğunca görüştüğün kişiden mümkün olduğunca bilgi al. Eğer sadece senden istenen yorumları sıralamak ise... Hemen bir sıralama algoritması yazma. Bu yanlış cevap olur.

- Ne yapıyorum ?
- Kim kullanacak ?
- Hangi kısıtlamalarım var ?
- Hangi cihazlarda çalışıyorum ?
- 5G mi kullanıyorum ?
- 2G mi kullanıyorum ?

Bu soruları düşünmeli ve gerçek gereksinimlerin tam resmini çizmelisin.

**Spatial Complexity or Space Complexity**

Temel fikir daha fazla girdi verirsem, bu ne kadar daha fazla CPU döngüsü gerektirir, ne kadar uzun sürer.

Space Complexity : Ne kadar RAM alacağınız veya hard disk alanı ne kadar gerektireceğiyle ilgilidir.

**Big O Trade-Offs**

Bir problemin çözümünü birden fazla farklı şekilde yapabileceğini bilmelisin. Problemin kısıtlamalarına bağlı olarak hangisinin daha iyi ve daha kötü olduğuna karar vermelisin. Özellikle bir mülakata girdiğinde ve görüştüğün kişiyle trade-off'ları tartışabilmelisin.

Mesela

- "Şunu söyle yapabiliriz fakat zamandan ödün veriyoruz" veya
- "Söyle yapabiliriz ve sunucularımızda daha fazla maliyet olacak"

gibi... müşteri deneyimi ile para vb. durumları değerlendirip tartışmalısın.

- **her problemi farklı bir açıdan yeniden değerlenmen gerektiğini bilmelisin**

- Kodun okunabilirliği ve bakımı, kodun en önemli unsurlarıdır. Kod iletişimdir ve bir insanın okuyabilmesi, bir bilgisayarın okuyabilmesinden daha önemlidir.
  Önemli olan tek şey bilgisayar zamanı olsaydı, sadece assembly yazardık. Web sunucuları C ile de yazılabilir fakat JavaScript okuması, yazması ve bakım yapması daha kolay.

- Neden TypeScript seviliyor ? Bakım daha kolay.

**Kod, gelecekteki kendinize ve kodunuzu bakacak gelecekteki geliştiricilere iletişimdir.**

- Dilin içindeki özellikleri (built-in) kullanmalısın.

## Iterative Sorts

### Bubble Sort

Bubble sort, insan zihin modeline oldukça uyduğu için tipik olarak yapılacak ilk sıralamadır. Algoritma oldukça basittir: yan yana olan iki öğeyi karşılaştırın. Eğer sıraları yanlışsa ( daha büyük olan önce gelir ), bunları yer değiştirin. Ardından bir sonraki index'e ilerleyin, tekrar karşılaştırın, gerekiyorsa yerlerini değiştirin ve array içindeki bir sonraki öğeye devam edin. Dizinin sonuna ulaşıldığında önceki değişikleri tekrar kontrol etmemiz gerekiyor, Dizi boyunca herhangi bir değişiklik yapmadan tamamen geçtiğimizde dizi sıralanmıştır.

Daha akılda kalıcı ifadeyle İlk döngüde en büyük sayıyı bulacak ve onunla son elemana kadar değiş tokuş yapmaya devam edeceksin. Bu nedenle buna bubble sort denir : en büyük değerler son noktalara doğru kabarcıklanır.

### Bubble Sort - Example

```javascript
function bubbleSort(nums) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return nums;
}
```

Yukarıdaki fonksiyonu adım adım anlatacak olursak :

- Bubble Sort adı verilen bir algoritma uygulanmaktadır, Bubble Sort, liste içindeki sayıları karşılaştırarak ve gerekli olduğunda yer değiştirerek sıralayan bir algoritmadır.
- `bubbleSort` adlı bir fonksiyon tanımlanıyor ve fonksiyon `nums` adlı bir array parametresi alıyor.
- Fonksiyon içinde `swapped` adında bir değişken tanımlanıyor ve ona `false` değeri atanıyor. Bu değişken, döngü içindeki sayıların yer değiştirip değiştirilmediğini kontrol etmemize yardımcı oluyor.
- `do-while` döngüsü en az bir kez çalışır ve belirtilen koşul sağlandığı sürece çalışmaya devam eder. Yukardaki kodda koşulumuz `swapped` değişkeninin `true`olmasıdır. Array döngümüzde hiçbir sayı yer değiştirmediyse döngü sona erecektir. Çünkü tüm sayılar zaten sıralanmıştır.
- `do-while` döngüsünün içinde, başka bir döngü olan `for` döngüsü kullanıyoruz. Bu döngü, 0'dan başlayarak `nums` array'inin uzunluğuna kadar devam eder. Bu döngü sayesinde, dizideki tüm öğeler tek tek kontrol edilir.
- `for` döngüsünün içinde yer alan koşul ile mevcut elemanın `nums[i]` bşr sonraki elemandan `nums[i + 1]` büyük olup olmadığını kontrol ediyoruz. Eğer büyükse 2 elemanın yerini değiştiriyoruz.
- Yer değiştirme işlemi için `temp` adında bir geçici değişken kullanıyoruz. Bu sayede, iki eleman değerini kaybetmeden yerlerini değiştirebiliriz.
- Eğer yer değiştirme işlemi gerçekleştiyse `swapped` değişkenini `true` olarak güncelliyoruz.
- Döngü, hiçbir sayı yer değiştirmediğinde sona erer. Bu, tüm sayıların sıralandığını gösterir.
- Son olarak sıralanmış `nums` array'ini döndürürüz.

**Alternatif Çözüm**

```javascript
function bubbleSort(nums) {
  let n = nums.length;
  let swapped;

  for (let i = 0; i < n; i++) {
    swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return nums;
}
```

### Insertion Sort

❗ Bubble Sort çoğunlukla kullanılmaz, bunun sebebi (insertion sort) sıralamasının daha iyi olmasıdır.

Insertion Sort, insan beyninin sıralama işlemini kafasında nasıl yapacağına benzer bir şekilde çalışır.

Temel olarak, tüm sayıları sürekli kaydırırak sonunda nereye gitmesi gerektiğini bulana bulana kadar ve sonra oraya koyuyoruz ardından döngü tekrar başlatılıyor.

Bu algoritmanıon Big O notasyonu değerlendirilmesi yapıldığında
Worst case : Ters sıralı array
Best case : Sıralanmış array
Avg case : Karışık bir array

Bubble Sorttan çok daha az iş yapar.
Neden faydalı ?

### Insertion Sort Practice

```javascript
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i];
    let j;

    for (j = i + 1; nums[j] > numberToInsert && j >= 0; j--) {
      nums[j + 1] = nums[j];
    }

    nums[j + 1] = numberToInsert;
  }

  return nums;
}
```

Yukarıdaki fonksiyonu adım adım anlatacak olursak :

- `insertionSort` adlı fonksiyon sıralama yapacağı `nums` adında bir parametre alıyor.

- Dış döngü, `i` değişkenini 1'den başlatarak, `nums` array'inin uzunluğuna kadar devam eder. Bu döngü, sıralanacak her sayıyı kontrol etmek için kullanılır.
- İç döngüye geçmeden önce, `numberToInsert` değişkenine geçerli sayı `nums[i]` atanır. Bu değişken asıl konumuna yerleştirilmesi gereken sayıdır.
- İç döngü `j` değişkenini `i` nin bir fazlasının başlatarak geriye doğru çalışı. İç döngünün koşulu, `j`nin sıfırdan büyük veya eşit olduğu ve `nums[j]` nin `numberToInsert` değerinden büyük olduğu sürece devam eder.
- İç döngü çalıştığı sürece, `nums[j]` değeri bir sonraki pozisyona `num[j + 1]` kaydırılır. Bu işlem, `numberToInsert` doğru konumuna yerleştirilene kadar daha büyük değerlerin sağa kaydırılması sağlar.
- İç döngü tamamlandığında, `nunmberToInsert` değişkeni doğru konumda olduğu için `j + 1` pozisyonunda `nums[j + 1]`'e yerleştirilir.
- Dış döngü tamamlandığında, tüm sayılar doğru konumda olacaktır ve sıralı `nums` dizisi geri döndürülür.

## Recursive Sorts

### Recursion

Ortadaki bir sorunun çözülebilecek bir sorunla karşılaşana kadar sorunların 2'ye bölünmesi, daha sonrasında ise çözümlerin bir araya getirilmesi.

Recursive : Büyük bir problemi iki küçük probleme bölün ve sonunda çözebileceğiniz kadar küçük bir sorunla devam edin.

```javascript
function countTo(max, current, list) {
  if (current > max) return;
  console.log(max);
  countTo(max, current + 1);
}

const counts = countTo(5,1 [])
```

Infinite Iteration : asla bitmeyen bir döngünüz olduğunda olur, yani while true gibi bir kullanım olduğunda bu sonsuz bir döngüdür.

Recursive ne zaman faydalıdır ?

- Problemin tanımında bulduğunuzda. Aynı problemin daha küçük sürümlerini kullanarak modellenmesi, problemi Recursive olarak çözebileceğiniz bir işaret olabilir. Fibonnaci Dizisi

❗ Note : Recursive bir fonksiyon oluştururken her zaman ilk olarak temel durum tanımlayın. Temel durum, recursive fonksiyonun ne zaman duracağıdır.

### Recursion Pracice Nested Addition

- Array içinde yer alan tüm sayıları al ve topla

```javascript
[1, 2, 3, 4, 5, [6, 7, 8], 9, [[10, 11], 13, [14]]];

function nestedAdd(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (Array.isArray(current)) {
      sum += nestedAdd(current);
    } else {
      sum += current;
    }
  }
  return sum;
}
```

### Recursion Practice : Factorials

```javascript
function factorial(num) {
  if (num < 2) return 1;
  return num * factorial(num - 1);
}
```

### Merge Sort

Sıralanmamış ve eleman sayısı fazla olan array'lerin daha küçük listeler halinde bölünmesi ve sıralanması. En sonunda uzunluğu 1 veya 0 olan listeler elde edilir. Uzunluğu 1 veya 0 olan array'de zaten sıralanmış olur.

Peki parçalanmış olan bu array listeleri nasıl birleştirilir ?

Sıralı olan listeler birleştirilir. İki küçük sıralı listeyi bir araya getirip daha büyük tek bir sıralı liste oluştururuz. Sonra daha büyük listelerle de aynısını yaparak hepsini tek bir sıralı haline getiririz.

Bu işlem için iki fonksiyona ihtiyaç var. İlk fonksiyon, büyük listeleri daha küçük listelere böler (recursive function) ikinci fonksiyon ise iki sıralı listeyi alır (zaten sıralı olacağı için) ve tek bir sıralı liste döndürür. İlk fonksiyon recursive ikinci fonksiyon recursive değildir.

```javascript


mergeSort([1, 5, 7, 4, 2, 3, 6]) -- depth 0

mergeSort([1, 5, 7, 4]) // mergeSort([2, 3, 6]) -- depth 1

mergeSort([1, 5]) // mergeSort([7, 4]) -- depth 2

mergeSort([1]) // mergeSort([5]) -- depth 3
[1] is of length one. Base case. Return sorted list [1] -- depth 3

mergeSort([5]) -- depth 3
[5] is of length one. Base case. Return sorted list [5] -- depth 3

merge([1], [5]) -- depth 3
Is 1 or 5 smaller? 1. Add to end. [1]
Left array is empty, concat right array. [1, 5]
Return sorted array [1, 5].

mergeSort([7, 4]) -- depth 2

mergeSort([7]) // mergeSort([4]) -- depth 3
[7] is of length one. Base case. Return sorted list [7] -- depth 3

mergeSort([4]) -- depth 3
[4] is of length one. Base case. Return sorted list [4] -- depth 3

merge([7], [4]) -- depth 3
Is 7 or 4 smaller? 4. Add to end. [4]
Right array is empty, concat left array. [4, 7]
Return sorted array [4, 7]

merge([1, 5], [4, 7]) -- depth 2
Is 1 or 4 smaller? 1. Add to end. [1]
Is 5 or 4 smaller? 4. Add to end. [1, 4]
Is 5 or 7 smaller? 5. Add to end. [1, 4, 5]
Left array is empty, concat right array. [1, 4, 5, 7]
Return sorted array [1, 4, 5, 7]

mergeSort([2, 3, 6]) -- depth 1

mergeSort([2, 3]) // mergeSort([6]) -- depth 2

mergeSort([2]) // mergeSort([3]) -- depth 3
[2] is of length one. Base case. Return sorted list [2]

mergeSort([3]) -- depth 3
[3] is of length one. Base case. Return sorted list [3]

merge([2], [3]) -- depth 3
Is 2 or 4 smaller? 2. Add to end. [2]
Left array is empty, concat right array. [2, 3]
Return sorted array [2, 4]

mergeSort([6]) -- depth 2
[6] is of length one. Base case. Return sorted list [6]

merge([2, 3], [6]) -- depth 2
Is 2 or 6 smaller? 2. Add to end. [2]
Is 3 or 6 smaller? 3. Add to end. [2, 3]
Left array is empty, concat right array. [2, 3, 6]
Return sorted array [2, 3, 6]

merge([1, 4, 5, 7], [2, 3, 6]) -- depth 1
Is 1 or 2 smaller? 1. Add to end. [1]
Is 4 or 2 smaller? 2. Add to end. [1, 2]
Is 4 or 3 smaller? 3. Add to end. [1, 2, 3]
Is 4 or 6 smaller? 4. Add to end. [1, 2, 3, 4]
Is 5 or 6 smaller? 5. Add to end. [1, 2, 3, 4, 5]
Is 7 or 6 smaller? 6. Add to end. [1, 2, 3, 4, 5, 6]
Right array is empty, concat left array. [1, 2, 3, 4, 5, 6, 7]
Return sorted list [1, 2, 3, 4, 5, 6, 7]

```

![enter image description here](https://btholt.github.io/complete-intro-to-computer-science/static/5ff183675ecef0b757781c08cabb8737/6114d/merge2.png)

### Merge Sort Practice

```javascript
const mergeSort = (nums) => {
  // base case, return if length 1 or 0
  if (nums.length < 2) {
    return nums;
  }
  // break into two smaller arrays
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // call mergeSort on left and right
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // return the merge of left and right
  return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
  // return one sorted array
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return results.concat(left, right);
};
```

### Quick Sort
