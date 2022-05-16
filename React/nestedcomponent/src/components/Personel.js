import React from 'react'
import Confirm from './Confirm'

export default function Personel({ plist }) {
  console.log(plist)
  return (
    <div>
      <ol>
        <Confirm>
          {/* <li>{plist[0].name}- {plist[0].surname} -{plist[0].maas}</li> 
          </Confirm>
          <Confirm>
          <li>{plist[1].name} - {plist[1].surname} - {plist[1].maas}</li> */}

          {/* const num = [3,8,11,7,5]
          const num2x = num.map((n) => n*2) ; */}


         { plist.map(p => (
          <Confirm>
            <li>{p.name}</li>
          </Confirm>

          ))}



        </Confirm>
        {/* //props.children olarak çağırırken buradan hangi verinin gelmesini istediğimizi belirliyoruz  */}
      </ol>
    </div>
  )
}

{/* <ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>   

1.Coffee
2.Tea
3.Milk */}