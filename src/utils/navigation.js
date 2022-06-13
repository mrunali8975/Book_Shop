import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Displaylist from '../screens/display';
import AddPost from '../screens/addpost';


const Navigation = () => {
    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
    
  
    > 

<Stack.Navigator initialRouteName='AddPost'
screenOptions={{headerShown:false}}
>
    <Stack.Screen name='Display' component={Displaylist} />
    <Stack.Screen name='AddPost' component={AddPost} />
</Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation