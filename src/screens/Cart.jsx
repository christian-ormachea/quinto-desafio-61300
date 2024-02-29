import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import allCartItems from '../data/cart.json'
import CartItem from '../components/CartItem';
import { colors } from '../global/colors';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = allCartItems.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0)
    setTotal(totalPrice)
    setCartItems(allCartItems)
  }, []); 

  return (
    <View style={styles.container}>
      <FlatList
      data={cartItems}
      renderItem={({item}) => <CartItem item={item}/>}
      keyExtractor={(cartItem) => cartItem.id}
      />
      <Text style={styles.total}> Total: ${total} </Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.azulClaro,
  },
  total: {
    marginBottom: 90,
  }
})