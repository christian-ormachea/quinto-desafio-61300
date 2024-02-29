import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Orders from '../screens/Orders'


const Stack = createNativeStackNavigator();

const OrdersStack = () => {
  return (
    <Stack.Navigator initialRouteName='Orders' screenOptions={{header: ()=> <Header title="Ordenes de Compra"/>}}>
        <Stack.Screen name="Orders" component={Orders}/>
    </Stack.Navigator>
  )
}

export default OrdersStack

const styles = StyleSheet.create({})