import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image, Input, Button } from "react-native-elements";
import { KeyboardAvoidingView } from 'react-native';
import { auth } from '../firebase';


const Login = ({navigation}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) =>{
        if(authUser){
          navigation.replace("Whatsapp");
        }
      });
      return unsubscribe;
    },[])
    const login = () => {
      auth.signInWithEmailAndPassword(email,password).catch(error =>(error.message));
      
    }
    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar style="light" />
        <Image
          source={{
            uri: "https://icon-library.com/images/whatsapp-icon-png/whatsapp-icon-png-29.jpg",
          }}
          style={{ width: 200, height: 200 }}
        />
        <View style={styles.inputContainer}>
          <Input
            placeholder="Email"
            type="email"
            autoFocus
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Password"
            type="password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
            onSubmitEditing={login}
          />
        </View>
        <Button disabled={!password} containerStyle={styles.button} onPress={login} title="Login" />
        <View style={styles.Text}>
          <Text style={styles.textContainer}>new to whatsapp? </Text>
          <Text style={styles.textContainer2}>Register</Text>
        </View>
        <Button
          width="200"
          containerStyle={styles.button}
          color="#128c7e"
          title="Register"
          onPress={() => navigation.navigate("Register")}
          //   type="outline"
        />
        <View style={{ height: 44 }} />
      </KeyboardAvoidingView>
    );
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
    // marginBottom:30,
    width: "100%",
  },
  inputContainer: {
    width: 220,
  },
  button: {
    width: 250,
    marginTop: 10,
    marginBottom: 6,
  },
  textContainer: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
  textContainer2: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#13274F",
  },
  Text: {
    flexDirection: "row",
  },
});

