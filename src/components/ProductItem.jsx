import { StyleSheet, Text, View, Image, useWindowDimensions, Pressable } from 'react-native'
import { colors } from '../global/colors'
import Card from '../components/Card'
import React from 'react'

const ProductItem = ({product, navigation}) => {
  const {width, height} = useWindowDimensions();



  return (
    <>
      <Pressable onPress={()=> navigation.navigate("ItemDetail", {id: product.id})}>
        <Card style={styles.container}>
              <Text style={width < 400 ? styles.textMin : styles.text}> {product.title} </Text>
              <Image style ={styles.image} source={{uri: product.images[0]}}/>
        </Card>
      </Pressable>
    </>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor: colors.azulDelMedio,
      borderWidth: 1,
      borderColor: colors.azulClaro,
      paddingVertical: 10,
    },
    text:{
        width: '70%',
        fontSize: 25,
        color: colors.beige,
    },
    textMin: {
      width: '70%',
      fontSize: 15,
      color: colors.beige,
      
    },
    image: {
      width: '30%',
      minWidth: 60,
      minHeight: 60,
    }
})