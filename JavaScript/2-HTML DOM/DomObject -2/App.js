let value;

value= document;

//Scripts
value = document.scripts

value = document.scripts.length
value=document.scripts[0]


//Links value= document.links;     // <a> etiketini bulur
value = document.links[0]
value = document.links[document.links.length-1]
value = document.links[document.links.length-1].getAttribute("class")
value = document.links[document.links.length-1].getAttribute("href")
value = document.links[document.links.length-1].className;
value = document.links[document.links.length-1].classList;
 

//Forms

value = document.forms  // default tip var

value = document.length
value= document.forms[0]
value= document.forms["form"]
value=  document.forms[0].id
value = document.forms[0].getAttribute("id")
value=  document.forms[0].name
value = document.forms[0].getAttribute("name")
value = document.forms[0].method




console.log(value)