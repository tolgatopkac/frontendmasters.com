/* 
two things to executing code. 
- one, going through the code as given, line by line, and doing it. 
- Two, having a place to see stuff that shows up, data. 
*/

/* Çalışan bir fonksiyon mini bir program gibidir. Mini bir uygulama gibi, çalıştırılması gereken bir kod gibi, bu iki şeye ihtiyacımız var. The thread of execution, kodu satır satır gözden geçirme ve yapma yeteneği. Ve küçük bir veri deposu, biz o fonksiyonun içindeyken ortaya çıkan her şeyi saklamak için hafıza. */

/* 
Execution Context  : Any functions, variables, constant stored inside that function only. Değişkenlerin fonksiyon içinde saklandığı yer...

*/

const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

// inputNumber >> parameter
// dışarıdan gelecek olan num sayısı (3) bir argument
// İkisi temelde farklıdır, biri label diğeri ise label'da saklanan şey.
