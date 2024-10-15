import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import Frame6 from "../components/Frame6";
import Frame7 from "../components/Frame7";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Profile2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.statusBarParent}>
          <StatusBar1
            statusBarPosition="absolute"
            statusBarWidth={390}
            statusBarHeight={95}
            statusBarTop={0}
            statusBarLeft={0}
            statusBarBackgroundColor="#e0a340"
            statusBarRight="unset"
            statusBarBottom="unset"
            notch={require("../assets/notch.png")}
            statusIconsWidth={69}
            statusIconsHeight={14}
            showNetworkSignalLight={false}
            wiFiSignalLight={require("../assets/wifi-signal--light.png")}
            showWiFiSignalLight={false}
            showBatteryLight={false}
            showTimeLight={false}
          />
          <Image
            style={[styles.batteryLight, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/battery--light1.png")}
          />
          <Image
            style={[styles.networkSignalLight, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/network-signal-light1.png")}
          />
          <Image
            style={[styles.wifiSignalLight, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light2.png")}
          />
          <Image
            style={styles.timeLight}
            contentFit="cover"
            source={require("../assets/time--light1.png")}
          />
        </View>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <View style={styles.tabBar}>
          <Pressable
            style={[styles.wrapper, styles.wrapperLayout]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-1272628274.png")}
            />
          </Pressable>
          <Text style={styles.profile1}>Profile</Text>
          <Pressable
            style={[styles.editIcon, styles.wrapperLayout]}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/editicon.png")}
            />
          </Pressable>
        </View>
      </View>
      <Frame6 />
      <Frame7 />
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  wrapperLayout: {
    width: 40,
    height: 40,
    top: 0,
    position: "absolute",
  },
  batteryLight: {
    left: 334,
    width: 25,
  },
  networkSignalLight: {
    left: 292,
    width: 20,
  },
  wifiSignalLight: {
    left: 315,
    width: 16,
  },
  timeLight: {
    top: 4,
    borderRadius: Border.br_xl,
    width: 54,
    height: 19,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  statusBarParent: {
    width: 390,
    height: 95,
  },
  frame: {
    left: -15,
    width: 405,
    alignItems: "flex-end",
    top: 0,
    justifyContent: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 0,
  },
  profile1: {
    top: 12,
    left: 127,
    fontSize: FontSize.size_5xl,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    width: 88,
    height: 20,
    position: "absolute",
  },
  editIcon: {
    left: 295,
  },
  tabBar: {
    width: 335,
    height: 40,
  },
  frame1: {
    top: 35,
    left: 16,
    width: 358,
  },
  profile: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile2;
