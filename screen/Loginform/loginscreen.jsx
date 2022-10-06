import React from 'react';
import { Text, View,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native';

const Loginscreen = () => {
 

    return (
      
      <View>
             
              <Image style={styles.image} source={require('../Loginform/images/Logo.png')} />  
              <Text style={styles.text}>LOGIN FORM</Text>
              <View style={styles.inputfields}>
              <TextInput style={styles.textinput} placeholder="User Name" keyboardType="text" />
              <TextInput style = {styles.textinput} placeholder="Password" returnKeyType='go' secureTextEntry autoCorrect={false}

/>
</View>
            <TouchableOpacity style={styles.buttonfield}>
                <Text style={styles.Btext}>Login</Text>
            </TouchableOpacity>
      </View>
      
   
    );
       
  };

const styles = StyleSheet.create({
   
  textinput: {
    height: 50,
    marginTop:25,
    marginLeft:'2%',
    borderRadius:30,
    borderWidth: 1,
    padding:10,
    width:280
  },

  tinylogo:{
      width:100,
      height:100,
  },

  container:{
      marginTop:20,
      alignItems:'center',
      justifyContent:'center',
  },

   text: {
      frontWeight:'bold',
      textAlign:'center',
      justifyContent:'center',
      alignItems:'center',
      color:'black',
      fontSize:30,
    },

    inputfields:{
        justifyContent:'center',
        textAlign:'center',
        marginLeft:78,
        margintop: 30,
    },

    buttonfield:{
       width:'50%',
       padding:5,
       fontSize:20,
       backgroundColor:"black",
       height:40,
       margin:78,
       marginLeft:120,
       alignItems:'center',
       justifyContent:'center',
       marginTop:'3%',
       borderRadius:100
    },

    Btext:{
      color:'white',
      textAlign:'center',
      fontWeight:'bold',
    },

    image:{
      marginTop:30,
      width:'100%',
      height:'50%',
      justifyContent:'center',
      autoCorrect:'cover'
  },
});

export default Loginscreen;