//drinkList = document.querySelectorAll("#drinktable")[0]  /*     class'ta .  ; id den bulmak istersek # */

document.addEventListener("click",log)                  /* formun üstüne gelince çalışacaklar */
document.addEventListener("dbclick",log)
document.addEventListener("mousedown",log)
document.addEventListener("mouseup",log)
document.addEventListener("mouseover",log)   //addEventListener("eventname",functionname)
document.addEventListener("mouseout",log)
document.addEventListener("mouseenter",log)
document.addEventListener("mouseleave",log)


function log(e)
{
  console.log(e.type)
}