/* The getElementsByTagName() method returns an HTMLCollection object. */


/* A NodeList object is a list (collection) of nodes extracted from a document.
 * A NodeList object is almost the same as an HTMLCollection object.

 * Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().

 * All browsers return a NodeList object for the property childNodes. 

 * Most browsers return a NodeList object for the method querySelectorAll(). */





let element

element = document.getElementById("ok")

element = document.getElementById("ipt")

element = document.getElementsByClassName("list-group-item")

element = document.getElementsByClassName("list-group-item")[0]

element = document.getElementsByTagName("li")


//queryselector 
/* 
element = document.querySelector("#drinks")  // id bazında             idlerin başına # gelir
element = document.querySelector("#ok") 
                                                         // classın başına . gelir
element = document.querySelector(".list-group-item")   //  querySelector daima ilkini alır

 element = document.querySelectorAll(".list-group-item") // Tüm list groupu alır

element.forEach(function(item)  // element bit Collection nesnesi 
{
    console.log(item)
}); */
 // classın başına . gelir

console.log(element) 

document.getElementById('btn').onclick = function(){             // DOM Click Event

    alert("id=btn");
}


/* Examples of HTML events:

* When a user clicks the mouse
* When a web page has loaded
* When an image has been loaded
* When the mouse moves over an element
* When an input field is changed
* When an HTML form is submitted
* When a user strokes a key */