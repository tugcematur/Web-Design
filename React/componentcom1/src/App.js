import './App.css';
import Comp1 from "./components/Comp1.js"
import Personel from './components/Personel';
import Comp2 from "./components/Comp2.js"

const name = "Tuğçe";  // global değişken de olabilir
const plist =[
  {Ad: "Tuğçe",Soyad:"Matur"},
  {Ad:"Cemre", Soyad:"Isitan"}
]


function App() {
  // const name = "Tuğçe";
  return (
    <>
      <Comp1 name={name} />
      <Personel PerList={plist}/>
      <Comp2  merhaba={hello} />
    </>
  );
}

function hello(isim) {
  console.log(`Merhaba ${isim} `)
}


export default App;
