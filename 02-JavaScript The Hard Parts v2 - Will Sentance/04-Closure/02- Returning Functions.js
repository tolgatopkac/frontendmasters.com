//  Functions can be returned from other functions in JavaScript

function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}

const generatedFunc = createFunction();
result = generatedFunc(3); // 6

// Yukarıda gerçekleşen işlem nedir  ?
//- Global memory'De createFunction isimli fonksiyon oluşturuluyor
//- Global memory'de generatedFunc isimli değişkene createdFunction isimli fonksiyona herhangi argument ve input almadan çağrılıyor
// generatedFunc isimli değişkende createdFunction çağrıldıktan sonra execution content oluşturuluyor.

// Görselleştirilmiş şekilde :
// https://drive.google.com/file/d/1YKT09KWVYAcKuSs1nXWQFLds44V7rGXv/view?usp=sharing
// https://drive.google.com/file/d/1kETus2n16ec_jA4TMMbrXsvabAYH05jI/view?usp=sharing
