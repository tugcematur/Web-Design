import React from 'react';
import './App.css';
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";

function App(){
const UserContext = createContext();

function Component1(){
  const [user,setUser] = useState("tarık");
  
  
  
  return(
  <UserContext.Provider value={user}>
      <h3> {`Hello ${user}!`}</h3>  
      <Component2 user={user}/>
     </UserContext.Provider>
  );
}


function Component2(){
 
  return(
    <>
        <h2> Component 2</h2>  
      <Component3/>
     </>

       

  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}


function Component5() {
  const user = useContext(UserContext);   // en son buna aktarılmasını istiyorum , context bilgisini çektiğim satır

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}


ReactDOM.render(<Component1 />, document.getElementById("root"));
return(

  <div className="App">
    <header className="App-header">
      <p>

      </p>
    </header>
  </div>
);
}
export default App;

//https://stackoverflow.com/questions/60544578/android-intel-x86-emulator-accelerator-haxm-installer-revision-7-5-6-upda