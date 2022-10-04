import React from 'react';
import { Text, View,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native';

const Loginscreen = () => {
 

    return (
      
      <View>
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
      height:50,
      margintop:25,
      borderRadius:30,
      borderWidth: 1,
      padding: 10,
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
      fontSize:30
    },

    inputfields:{
        justifyContent:'center',
        textAlign:'center',
        marginLeft:50
    },

    buttonfield:{
       width:'50%',
       padding:5,
       fontSize:20,
       backgroundColor:"black",
       height:40,
       margin:78,
       
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
});

export default Loginscreen;