import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import GroupComponent33 from "../components/GroupComponent33";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Loan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loan}>
      <View style={[styles.loanChild, styles.loanChildLayout]} />
      <View style={[styles.exit, styles.exitPosition]}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrowleft3.png")}
        />
      </View>
      <View style={[styles.statusBarParent, styles.groupInnerPosition]}>
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
      <Image
        style={styles.loanItem}
        contentFit="cover"
        source={require("../assets/group-1272628238.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.exitPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Text style={[styles.name, styles.namePosition]}>Name</Text>
      <Text style={[styles.goodMorning, styles.namePosition]}>
        Good morning
      </Text>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Pressable
          style={styles.groupChildPosition}
          onPress={() => navigation.navigate("Info1")}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </Pressable>
        <Image
          style={[styles.tdesigncalculation1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/tdesigncalculation1.png")}
        />
      </View>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <Pressable
          style={styles.groupChildPosition}
          onPress={() => navigation.navigate("LoanApply")}
        >
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </Pressable>
        <View style={[styles.rectangleParent, styles.iconLayout]}>
          <View style={[styles.groupInner, styles.iconLayout]} />
          <Image
            style={[styles.vectorIcon, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/vector24.png")}
          />
        </View>
      </View>
      <GroupComponent33 />
      <Image
        style={[styles.smartCarIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/smartcar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loanChildLayout: {
    height: 95,
    position: "absolute",
  },
  exitPosition: {
    top: 36,
    position: "absolute",
  },
  groupInnerPosition: {
    top: 0,
    left: 0,
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  namePosition: {
    textAlign: "left",
    left: 103,
    position: "absolute",
  },
  groupLayout: {
    height: "6.16%",
    position: "absolute",
  },
  groupChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    height: 36,
    position: "absolute",
  },
  loanChild: {
    top: -2,
    left: -12,
    backgroundColor: Color.colorGoldenrod_100,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderBottomWidth: 1,
    width: 398,
    display: "none",
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
    display: "none",
  },
  exit: {
    left: 15,
    borderRadius: Border.br_5xs,
    width: 38,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_7xs,
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
    left: 0,
    height: 95,
    position: "absolute",
  },
  loanItem: {
    top: 29,
    left: 310,
    width: 42,
    height: 50,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 23,
    width: 40,
    height: 40,
  },
  name: {
    top: 39,
    fontSize: FontSize.m3TitleLarge_size,
    fontWeight: "500",
    fontFamily: FontFamily.lexendDecaMedium,
    color: Color.white,
    width: 145,
  },
  goodMorning: {
    top: 65,
    fontSize: 13,
    fontFamily: FontFamily.lexendDecaRegular,
    color: Color.colorWhitesmoke_800,
  },
  groupChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorPeru_200,
  },
  tdesigncalculation1Icon: {
    left: 7,
    width: 36,
    height: 36,
    top: 7,
    overflow: "hidden",
  },
  groupParent: {
    width: "13.33%",
    top: "26.97%",
    right: "13.87%",
    bottom: "66.87%",
    left: "72.8%",
  },
  groupInner: {
    backgroundColor: Color.colorGray_1800,
    width: 36,
    height: 36,
    left: 0,
    top: 0,
  },
  vectorIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 6,
    left: 2,
    width: 36,
    height: 36,
  },
  groupContainer: {
    width: "10.96%",
    top: "13.92%",
    right: "81.57%",
    bottom: "79.93%",
    left: "7.47%",
  },
  smartCarIcon: {
    top: 224,
    left: 161,
    width: 33,
  },
  loan: {
    shadowColor: "rgba(255, 255, 255, 0.25)",
    shadowOffset: {
      width: 0,
      height: 40,
    },
    shadowRadius: 250,
    elevation: 250,
    shadowOpacity: 1,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Loan;
