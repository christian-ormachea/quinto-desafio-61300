import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../global/colors'
import { AntDesign } from "@expo/vector-icons"
import React, { useState } from 'react'

const Search = ({keyword, onSearch}) => {



    return (
    <View style={styles.container}>
        <TextInput
        onChangeText={onSearch}
        value={keyword} 
        style={styles.input}
        placeholder="Buscar producto..."
        placeholderTextColor={colors.beige}
        />
        <Pressable>
            <AntDesign name="search1" size={25} color = {colors.beige}/>
        </Pressable>
    </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.azulOscuro,
        paddingVertical: 5,
    },
    input: {
        borderRadius: 8,
        borderColor: colors.beige,
        padding: 10,
        borderWidth: 1,
        width: "80%",
        fontSize: 20,
        marginRight: 10,
    },
})