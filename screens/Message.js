import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Message = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.message}>
      <Pressable
        style={styles.iconsarrowsarrowLongLeft}
        onPress={() => navigation.navigate("OrderReview")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconsarrowsarrowlongleft1.png")}
        />
      </Pressable>
      <View style={styles.searchButton} />
      <View style={[styles.image108Parent, styles.wrapperPosition]}>
        <Image
          style={[styles.image108Icon, styles.timeLightPosition]}
          contentFit="cover"
          source={require("../assets/image-108.png")}
        />
        <Text style={styles.searchLanguage}>message..</Text>
      </View>
      <Image
        style={styles.vuesaxlinearpaperclip2Icon}
        contentFit="cover"
        source={require("../assets/vuesaxlinearpaperclip21.png")}
      />
      <Text style={[styles.yesterday, styles.okayTypo]}>yesterday</Text>
      <View style={[styles.messageChild, styles.messageBorder]} />
      <View style={[styles.messageItem, styles.messageBorder]} />
      <Text style={[styles.hiCanYou, styles.okayTypo]}>
        Hi, can you send me 500
      </Text>
      <Text style={[styles.okay, styles.okayTypo]}>Okay</Text>
      <View style={[styles.statusBarParent, styles.timeLightPosition]}>
        <StatusBar1
          notch={require("../assets/notch.png")}
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
          style={[styles.timeLight, styles.timeLightPosition]}
          contentFit="cover"
          source={require("../assets/time--light1.png")}
        />
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.reason}>Alex</Text>
          <Text style={styles.time}>+91-2384659236</Text>
        </View>
      </View>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("RequestMoney")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-1000000886.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wrapperPosition: {
    left: 22,
    position: "absolute",
  },
  timeLightPosition: {
    left: 0,
    position: "absolute",
  },
  okayTypo: {
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    textAlign: "left",
    position: "absolute",
  },
  messageBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  icon: {
    marginTop: -330,
  },
  iconsarrowsarrowLongLeft: {
    left: 23,
    top: "50%",
    width: 24,
    height: 24,
    position: "absolute",
  },
  searchButton: {
    top: 756,
    backgroundColor: Color.colorWhitesmoke_800,
    width: 351,
    height: 42,
    borderRadius: Border.br_3xs,
    left: 11,
    position: "absolute",
  },
  image108Icon: {
    width: 21,
    top: 0,
    left: 0,
    height: 19,
  },
  searchLanguage: {
    top: 2,
    left: 28,
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 14,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    width: 124,
    height: 16,
    textAlign: "left",
    position: "absolute",
  },
  image108Parent: {
    top: 768,
    width: 152,
    height: 19,
  },
  vuesaxlinearpaperclip2Icon: {
    top: 775,
    left: 269,
    width: 5,
    height: 4,
    position: "absolute",
  },
  yesterday: {
    top: 95,
    left: 160,
    fontSize: FontSize.mobileBody3Regular_size,
  },
  messageChild: {
    top: 252,
    backgroundColor: "#eabd75",
    width: 95,
    height: 43,
    left: 11,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
  },
  messageItem: {
    top: 173,
    left: 133,
    backgroundColor: Color.gray6,
    width: 225,
    height: 59,
  },
  hiCanYou: {
    top: 188,
    left: 138,
    fontSize: FontSize.font_size,
  },
  okay: {
    top: 259,
    left: 32,
    fontSize: FontSize.font_size,
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
    overflow: "hidden",
  },
  statusBarParent: {
    width: 390,
    height: 95,
    top: 0,
    left: 0,
  },
  reason: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.font_size,
  },
  time: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorWhitesmoke_800,
    textAlign: "center",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  info: {
    top: 32,
    left: 86,
    width: 338,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  wrapper: {
    top: 30,
    width: 42,
    height: 42,
  },
  message: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Message;
