
const sayilar = new Array() // eski yötem
sayilar[0] = "sifir";
sayilar[1] = "bir";
sayilar[2] = "iki";
sayilar[3] = "üç";
console.log(sayilar)


let x =[10,20,30]
console.log(x)

x  = [...x,50]
console.log(x)





let a = [10,20,30,40]
a = [...a, a.filter(a=> a<20)]
console.log(a)

akucuk30 = a.filter(x=> x<30)  //a dizisine ekle
console.log(akucuk30)

//bos dizi tanımı

bos = ["Ali"]
console.log(bos)
bos = {"id":1, "ad":"Ali"}
console.log(bos)


//Liste
ogrenciler =[
    {"id":1, "ad":"Ali"},
    {"id":2, "ad":"Tuğçe"}

]
console.log(ogrenciler)


yogrenci ={"id":3, "ad":"Cemre"}
ogrenciler = [...ogrenciler,yogrenci]
console.log(ogrenciler)