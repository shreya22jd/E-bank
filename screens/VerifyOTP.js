import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import KeyboardsNumber from "../components/KeyboardsNumber";
import Button1 from "../components/Button1";
import Item3 from "../components/Item3";
import BarsTopBarsV2 from "../components/BarsTopBarsV2";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const VerifyOTP = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verifyOtp}>
      <View style={styles.body}>
        <KeyboardsNumber />
        <View style={styles.barsHomeIndicatorIphone}>
          <View style={styles.homeIndicator} />
        </View>
        <Button1
          onButtonPress={() => navigation.navigate("Home2")}
          propHeight={44}
          propWidth={305}
          propTop={261}
          propRight="unset"
          propBottom="unset"
          propLeft={35}
          propBackgroundColor="#c6ab5a"
          iconsArrowsarrowLongRight={require("../assets/iconsarrowsarrowlongright.png")}
          text="Continue"
          propLeft1={119}
        />
        <View style={styles.codeNumber}>
          <Item3
            propRight="unset"
            propLeft={240}
            propHeight={65}
            propWidth={65}
            propTop={0}
            propBottom="unset"
            propBackgroundColor="#8f92a1"
            number=" "
          />
          <Item3
            propRight="unset"
            propLeft={160}
            propHeight={65}
            propWidth={65}
            propTop={0}
            propBottom="unset"
            propBackgroundColor="#171717"
            number="4"
          />
          <Item3
            propRight="unset"
            propLeft={80}
            propHeight={65}
            propWidth={65}
            propTop={0}
            propBottom="unset"
            propBackgroundColor="#171717"
            number="8"
          />
          <Item3 number="6" />
        </View>
        <View style={styles.title}>
          <Text
            style={[styles.anAuthenticationCo, styles.authenticationPosition]}
          >
            An authentication code has been sent to (+61) 0486935279
          </Text>
          <Text
            style={[styles.otpAuthentication, styles.authenticationPosition]}
          >
            OTP Authentication
          </Text>
        </View>
      </View>
      <BarsTopBarsV2
        capIconBackgroundColor="#c6ab5a"
        capIconHeight={99}
        capIconLeft={-13}
        capIconWidth={388}
        propMarginTop={10.5}
        wifi={require("../assets/wifi10.png")}
        cellularConnection={require("../assets/cellular-connection7.png")}
        showBattery
        barsStatusBariPhoneLightPosition="absolute"
        barsStatusBariPhoneLightBackground="unset"
        barsStatusBariPhoneLightHeight="44.04%"
        barsStatusBariPhoneLightTop="0%"
        barsStatusBariPhoneLightRight="0%"
        barsStatusBariPhoneLightBottom="55.96%"
        barsStatusBariPhoneLightLeft="0%"
        wifiIconHeight="11"
        wifiIconWidth="16"
        cellularConnectionIconHeight="11"
        cellularConnectionIconWidth="18"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  authenticationPosition: {
    textAlign: "left",
    color: Color.blackB100,
    left: "0%",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightGray11,
    width: 134,
    height: 5,
    position: "absolute",
  },
  barsHomeIndicatorIphone: {
    top: 630,
    left: 0,
    width: 375,
    height: 34,
    opacity: 0.05,
    position: "absolute",
  },
  codeNumber: {
    top: 128,
    left: 35,
    width: 305,
    height: 65,
    position: "absolute",
  },
  anAuthenticationCo: {
    width: "76.72%",
    top: "45.45%",
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
    opacity: 0.6,
  },
  otpAuthentication: {
    marginTop: -44,
    top: "50%",
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    width: "100%",
  },
  title: {
    height: "13.25%",
    width: "81.33%",
    top: "0%",
    right: "9.33%",
    bottom: "86.75%",
    left: "9.33%",
    position: "absolute",
  },
  body: {
    height: "81.77%",
    top: "18.23%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  verifyOtp: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default VerifyOTP;
