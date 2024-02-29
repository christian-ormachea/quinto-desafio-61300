import { FlatList, StyleSheet, Text, View } from 'react-native'
import allOrders from '../data/orders.json'
import React from 'react'
import OrderItem from '../components/OrderItem'
import { colors } from '../global/colors'

const Orders = () => {
  return (
    <View style={styles.container}>
        <FlatList
        data={allOrders}
        renderItem={({item}) => <OrderItem item={item}/>}
        keyExtractor={(item) => item.id}
        />
    </View>
    
  )
}

export default Orders

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.azulClaro,
    }
})