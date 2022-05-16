import React,{Component} from 'react';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import CategoryList from './pages/CategoryList';
import Navi from './pages/Navi';
import ProductList from './pages/ProductList';

//PROPS ve STATE = bir component e özel data tutmak istiyorsak veri yönetimi için kullanılır



export default class App extends Component {
  //fonksiyon içinde olmadığı için let keywordünü kullanamıyoruz 
  //this ekleyebilirsin veya render metodunun içine de yazabilirsin

  state = {currentCategory:""}

  titleProduct = "Product List";
  categoryInfo = { title: "Category List", baskaBirsey: "birsey" } // react nesnesi

  changeCategory = (cat) => {

    this.setState({ currentCategory: cat.categoryName })

}

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={this.categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList title={this.titleProduct} /> {/*title="Product List" */}
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}


// function App() {
//   // let titleCategory = "Category List";
//   let titleProduct = "Product List";
//   let categoryInfo ={title:"Category List", baskaBirsey:"birsey"} // react nesnesi
//   return (
//     <div>
//       <Container>
//     <Row>
//       <Navi/>
//     </Row>
//     <Row>
//       <Col xs="3">
//       <CategoryList info={categoryInfo}/>
//       </Col>
//       <Col xs="9">
//      <ProductList title={titleProduct} /> {/*title="Product List" */}
//       </Col>
//     </Row>
//       </Container>

//     </div>
//   );
// }

// export default App;
