import React from "react";
import { Text, View,TextInput,StyleSheet,Image,TouchableOpacity } from "react-native";

const vehicleform = () => {
     return(
         <View>
              <Text style={styles.vehText}>
               VEHICLE FORM 
              </Text>
              <TextInput style={styles.vehinput} placeholder="Vehcode" keyboardType="text"/>
              <TextInput style={styles.vehinput} placeholder="Vehtype" keyboardType="text"/>
              <TextInput style={styles.vehinput} placeholder="Vehbrand" keyboardType="text"/>
              <TextInput style={styles.vehinput} placeholder="Vehunitprice" keyboardType="numeric"/>
      
              <TouchableOpacity name="Vbutton" style={styles.buttonV}>
                  <Text style={styles.buttontext}>Vehicle Input</Text>
              </TouchableOpacity>

              <Image style={styles.image} source={require('../Vehicleform/images/Veh.jpg')} />

         </View>
     );
};

const styles = StyleSheet.create({
    vehText:{
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

     vehinput:{
        height: 50,
        marginTop:25,
        marginLeft:'15%',
        borderRadius:30,
        borderWidth: 1,
        padding:10,
        width:280
     },

     buttonV:{
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

     buttontext:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
     },

     image:{
      
      width:'100%',
      height:'40%',
      resizeMode:'cover',
      marginTop:10,
      
   },

});

export default vehicleform;