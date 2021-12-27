import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native';
import { Input, Button, Text } from "react-native-elements";
import { StyleSheet, View } from 'react-native'
import { auth } from '../firebase';

const Register = ({navigation}) => {
  

   const register = () => {
     auth
       .createUserWithEmailAndPassword(email, password)
       .then(authuser => {
         authuser.user.updateProfile({
           displayName: name,
           photoURL:
             photo ||
             "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
         });
       })
       .catch((error) => alert(error.message));
   };
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [number, setNumber] = useState('');
     const [photo, setPhoto] = useState('');

    //  const [userinnfo,setUserInfo] = useState({
    //    email:"",
    //    password:"",
    //  });

     useLayoutEffect(() => {
       navigation.setOptions({
         headerBackTitle: "Login",
       });
     }, [navigation]);
    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.Text} h3>
          Create a whatsapp Account
        </Text>

        <View style={styles.inputContainer}>
          <Input
            placeholder="Full name"
            autoFocus
            type="text"
            value={name}
            onChangeText={(text) => setName(text)}
          />
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
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Input
            placeholder="phone No."
            type="text"
            value={number}
            maxLength={10}
            keyboardType="numeric"
            onChangeText={(text) => setNumber(text)}
          />
          <Input
            placeholder="PhotoUrl (optional)"
            type="text"
            autoFocus
            value={photo}
            onChangeText={(text) => setPhoto(text)}
            onSubmitEditing={register}
          />
        </View>
        <Button
          containerStyle={styles.button}
          title="Register"
          raised
          onPress={register}
        />
        <View style={{ height: 16 }} />
      </KeyboardAvoidingView>
    );
}

export default Register;

const styles = StyleSheet.create({
  Text: {
    marginBottom: 25,
  },
  button: {
    width:220,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
});
