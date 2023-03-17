
/*Girilen 3 sayının ortalamasını bulan, eğer ortalama, ilk sayıdan büyükse "kâr", değilse "zarar" yazan programı yapınız.
*/
const sayi1 = Number(prompt("1.sayıyı giriniz"));
const sayi2 = Number(prompt("2.sayıyı giriniz"));
const sayi3 = Number(prompt("3.sayıyı giriniz"));

const ort = (sayi1 + sayi2 + sayi3) / 3;

if(ort>sayi1){
    alert("Kâr");
}
else{
    alert("Zarar");
}

