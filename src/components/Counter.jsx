import { Pressable, StyleSheet, Text, View } from 'react-native'
import { increment, decrement, incrementByAmount, reset } from '../features/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { colors } from '../global/colors'

const Counter = () => {
    const counter = useSelector((state) => state.counterReducer.value)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Contador React Redux </Text>
            <Text style={{marginTop: 8}}> {counter} </Text>

            <Pressable onPress={() => dispatch(decrement())} style={styles.boton}>
                <Text style={{color: 'black', fontSize: 23,}}> RESTAR </Text>
            </Pressable>
                
            <Pressable onPress={() => dispatch(increment())} style={styles.boton}>
                <Text style={{color: 'black', fontSize: 23}}> SUMAR </Text>
            </Pressable>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 48,
    },
    title: {
        fontSize: 25,
        color: colors.beige
    },
    boton: {
        borderWidth: 1,
        borderColor: 'beige',
        padding: 10,
        marginVertical: 10,
    }
})