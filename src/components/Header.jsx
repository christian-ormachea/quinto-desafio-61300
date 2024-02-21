import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
export default function Header({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.azulClaro,
    width: "100%",
    paddingVertical: 8,
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: colors.beige,
    textAlign: 'center',
    fontFamily: 'Bold',
  }
  
})