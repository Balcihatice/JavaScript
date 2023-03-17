/*Girilen iki sayının ortalamasını hesaplayan ve sonucu gösteren programı yazınız
*/

// prompt herşeyi string olarak algılar.
const sayi1 = Number( prompt("1.sayıyı giriniz") );
const sayi2 = Number( prompt("2.sayıyı giriniz") );


console.log(typeof sayi1);

const sonuc = (sayi1 + sayi2) / 2;

alert("İki sayının ortalaması: " + sonuc);
