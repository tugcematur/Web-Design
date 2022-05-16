drinktable = document.querySelector(".table")

drinktable.addEventListener("click" ,log)

function log(e) {
  console.log(e.target)    // elementin üzerine tıkladığmızdsa etiketini  ekrana basar
}

console.log(drinktable)