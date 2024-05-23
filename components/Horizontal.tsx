import {SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const Horizontal = () => {
  return (
    <View>
      <Text style={styles.headingText}>Scrolling Cards</Text>
      <ScrollView style={styles.container} horizontal>
        {Array.from({length:4},(_,k)=> <View style={styles.card}>
          <Text style={styles.text}>{k+1}</Text>
        </View>)} 
      </ScrollView>
    </View>
  );
};

export default Horizontal;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  headingText:{
    margin:4,
    color:"#000",
    // marginVertical:3,
    fontSize: 30,
    fontWeight:"bold"
  },
  card: {
    height: 150,
    width: 100,
    backgroundColor: '#2c3e50',
    marginHorizontal: 2,
    elevation: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'red',
    color: '#fff',
    borderRadius:8,
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text: {
    fontSize:30,
    fontWeight:"bold",
    color: '#fff',
  },
});
