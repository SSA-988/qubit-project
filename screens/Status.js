import { Avatar } from "react-native-elements";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import Story from "./Story";

const Status = ({ navigation }) => {
  const [story,setStory] = useState(false)

  return (
    <View bottomDivider>
      <TouchableOpacity activeOpacity={0.5} style={styles.container}>
        <Avatar
          containerStyle={{
            right: 10,
            left: 3,
          }}
          style={styles.aaavatar}
          size="medium"
          source={{
            uri: "http://connectingcouples.us/wp-content/uploads/2019/07/avatar-placeholder.png",
          }}
          rounded
          size={28}
        />
        <View style={styles.Text}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>My Status</Text>
          <FontAwesome
            style={{marginLeft:4, position: "absolute", left: -37, top: 28,padding:6,backgroundColor:"lightgreen",borderRadius:50,width:30,height:30, }}
            name="plus"
            size={23}
            color="white"
          />
          <Text style={{ color: "gray" }}>Tap to add status update</Text>
        </View>
      </TouchableOpacity>
      <View style={{ borderBottom: "1px solid red" }} />
      <TouchableOpacity
        //  onPress={() => navigation.navigate("Story")}
        // onPress={() => setStory(true)}
        activeOpacity={0.5}
        style={styles.container}
      >
        <Avatar
          containerStyle={{
            right: 10,
            left: 3,
            borderColor: "#FF5722",
          }}
          style={styles.avatar}
          size="medium"
          source={{
            uri: "https://sewausa.org/resources/Sewa%20USA%20Images/Projects/Sewa%20Aspire/Volunteer%20list/7.png",
          }}
          rounded
          size={58}
        />

        <View style={styles.Text}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Sara Janes</Text>
          <Text style={{ color: "gray" }}>3 min ago</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        //  onPress={() => navigation.navigate("Story")}
        // onPress={() => setStory(true)}
        activeOpacity={0.5}
        style={styles.container}
      >
        <Avatar
          containerStyle={{
            right: 10,
            left: 3,
            borderColor: "#FF5722",
          }}
          style={styles.avatar}
          size="medium"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvMGpfk5OCNLLDiapu1d3VNPN-WT_S1AmhoQ&usqp=CAU",
          }}
          rounded
          size={58}
        />
        <View style={styles.Text}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Girish P</Text>
          <Text style={{ color: "gray" }}>20 min ago</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        //  onPress={() => navigation.navigate("Story")}
        // onPress={() => setStory(true)}
        activeOpacity={0.5}
        style={styles.container}
      >
        <Avatar
          containerStyle={{
            right: 10,
            left: 3,
            borderColor: "#FF5722",
          }}
          style={styles.avatar}
          size="medium"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHAGfWuZmXMVWavnamthyTy_Yx8okbOs1W41E4fkyw5DOHhV9-8YoHbOSUhKzjOZ3h6s&usqp=CAU",
          }}
          rounded
          size={58}
        />
        <View style={styles.Text}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Sanjana S</Text>
          <Text style={{ color: "gray" }}>today, 12:59</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        //  onPress={() => navigation.navigate("Story")}
        // onPress={() => setStory(true)}
        activeOpacity={0.5}
        style={styles.container}
      >
        <Avatar
          containerStyle={{
            right: 10,
            left: 3,
            borderColor: "#FF5722",
          }}
          style={styles.avatar}
          size="medium"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfzIKWM1NQINXh7Q7kVrhpugVt_BEtzh-8yg&usqp=CAU",
          }}
          rounded
          size={58}
        />
        <View style={styles.Text}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Priya P</Text>
          <Text style={{ color: "gray" }}>yesterday, 4:59</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        //  onPress={() => navigation.navigate("Story")}
        // onPress={() => setStory(true)}
        activeOpacity={0.5}
        style={styles.container}
      >
        <Avatar
          containerStyle={{
            right: 10,
            left: 3,
            borderColor: "#FF5722",
          }}
          style={styles.avatar}
          size="medium"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXWB9RY0hWZP3NnbqMRaYVf4iMxShlHgOKg&usqp=CAU",
          }}
          rounded
          size={58}
        />
        <View style={styles.Text}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Kailash Kher</Text>
          <Text style={{ color: "gray" }}>yesterday, 2:59</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        //  onPress={() => navigation.navigate("Story")}
        // onPress={() => setStory(true)}
        activeOpacity={0.5}
        style={styles.container}
      >
        <Avatar
          containerStyle={{
            right: 10,
            left: 3,
            borderColor: "#FF5722",
          }}
          style={styles.avatar}
          size="medium"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_T697OgpLRTjuZsVIJlDIsmhdfuNCcwxvgg&usqp=CAU",
          }}
          rounded
          size={58}
        />
        <View style={styles.Text}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Akash P</Text>
          <Text style={{ color: "gray" }}>yesterday, 2:59</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        //  onPress={() => navigation.navigate("Story")}
        // onPress={() => setStory(true)}
        activeOpacity={0.5}
        style={styles.container}
      >
        <Avatar
          containerStyle={{
            right: 10,
            left: 3,
            borderColor: "#FF5722",
          }}
          style={styles.avatar}
          size="medium"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcMl31lP80u82HqcDSEBSho8EH5Wlen3b6Pg&usqp=CAU",
          }}
          rounded
          size={58}
        />
        <View style={styles.Text}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Supriya Seth</Text>
          <Text style={{ color: "gray" }}>yesterday, 2:59</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  // avatar:{
  //     marginRight:10,
  // }
  Text: {
    marginLeft: 15,
  },
  aaavatar: {
    borderWidth: 1,
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  avatar: {
    borderColor: "#20B2AA",
    borderWidth: 3,
    borderRadius: 50,
    width: 60,
    height: 60,
    resizeMode: "stretch",
  },
});
