import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native";
import { useEffect } from "react";
import { ScrollView } from "react-native";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import { auth, db } from "../firebase";
import Items from '../component/Items';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Items from './Items';

const Chat = ({navigation}) => {
    const [chats, setChats] = useState([]);
    useEffect(() => {
      const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
        setChats(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
      return unsubscribe;
    }, []);

   const enterChat = (id, chatName) => {
     navigation.navigate('Chats', {
        id:id,
       chatName:chatName,
     });
   };

    return (
      <SafeAreaView>
        <ScrollView styles={styles.container}>
          {chats.map(({ id, data: { chatName } }) => (
            <Items key={id} id={id} chatName={chatName} enterChat={enterChat} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
}

export default Chat

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  
  Container: {
    // position:"absolute",
    // flex: 1,
    // bottom:-40,
    // right:30,
    // height: "100%",
    flexDirection: "column",
    flex: 1,
    // position: "relative",
    // marginBottom: 100,
    // flex: 1,
    // bottom: 40,
    // right: 25,
    // padding: 10,
    // width: 50,
    // height: 50,
    // paddingLeft: 12,
    // paddingTop: 10,
    // borderRadius: 50,
  },
});
