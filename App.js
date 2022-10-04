import { View, Text } from 'react-native';
import React from 'react';
import Loginform from './screen/Loginform/loginscreen'
import Signupform from './screen/Signupform/signupform'
import Customerform from './screen/Customerform/customerform'


const App = () => {
    return (
       <View>
             <Customerform/>
       </View>
    );
};

export default App;
