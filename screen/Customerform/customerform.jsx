import React from "react";
import { Text, View,TextInput,StyleSheet,Image,TouchableOpacity } from "react-native";

const customerform = () => {
     return(
        <View>
             <Text style={styles.custText}>
              CUSTOMER FORM   
             </Text>

             <TextInput style={styles.inputcus} placeholder="CustomerId" keyboardType="text"/>
             <TextInput style={styles.inputcus} placeholder="FullName" keyboardType="text"/>
             <TextInput style={styles.inputcus} placeholder="Address" keyboardType="text"/>
             <TextInput style={styles.inputcus} placeholder="Contact" keyboardType="numeric"/> 

             <TouchableOpacity name="buttonC" style={styles.Cbutton}>
             <Text style={styles.cusbuttonText}>Confrim</Text>
             </TouchableOpacity>
             
             <Image style={styles.image} source={require('../Customerform/images/Cus.jpg')} />
              
        </View>
     );
          
     
};

const styles = StyleSheet.create({
    custText:{
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

     inputcus:{
        height: 50,
        marginTop:25,
        marginLeft:'15%',
        borderRadius:30,
        borderWidth: 1,
        padding:10,
        width:280
     },
     
     Cbutton:{
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

     cusbuttonText:{
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

export default customerform;