import { View, Text } from 'react-native';
import React from 'react';
import Loginform from './screen/Loginform/loginscreen'
import Signupform from './screen/Signupform/signupform'
import Customerform from './screen/Customerform/customerform'
import Vehicleform from './screen/Vehicleform/vehicleform'
import ImageUploadfrom from './screen/ImageUploadform/imageupload'



const App = () => {
    return (
       <View>
               <Loginform/>
       </View>
    );
};

export default App;
