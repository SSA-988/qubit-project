import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chat from './Chat';
import Status from './Status';
import { auth, db } from "../firebase";
import { useLayoutEffect } from 'react';
import { Avatar } from 'react-native-elements';
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import Calls from './Calls';
//  import ChatIcon from "@material-ui/icons/Chat";

 const Tab = createMaterialTopTabNavigator();

 

const Home = ({ navigation,props }) => {

  // const {route} = props;
  // if(route.key === 'Status')
  // {
  //   <View style={styles.Container}>
  //     <FontAwesome
  //       style={styles.MessageIcon}
  //       onPress={() => navigation.navigate("NewChat")}
  //       name="envelope"
  //       size={24}
  //       color="white"
  //     />
  //   </View>;
  // }


  const [chats,setChats] = useState([]);

  const logout = ()=> {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  }

  // useEffect(() => {
  //   const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
  //     setChats(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     )
  //   );
  //   return unsubscribe;
  // }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "WhatsApp",
      headerTitleAlign: "left",
      headerTintColor: "black",
      // headerRight: ()=>(
      //   <Avatar source={{uri:auth.currentUser}}/>
      // ),
      headerRight: () => (
        <View
          style={{ marginRight: 30, flexDirection: "row", marginRight: 15 }}
        >
          <TouchableOpacity style={{marginRight:12,}} activeOpacity={0.5}>
            <Avatar
              onPress={logout}
              rounded
              source={{
                uri:
                  //  auth.currentUser.photoURL ||
                  "https://lh3.googleusercontent.com/ogw/ADea4I64lFPV_IALrH2YihJEIRgBCEV02BDG_fxSZeI0=s32-c-mo",
              }}
            />
            {/* <Text>{auth.currentUser.displayName}</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:5}}
            onPress={() => navigation.navigate("NewChat")}
            activeOpacity={0.5}
          >
            <FontAwesome name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
      
    });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <Tab.Navigator swipeEnabled>
          <Tab.Screen name="Chat" component={Chat} />
          <Tab.Screen name="Status" component={Status} />
          <Tab.Screen name="Calls" component={Calls} />
        </Tab.Navigator>
        {/* <ChatIcon/> */}
      </ScrollView>
      <View style={styles.Container}>
        <FontAwesome
          style={styles.MessageIcon}
          onPress={() => navigation.navigate("NewChat")}
          name="envelope"
          size={24}
          color="white"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home

const styles = StyleSheet.create({
  MessageIcon: {
    backgroundColor: "#25d366",
    position: "absolute",
    // flex: 1,
    bottom: 40,
    right: 20,
    padding: 10,
    width: 50,
    height: 50,
    paddingLeft: 12,
    paddingTop: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  Container: {
    // position:"absolute",
    // flex: 1,
    // bottom:-40,
    // right:30,
  },
});
