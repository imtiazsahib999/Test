import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { customHeaderStyle } from "../assets/styles/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../assets/color/color";

const CustomInput = (props) => {
return(
    <View style={customInputStyle.header}>
        {/* <Ionicons name="menu" size={30} color={COLORS.SECONDARY_COLOR} /> */}

    </View>
)
}
export default CustomInput;