import {
    View,
    Text,
    StyleSheet,
    FlatList, // ScrollView dan daha hızlı response veriyor , listeleniyor
    Image,
    TouchableOpacity
} from "react-native";
import React, { useEffect } from "react";
import Seperator from "../component/Seperator";
import axios from "axios";
import { BookSellerContext, useContext } from "../context";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


export default function Books({ navigation }) {


    const [state, dispatch] = useContext(BookSellerContext);


    function _renderItem(item, index) {

        return (
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image
                    source={{ uri: item.imgUrl }}
                    style={styles.image}
                />
                <View style={{ padding: 10 }}>
                    <Text style={styles.name}>item.name</Text>
                    <Text style={styles.author}>item.author</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={(() => addToCart(item))}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Add +</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        )

    }

    addToCart = (cartItem) => {
        delete cartItem.id; // sepete attığımız şey görünmesin diye
axios
.post("https://api-bookseller-herokuapp.com/carts",cartItem)
.then((response) => {}) //dönen response lile bir şey yapmıcam anlamına geliyor
    }


    useEffect(() =>{
      axios
      .get("https://api-bookseller-herokuapp.com/books")
      .then((response) => {
          dispatch({type: "FETCH_BOOKS", 
                    payload:response.data
                });
      })

    },[]) //her render da çalışması için parametre vermicez(yazdığımız şeyleri göremeyiz,sürekli render ettiği için ) ama bir kez çalışsın istiyorsak [] parametresi vericez 


    return(

        <View style = {styles.container}>
            <FlatList
            data={state.books}
            renderItem = {({item,index}) => _renderItem(item,index)}
            keyExtractor = {(item) => item.id}
            ItemSeparatorComponent = {Seperator}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: { flex: 1, backgroundColor: "#fff" },
    image: { width: 100, height: 150 },
    name: { fontSize: 22, fontWeight: "400", marginBottom: 10 },
    author: { fontSize: 18, fontWeight: "200" },
    buttonContainer: {
        position: "absolute",
        top: 110,
        left: 10
    },
    button: {
        backgroundColor: "#24a0ed",
        borderRadius: 10,
        padding: 7

    },
    buttonText: { fontSize: 20, color: "#fff" }


})
