import { View, Text } from 'react-native';
import React from 'react';
import Loginform from './screen/Loginform/loginscreen'
import Signupform from './screen/Signupform/signupform'
import Customerform from './screen/Customerform/customerform'
import Vehicleform from './screen/Vehicleform/vehicleform'



const App = () => {
    return (
       <View>
             <Vehicleform/>
       </View>
    );
};

export default App;
