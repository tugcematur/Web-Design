import {TouchableOpacity} from  "react-native";
import React from "react";
import {Icon} from "@expo/vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

export default function CartIcon(){


    const navigation = useNavigation();
    
    return(

        <TouchableOpacity
        onPress={() => navigation.navigate("Cart")} //javascript kodu JSX içinde 
        style = {{marginRight: 10}}> {/* içteki obje olmasından dolayı inline ifade dışarıdan bir style ekkleseydik tek süslü olacaktı*/}
            <Icon name="ioscart" size={25} color="black" />
        </TouchableOpacity>
    )
}

