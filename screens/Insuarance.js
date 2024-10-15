import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import GroupComponent30 from "../components/GroupComponent30";
import {
  Color,
  Border,
  Gap,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const Insuarance = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.insuarance}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.insuaranceChild, styles.vectorIconPosition]} />
      <View style={[styles.chatsParent, styles.chatsFlexBox]}>
        <View style={[styles.chats, styles.chatsFlexBox]}>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/chats1.png")}
          />
          <View style={styles.line} />
        </View>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("QRCode")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-51.png")}
          />
        </Pressable>
        <Image
          style={[styles.weuilocationFilledIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/weuilocationfilled1.png")}
        />
        <Pressable
          style={styles.iconLayout1}
          onPress={() => navigation.navigate("Profile2")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/profile1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.statusBarParent, styles.timeLightPosition]}>
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
          wiFiSignalLight={require("../assets/wifi-signal--light3.png")}
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
          source={require("../assets/wifi-signal--light1.png")}
        />
        <Image
          style={[styles.timeLight, styles.timeLightPosition]}
          contentFit="cover"
          source={require("../assets/time--light1.png")}
        />
      </View>
      <Text style={styles.insurance}>Insurance</Text>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
      <GroupComponent30 />
      <Image
        style={styles.image141Icon}
        contentFit="cover"
        source={require("../assets/image-141.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
    width: "100%",
  },
  chatsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  timeLightPosition: {
    left: 0,
    position: "absolute",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vectorIcon: {
    height: "111.01%",
    top: "0%",
    bottom: "-11.01%",
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
    width: "100%",
  },
  insuaranceChild: {
    height: "101.71%",
    top: "11.39%",
    bottom: "-13.1%",
    backgroundColor: Color.white,
  },
  line: {
    shadowColor: "rgba(59, 56, 235, 0.24)",
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
    borderBottomRightRadius: Border.br_81xl,
    borderBottomLeftRadius: Border.br_81xl,
    backgroundColor: Color.colorPeru_300,
    width: 12,
    height: 2,
    overflow: "hidden",
  },
  chats: {
    height: 32,
    gap: Gap.gap_18xs,
  },
  wrapper: {
    width: 17,
    height: 16,
  },
  weuilocationFilledIcon: {
    overflow: "hidden",
  },
  chatsParent: {
    bottom: 0,
    left: 11,
    borderRadius: Border.br_3xs,
    width: 362,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_18xl,
    gap: Gap.gap_12xl,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
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
    width: 54,
    height: 19,
    overflow: "hidden",
    borderRadius: Border.br_xl,
    left: 0,
  },
  statusBarParent: {
    top: 0,
    width: 390,
    height: 95,
  },
  insurance: {
    height: "4.84%",
    width: "55.28%",
    top: "4.8%",
    left: "32.27%",
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  icon2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  container: {
    left: "8.27%",
    top: "4.06%",
    right: "80.53%",
    bottom: "91.01%",
    width: "11.2%",
    height: "4.93%",
    position: "absolute",
  },
  image141Icon: {
    top: 136,
    left: 12,
    width: 336,
    height: 206,
    position: "absolute",
  },
  insuarance: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
});

export default Insuarance;
