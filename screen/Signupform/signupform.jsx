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
                <Text style={styles.input}>Register</Text>
           </TouchableOpacity>
        
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


});
export default signupform;