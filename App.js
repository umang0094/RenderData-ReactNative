import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet,  } from "react-native";
import getData from "./src/apiCall";
import Render from "./src/RenderComponent";
const App = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] =useState(true)
  
  useEffect(() =>{
     fetch(
        'https://reqres.in/api/users?page=2'
      )
      .then((response) => response.json())
      .then((json) => setData(json))
      .finally(() => setLoading(false))
      
  }, [])

  
  return (
    <View style = {styles.ViewStyle}>
      {isLoading ? <Text style = {styles.loading}>Fetching Data...</Text>: 
      <View>
        <Render  data = {data} />
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  ViewStyle:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading:{
    fontSize: 40,
    fontWeight: 'bold'
  }
})
export default App;

