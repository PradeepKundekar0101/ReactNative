import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class FlatCards extends Component {
  render() {
    return (
        <View>

            <Text style={styles.headingText}>Cards</Text>
        <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
          <Text>
            1
          </Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
          <Text>
            2
          </Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
          <Text>
            3
          </Text>
        </View>
      </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({container:{
    flex:1,
    flexDirection:"row",
    justifyContent: "space-evenly"
    
  },
  headingText:{
    margin:4,
    color:"#000",
    // marginVertical:3,
    fontSize: 30,
    fontWeight:"bold"
  },
  card:{
    height:100,
    width:100,
    marginHorizontal:2,
    borderRadius:5
  },
  cardOne:{
    backgroundColor:"#e74c3c"
  },
  cardTwo:{
    backgroundColor:"#27ae60"
  },
  cardThree:{
    backgroundColor:"#3498db"
  },})