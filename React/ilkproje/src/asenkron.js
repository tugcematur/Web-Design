let isim ;
setTimeout(() => {
    isim = "Tuğçe";
    console.log(asyncOrnek());
},3000);

function asyncOrnek () {
  return `asyncOrnek() fonksiyonu çalıştı ve isim değişkenin değeri: ${isim}`
}

console.log(asyncOrnek());