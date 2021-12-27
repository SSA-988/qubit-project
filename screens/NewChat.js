import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button,Input} from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from '../firebase';

const NewChat = ({ navigation }) => {
  const [input, setInput] = useState("");
  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error.message));

    setInput("");
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter new Chat Name: "
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      <Button disabled={!input} title="Create Chat" onPress={createChat} />
    </View>
  );
};

export default NewChat

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
