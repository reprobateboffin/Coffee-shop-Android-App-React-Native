import { View, Text ,StyleSheet,ImageBackground, Pressable} from 'react-native'
import React from 'react'
import coffee1 from '@/assets/images/coffee2.jpg'
import { Link } from 'expo-router'
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={coffee1}
        resizeMode='cover'
        style={styles.image}
      >
      <Text style={styles.title}>Coffee shop</Text>
      <Link href="/explore" style={{marginHorizontal:'auto'}}>
      
      <Pressable style={styles.button}>
         <Text style={styles.buttonText}>   Explore  </Text> 
      </Pressable>
      
      </Link>
      </ImageBackground>
    </View>
  )
}

export default app;

const styles = StyleSheet.create({
container : {
  flex:1,
  flexDirection:'column',

},
title : {
  color: 'white',
  fontSize: 42,
  fontWeight: 'bold',
  textAlign : 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% opacity
  marginBottom:120,
},
button:{
  height:20,
  borderRadius:20,
  borderRadius: 'rgba(0,0,0,0.75)',
  padding:6,
},
buttonText : {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign : 'center',
  padding:4,
},
image: {
width:'100%',
height:'100%' ,
flex:1,
justifyContent:'center'

}

})