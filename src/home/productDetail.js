import React, { useEffect } from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { API_URL } from "../constant";
import Ionicons from 'react-native-vector-icons/Ionicons'
const ProductDetail = ({route, navigation}) => {
    const product = route.params.productlist

return(
    <View style={{flex:1}}>
        <View style={{height: 250,  width: '100%',alignSelf:'center'}}>
        <Image style={{height: 250, alignSelf:'center', justifyContent:'center', width: 200,}} 
        source={{uri: `${API_URL}` +product.img}}/>
        <Ionicons style={{position:'absolute', marginTop: 10}}
         onPress={() => navigation.goBack() }
        name={'arrow-back'} color={'#000'} size={20}
        /> 
        </View>
        <View style={{flex:1, width:'100%', alignSelf:'center', elevation: 10, shadowColor:'#000', borderTopLeftRadius: 20, borderTopRightRadius:20, bottom: 10, backgroundColor:'#fff'}}>
            
            <Text style={{marginLeft: 20, fontSize: 15, marginTop: 5}}>Name: {product.name}</Text>
            <Text style={{marginLeft: 20, fontSize: 15, marginTop: 5}}>Price: {product.price}</Text>
        </View>
    </View>
)
}
export default ProductDetail