async function  task1  ()   {
    
  await   setTimeout(() => {
        console.log("Görev 1 bitti")
    }, 10000);                            //5000ms 5 sn bekler sonra çalıştırır
   
}


async function task2(){
  await   console.log("Görev 2 bitti")
}




async function allTask(){    // Bu kod çalışmıyor, ama eğe çalışsaydı önce task1 bekleyecek Görev 1 bitti yazacak sonra Görev 2 bitti yazacak.Yani Asenkronu Senkrona çeviriyoruz.
await task1()
await task2()
}


//Son javascript Hali
/* const  task1 = () =>  {
    
    await   setTimeout(() => {
          console.log("Görev 1 bitti")
      }, 10000);                            //5000ms 5 sn bekler sonra çalıştırır
     
  }

const  task2 = () =>{
    await   console.log("Görev 2 bitti")
  }
  
  

const allTask = () =>{
await task1()
await task2()
}
 */

allTask()
