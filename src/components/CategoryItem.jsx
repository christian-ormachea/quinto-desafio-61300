import { StyleSheet, Text, View, Pressable, } from 'react-native'
import Card from '../components/Card'
import { colors } from '../global/colors'

import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../features/shop/shopSlice'

const CategoryItem = ({category, navigation}) => {
    const dispatch = useDispatch();

    return ( 
        <>
            <Card style={styles.container}>
                <Pressable onPress={() => {
                    dispatch(setCategorySelected(category))
                    navigation.navigate("ItemListCategories", {category})
                }}>
                    <Text style={styles.text}> {category} </Text> 
                </Pressable>
            </Card>
        </>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.azulDelMedio,
        borderWidth: 1,
        borderColor: colors.azulClaro,
    },
    text:{
        fontSize: 23,
        fontFamily: 'Regular'
    }
})