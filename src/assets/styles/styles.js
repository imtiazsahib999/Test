import { StyleSheet } from "react-native";
import { COLORS } from "../color/color";

export const homeStyle = StyleSheet.create({
    container: {
        flex: 1, 
        // backgroundColor: 'red'
    },
    listStyle: {
        height: 120, 
        width:'90%', 
        alignSelf:'center', 
        borderRadius: 10, 
        backgroundColor: COLORS.PRIMARY_COLOR,
        marginTop: 10,
        shadowColor: COLORS.SECONDARY_COLOR,
        elevation: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    addBtn: {
        position:'absolute', 
        alignSelf:'flex-end', 
        bottom: 20, 
        right: 20
    } 
})
export const customInputStyle = StyleSheet.create({
    inputStyle: {
        height: 40, 
        width:'80%', 
        alignSelf:'center',
        borderRadius: 10, 
        elevation:10, 
        shadowColor:COLORS.SECONDARY_COLOR, 
        padding: 10, 
        backgroundColor: COLORS.PRIMARY_COLOR, 
        bottom: 5, 
        marginTop: 15
    }
})