import React, { useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image, TextInput, ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../assets/color/color';
import { customInputStyle } from '../assets/styles/styles';
import ImagePicker from 'react-native-image-crop-picker';
import { API_URL } from '../constant';
import axios from 'axios';

const EditProduct = ({route,navigation}) => {

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const editProduct = route.params.productlist
    const selectImage = async () => {
        try {
            ImagePicker.openPicker({
                width: 300,
                height: 400,
            }).then(response => {
                setImage(response.path)
            });
        } catch (err) {
            throw err
        }
    }

    const _editProduct = async () => {
        var formData = new FormData();
        formData.append('id', editProduct.id);
        formData.append('name', productName);
        formData.append('price', productPrice);
        formData.append('img',{
            uri: image,
            name: `${Math.ceil(Math.random()*100000)+1}`,
            type: 'image/jpg',
        });
        setLoading(true)
          const config = { headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }}
        await axios.put(`${API_URL}items/2`, formData, config,{
        }).then(response => {
           alert(response)
           console.log(response);
           setLoading(false)
        }).catch(error => {
          alert(error)
          console.log("hhh",error);

          setLoading(false)
        })

    }
return(
    <View style={{flex: 1,}}>
        <View style={{height: 80, justifyContent:'center', marginLeft: 20}}>
        <Ionicons onPress={() => navigation.goBack() }
        name={'arrow-back'} color={'#000'} size={20}
        />   
        </View>
        <View style={{width:'80%', alignSelf:'center', marginTop: 20, elevation: 10, shadowColor:'#000', backgroundColor:'#fff', borderRadius: 10, height:'70%', justifyContent:'center'}}>
            <Text style={{fontSize: 15, marginTop: 10, textAlign:'center', fontWeight:'bold'}}>Edit Product</Text>
        {loading ? <ActivityIndicator size={'small'} color={'#000'} /> :
        <ScrollView style={{marginTop: 20}}>
            <TextInput
            placeholder={editProduct.name}
            style={customInputStyle.inputStyle}
            onChangeText={(val) => setProductName(val)}
            />
            <TextInput
            placeholder={editProduct.price}
            style={customInputStyle.inputStyle}
            keyboardType={'decimal-pad'}
            onChangeText={(val) => setProductPrice(val)}            
            />
            <TouchableOpacity onPress={() => selectImage()}
            style={{width:'80%', alignSelf:'center'}}>
            {image ? <Image source={{uri: image}}
            style={{height: 100, marginTop: 15, width: 100, borderRadius: 10, backgroundColor:'pink'}} />: 
            <Image source={{uri: `${API_URL}`+ editProduct.img}}
            style={{height: 100, marginTop: 15, width: 100, borderRadius: 10, backgroundColor:'pink'}} />
            }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => _editProduct()} 
            style={{height: 40, width: '70%', backgroundColor:'#000', 
            borderRadius: 10, alignSelf:'center', marginTop: 30, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'#fff', fontSize: 15}}>Edit Product</Text>
            </TouchableOpacity>
        </ScrollView>
}
        </View>

    </View>
)
}
export default EditProduct;