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
