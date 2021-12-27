import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import NewChat from './screens/NewChat';
import Chats from './screens/Chats';
import Story from './screens/Story';

const Stack = createStackNavigator();

const globalscreenOptions = {
  headerStyle: { backgroundColor: "#128c7e" },
  headerTitleStyle: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTintColor: "gray",
  headerTitleAlign: "center",
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Whatsapp"
        screenOptions={globalscreenOptions}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Whatsapp"
          component={Home}
          options={{ tabBarLabel: "afdafd" }}
        />
        <Stack.Screen
          name="NewChat"
          component={NewChat}
          options={{ tabBarLabel: "afdafd" }}
        />
        <Stack.Screen
          name="Chats"
          component={Chats}
          options={{ tabBarLabel: "afdafd" }}
        />
        <Stack.Screen
          name="Story"
          component={Story}
          options={{ tabBarLabel: "afdafd" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
