import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import { Avatar } from "react-native-elements";

const Calls = () => {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
          <Avatar
            containerStyle={{
              right: 10,
              left: 3,
            }}
            style={styles.avatar}
            size="medium"
            source={{
              uri: "https://lh3.googleusercontent.com/ogw/ADea4I64lFPV_IALrH2YihJEIRgBCEV02BDG_fxSZeI0=s32-c-mo",
            }}
            rounded
            size={58}
          />
          <View style={styles.Text}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              +91 852379209
            </Text>
            <View style={styles.call_icons}>
              <FontAwesome
                style={styles.MessageIcon}
                name="location-arrow"
                size={20}
                color="lightgreen"
              />
              <Text style={{ color: "gray", marginLeft: 8 }}>
                yesterday, 13:07
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, right: 20, position: "absolute" }}>
            <FontAwesome
              style={styles.MessageIcon}
              name="phone"
              size={30}
              color="rgb(41, 150, 130)"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
          <Avatar
            containerStyle={{
              right: 10,
              left: 3,
            }}
            style={styles.avatar}
            size="medium"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmO3XgIVB36ga_yWAvL04Ygf7vhwKNngEug&usqp=CAU",
            }}
            rounded
            size={58}
          />
          <View style={styles.Text}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Kavitha</Text>
            <View style={styles.call_icons}>
              <FontAwesome
                style={styles.MessageIcon}
                name="location-arrow"
                size={20}
                color="lightgreen"
              />
              <Text style={{ color: "gray", marginLeft: 8 }}>today, 11:07</Text>
            </View>
          </View>
          <View style={{ flex: 1, right: 20, position: "absolute" }}>
            <FontAwesome
              style={styles.MessageIcon}
              name="phone"
              size={30}
              color="rgb(41, 150, 130)"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
          <Avatar
            containerStyle={{
              right: 10,
              left: 3,
            }}
            style={styles.avatar}
            size="medium"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuP4A26vUkEZwYJL4zGV8KRxUbBmcX11Mdw&usqp=CAU",
            }}
            rounded
            size={58}
          />
          <View style={styles.Text}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              Melissa Jones
            </Text>
            <View style={styles.call_icons}>
              <FontAwesome
                style={styles.MessageIcon}
                name="long-arrow-left"
                size={20}
                color="rgb(222, 27, 27)"
              />
              <Text style={{ color: "gray", marginLeft: 8 }}>today, 5:00</Text>
            </View>
          </View>
          <View style={{ flex: 1, right: 20, position: "absolute" }}>
            <FontAwesome
              style={styles.MessageIcon}
              name="video-camera"
              size={30}
              color="rgb(41, 150, 130)"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
          <Avatar
            containerStyle={{
              right: 10,
              left: 3,
            }}
            style={styles.avatar}
            size="medium"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsK6oIKzeSCKiqpjv5cuoC4ZC_hJ0FxNkvQ&usqp=CAU",
            }}
            rounded
            size={58}
          />
          <View style={styles.Text}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              Akash College
            </Text>
            <View style={styles.call_icons}>
              <FontAwesome
                style={styles.MessageIcon}
                name="location-arrow"
                size={20}
                color="lightgreen"
              />
              <Text style={{ color: "gray", marginLeft: 8 }}>just now</Text>
            </View>
          </View>
          <View style={{ flex: 1, right: 20, position: "absolute" }}>
            <FontAwesome
              style={styles.MessageIcon}
              name="phone"
              size={30}
              color="rgb(41, 150, 130)"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
          <Avatar
            containerStyle={{
              right: 10,
              left: 3,
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
            <View style={styles.call_icons}>
              <FontAwesome
                style={styles.MessageIcon}
                name="long-arrow-left"
                size={20}
                color="red"
              />
              <Text style={{ color: "gray", marginLeft: 8 }}>today 9:50</Text>
            </View>
          </View>
          <View style={{ flex: 1, right: 20, position: "absolute" }}>
            <FontAwesome
              style={styles.MessageIcon}
              name="video-camera"
              size={30}
              color="rgb(41, 150, 130)"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
          <Avatar
            containerStyle={{
              right: 10,
              left: 3,
            }}
            style={styles.avatar}
            size="medium"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bu1yh042Z1fcDzfwTFm_MqXpOht7WnDyQQ&usqp=CAU",
            }}
            rounded
            size={58}
          />
          <View style={styles.Text}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              Sachin Sagar
            </Text>
            <View style={styles.call_icons}>
              <FontAwesome
                style={styles.MessageIcon}
                name="long-arrow-left"
                size={20}
                color="red"
              />
              <Text style={{ color: "gray", marginLeft: 8 }}>today 1:50</Text>
            </View>
          </View>
          <View style={{ flex: 1, right: 20, position: "absolute" }}>
            <FontAwesome
              style={styles.MessageIcon}
              name="phone"
              size={30}
              color="rgb(41, 150, 130)"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
          <Avatar
            containerStyle={{
              right: 10,
              left: 3,
            }}
            style={styles.avatar}
            size="medium"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5m-1w_MyShhwjLVzgVkUfCBvKX8MFdF0wqQ&usqp=CAU",
            }}
            rounded
            size={58}
          />
          <View style={styles.Text}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Deepika Das</Text>
            <View style={styles.call_icons}>
              <FontAwesome
                style={styles.MessageIcon}
                name="location-arrow"
                size={20}
                color="lightgreen"
              />
              <Text style={{ color: "gray", marginLeft: 8 }}>
                yesterday 5:50
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, right: 20, position: "absolute" }}>
            <FontAwesome
              style={styles.MessageIcon}
              name="phone"
              size={30}
              color="rgb(41, 150, 130)"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
          <Avatar
            containerStyle={{
              right: 10,
              left: 3,
            }}
            style={styles.avatar}
            size="medium"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAp_BR1EHu3GMxzExSeb8dlH4fdEcwBwUlFBC-bRws1Y9G509P-86XotxIE12aw6gPgk&usqp=CAU",
            }}
            rounded
            size={58}
          />
          <View style={styles.Text}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Deepika Das</Text>
            <View style={styles.call_icons}>
              <FontAwesome
                style={styles.MessageIcon}
                name="long-arrow-left"
                size={20}
                color="red"
              />
              <Text style={{ color: "gray", marginLeft: 8 }}>today 1:50</Text>
            </View>
          </View>
          <View style={{ flex: 1, right: 20, position: "absolute" }}>
            <FontAwesome
              style={styles.MessageIcon}
              name="phone"
              size={30}
              color="rgb(41, 150, 130)"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
          <Avatar
            containerStyle={{
              right: 10,
              left: 3,
            }}
            style={styles.avatar}
            size="medium"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsxztFxre04AktloBuxD3c1UT7Wz_Q9h2NDaJfZqRLZD-SytzB4CSJN-9BJs4-2l5coQ&usqp=CAU",
            }}
            rounded
            size={58}
          />
          <View style={styles.Text}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>Neha Nair</Text>
            <View style={styles.call_icons}>
              <FontAwesome
                style={styles.MessageIcon}
                name="long-arrow-left"
                size={20}
                color="red"
              />
              <Text style={{ color: "gray", marginLeft: 8 }}>
                yesterday 12:50
              </Text>
            </View>
          </View>
          <View style={{ flex: 1, right: 20, position: "absolute" }}>
            <FontAwesome
              style={styles.MessageIcon}
              name="video-camera"
              size={30}
              color="rgb(41, 150, 130)"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.container}>
          <Avatar
            containerStyle={{
              right: 10,
              left: 3,
            }}
            style={styles.avatar}
            size="medium"
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
            rounded
            size={58}
          />
          <View style={styles.Text}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              +91 9902731182
            </Text>
            <View style={styles.call_icons}>
              <FontAwesome
                style={styles.MessageIcon}
                name="location-arrow"
                size={20}
                color="lightgreen"
              />
              <Text style={{ color: "gray", marginLeft: 8 }}>today 8:50</Text>
            </View>
          </View>
          <View style={{ flex: 1, right: 20, position: "absolute" }}>
            <FontAwesome
              style={styles.MessageIcon}
              name="video-camera"
              size={30}
              color="rgb(41, 150, 130)"
            />
          </View>
        </TouchableOpacity>
        {/* <View style={styles.Container}>
          <FontAwesome
            style={styles.Message}
            onPress={() => navigation.navigate("NewChat")}
            name="camera"
            size={24}
            color="white"
          />
        </View> */}
      </View>
    );
}

export default Calls

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  Message: {
    backgroundColor: "#25d366",
    position: "absolute",
    // flex: 1,
    bottom: 40,
    right: 25,
    padding: 10,
    width: 50,
    height: 50,
    paddingLeft: 12,
    paddingTop: 10,
    borderRadius: 50,
    // alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    marginLeft: 15,
  },
  call_icons: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    // borderRadius: 50,
    width: 50,
    height: 50,
    resizeMode: "stretch",
  },
});
