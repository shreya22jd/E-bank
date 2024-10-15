import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ChildScheme = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.childScheme, styles.timeLightLayout]}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.childSchemeChild, styles.childPosition]} />
      <Text style={[styles.childPlanWith, styles.yearsFlexBox]}>
        Child Plan with Profits
      </Text>
      <View style={styles.childSchemeItem} />
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.details, styles.detailsClr]}>Details</Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("ApplyForPolicy3")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.applyForPolicy, styles.detailsClr]}>
          Apply for Policy
        </Text>
      </Pressable>
      <Text style={[styles.termOfThe, styles.inCaseOfTypo]}>
        Term of the Policy
      </Text>
      <Text style={[styles.supplementaryCover, styles.inCaseOfTypo]}>
        Supplementary Cover
      </Text>
      <Text style={[styles.onMaturity, styles.inCaseOfTypo]}>On Maturity</Text>
      <Text style={[styles.inCaseOf, styles.inCaseOfTypo]}>
        In case of assured’s death during policy term
      </Text>
      <Text style={[styles.specialBenefits, styles.inCaseOfTypo]}>
        Special Benefits
      </Text>
      <Text
        style={[styles.years, styles.yearsFlexBox]}
      >{`10, 11, 12, 13, 14, & 15 Years`}</Text>
      <Image
        style={styles.connectionsIcon}
        contentFit="cover"
        source={require("../assets/connections5.png")}
      />
      <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
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
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Products")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Text style={[styles.policyDetails, styles.timeTypo]}>
        Policy Details
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeLightLayout: {
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  childPosition: {
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
  },
  yearsFlexBox: {
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  rectangleLayout: {
    height: 35,
    width: 160,
    top: 281,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    left: 0,
    top: 0,
    height: 35,
    width: 160,
    position: "absolute",
  },
  detailsClr: {
    color: Color.white,
    textAlign: "left",
  },
  inCaseOfTypo: {
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 29,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  timeTypo: {
    fontWeight: "700",
    position: "absolute",
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
  vectorIcon: {
    height: "111.01%",
    top: "0%",
    bottom: "-11.01%",
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
  },
  childSchemeChild: {
    height: "101.71%",
    top: "11.39%",
    bottom: "-13.1%",
    width: "100%",
    backgroundColor: Color.white,
  },
  childPlanWith: {
    top: 119,
    left: 16,
    fontSize: FontSize.font_size,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
  },
  childSchemeItem: {
    top: 156,
    left: 24,
    backgroundColor: "rgba(224, 163, 64, 0.62)",
    width: 329,
    height: 110,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 176,
    left: 154,
    width: 70,
    height: 70,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.41)",
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: Color.colorPeru_200,
  },
  details: {
    top: 9,
    left: 51,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.white,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rectangleParent: {
    left: 29,
    width: 160,
    top: 281,
  },
  groupItem: {
    shadowColor: "rgba(0, 0, 0, 0.32)",
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Color.colorGoldenrod_100,
  },
  applyForPolicy: {
    top: 8,
    left: 23,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.white,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rectangleGroup: {
    left: 198,
    width: 160,
    top: 281,
  },
  termOfThe: {
    top: 331,
  },
  supplementaryCover: {
    top: 396,
  },
  onMaturity: {
    top: 461,
  },
  inCaseOf: {
    top: 526,
  },
  specialBenefits: {
    top: 591,
  },
  years: {
    top: 349,
    left: 38,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
  },
  connectionsIcon: {
    top: 12,
    right: 22,
    width: 68,
    height: 16,
    position: "absolute",
  },
  time: {
    marginTop: -401,
    top: "50%",
    left: 31,
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    color: Color.lightGray11,
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
  },
  statusBarParent: {
    width: 390,
    height: 95,
    top: 0,
    left: 0,
  },
  icon: {
    height: "100%",
  },
  wrapper: {
    left: "7.2%",
    top: "3.69%",
    right: "82.13%",
    bottom: "91.38%",
    width: "10.67%",
    height: "4.93%",
    position: "absolute",
  },
  policyDetails: {
    height: "4.84%",
    width: "43.89%",
    top: "4.43%",
    left: "29.07%",
    fontSize: FontSize.m3TitleLarge_size,
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "left",
  },
  childScheme: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ChildScheme;
