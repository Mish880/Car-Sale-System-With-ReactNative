import React from 'react';
import { Text, View,TextInput,StyleSheet,Button } from 'react-native';

const Loginscreen = () => {
 

    return (
      
      <View>
            <TextInput style={styles.input} placeholder="NIC" keyboardType="numeric" />
            
          
      
      </View>
      
   
    );
       
  }
const styles = StyleSheet.create({
    input: {
    height: 50,
    marginTop: 25,
    borderRadius:30,
    borderWidth: 1,
    padding: 10,
    width:280
  },
})

export default Loginscreen;