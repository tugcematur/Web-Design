function task1(){
    setTimeout(() => {
        console.log("Görev 1 bitti")
    }, 10000);                            //5000ms 5 sn bekler sonra çalıştırır
   
}

function task2(){
    console.log("Görev 2 bitti")
}

task1()
task2()