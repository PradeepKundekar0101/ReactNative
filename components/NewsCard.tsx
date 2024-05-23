import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const NewsCard = () => {
    const openLink = (url:string)=>{
        try {
            Linking.openURL(url);
        } catch (error) {
            
        }
    }
  return (
    <View>
      <Text style={styles.headingText}>News Card</Text>
      <View>
        <View style={styles.card}>
            {/* <Image style={styles.image} source={
               {uri:"https://plus.unsplash.com/premium_photo-1670249419881-b115ba63924a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            }/> */}
            <Image style={styles.image} source={require("../images/image.jpg")}/>
            <View style={styles.cardBody}>
                <Text style={styles.cardBodyTitle}>Hello This is the title</Text>
                <Text  style={styles.cardBodyDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ut.</Text>
            </View>
            <View style={styles.cardFooter}>
                <TouchableOpacity style={styles.button} onPress={()=>{openLink("https://www.google.com")}}>
                    <Text style={styles.buttonText}>Read More</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  headingText: {
    margin: 4,
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  card:{
    height:350,
    width:300,
    borderRadius:7,
    elevation:8,
    shadowOffset:{
        height:19,
        width:19
    },
    shadowColor:"#000"
  },
  image:{
    height:200,
    width:300,
    objectFit:"cover"
  },
  cardBody:{
    backgroundColor:"#2c3e50",
    paddingHorizontal:10
  },
  cardBodyTitle:{
        color:"#fff",
        fontSize:24,
        fontWeight:"bold"
  },
  cardBodyDescription:{
    color:"#fff"
  },

  
  cardFooter:{

  },
  button:{
    backgroundColor:"#16a085",
    fontSize:19
  },
  buttonText:{
    fontSize:20,
    color:"#fff"
  }
});
