import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";

const Detail = (props) => {
    const detail = props
    console.log(detail) 
  return (
    <View style = {styles.ViewStyle}>
      <FlatList 
        data={detail}
        keyExtractor={(item) => item.id }
        renderItem={({item}) => {
          return (<Text>{first_name}</Text>)
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  ViewStyle:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Detail;