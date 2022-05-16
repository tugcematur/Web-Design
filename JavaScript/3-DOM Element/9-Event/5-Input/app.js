inputdrink = document.getElementById("ad")

inputdrink.addEventListener("focus", log)
 inputdrink.addEventListener("blur", log)
 inputdrink.addEventListener("paste", log)
inputdrink.addEventListener("copy", log)
inputdrink.addEventListener("cut", log)
inputdrink.addEventListener("select", log)    // inputtaki metini  select all

function log(e) {
    console.log(e.type)
  //  console.log(document.getSelection())
   
}



/* .keydown() metodu bir klavye tuşuna basıldığı zaman çalışır.
.keyup() metodu ise bir klavye tuşundan parmak kaldırıldığı zaman çalışır. Örneğin;
.keypress() metodu ise bir klavye tuşu basılı tutulduğu sürece çalışır. Klavye tuşuna basma anını temsil eder. */