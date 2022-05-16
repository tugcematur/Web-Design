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
import { BookSellerContext, BooksellerProvider, useContext } from "../context";
import { useNavigation } from "@react-navigation/native";




export default function Carts() {

    const [state, dispatch] = useContext(BookSellerContext);
    const navigation = useNavigation();


    function fetchCart() {
        axios
            .get("https://api-bookseller-herokuapp.com/carts")
            .then((response) => {
                dispatch({
                    type: "FETCH_CARTS",
                    payload: response.data
                });
            });

    }

    function removeCart(id) {
        axios
            .delete(`https://api-bookseller-herokuapp.com/carts/${id}`)
            .then((res) => {
                fetchCart();
            });
    }

    function goToBook() {
        navigation.navigate("Book") // name = "Book" App.js te sayfa adı 
    }

    useEffect(() => {
        fetchCart()
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                ItemSeparatorComponent={Seperator}
                ListEmptyComponent={ //boş geldiğinde yazıcak olan şeyler
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>Cart is empty!</Text>
                        <TouchableOpacity onPress={() => goToBook()} style={styles.button}>
                            <Text style={styles.buttonText}>Go to Books</Text>
                        </TouchableOpacity>
                    </View>
                }
                keyExtractor={(item, index) => item.id + index}
                data={state.carts}



                renderItem={({ item, index }) => (
                     <View style={styles.itemContainer}>
                         <Image source={{ uri: iem.imgUrl }} style={styles.image} />
                     <View style={{ padding: 10 }}>
                             <Text style={styles.name}>item.name</Text>
                             <Text style={styles.author}>item.author</Text>
                             <View style={styles.buttonContainer}>
                                 <TouchableOpacity onPress={() => removeCart(item.id)} style={styles.button}>
                                     <Text style={styles.buttonText}>Remove -</Text>
                                 </TouchableOpacity>

                             </View>
                         </View>
                    </View>
                )}
            />
        </View>

    );

}


const styles = StyleSheet.create({

    container: { flex: 1, backgroundColor: "#fff" },
    itemContainer: { flexDirection: "row", padding: 10 },
    image: { width: 100, height: 150 },
    name: { fontSize: 22, fontWeight: "400", marginBottom: 10 },
    author: { fontSize: 18, fontWeight: "200" },
    buttonContainer: {
        position: "absolute",
        top: 110,
        left: 10
    },
    button: {
        backgroundColor: "red",
        borderRadius: 10,
        padding: 7

    },
    buttonText: { fontSize: 20, color: "#fff" },
    emptyContainer: {
        marginTop: 250,
        alignItems: "center",
        justifyContent: "center"
    },
    emptyText: { fontSize: 30 }


})

