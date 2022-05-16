// element = document.querySelector("#link")
// console.log(element)
// console.log(element.id)
// console.log(element.className)
// console.log(element.classList)
// console.log(element.classList[1])
// console.log(element.textContent)     //textContent ile innerHTML arasında fark var
// console.log(element.innerHTML)
// console.log(element.href)
// console.log(element.style)



// element.className ="btn btn-warning"
// element.style.backgroundColor =  'white'
// element.style.marginLeft ="100px"
// element.href ="www.google.com"
// element.target = "_blank"       //yen bir boş sayfa açar
// element.innerHTML = "<h3 style='color:red'>deneme</h3>"
// var elements = document.querySelectorAll(".list-group-item")


// elements.forEach(element =>{       //For-Each Döngüsü
//     element.style.color='red'
//     element.style.background = '#000'
// });
// /* 
// element = document.querySelector("li:first-child")
// element = document.querySelector("li:last-child") */                                     
// element = document.querySelector("li:nth-child(2)")    // Kaçıncı list ise o gelir, 2inci Çay gelir
// /* element = document.querySelector("li:nth-child(odd)")  //çift olanlar
//  */
// console.log(element)


ilk = document.querySelector("li:first-child").innerHTML = "hey"
