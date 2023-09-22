/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import { PaperProvider } from 'react-native-paper';
import { theme } from './utils/theme';
import MainScreen from './screens/MainScreen';
import Toast from 'react-native-toast-message';


const Stack = createNativeStackNavigator();


function App(): JSX.Element {
  return (
    <>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
            <Stack.Screen options={{ headerShown: false }} name="ForgetPassword" component={ForgetPasswordScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Main" component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;

