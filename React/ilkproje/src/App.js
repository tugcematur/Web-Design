import React from 'react';
import './App.css';

    /* <li>user[0]</li>
    <li>user[1]</li> */

const data = ["Ali", "Veli","Şamil","Tarık"];
function UserList({users}) {
  return (
    <ul>
  
      {users.map(name => {    //JS  Array Map fonksiyonu 
        return <li>{name}</li>

      })}

    </ul>
  );
}

//props kullanırsan

// function UserList(props) {
//   return (
//     <ul>
  
//       {props.users.map(name => {
//         return <li>{name}</li>

//       })}

//     </ul>
//   );
// }
function Renderlist() {

  return (<UserList users={data} />)
}

export default Renderlist;


//Alt shift F