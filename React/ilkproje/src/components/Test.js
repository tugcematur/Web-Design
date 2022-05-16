import React from 'react'
var a =5;
 //tek bir parent node içinde olmalı  return edilenler, <> </> veya <Fragment></Fragment> içinde de olabilir
 //{} içine tek bir expression yazabilirim, örneğin if yazarsam hata vericek
 // && ve & farkı short circuit AND  The && and || operators are short circuit operators.

 //<div>{condition && expression}</div>      
 //ctrl c ile projeyi sonlandırırsın tam olarak 
const Test = () =>  {


    return(
        <>
        <div>Test Component</div>
        <div>{a == 5 ? a++ : a--}</div>   
                                
        </>
    )
}

const abc = 3;
export default Test; // default export
export{abc} // name export