

// DERS 1: EKRANA KARAKTER YAZDIRMA
// console.log("Merhaba");
// console.log("1234");
// console.log("true");
// console.error("hata oluştu");
// console.warn("uyarı");

// DERS2: DEĞİŞKENLER
// Türkçe karakter kullanmamalıyız.
// Değişkenler arasında boşluk olmaz.
// Değişken tanımlamalarına sayı ile başlanmaz.
/*var maasAli=7000;
var maasCan=6000;
var zam=0.35;
console.log(maasAli+(maasAli*zam))
console.log(maasCan+(maasCan*zam))*/

// DERS 3: DEĞİŞKEN TÜRLERİ
/*var urunAdi = 'iphone 13';  //string
let urunFiyat = "15000";    //string

console.log(typeof urunAdi);
console.log(typeof urunFiyat);

// let sayi1 = '10';
// let sayi2 = "20";

// console.log(Number(sayi1)+Number(sayi2));
// Stringin sayı değerini toplamaya yarar.
let sayi1 = 10;
let sayi2 = 20;

console.log(sayi1.toString()+sayi2.toString());//karakter olarak basar

let isim ="halid";
let soyad ="aslan";

console.log(isim + " " + soyad);
let sinavNotu = 70;
let basarilimi = (sinavNotu >=50);

console.log(basarilimi);  //boolean

let yas;
console.log(yas)
console.log(typeof yas) //değer atanmadığı için

yas = ""; //çift tırnak içinden string değer gelir
console.log(yas)
console.log(typeof yas)*/

//DERS 4: DEĞİŞKEN UYGULAMALARI
/*
let isim1 = "Ada BİLGİ";
let dogumtar = 2012;
let mat1=70, mat2=70, mat3=80;

let isim2 = "Yiğit BİLGİ";
let dogumtar2 = 2010;
let ogr2mat1=40, ogr2mat2=40, ogr2mat3=50;

var yas1 = (2022-2012);
var ort = parseInt((mat1+mat2+mat3)/3);
var basarilimi = (ort>=50);

var yas2 = (2022-2010);
var ort2 = parseInt((ogr2mat1+ogr2mat2+ogr2mat3)/3);
var ogr2basarilimi = (ort2>=50);
//Tamsayı yazdırmak için parseInt() veya parseFloat() kullanılır
console.log(isim1)
console.log(yas1)
console.log(ort)
console.log("Dersteki Başarı Sonucu: ", basarilimi)

console.log(isim2)
console.log(yas2)
console.log(ort2)
console.log("Dersteki Başarı Sonucu: ", ogr2basarilimi)*/

//DERS 5: İŞLEM OPERATÖRLERİ
/*
let sonuc;
let a=10,b=20,c=30;
// 1. Aritmetik operatörler

sonuc = a+b;
sonuc = a-b;
sonuc = a*b;
sonuc = b/a;
sonuc = c%a;
// sonuc = a++;  //a--
// sonuc = ++a;  //--a

// 2. Atama operatörleri

sonuc = a;
sonuc += a; //sonuc = sonuc + a
sonuc -= a; //sonuc = sonuc - a
sonuc *= a; //sonuc = sonuc * a
sonuc /= a; //sonuc = sonuc / a
sonuc %= a; //sonuc = sonuc % a

// 3. Karşılaştırma Operatörleri

sonuc = (a == b)
sonuc = (a != b)
sonuc = (3 == "3") //değer kontrolü
sonuc = (3 === "3") //tip kontrolü
sonuc = (a < b)
sonuc = (a > b)
sonuc = (a <= b)

console.log(sonuc)
*/
// 4. Mantıksal Operatörler If/Else Koşulları
/*
let username = "halid aslan";
let password = "1234";

if (username == "halid arslan"){
    if(password == "1234"){
        console.log("Uygulamaya giriş yapıldı.")
    }
    else {
        console.log("parola yanlış")
    }
}
else {
    console.log("Kullanıcı adı yanlış")
    console.log("Uygulamaya giriş başarısız!")
}
*/

//DERS 6: IF / ELSE UYGULAMA ÖRNEKLERİ
/*
let mezuniyet = "üniversite";
let yas = 20;

if (yas >= 18 && (mezuniyet == "lise" || "üniversite")){
    console.log("ehliyet alabilir")
}
else{
    console.log("ehliyet şartları tutmuyor")
}*/
/*
let sayi =-21;

if (sayi % 2 == 1){
    console.log("sayı tek sayıdır")
}*/

//DERS 7: STRING İŞLEMLERİ
/*
let ad = "Halid";
let soyad = "Aslan";
let yas = "35";
let sehir = "İstanbul"

let mesaj ="Benim adım" + ad + 've soyadım' + soyad + '.'
 + sehir + ' de yaşıyorum. ' + 'Emekliliğe' +(65-yas) + 'yılım kaldı.'; 

console.log(mesaj)
*/

//DERS 8: STRING METOTLARI
/*
let kursAdı = "Komple uygulamnalı web geliştirme eğitimi";

//https://www.w3schools.com/js/js_string_methods.asp
// Detaylar bu linkte

//UYGULAMALAR 

let url = "http://www.sadikturan.com";
let KursAdi = "Komple Web Geliştirme Kursu";

// 1. url kaç karakterlidir?
let sonuc;
sonuc = url.length;

// 2. KursAdi kaç kelimeden oluşmaktadır?
sonuc = kursAdi.split(" ").length;
// 3. url https ile mi başlıyor?
sonuc = url.startsWith("https");

if (sonuc){
    console.log("evet başlıyor");
}
// 4. kursAdi içerisinde Eğitimi kelimesi var mı?

if (kursAdi.indexOf("Eğitimi")> -1){
    console.log("evet var");
}   else{
    console.log("hayır yok");
}
console.log(sonuc);*/

// DERS 9: NUMBERS 
/*
let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseInt("10a");
sonuc = parseInt("a10");

sonuc = isNaN("10");

let sayi = 15.1235567;
sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(5);
sonuc = Math.round(2.4);
sonuc = Math.ceil(2.6);
sonuc = Math.floor(2.6);

console.log(typeof sonuc);
console.log(sonuc);*/

// DERS 10: DATES & TIMES
/*
let simdi = new Date();
//Get Methods
sonuc = simdi;
sonuc = simdi.getDate();
sonuc = simdi.getDay();//0: pazar
sonuc = simdi.getFullYear();
sonuc = simdi.getHours();
sonuc = simdi.getTime();

//Set Methods
simdi.setFullYear(2025);
simdi.setMonth(7);  //0: Ocak ayı
simdi.setDate(15);

sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();
sonuc = simdi - dogumTarihi;//saniye şeklinde sonuc verir

console.log(sonuc);
console.log(typeof sonuc);*/

// DERS11: DİZİLER

// let urun1 = "iphone 12";
// let urun2 = "iphone 13";
// let urun3 = "iphone 13 pro";
/*
let urunler = ["iphone 12", "iphone 13", "iphone 13 pro"];
let fiyatlar = [9000, 12000, 20000];
let renkler = ["gold","siyah","beyaz"];

let urun1 = ["iphone 12", 9000, "gold"];
let urun2 = ["iphone 13", 12000, "siyah"];
let urun3 = [];
urun3[0] = "iphone 13 pro";
urun3[1] = 20000;
urun3[2] = "beyaz";

console.log(urunler[0]);
console.log(urunler[1]);
console.log(urunler[2]);

console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);

let kursAdi = "Komple Web Geliştirme Eğitimi";
console.log(kursAdi[5]);
console.log(kursAdi.split(" "));*/

//DİZİ METOTLARI
/*
let ogrenciler = ["çınar", "yiğit", "ada"];

sonuc = ogrenciler.length;

sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");
//eleman silme
sonuc = ogrenciler.pop();//son eleman silinir
sonuc = ogrenciler.shift();//ilk eleman silinir
//eleman ekleme
sonuc = ogrenciler.push("sena");//sona eklenir
sonuc = ogrenciler.unshift("ali");

console.log(sonuc);
console.log(ogrenciler);

let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

sonuc = markalar1.concat(markalar2, markalar3);

console.log(sonuc);
console.log(markalar1);//orjinal dizi birleştirmeden etkilenmez

sonuc = markalar1.splice(0, 0, markalar2);

console.log(markalar1);*/

// DİZİLER : UYGULAMALAR
//Elma, armut, muz, çilek elemanlarına sahip bir dizi oluşturun
/*let meyveler = ["Elma", "Armut", "Muz", "Çilek"];
//Dizi kaç elemanlıdır
console.log(meyveler.length);
//Dizinin ilk ve son elemanı hangisidir
console.log(meyveler[0],meyveler[3]);
//Elma dizinin bir elemanı mıdır?
console.log(meyveler.includes("Elma"));
//Kiraz meyvesini listenin sonuna ekleyiniz
meyveler.push("Kiraz");
console.log(meyveler);
//Dizinin son iki elemanını siliniz
console.log(meyveler.pop());
console.log(meyveler.pop());
console.log(meyveler);*/

// Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve 
//not ortalamasını hesaplayınız.
/*Öğrenci1: Yiğit Bilgi 2010 (70,60,80)
Öğrenci2: Ada Bilgi 2012 (80,80,90)
Öğrenci3 Ahmet Turan 2009 (60,60,70)*/
/*
let ogr1 = ["Yiğit Bilgi", 2010, 70, 60, 80];
let ogr2 = ["Ada Bilgi", 2012, 80, 80, 90];
let ogr3 = ["Ahmet Turan", 2009, 60, 60, 70];

let tarih = new Date();
yas1 = tarih.getFullYear() - ogr1[1];
yas2 = tarih.getFullYear() - ogr2[1];
yas3 = tarih.getFullYear() - ogr3[1];

ort1 = parseInt((ogr1[2]+ogr1[3]+ogr1[4])/3);
ort2 = parseInt((ogr2[2]+ogr2[3]+ogr2[4])/3);
ort3 = parseInt((ogr3[2]+ogr3[3]+ogr3[4])/3);

console.log(yas1, ort1);
console.log(yas2,ort2);
console.log(yas3, ort3);*/

// DERS 12: OBJELER
/*
let kullaniciA = {"ad": "Halid", "soyad": "Aslan","yas":35,
                "adres":{
                    "sehir": "İstanbul",
                    "ilce": "Üsküdar"
                        },
                "hobiler": ["sinema", "spor"]
                }                        

let kullaniciB = {"ad": "Ahmet", "soyad": "Aslan","yas":50,
                "adres":{
                    "sehir": "İstanbul",
                    "ilce": "Ümraniye"
                        },
                "hobiler": ["sinema", "kitap"]
                }   

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA.adres.sehir;

let kullanicilar = [kullaniciA, kullaniciB];

sonuc = kullanicilar[1].ad;

let urunler = [
    {"urun_adi": "samsung s22", "urun_fiyat": 15000},
    {"urun_adi": "samsung s23", "urun_fiyat": 18000}
]
sonuc = urunler[0].urun_adi;
console.log(sonuc);*/

// OBJE UYGULAMALARI
/*
let siparis_101 = 
    {
    "sip_id":101,
    "sip_tar": "31.12.2022", 
    "odeme_sekli": "kredi kartı",
    "Adres": "Kavaklı Mah. Beylikdüzü, İstanbul",
    
    //Dizi tanımlaması için [] kullanılır
    "urunler": [  
        {
            "urun_id": 5,
            "urun_adi": "Iphone 13 Pro",
            "urun_url": "http://abc.com/iphone-13-pro",
            "urun_fiyat": 22000
        },
        {
            "urun_id": 6,
            "urun_adi": "Iphone 13 Pro Max",
            "urun_url": "http://abc.com/iphone-13-pro-max",
            "urun_fiyat": 25000
        }
                ]
    };

    let siparis_102 = 
    {
    "sip_id":102,
    "sip_tar": "31.12.2022", 
    "odeme_sekli": "kredi kartı",
    "Adres": "Kavaklı Mah. Beylikdüzü, İstanbul",
    
    //Dizi içinde herbir elemanının obje olarak tanımlanması için 
    // [] kullanılır
    //Obje tanımlaması için { } kullanılabilir
    "urunler": [  
        {
            "urun_id": 6,
            "urun_adi": "Iphone 13 Pro Max",
            "urun_url": "http://abc.com/iphone-13-pro-max",
            "urun_fiyat": 25000
        }
                ]
    };

let siparis1_toplam =(siparis_101.urunler[0].urun_fiyat + siparis_101.urunler[1].urun_fiyat)*1.18;
let siparis2_toplam =(siparis_102.urunler[0].urun_fiyat)*1.18;

let toplam_siparis = siparis1_toplam +siparis2_toplam

console.log("siparis_1: "+ siparis1_toplam);
console.log("siparis_2:" + siparis2_toplam);

console.log("toplam ödenen miktar:", toplam_siparis);*/

//DERS 13: DÖNGÜLER
//UYGULAMA SORUSU 1
//let sayilar = [1,5,7,15,3,25,24];

/*
let powers = [];

for (i=0; i<sayilar.length; i++){
    powers[i] = sayilar[i]*sayilar[i];
};

for(i=0; i<powers.length; i++){
    console.log(powers[i]);
    if(powers[i]%5 == 0){
        console.log(": 5'in katıdır")
    }
};*/
//Yukarıdaki tüm işlemi yapan kod parçası
//Kare alır
/*for(){
for içindeki dizi sayıları bitene kadar herbiri için döndürür.
}
for(let sayi of sayilar){
    console.log(sayi*sayi)
} *//*
for (let index in sayilar){
    if(sayilar[index] %2 ==0)
    console.log(index, ". index çift sayıdır");
    else console.log(index, ". index çift sayi değildir")
}*/

//UYGULAMA SORUSU 2:

//let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23"];
/*
for (let urun of urunler){
    console.log(urun.toUpperCase());
}*/
/*
let adet = 0;
for(let urun of urunler){
    if(urun.includes("samsung")){
        adet++;
    }
}
console.log(adet);*/

//UYGULAMA SORUSU 3 
/*let ogrenciler = [
    {"ad":"yiğit", "soyad": "bilgi", "notlar": [50,60,70]},
    {"ad":"ahmet", "soyad": "ada", "notlar": [60,70,80]},
    {"ad":"çınar", "soyad": "turan", "notlar": [45,20,55]}
];
//ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız

for(i=0; i<ogrenciler.length; i++){
    let toplam=0;
    for(j=0; j<3; j++){
        toplam += ogrenciler[i].notlar[j];
    }
    
    if((toplam/3)>50)
        console.log(ogrenciler[i].ad," " + ogrenciler[i].soyad, "Ortalamanız:", (toplam/3), "Dersi geçtiniz");
    else 
        console.log(ogrenciler[i].ad," " + ogrenciler[i].soyad, "Ortalamanız:", (toplam/3), "Başarısız");
} */

//Alternatif olarak aşağıdaki koddan faydalan
/*
for(let ogrenci of ogrenciler){

    let not_toplam=0;
    let ortalama=0;
    for(let not of ogrenci.notlar){
        not_toplam += not;
        ortalama = not_toplam/3;
    }
    console.log(`${ogrenci.ad} ${ogrenci.soyad}"not ortalaması: " ${ortalama})`)
//$ ve {} kullanarak obje içindeki veriler yazdırılır.
}*/

//DERS 14: FONKSİYONLAR
/*
function selamlama(msg){
    console.log(msg);
}

selamlama("selam");
selamlama("merhaba");

function yasHesapla(dogumYili){
    return(new Date().getFullYear() - dogumYili);
}

console.log(yasHesapla(1985));
console.log(yasHesapla(1987));

function emekliligeKacYilKaldi(dogumYili, isim){
    let yas = yasHesapla(dogumYili);
    let kalan_sene = 65 - yas;
    if(yas>65){
        console.log("Emeklisin");
    }
    else
        console.log(`${isim} Emeklilige ${kalan_sene} yıl kaldı`);
}

emekliligeKacYilKaldi(1985, "Ahmet");
emekliligeKacYilKaldi(1986, "Ayşe");
*/

//FONKSİYON UYGULAMA 1:
/*
function alanCevreHesapla(a,b,hesap){
    let alan = a * b;
    let cevre = 2 *(a+b);
    if(hesap == "alan")
        return alan;
    else if(hesap == "cevre")
        return cevre;
}

console.log(alanCevreHesapla(6,12,"alan"));
console.log(alanCevreHesapla(12,8,"cevre"));*/

//FONKSİYON UYGULAMA 2: yAZITURA ATMA
/*
function yaziTuraAt(){
    let random = Math.random();//0-1

    if(random<0.5)
        console.log("yazı");
    else
        console.log("tura");
    console.log(random);
}

yaziTuraAt();
yaziTuraAt();
yaziTuraAt();*/

//FONKSİYON UYGLAMA 3:
/*
function tamBolenler(sayi){
    let sayilar = [];

    for(let i=2; i<sayi; i++){
        if(sayi % i == 0){
            sayilar.push(i);
        }
    }
    return sayilar;
}

console.log(tamBolenler(10));
console.log(tamBolenler(24));
*/

//FONKSİYONLAR UYGULAMA 3: DEĞİŞKEN SAYIDA PARAMETRE
/*
function toplam(){
    let sonuc = 0;
    for(let i = 0; i<arguments.length; i++){
        sonuc += arguments[i];
    }
    return sonuc;
}
console.log(toplam(2,5));
console.log(toplam(3,5,8));
console.log(toplam(3,5,8,10));
*/

//DERS 15: SCOPES

var isim = "Ahmet";//GLOBAL SCOPE
const adres = "İstanbul";

//adres = "Kocaeli";  Sabit değişken olduğu için hataya sebep olur.

function yazdir(){
    var isim = "Ayşe";
    var yas = 20;
    console.log("function scope:", isim, yas);
}

if(true){
    let cinsiyet = "Kadın";
    let isim = "Zeynep";
    console.log(isim,cinsiyet);
}

//console.log(cinsiyet);
//Block içinde tanımlı olduğu için dışarıdan ulaşılamaz.
console.log(isim);
yazdir();

//BÖLÜM 3: JAVASCRIPT DOM AND EVENTS
//deneme


















// console.clear;

// var age;
// console.log(age);

// age=20;
// console.log(age);

// var fullname='Sadık Turan';
// console.log(fullname);

// fullname='Çınar Turan';
// console.log(fullname);

// var yas1;
// var _yas2;
// var $yas3;

// var firstname='Sadık';
// var Firstname='Çınar';

// console.log(firstname);
// console.log(Firstname);

// let age=35;
// let money=100.5;

// let isActive = false;
// let job=null;

// console.log(typeof job);
// console.log(typeof age);
// console.log(typeof  money);

// console.log(typeof isActive);

//undefined

// let car;

// console.log(typeof car);

// let address = {

//     city: 'Kocaeli',
//     country: 'Türkiye'

// }

// var calculateAge = function(){
//     return 0;
// }
// console.log(typeof calculateAge);

//Ders 4 : Tür Dönüşümü

// let num1 = '5';
// let num2 = '10';

// console.log(num1+num2);
// console.log(typeof total);

// let val;

// val = String(10);
// val = String(true);

// val = String(new Date().getDay());

// val = String([1,2,3,4]);

// //toString
// val = (10).toString();
// val = (false).toString();
// //String to number

// val = Number('10');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('a');

// //parseınt 
// //parse Float

// val = parseInt('10');
// val = parseInt('10.5');
// //val = parseFloat('10.5');

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

// Ders 8: Değişkenler

// var customerName = 'Halid';
// var customerLastNAme = 'Aslan';

// var fullName = 'Halid Aslan';
// var musteriId = '123123122';

// var total = 205.6;
// var gender = 'erkek'; 

// //string tanımlarsan ismi veya tc yi gizleyebilirsin.
// var gender = true;
// //erkek true, kadın false

// var address = {
//     city : 'Kocaeli',
//     district : 'İzmit',
//     body : 'Ömerağa mah. No:45'
// }

// var hobbies = ['Sinema', 'Kitap', 'Spor'];
// //array

// //Aşağıdaki siparişlerin toplamını hesaplayınız

// // var order1 = Number('100.2');
// // var order2 = Number('150.5');

// var order1 = parseInt('100.2');
// var order2 = parseInt('150.5');
// var totalOrder =order1 +order2;
// console.log(totalOrder);

// //Aşağıda verilen doğum yılına göre yaş hesaplayınız.

// var yearofBirth = 1986;
// console.log(new Date().getFullYear()-yearofBirth);

// //Ders 9: Operatörler

// let val;
// const a=10;
// const b=5;

// let c=3;

// val =a+b;
// val =a*b;
// val =a-b;
// val =a%b;
// //val = c++;

// //Atama Operatörleri 

// val = a;
// val +=a; //val = val + a;
// val -=a; //val = val - a;
// val *=a; //val = val * a;
// val /=a; //val = val / a;
// val &=a; //val = val % a;


// //Karşılaştırma Operatörleri

// val = a==b;
// val = b==c;
// val = b===c; //Hem değer hem de tip kontrolü
// val = 5 == '5';
// val = a!=b;
// val = a!==b;
// val = a > b;
// val = a < b;
// val = a >= b;

// //Mantıksal Operatörler

// val = (a<b) && (a>c);


//console.log(c);
//console.log(val);

// Ders 10: Uygulama : Operatörler

// let d = new Date();
// let birthday = new Date (1990,1,5);

// //Set Methods

// d.setFullYear(2022);
// d.setMonth(5);
// d.setHours(10);
// d.setMinutes(45);


// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMonth());
// console.log(d.getSeconds());

// console.log(d.getFullYear()-birthday.getFullYear());
// console.log(d.getMonth()-birthday.getMonth());
// console.log(d.getDate()-birthday.getDate());

// console.log(typeof d);

//Ders 11 Dates & Times

// var dt = new Date();

// console.log(dt);
// console.log(dt.getMonth()+1);
// console.log(dt.getDate());
// console.log(dt.getFullYear());

// //Tarih ve Saat bilgisi içeren obje

// var dtA = new Date('8/24/2010 14:50:10');
// var dtB = new Date(2010,7,14,50,10)

// console.log(dtA);
// console.log(dtB);

// var dtC = new Date('1/1/1990');
// var dayofMonth = dtC.getDate();
// dtC.setDate(dayofMonth-1);
// console.log(dtC);

// let d = new Date();
// let birthday = new Date(1986,9,13);


// console.log(d.getFullYear()); 
// console.log(d.getMonth());
// console.log(d.getDay());


// console.log(d.getFullYear() - birthday.getFullYear());
// console.log(d.getMonth() - birthday.getMonth());
// console.log(d.getDate() - birthday.getDate());

// console.log(d);
// console.log(typeof d);

///////////////////////////////////////////
//Ders 12: Dates & Times

// var dt = new Date();

// console.log(dt);

// console.log(dt.getFullYear());
// console.log(dt.getMonth());
// console.log(dt.getDate());

// var dtA = new Date('8/24/2010 14:50:10');
// var dtB = new Date(2010,7,24,14,50,10);
// console.log(dtA);
// console.log(dtB);//aynısı yazılır

// var dtC = new Date ('1/1/1990');
// var dayofMonth = dtC.getDate();
// dtC.setDate(dayofMonth-1);
// //1 gün öncesi 31 Aralık 1989 yazar.
// console.log(dtC);

//iki tarih rasında geçen süre
/*
var start = new Date ('1/1/1990');
var end = new Date('1/1/1991');

var milisecond = end - start;
var saniye = milisecond/1000;
var dakika = saniye/60;
var saat = dakika/60;
var gün = saat/24;

console.log('milisecond:'+milisecond);
console.log('saniye:'+saniye);
console.log('dakika:'+dakika);
console.log('saat:'+saat);
console.log('gün:'+gün);*/
















