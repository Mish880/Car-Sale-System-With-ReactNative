import React from "react";
import { Text, View,TextInput,StyleSheet,Image,TouchableOpacity } from "react-native";

const signupform=()=>{
   
     return(
        <View>
            <Text style={styles.Rtext}>
             REGISTRATION FORM
             </Text>
             <TextInput style={styles.textinput} placeholder="First name" keyboardType="numeric" />
             <TextInput style={styles.textinput} placeholder="Lastname" keyboardType="text" />
             <TextInput style={styles.textinput} placeholder="Email" keyboardType="text" />
             <TextInput style={styles.textinput} placeholder="Password" keyboardType="numeric" />
             <TextInput style={styles.textinput} placeholder ="Vehicle Number" keyboardType="text"/>
        
           <TouchableOpacity name="Regbutton" style={styles.Rbutton}>
                <Text style={styles.inputtextbtn}>Register</Text>
           </TouchableOpacity>

           <Image style={styles.image} source={require('../Signupform/images/RONE.jpg')} /> 
        
        </View>
     );
        

};
const styles = StyleSheet.create({

    
   Rtext: {
    frontWeight:'bold',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    color:'black',
    fontSize:30
  },

   container:{
      marginTop:20,
      alignItems:'center',
      justifyContent:'center',
   },

   textinput:{
      height: 50,
      marginTop:25,
      marginLeft:'15%',
      borderRadius:30,
      borderWidth: 1,
      padding:10,
      width:280
   },

   Rbutton:{
       width:'50%',
       marginTop:5,
       fontSize:20,
       backgroundColor:"black",
       height:50,
       alignItems:'center',
       justifyContent:'center',
       marginTop:'6%',
       marginLeft:'23%',
       borderRadius:100
   },

   inputtextbtn:{
       color:'white',
       textAlign:'center',
       fontWeight:'bold',
   },

   image:{
      width:'100%',
      height:'30%',
      resizeMode:'cover',
      marginTop:10,
      borderTopRightRadius:200,
      
   },
});
export default signupform;