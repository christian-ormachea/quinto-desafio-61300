import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'
import Card from '../components/Card'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <>
        <Card style={styles.container}>
            <Text style={styles.text}> {product.title} </Text>
        </Card>
    </>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.azulDelMedio,
      borderWidth: 1,
      borderColor: colors.azulClaro,
    },
    text:{
        fontSize: 25,
        color: colors.beige,
    }
})