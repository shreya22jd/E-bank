import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Section1 from "../components/Section1";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Gap } from "../GlobalStyles";

const Info1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.info11}>
      <Text
        style={styles.loremIpsumDolor}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
`}</Text>
      <Section1 />
      <View style={styles.info11Inner}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.calculate, styles.calculateClr]}>Calculate</Text>
        </View>
      </View>
      <View style={[styles.statusBarParent, styles.statusBarParentPosition]}>
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
          style={[styles.timeLight, styles.timeLightPosition]}
          contentFit="cover"
          source={require("../assets/time--light1.png")}
        />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Loan")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View
          style={[styles.homeIndicatorwhite, styles.statusBarParentPosition]}
        >
          <View style={styles.shape} />
        </View>
        <View style={[styles.iconoutlinehomeParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinehome.png")}
          />
          <View style={styles.groupInnerLayout}>
            <View style={[styles.groupInner, styles.groupInnerLayout]} />
            <View style={[styles.ioncarSportParent, styles.parentFlexBox]}>
              <Image
                style={styles.iconoutlinehome}
                contentFit="cover"
                source={require("../assets/ioncarsport1.png")}
              />
              <Text style={[styles.insurance, styles.insuranceTypo]}>
                Insurance
              </Text>
            </View>
          </View>
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinesmviewgridadd.png")}
          />
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinequestionmarkcircle1.png")}
          />
        </View>
      </View>
      <Text style={[styles.loanCalculator, styles.insuranceTypo]}>
        Loan Calculator
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  calculateClr: {
    color: Color.white,
    position: "absolute",
  },
  statusBarParentPosition: {
    left: 0,
    position: "absolute",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  timeLightPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  groupInnerLayout: {
    height: 36,
    width: 122,
  },
  insuranceTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  loremIpsumDolor: {
    height: "5.17%",
    width: "86.93%",
    top: "15.15%",
    left: "5.6%",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.gray3,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.41)",
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: Color.colorGoldenrod_100,
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_base,
  },
  calculate: {
    height: "33.33%",
    width: "34.25%",
    top: "33.33%",
    left: "35.47%",
    fontSize: FontSize.font_size,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    textAlign: "left",
  },
  rectangleParent: {
    height: 54,
    width: 327,
  },
  info11Inner: {
    top: 638,
    justifyContent: "center",
    alignItems: "center",
    width: 327,
    borderRadius: Border.br_base,
    left: 24,
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
    width: 54,
    height: 19,
    overflow: "hidden",
  },
  statusBarParent: {
    width: 390,
    height: 95,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 20,
    top: 34,
    width: 40,
    height: 40,
    position: "absolute",
  },
  groupItem: {
    shadowColor: "rgba(17, 17, 17, 0.12)",
    shadowRadius: 15,
    elevation: 15,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.white,
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  shape: {
    marginLeft: -67.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_600,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicatorwhite: {
    top: 62,
    width: 375,
    height: 34,
  },
  iconoutlinehome: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupInner: {
    backgroundColor: Color.secondary,
    opacity: 0.15,
    borderRadius: Border.br_xl,
    left: 0,
    position: "absolute",
    top: 0,
  },
  insurance: {
    fontSize: FontSize.mobileBody3Regular_size,
    color: Color.secondary,
  },
  ioncarSportParent: {
    top: 6,
    left: 15,
    gap: Gap.gap_16xs,
  },
  iconoutlinehomeParent: {
    top: 20,
    gap: Gap.gap_8xl,
    left: 24,
    flexDirection: "row",
  },
  rectangleGroup: {
    height: "11.82%",
    top: "88.18%",
    display: "none",
  },
  loanCalculator: {
    top: 40,
    left: 92,
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 30,
    color: Color.white,
    position: "absolute",
  },
  info11: {
    shadowColor: "rgba(88, 88, 88, 0.1)",
    shadowRadius: 80,
    elevation: 80,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default Info1;
