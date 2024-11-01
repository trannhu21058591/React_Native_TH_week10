import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen02 from './components/API_Screen_02';
import Screen03 from './components/API_Screen_03';


import { Provider } from 'react-redux';
import store from './store/store'; // Adjust the import path as necessary

import store_Redux_tookit_api from './Redux_Tookit_API/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store_Redux_tookit_api}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Screen02"
          screenOptions={{
            headerStyle: {
              height: 30, // Height of the header
            },
            headerTitleStyle: {
              fontSize: 15, // Font size of the header title
            },
          }}
        >
          <Stack.Screen
            name="Screen02"
            component={Screen02}
            options={{ title: 'screen02', headerShown: false }}
          />
          <Stack.Screen
            name="Screen03"
            component={Screen03}
            options={{ title: 'screen03', headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
