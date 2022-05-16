let x= 100;
let y =200;
//Eski
function topla(a,b){
  return  a+b
}

 document.getElementById('demo').innerHTML=  topla(100,200)



 //Yeni
const topla2 = (a,b) =>  a+b;
var toplam = topla2(100,100)

document.getElementById('demo2').innerHTML=  toplam
