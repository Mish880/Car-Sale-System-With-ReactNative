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



/*import ImageUploadfrom from './screen/ImageUploadform/imageupload'
import { createStackNavigator } from '@react-navigation/stack';




import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{<Stack.Navigator>
        <Stack.Screen name="Signupform" component={Signupform} />
        <Stack.Screen name="Loginform" component={Loginform} />
        <Stack.Screen name="Customerform" component={Customerform} />
        <Stack.Screen name="Vehicleform" component={Vehicleform} />
      </Stack.Navigator>}</NavigationContainer>
  );
}*/ 