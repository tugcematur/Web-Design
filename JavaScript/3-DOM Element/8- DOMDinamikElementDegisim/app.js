const table = document.getElementById('table');
let element
 element =  table
 element = element.classList

 table.classList.add("table-danger")
 table.classList.add("table-bordered")
 table.classList.remove("table-bordered")

 link = document.getElementById("link")
 element = link;
 element = link.getAttribute("href")
 link.setAttribute("href","https://www.w3schools.com/")   // direk setAttribute() ile değiştirilebilir.



 element = link.hasAttribute("class")  //true ya da false döner , class diye bir Attribute i var mı onu kontrol edyor.

 console.log(element)