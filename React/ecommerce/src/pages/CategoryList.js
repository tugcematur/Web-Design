import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


export default class CategoryList extends Component {
    constructor(props) {   // Eski versiyonlarda tanımlamak zorunluydu
        super(props); // extend edilen component
        this.state = {
            counter: 1,
            //categories:[] // boş array 
            categories: [   //  obje notasyonu
                { categoryId: 1, categoryName: "Beverages" },
                { categoryId: 2, categoryName: "Condiments" }
            ],
            // currentCategory: ""
        }; // değişken ismi 

    }
    //react ile çalışacaksan Arrow function(aslında bir değşken, fonksiyonlar bir değişken) ile çaışacaksın
    // changeCategory = (cat) => {

    //     this.setState({ currentCategory: cat.categoryName })

    // }

    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                {/* <h3>{this.props.info.baskaBirsey}</h3>
                <h3>{this.state.counter}</h3> */}
                <ListGroup>
                    { //JavaScript çalıştırıcam 
                        // map-> listenin elemanlarını teker teker döner , her bir kategori için bir tane ListGroupItem döner 
                        this.state.categories.map(cat => (

                            // <ListGroupItem>
                            //     Vestibulum at eros   //Sabit bir ifade iki kez alt alta yazar bunu
                            // </ListGroupItem> 


                            //    <ListGroupItem onClick={this.setState({currentCategory:cat.categoryName})} key={cat.categoryId}> {cat.categoryName}</ListGroupItem> // key daha hızlı bulması için      
                            //   <ListGroupItem onClick={ () => this.setState({currentCategory:"abc"})} key={cat.categoryId}> {cat.categoryName}</ListGroupItem>
                            // this.setState() : statedeki herhangi bir nesnenin değiştirilmesini sağlar
                            //  <ListGroupItem onClick={ () => this.setState({currentCategory:cat.categoryName})} key={cat.categoryId}> {cat.categoryName}</ListGroupItem>
                           // <ListGroupItem onClick={() => this.changeCategory(cat)} key={cat.categoryId}> {cat.categoryName}</ListGroupItem>
                           <ListGroupItem onClick={() => this.props.changeCategory(cat)} key={cat.categoryId}> {cat.categoryName}</ListGroupItem>

                        ))}
                </ListGroup>
                {/* <h4>{this.state.currentCategory}</h4> */}
            </div>
        )
    }
}


//Componentler arası veri ve event transferi
//Category List e bir nesneye(category e ) tıkladığımda  bu kategori bilgisinin
//Product Liste de gitmesini istiyorum 
//Ben CategoryList ten ProductList e veri taşıyamam , ama App den onlara veri taşıyabilirim 
//Bunu yapabilmek için : Tek yöntem var , temel reactta ya da Redux  kullanılmayan bir ortamda bunun yapılması zorunlu
// App yi Class Componente çeviricez rcc