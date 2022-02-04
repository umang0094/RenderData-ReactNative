import React from "react";
import { View,ScrollView, Text, StyleSheet, FlatList, Image} from "react-native";
import Detail from "./Details";

const Render = ({data}) => {
    const newData = data.data
      
  return ( 
    <View style = {styles.ViewStyle}>
        <View style = {{marginLeft: 30}}>
      <Text style = {styles.heading}>Details For Person Working At Company</Text> 
        
        <FlatList 
            data={newData}
            keyExtractor={(item) => item.id }
            renderItem={({item}) => {
            return (
                <ScrollView>   
                    <Image source={{uri:item.avatar}}  style = {styles.image}/>
                    <Text style = {styles.Text}>Name = {item.first_name} {item.last_name}</Text>
                    <Text style = {styles.Text}>Contact = {item.email}</Text>  
                </ScrollView>
            )
            }} /> 
            </View>   
    </View>
  )
}

const styles = StyleSheet.create({
    ViewStyle:{
        flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#6babff',
    
      },
    heading:{
        fontSize: 40,
        fontWeight: 'bold'
    },
    image:{
      height: 50,
      width: 50,
      borderRadius: 40,
  },
  Text:{
      fontSize: 18,
     
  }
})
export default Render;