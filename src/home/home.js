import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Modal, Image, FlatList } from "react-native";
import { homeStyle } from "../assets/styles/styles";
import { API_URL } from "../constant";
import Ionicons from 'react-native-vector-icons/Ionicons'
import AddProduct from "./addProduct";
const Home = ({ navigation }) => {

    useEffect(() => {
        _getProduct()
    }, [])

    
    const [isModal, setIsModal] = useState(false)
    const [product, setProduct] = useState([])

    const _getProduct = async () => {
        try {
            await axios.get(`${API_URL}items/`)
                .then((response) => {
                    // handle success
                    console.log(response.data);
                    setProduct(response.data)
                })
                .catch((error) => {
                    // handle error
                    alert(error);
                })
        } catch (error) {
            alert("Error", error)
        }
    }
    const _getItem = async (id) => {
        try {
            await axios.get(`${API_URL}items/`+id)
                .then((response) => {
                    // handle success
                    navigation.navigate('productDetail',{productlist: response.data})                })
                .catch((error) => {
                    // handle error
                    alert(error);
                })
        } catch (error) {
            alert("Error", error)
        }

    }
    const handleModal = () => {
        setIsModal(!isModal)
    }

    const _deleteProduct = async (id) => {
        await axios.delete(`${API_URL}items/${id}`)
        .then((response) => {
            _getProduct()
            console.log(response);
        })
        .catch((error) => {
            // handle error
            alert(error);
        })
    }

    return (
        <SafeAreaView style={homeStyle.container}>
            <FlatList
                data={product}
                style={{ height: '60%', bottom: 5, }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => _getItem(item.id)}
                         style={homeStyle.listStyle}>
                            <View style={{height: 80, width:'40%'}}>
                                <Text style={{ color: '#000', fontSize: 15 }}>Name: {item.name}</Text>
                                <Text style={{ color: '#000', fontSize: 15 }}>Price: {item.price}</Text>
                            </View>
                            <Image style={{ height: 100, width: 100, marginLeft: 10 }} source={{ uri: `${API_URL}` + item.img }} />
                            <View style={{flexDirection:'row', marginLeft: 10}}>
                            <Ionicons onPress={() => navigation.navigate('editProduct',{productlist: item})}
                            name="pencil" size={20} color={'#c0c0c0'} />
                            <Ionicons onPress={() => {_deleteProduct(item.id)}}
                            style={{marginLeft: 5}}
                             name="trash" size={20} color={'#c0c0c0'} />

                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
            <Ionicons onPress={() => handleModal()}
                style={homeStyle.addBtn}
                name='add-circle'
                size={60}
                color={'#000'}
            />
            
            <Modal
                visible={isModal}
                // transparent
                animationType='slide'
                // onRequestClose={handleModal()}
            >
            <AddProduct setIsModal={setIsModal} handleModal={handleModal}  />
            </Modal>
        </SafeAreaView>
    )
}
export default Home