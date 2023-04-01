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

- ✔ Iterative Sorts

- ✔ Recursive Sorts

- ✔ Non-Comparison Sorts

- ✔ Binary Search

- ✔ Lists

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

Yukarıdaki kodda gerçekleşen durumu açıklayacak olursam :

- `mergeSort` adında fonksiyonumuz var ve bu fonksiyon bir array alır ve onları sıralamaya çalışır.
- Eğer array'in uzunluğu 1 veya 0 ise zaten sıralanmış olduğu için direk listeyi döndürürüz.
- Daha büyük bir array ile çalışıyorsak, array ortadan ikiye böleriz ve iki küçük array elde ederiz : "left" ve "right".
- Bu iki küçük array'i de sıralamak için `mergeSort` fonksiyonu tekrar çağrılır.
- İki küçük array sıralandıktan sonra, onları birleştirip büyük ve sıralanmış bir liste elde etmek için `merge`adlı başka bir fonksiyon kullanılıyor.

`merge` fonksiyonu ise :

- önce `results` adında boş bir array oluşturuyoruz. Bu array sıralanmış sonucu saklayacak.
- Sol ve sağ array'lerin ikisi de boş olmayana kadar bir döngü oluşturuluyor.
- Döngüde, sol listenin ilk elemanı sağ listenin ilk elemanından küçük veya eşitse, sol listenin ilk elemanını "results" listesine ekliyoruz. Değilse, sağ listenin elamanını ekliyoruz.
- Döngü bittiğinde sol ve sağ listelerde kalan elemanlar eğer var "results" listesine eklenir.
- Sonunda sıralanmış sayılarla dolu "results" array listesi döndürülür.

### Quick Sort

JavaScript'de `.sort()` çağrıldığında genellikle **Merge Sort** bazen **Quick Sort** çağrılır ve sıralanmış bir array elde edilir.

```
[4,9,3,5] list
-> 5 is made the pivot since it's the last in the array
-> divide list into two lists, [4,3] and [9]
-> call quicksort on those two lists

[4, 3]
-> 3 is pivot
-> call quicksort on [] and [4]
-> those both return as is as they are the base case of length 0 or 1
-> concat [], 3, and [4]
-> return [3,4]

[9]
-> returns as this it is a base case of length 1

(back into the original function call)
-> call concat on [3,4], 5, and [9]
-> return [3,4,5,9]
```

Quicksort, sayıları küçükten büyüğe sıralamak için kullanılan hızlı bir yöntemdir. Yukarıdaki örneği adım adım açıklayacak olursak :

- Öncelikle listenin sonundaki sayıyı "pivot" olarak seçiyoruz. Yukarıdaki örnekte `[4,9, 3, 5]` listesinde 5 sayısı pivot oluyor.
- Pivot sayısından küçük sayılar bir array'e, büyük sayılar ise başka bir arrray'e konuluyor. Yukarıdaki örnekte 5'ten küçük sayılar `[4,3]` listesine 5'ten büyük sayılar `[9]` listesine konuluyor.
- Şimdi bu iki listeyi (pivot sayısından küçük olanlar ve büyük olanlar) ayrı ayrı sıralamak için `quicksort` yöntemini tekrar kullanıyoruz.

2 parçaya ayırdığımız arraylerde yani `[4,3]` ve `[9]`

- [4,3] listesini sıralamak istediğimizde

  pivot sayımız son sayı olan 3 oluyor.
  3'den küçük sayılar yok, 3'ten büyük sayılar ise [4] listesinde. Bu iki liste zaten sıralı olduğu için `[3,4]` şeklinde birleştiriyoruz.

- [9] 'un yer aldığı array için

Tek elemanlı bir array olduğu için zaten sıralıdır ve üzerinde işlem yapılmasına gerek kalmıyor.

Artık her liste de sıralandığına göre küçük sayılar listesini, pivot sayıyı ve büyük sayılar listesini birleştiriyoruz.

`[3,4] + 5 + [9] = [3, 4, 5, 9]`

Sonuç olarak `[4, 9, 3, 5]` array'ini quicksort yöntemiyle `[3,4,5,9]` şeklinde sıralanmış oldu.

### Quick Sort Practice

```javascript
function quickSort(nums) {
  // base case, array of length 0 or 1
  if (nums.length <= 1) return nums;
  // choose pivot last one
  const pivot = nums[nums.length - 1];
  // separate into left and right arrays
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  // call quicksort on left and right arrays
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return sortedLeft.concat(pivot, sortedRight);
}
```

### Non-Comparison Sorts

Doğrudan sayılar birbirleriyle karşılaştırmak yerine farklı basamaklar karışılaştırılır.

### Binary Search

Tüm sayıları belirli bir düzende yerleştirmek yerine dizideki belirli bri elemanı bulmaya çalışıyoruz. Sıralanmamış bir array üzerinde arama yapılıyorsa, yapılabilecek tek arama lineerdir. Yani bir for döngüsü veya while döngüsü yazıldığında sorulan soru : Bu mu ? Bu mu ? ... diye kontrol edilir.

Ancak zaten sıralanmış bir array'e sahipsen, binary search yapılabilir. ( Telefon Rehberleri )

Doğru eleman buluna kadar dizi yarıya bölünür.

```
[0, 5, 10, 12, 15, 19, 21, 22, 24, 30]

search for 12

start in the middle, is 19 === 12? no, smaller, go left

look in the middle of the smaller half, 10 === 12? no, larger, go right

look in the middle of the larger half (which is now just one number), is 12 === 12? yes, found element
```

### Binary Search Practice

```javascript
function linearSearch(id, array) {
  for (let i = 0; i < array.length; i++) {
    if (id === array[i].id) {
      return array[i];
    }
  }
  return void 0;
}
```

```javascript
function binarySearch(id, array) {
  let min = 0;
  let max = array.length - 1;

  let index;
  let element;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = array[index];

    if (element.id < id) {
      min = index + 1;
    } else if (element.id > id) {
      max = index - 1;
    } else {
      return element;
    }
  }
  return void 0;
}
```

### List

### ArrayList

Çok sayıda silme veya ekleme işleminin yapıldığı durumlarda kullanışlı değildir.

### ArrayList Practice

```javascript
class ArrayList {
  constructor() {
    // instantiate all your variables
    this.data = {};
    this.length = 0;
  }

  push(value) {
    // add an item to the end of the array
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    // remove the last item in the array and returns it
    const response = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return response;
  }

  get(index) {
    // return that item from the array
    return this.data[index];
  }

  delete(index) {
    // removes item from the array and collapses the array
    const response = this.data[index];
    this._collapseTo(index);
    return response;
  }
  // private method
  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data(this.length - 1);
    this.length--;
  }
}
```

### LinkedList

Elemanın seçilmesi ve arama işlemleri için uygun değilidr fakat silme ve ekleme için kullanışlıdır.
Yani listenin çok okunup az değiştirildiği durumlarda ArrayList kullan, LinkedList kullanma.

JavaScript için hiç kullanma. JavaScript dizileri uygulayabileceğin her şeyden daha hızlı olacaktır. C, C++ veya Java gibi bir programlama diliyle çalışıyorsan büyük fark yaratabilir.

```javascript
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  _find(index) {
    if (index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  get(index) {
    const node = this._find(index);
    if(!node) return voide 0;
    return node.value;
  }

  delete(index) {
    if(index === 0){
      const head = this.head;
      if(head){
        this.head = head.next;
      }else{
        this.head = null;
        this.tail = null;
      }
      this.length--;
      return head.value;
    }
    const node = this._find(index - 1);
    const excise = node.next;
    if(!excise) return null;
    node.next = excise.next;
    if(!node.next) this.tail = node.next;
    this.length--;
    return excise.value;
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
```

### Trees

Özel durumlar için kullanılır.
Bir tür hiyerarşilere sahiptirler.

### Binary Search Tree

![Binary Search Tree](https://i.ibb.co/B6vXG0z/bst.png)

Root : 8

Sol tarafta yer alan (sub tree) 8'den küçük

Sağ tarafta yer alana (sub tree) 8'den büyük

**Neden Kullanışlı**
Diyelim ki 4 düğümünde (node) depolanan verileri istiyorum. Binary search tree'nin güzel yanı kök (root) ile başlıyorsun.

4 8'den daha küçük mü veya büyük mü ?

- Küçük (3) (left)
  4 3'den büyük mü küçük mü ?
- Büyük (6) (right)
  4 6'dan büyük mü küçük mü ?
- Küçük (left)
  ... 4

Temel olarak veri yapısındaki aramalar hızlı ve daha önceden optimize edilmiş hale gelir.

Nasıl eleman eklenir ? **(Add)**

7 eklemek istiyorum, aşağıdaki tree'de yer aldığı üzere 10'da başlıyorum.

7 10'dan küçük ve sola gidilir

Karşıma 5 çıkar, 5'ten büyük olduğu için sağa gidilir.

Yine karşıma 8 çıkar ve 7 sayısı 8'in soluna eklenir.

```javascript

Current Tree:

      10
    /   \
  5      15
 / \     /
3   8   12

Add 7

Result

      10
       /   \
     5      15
    / \     /
   3   8   12
      /
     7

```

**Delete**
Silme işlemi

Eğer 5'i silmek istiyorsam :

- Önce 5'i bul
- Root (10) ile başla
- 5 10'dan küçük sol subtree git ve 5'i bul.
- Ardında sol tarafa yerleştirebileceğin sağ tarafta yer alan en küçük sayıyı bul
- 5'in yerine 6'yi yerleştir.

```javascript

// Olasılığın fazla olduğu Karmaşık senaryo
        10
       /   \
     5      15
    / \    /  \
   3   8  12  17
      /
     6
      \
       7

// Delete 5
         10
       /   \
     6'     15
    / \    /  \
   3   8  12  17
      /
     6
      \
       7

```

### Binary Search Tree Practice

```javascript
class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let current = this.root;
      while (true) {
        if (current.value > value) {
          // go left
          if (current.left) {
            current = current.left;
          } else {
            current.left = new Node(value);
            break;
          }
        } else {
          // go right
          if (current.right) {
            current = current.right;
          } else {
            current.right = new Node(value);
            break;
          }
        }
      }
    }
    return this;
  }
  toObject() {
    return this.root;
  }
}

class Node {
  // code maybe goes here

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  toObject() {
    return this.root;
  }
}
```

### Self Balancing AVL Tree

❗ Self Balancing AVL Tree yeterince anlamadım.

Her AVL Tree bir Binary Search Tree'dir.

Tüm Binary Search Tree'ler ise AVL Tree değildir.

AVL Tree, Binary Search Tree'nin özelleştirilmiş halidir.

Sayılar sırayla eklenir, otomatik olarak denge sağlanır, kendine özgü bir dengeleme mekanizması vardır.

AVL Tree çoğu şey aynı şekilde çalışır, silmeler, eklemeler tüm aramalar aynı şekilde çalışır.

**Single Rotation**

```
5
 \
  8

-> Currently valid AVL tree
-> .add called with 9

5 - node A
 \
  8 - node B
   \
    9 - node C

(on the way up from the recursion)
-> check balance of node C: left height is 0, right height is 0, balanced
-> check balance of node B: left height is 0, right height is 1, balanced
-> check balance of node A: left height is 0, right height is 2
unbalanced, right heavy, child is right heavy

-> perform right rotation
-> swap the values of nodes A and B
-> make node B the left child of node A
-> make node C the right child of node A
-> move node B's right child to its left child
(in this case they're both null)
-> make node A's _original_ left child
(which was null in this case) the left child of node B
-> update the heights of all the nodes involved

      8 - node A
    /   \
   5     9
node B   node C
```

**Double Rotations**

### Self Balancing AVL Tree Exercise

```javascript
class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.add(value);
    }
  }
  toObject() {
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.height = 1;
  }

  add(value) {
    // decide to go left or right

    // find the correct place to add

    // make sure you're updating heights

    if (this < this.value) {
      // go left
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = new Node(value);
      }
      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }
    } else {
      // go right
      if (this.right) {
        this.right.add(value);
      } else {
        this.right = new Node(value);
      }
      if (!this.lef || this.right.height > this.left.height) {
        this.height = this.right.height + 1;
      }
    }
    this.balance();
  }
  balance() {
    const rightHeight = this.right ? this.right.height : 0;
    const leftHeight = this.left ? this.left.height : 0;

    if (leftHeight > rightHeight + 1) {
      const leftRightHeight = this.left.right ? this.left.right.height : 0;

      const leftLeftHeight = this.left?.left ? this.left.left.height : 0;

      if (leftRight > leftLeftHeight) {
        this.left.rotateRR();
      }
      this.rotateLL();
      }else if (rightHeight > leftHeight + 1){
        const rightRightHeight = this.right.right ? this.right.right.height:0;
        const rightLeftHeight = this.right.left ? this.rgiht.left.height : 0;

      // double rotation
        if(rightLeftHeight > rightRightHeight){
          this.right.rotateLL()
        }
        this.rotateRR
      }
    }

    // ask is this node of balance
    // if not out of balance, do nothing
    // if it is out of balance, do i need to single or double rotate
    // if single, just call rotate on self  ?
    //  if double, call rotate on  child then on self
  }
  rotateRR() {
    // rotate
    const valueBefore =this.value;
    const leftBefore = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right
    this.left.right= this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;


    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }
  rotateLL() {
    // rotate
    const valueBefore = this.value;
    const rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left=this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }

  updateInNewLocation() {
    // calc the new height

    if(!this.right && !this.left){
      this.height = 1;
    } else if (!this.right || (this.left &&  this.right.height < this.left.height)){
      this.height = this.left.height + 1;
    }else {
      this.height  = this.right.height +1;
    }
  }

```

❗ Bu bilgiye neden ihtiyacın var ?

- Self Balancing AVL Tree çok büyük verilerle çalışıldığında hızlı bir şekilde aranan verinin bulunmasında kullanılacak algoritma. Ekleme ve silme performansından ödün vererek arama konusunda hız kazanırsın. Veritabanları için kullanışlıdır.

### Depth First Tree Traversals

![Binary Search Tree](https://i.ibb.co/B6vXG0z/bst.png)

Yukarıdaki Binary Search Tree ağacı verildiğinde tüm sayıların bir dizisi istendiğinde cevabın neler olabilir ? Sırası önemli değil sadece dizideki tüm sayılar isteniyor.

**Sadece tüm sayılar istenildiğinde**

- Pre-order Traversal (Temel olarak tüm node'lar ziyaret edilir.) : `[8, 3, 1, 6, 4, 7, 10, 14, 13]`

**Sayılar sırayla istenildiğinde**

- Mümkün olduğunca sola gidilir. Yukarıdaki ağaçta 8'de `in-order traversal` metodu çağrılır, sonra 3' `in-oder traversal` metodu çağrılır yine 1'de `in-order traversal` metodu çağrılır.

1'in sol çocuğu yok bu yüzden 1 array'e eklenir. Daha sonra 3 ve sağ geçilir. `in-order traversal` metodu çağrılır. Aynı mantık sola git, sonra sağ git.

`in-order taversal : ` Sola git diziye ekle, sonra sağ git.

`pre-order traversal : ` Diziye ekle Sola git, sağ git.

`post-order traversal: ` Kök her zaman en sol olur.

❗ Aynı şeyi yapmanın neden 3 farklı yolunu öğreniyorsun ?

" Bir diziden sıralanmış bir liste isterseniz, in-order traversal kullanırsın. Bir ağacın derin bir kopyasını oluşturmak istersen, pre-order traversal gerçekten yardımcı olacaktır. Derin kopyalar için, yeni bir düğüm oluşturabilir ve ardından çocukları ekleyebilirsiniz."

### Depth First Tree Traversals Practice

```javascript
// preOrderTraverse
/* 
preOrderTraverse Fonksiyonunu açıklarsam : 

PreOrderTraverse fonksiyonu : bir ağaç yapısındaki node(düğümleri) önceden dalaşan (ilk önce kök, sonrada sol alt ağaç, ardından sağ alt ağaç ) bir fonskiyodur. 
2 parametre alır. (node ve array)

Adım adım 
1) Eğer node mevcut değilse boş bir array döndürür.
2) Node değeri (node.value) dizinin sonuna eklenir.
3) Node sol çocuğu ile aynı işlem yapılır ve array güncellenir.
4) Node sağ çocuğu ile aynı işlem yapılır ve array güncellenir.
5) İşlem tamamlandığında güncellenmiş array döndürülür.

*/

const preorderTraverse = (node, array) => {
  if (!node) return array;
  array.push(node.value);
  array = preorderTraverse(node.left, array);
  array = preorderTraverse(node.right, array);
  return array;
};

// inOrderTraverse
/* 
- inorderTraverse fonksiyonu : Önce sol alt, sonra kök, en son sağ alt node ziyaret eden bir fonksiyondur. 


*/

const inorderTraverse = (node, array) => {
  if (!node) return array;

  array = inorderTraverse(node.left, array);
  array.push(node.value);
  array = inorderTraverse(node.right, array);
  return array;
};

// postOrderTraverse :

/* 
  Ağaç yapısındaki düğümleri sondan başa dolaşma sırasına göre ziyaret eden (önce sol alt ağaç, sonra sağ alt ağaç ve en son kök) bir fonksiyonu içerir.
*/

const postorderTraverse = (node, array) => {
  if (!node) return array;

  array = postorderTraverse(node.left, array);
  array = postorderTraverse(node.right, array);
  array.push(node.value);
  return array;
};
```

### Breadth First Tree Traversals

![Binary Search Tree](https://i.ibb.co/B6vXG0z/bst.png)

Depth First Tree Traversals : Bir elemanın köküne kadar inip sub köklere ulaşırken, Breadth First Tree köke en yakın olan node(düğümlere) ulaşır. Yukarıdaki görselde 8'e en yakın düğümleri ele alırsak

8 .. en yakın 3 ve 10

sonrasında 1, 6, 14

ve son 4, 7, 13 olur.

kademe kademe aşağı inilir.

Bunun için `queue` kullanılır. Eklenen ilk öğe çıkarılacak ilk öğe olur.

```
-> start function by adding root to the queue, queue = [8]
-> process 8, add to final array array = [8]
-> queue 3 and 10 to queue, queue = [3, 10]
-> dequeue 3, queue = [10]
-> queue 3's children, queue = [10, 1, 6]
-> add 3 to final array, array = [8, 3]
-> dequeue 10, queue = [1, 6]
-> queue 10's children, queue = [1, 6, 14]
-> add 10 to final array, array = [8, 3, 10]
-> dequeue 1, queue = [6, 14]
-> queue 1's children, nothing
-> add 1 to final array, [8, 3, 10, 1]

[etc.]

final array is [8, 3, 10, 1, 6, 14, 4, 7, 13]
```

### Breadth First Tree Traversals - Practice

```javascript
const breadthFirstTraverse = (queue, array) => {
  if (!queue.length) return array;

  array.push(node.value);

  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
  return breadthFirstTraverse(queue, array);
};

// alternative

const breadFirstTraverse = (queue, array) => {
  while (queue.length) {
    const node = queue.shift();
    array.push(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return array;
};
```
