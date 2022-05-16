
import React from 'react'
import './App.css'; // import etmeliyiz bunu her zaman

class App extends React.Component {
  constructor(props) {
    super(props) // c# ta base() üst sınıfın özelliklerini çağırıyoruz
    this.state = {m : "İlk Mesajaa"}  // state değişkeni tanımladık
    console.log("constructor calisti")
  }

// Life Cycle 

  componentDidMount() { // tüm compnent render edildiğinde çallışıyor     , F12 deki console a yazdı 
    console.log("componentDidMount calisti");
    this.setState({m: "Merhaba Dünya"});  // state i  değiştirdik
  }

  // UNSAFE_componentWillMount() {

  //   console.log("componentWillMount calisti")
  // }

  shouldComponentUpdate(nextProps, nextState) {

    console.log("shouldComponentUpdate calisti");
    return true;
    // return false; çalışmasını iptal etmek için 
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate calisti");
  }


  render() {                            //App.css ten geliyor className ler 
    console.log("render calisti");
    return (
      <div className='App'>

        <header className="App-header">
          <p>{this.state.m}</p>
        </header>

      </div>
    )
  }
}
export default App;


// kolay yol rfc + tab  , rcc  + tab 