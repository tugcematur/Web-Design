let value

const drinks = document.querySelector(".list-group")
const  cay = document.querySelector(".list-group-item:nth-child(2)")

// value = drinks
//value = cay
// value = drinks.childNodes // text dahil
  value = drinks.children // yanlızca elementler
 value = drinks.children[1] 
 console.log(value)
value = drinks.firstElementChild
 value = drinks.lastElementChild
  value = drinks.children.length
 value = drinks.childElementCount
 console.log(value)
 drinks.children[1].textContent = "Yeşil Çay"

 const container = document.querySelector(".table").children[1].children[1].children[2].textContent ="Meksika"  // elementlerin indidsi 0'dan başlıyor
 value = container

value = drinks.parentElement.parentElement.parentElement.nodeName
console.log(value)
value = drinks.parentElement.parentElement.parentElement
console.log(value)
value = drinks.parentElement.parentElement
console.log(value)
value = drinks.parentElement
console.log(value)
value = drinks.parentElement.nodeName
//  value = drinks.children[1].previousElementSibling
//  value = drinks.children[1].nextElementSibling
console.log(value)