


function Car(props){ //props özel bir kelmime
    return <h2> I am a {props.brand} </h2> // ,{props.model} 2. parametre olsaydı 
   }
   
   function Garage(){
     
     return (
     <>
         <h1> Who is that? </h1>
         <Car  brand="BMW"/>   // parametre geçirdik
     </>
     );
   }
   
   
   ReactDOM.render(<Garage />,mountNode)


   //2.
   function Car({brand,model}){
    return <h2> I am a {brand} {model} </h2> //object destructuring
   }
   
   function Garage(){
     
     return (
     <>
         <h1> Who is that? </h1>
         <Car brand="BMW" model="X7"/>
     </>
     );
   }
   
   
   ReactDOM.render(<Garage/>,mountNode)


   //ikisi de function ve html return ediyorlar dolayısıyla componentler