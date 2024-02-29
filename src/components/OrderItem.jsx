import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { Feather } from '@expo/vector-icons';

const OrderItem = ({item}) => {
  const total = item.items.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0)

  return (
    <View style={styles.container}>
      <View style={styles.containerTextos}>
        <Text style={styles.fecha}> {new Date(item.createdAt).toLocaleString()}  </Text>
        <Text style={styles.precio}>Precio total: ${total}</Text>
      </View>
      <Feather name="search" size={35} color="black" />
      
    </View>
  )
}

export default OrderItem

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
    fecha: {
        fontSize: 25,
        fontFamily: 'Bold',
    },
    precio: {
        fontSize: 15,
        fontFamily: 'Bold',
    }
})