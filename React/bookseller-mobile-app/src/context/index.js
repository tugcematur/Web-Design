import React , {useContext, useReducer, createContext} from  "react";

const BooksellerContext = createContext();

//kitaplar var boş iki arrayimiz var ,book yok çünkü  book:{} çünkü düzenleme yapmıcaz
const initialState = {
    books:[],
    carts:[],

};


const reducer = (state, action) => {

    switch(action.type){
        case "FETCH_BOOKS": 
             return  {...state, books: action.payload};
        case "FETCH_CARTS":
            return {...state, carts: action.payload};  // state e initialState değerini vericez 
            default:
                return state;     
    }


}


const BooksellerProvider = (props) => {
  const [state,dispatch] = useReducer(reducer,initialState)
    
    return(
        <BooksellerContext.Provider value= {[state, dispatch]}>
            {props.children}
        </BooksellerContext.Provider>
    );
}


export {BooksellerContext,BooksellerProvider,useContext}