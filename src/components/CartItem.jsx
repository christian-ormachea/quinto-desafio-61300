import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';

const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTextos}>
        <Text style={styles.textTitle}>{item.title}</Text>
        <Text style={styles.textBrand}> {item.brand} </Text>
        <Text style={styles.textPrice}> ${item.price} </Text>
      </View>
      <AntDesign name="delete" size={45} color="black" />
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: colors.azulDelMedio,
      borderWidth: 1,
      borderColor: colors.azulClaro,
      padding: 10,
      margin: 10,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
    },
    containerTextos: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
    textTitle:{
        width: '70%',
        fontSize: 25,
        color: colors.beige,
    },
    textBrand: {
      fontSize: 20,
      color: colors.beige,
    },
    textPrice: {
      fontSize: 17,
      color: colors.beige,
      marginVertical: 5,
    },
    image: {
      width: '30%',
      minWidth: 60,
      minHeight: 60,
    }
})