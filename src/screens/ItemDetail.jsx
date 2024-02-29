import { Image, StyleSheet, Text, View } from 'react-native'
import allProducts from '../data/products.json'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import { colors } from '../global/colors';

const ItemDetail = ({navigation, route}) => {
    const [product, setProduct] = useState(null);
    const {id} = route.params;



    useEffect(() => {
        const productFinded = allProducts.find((product) => product.id === id);
        setProduct(productFinded);
    },[id])

    return (
        product ? (
            <View style={styles.container}>
                <Image style={styles.image}source={{uri:product.images[0]}}/>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.text}> {product.description} </Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.price}> ${product.price} </Text>
                    <Text style={styles.buy}> Comprar </Text>
                </View>
            </View>
        ) : (
            <Text> Cargando ... </Text>
        )
    ) 
        
    
}

export default ItemDetail

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.azulClaro,
    },
    image:{
        marginVertical: 12,
        width: '100%',
        minWidth: 400,
        minHeight: 400,
        maxHeight: 500,
        maxHeight: 500,
    },
    title:{
        textAlign: 'center',
        fontSize: 25,
        color: colors.beige,
        fontFamily: 'Bold',
    },
    text: {
        margin: 10,
        fontSize: 18,
        color: colors.beige,
        fontFamily: 'Regular',
        textAlign: 'left'
    },
    buy: {
        borderWidth: 1,
        borderColor: colors.beige,
        borderRadius: 10,
        color: colors.beige,
        marginLeft: 10,
        padding: 5,
        fontSize: 18,
        backgroundColor: colors.azulClaro,
    },
    priceContainer:{
        marginTop: 20,
        alignItems: 'flex-start',
    },
    price:{
        marginBottom: 5,
        textAlign: 'center',
        fontSize: 25,
        color: colors.beige,
        fontFamily: 'Bold',
    },
})