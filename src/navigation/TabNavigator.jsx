import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from '../navigation/ShopStack';
import CartStack from './CartStack';
import OrdersStack from './OrdersStack';
import { colors } from '../global/colors';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}>
            <Tab.Screen name="ShopStack" component={ShopStack} options={{
                tabBarIcon: ({focused})=> {
                    return (
                        <View style={styles.iconContainer}> 
                            <Entypo name="shop" size={24} color='black' />
                            <Text style={styles.textoIcono}> Shop </Text>
                        </View>
                        
                    )
                }
            }}/>
            <Tab.Screen name="CartStack" component={CartStack} options={{
                tabBarIcon: ({focused})=> {
                    return (
                        <View style={styles.iconContainer}> 
                            <FontAwesome name="list" size={24} color="black" />
                            <Text style={styles.textoIcono}> Carrito </Text>
                        </View>
                    )
                }
            }}/>
            <Tab.Screen name="OrdersStack" component={OrdersStack} options={{
                tabBarIcon: ({focused})=> {
                    return (
                        <View style={styles.iconContainer}> 
                            <AntDesign name="shoppingcart" size={24} color="black" />
                            <Text style={styles.textoIcono}> Ordenes </Text>
                        </View>
                        
                    )
                }
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.beige,
        height: 70,
        elevation: 4,
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        borderRadius: 15,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoIcono:{
        fontSize: 15,
        fontFamily: 'Regular'
    }
})