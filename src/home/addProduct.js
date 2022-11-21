import React, { useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../assets/color/color';
import { customInputStyle } from '../assets/styles/styles';
import ImagePicker from 'react-native-image-crop-picker';
import { API_URL } from '../constant';

const AddProduct = (props) => {

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [image, setImage] = useState('')
    const [laoding, setLoading] = useState(false)
   
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

    const _addProduct = async () => {
        if (!productName) {
            alert('Enter product name')
        } else if(!productPrice){
            alert('Enter product price!')
        } else if (!image) {
            alert('Select an image!')
        } else {
            setLoading(true)
        var formData = new FormData();
        formData.append("name", productName)
        formData.append("price", productPrice)
        
        formData.append("img", {
            uri: image,
            name: `${Math.ceil(Math.random()*100000)+1}`,
            type: 'image/jpg',
        })

        fetch(`${API_URL}items/`, {
            method: 'post',
            body: formData
        }).then((res) => res.json())
            .then(async (res) => {
                setLoading(false)
                props.handleModal()
            }).catch(error => {
                // alert(error)
                setLoading(false)
                console.log("error", error)
            })
    }
    }
return(
    <View style={{flex: 1,}}>
        <View style={{height: 80, justifyContent:'center', marginLeft: 20}}>
        <Ionicons onPress={() => props.setIsModal(false) }
        name={'arrow-back'} color={'#000'} size={20}
        />   
        </View>
        <View style={{width:'80%', alignSelf:'center', marginTop: 20, elevation: 10, shadowColor:'#000', backgroundColor:'#fff', borderRadius: 10, height:'70%', justifyContent:'center'}}>
            <Text style={{fontSize: 15, marginTop: 10, textAlign:'center', fontWeight:'bold'}}>Add Product</Text>
        <ScrollView style={{marginTop: 20}}>
            <TextInput
            placeholder={'Enter product name'}
            style={customInputStyle.inputStyle}
            onChangeText={(val) => setProductName(val)}
            />
            <TextInput
            placeholder={'Enter product price'}
            style={customInputStyle.inputStyle}
            onChangeText={(val) => setProductPrice(val)}            
            />
            <TouchableOpacity onPress={() => selectImage()}
            style={{width:'80%', alignSelf:'center'}}>
            {image ? <Image source={{uri: image}}
            style={{height: 100, marginTop: 15, width: 100, borderRadius: 10, backgroundColor:'pink'}} />: 
            <Image source={require('../assets/images/coffee.png')}
            style={{height: 100, marginTop: 15, width: 100, borderRadius: 10, backgroundColor:'pink'}} />
            }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => _addProduct()} 
            style={{height: 40, width: '70%', backgroundColor:'#000', 
            borderRadius: 10, alignSelf:'center', marginTop: 30, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'#fff', fontSize: 15}}>Add Product</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>

    </View>
)
}
export default AddProduct;