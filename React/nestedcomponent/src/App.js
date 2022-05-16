import './App.css';
import Personel from "./components/Personel"
import Confirm from "./components/Confirm"

const plist = [
  { "name": "Tuğçe", "surname": "Matur", "maas": 3000 },
  { "name": "Cemre", "surname": "Işıtan", "maas": 3000 }
]

export default function App() {
  return (
    <div>
      <Personel plist={plist} />

    </div>

  )
}

