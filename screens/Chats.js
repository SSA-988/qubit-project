import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { Platform } from "react-native";
import {TextInput} from "react-native"
import { Keyboard } from "react-native";
import { auth, db } from "../firebase";
// import {TextInput,TouchableWithoutFeedback} from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import { SafeAreaView } from 'react-native';
import firebase from "firebase";
import { ScrollView } from 'react-native-gesture-handler';
import Swipeable from "react-native-gesture-handler/Swipeable";
import { ImageBackground } from "react-native";

const Chats = ({navigation,route}) => {

    const [input,setInput] = useState('')
    const [messages, setMessages] = useState([]);

    const sendMessage = () =>{
      Keyboard.dismiss();
      db.collection("chats").doc(route.params.id).collection("messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL,
        phoneNumber:auth.currentUser.phoneNumber,
      });
      setInput('');
    }
    useLayoutEffect(() =>{
        navigation.setOptions({
          headerTitleAlign: "left",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 25,
                textAlign: "left",
              }}
            >
              <Avatar
                rounded
                source={{
                  uri: "http://connectingcouples.us/wp-content/uploads/2019/07/avatar-placeholder.png",
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: 8,
                  fontSize: 16,
                }}
              >
                {route.params.chatName}
              </Text>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={navigation.goBack}
            >
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 20,
                width: 80,
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="video-camera" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="call" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ),
        });
    },[navigation,messages])

    useLayoutEffect(() => {
      const unsubscribe = db
        .collection("chats")
        .doc(route.params.id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
        return unsubscribe;
    },[route])

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ImageBackground
          style={{ flex: 1 }}
          source={{
            uri: "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png",
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={90}
          >
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
            <>
              <ScrollView>
                {messages.map(({ id, data }) =>
                  data.email === auth.currentUser.email ? (
                    <View key={id} style={styles.reciever}>
                      {/* <Text>{data.displayName}</Text> */}
                      <Text style={styles.person}>You</Text>
                      <Text style={styles.recieverText}>{data.message}</Text>
                      {/* <Text>
                      {new Date(data.timestamp.toDate()).toDateString()}
                    </Text> */}
                      <Text style={styles.Time}>
                        {new Date(data.timestamp?.toDate())
                          .toUTCString()
                          .substr(16)}
                      </Text>
                    </View>
                  ) : (
                    <View key={id} style={styles.sender}>
                      <Text style={styles.person}>{data.displayName}</Text>
                      <Text style={styles.senderText}>{data.message}</Text>
                      <Text style={styles.Time}>
                        {new Date(data.timestamp?.toDate())
                          .toUTCString()
                          .substr(16)}
                      </Text>
                    </View>
                  )
                )}
              </ScrollView>

              <View style={styles.footer}>
                <TextInput
                  value={input}
                  onChangeText={(text) => setInput(text)}
                  placeholder="Type a Message"
                  style={styles.TextInput}
                  onSubmitEditing={sendMessage}
                />
                <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                  <Ionicons name="send" size={24} color="green" />
                </TouchableOpacity>
              </View>
            </>
          </KeyboardAvoidingView>
        </ImageBackground>
      </SafeAreaView>
    );
}

export default Chats

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    alignItems: "center",
  },
  TextInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: "transparent",
    backgroundColor: "#ECECEC",
    padding: 10,
    color: "gray",
    borderRadius: 30,
    marginBottom: 5,
  },
  reciever: {
    padding: 7,
    backgroundColor: "#dcf8c6",
    alignSelf: "flex-end",
    borderRadius: 10,
    marginRight: 15,
    marginBottom: 16,
    marginTop: 17,
    maxWidth: "80%",
    position: "relative",
  },
  recieverText: {
    color: "black",
    fontWeight: "500",
    marginLeft: 5,
    marginRight: 4,
    marginBottom: 5,
  },
  senderText: {
    color: "black",
    fontWeight: "600",
    marginLeft: 4,
    marginRight: 3,
    marginBottom: 5,
  },
  sender: {
    padding: 7,
    backgroundColor: "#ECECEC",
    alignSelf: "flex-start",
    borderRadius: 10,
    marginRight: 15,
    marginBottom: 16,
    marginTop: 17,
    marginLeft: 9,
    maxWidth: "80%",
    position: "relative",
  },
  person: {
    color: "#ff7b25",
    position: "absolute",
    fontWeight: "bold",
    top: -19,
    left: 5,
  },
  Time: {
    fontSize: 9,
    color: "black",
    fontWeight: "bold",
    marginLeft: 3,
  },
});
