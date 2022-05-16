 function task1(callback,callback2){           //  JavaScriptte fonksiyonlar parametre olarak aktarılabilir
 setTimeout(() => {
        console.log("Görev 1 bitti")
        callback()     //task2 yi de ba-ekletir
        callback2()
    }, 10000);    
        //  callback()             //task2 1 ms task1 arka planda çalışıyor. önce task2 sonra task1 çalışır
}

function task2(){
    console.log("Görev 2 bitti")
}

task1(task2)                              //callback parametresi = task2    Birden fazla parametre tanımlanabilir


function task3(){
    console.log("Görev 3 bitti")
}

task1(task2,task3)