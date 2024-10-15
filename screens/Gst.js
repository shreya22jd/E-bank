import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent4 from "../components/GroupComponent4";
import GroupComponent36 from "../components/GroupComponent36";
import { useNavigation } from "@react-navigation/native";
import StatusBar1 from "../components/StatusBar1";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Gst = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.gst, styles.gstLayout1]}>
      <View style={styles.groupParent}>
        <GroupComponent1 />
        <View style={styles.frameParent}>
          <View style={[styles.welcomeToLivechatWrapper, styles.exitFlexBox]}>
            <Text style={styles.welcomeToLivechat}>{`Welcome to
 LiveChat`}</Text>
          </View>
          <View style={styles.groupContainer}>
            <Image
              style={styles.groupChild}
              contentFit="cover"
              source={require("../assets/group-6.png")}
            />
            <Text style={[styles.livechat0210Pm, styles.livechat0210PmTypo]}>
              Livechat 02:10 PM
            </Text>
          </View>
        </View>
        <GroupComponent4
          propTop={266}
          propLeft={275}
          propBackgroundColor="#e0a340"
        />
      </View>
      <View style={[styles.chatWithUsParent, styles.groupItemLayout]}>
        <Text style={[styles.chatWithUs, styles.chatWithUsFlexBox]}>
          Chat with us!
        </Text>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
      </View>
      <View style={[styles.exit, styles.exitFlexBox]}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrowleft6.png")}
        />
      </View>
      <Text
        style={[styles.analyseMyThis, styles.chatWithUsTypo]}
      >{`Analyse my this 
month expenses`}</Text>
      <GroupComponent36 />
      <View style={[styles.gstChild, styles.loginPosition]} />
      <Image
        style={styles.qrcode12}
        contentFit="cover"
        source={require("../assets/qrcode-1-2.png")}
      />
      <Text style={[styles.paymentDetails, styles.gstInvoiceTypo]}>
        Payment Details
      </Text>
      <View style={[styles.gstItem, styles.gstLayout]} />
      <View style={[styles.gstInner, styles.gstLayout]} />
      <View style={[styles.rectangleView, styles.gstLayout]} />
      <Pressable
        style={[styles.login, styles.loginPosition]}
        onPress={() => navigation.navigate("Info")}
      >
        <Text style={[styles.label, styles.labelFlexBox]}>Pay</Text>
      </Pressable>
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
      <Text style={[styles.gstInvoice, styles.labelFlexBox]}>GST Invoice</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.gstLayout1]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gstLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  exitFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  livechat0210PmTypo: {
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
  },
  groupItemLayout: {
    width: 374,
    position: "absolute",
  },
  chatWithUsFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  chatWithUsTypo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    position: "absolute",
  },
  loginPosition: {
    left: 34,
    position: "absolute",
  },
  gstInvoiceTypo: {
    fontWeight: "600",
    position: "absolute",
  },
  gstLayout: {
    height: 11,
    width: 144,
    backgroundColor: Color.colorGainsboro_100,
    left: 42,
    position: "absolute",
  },
  labelFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  welcomeToLivechat: {
    textAlign: "left",
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.font_size,
  },
  welcomeToLivechatWrapper: {
    top: 33,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    borderColor: Color.colorGainsboro_200,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: 1,
    width: 28,
    height: 28,
    left: 0,
    position: "absolute",
  },
  livechat0210Pm: {
    marginLeft: -37,
    left: "50%",
    top: 0,
    color: Color.iPFTGreyText,
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    fontSize: FontSize.mobileBody3Regular_size,
    position: "absolute",
  },
  groupContainer: {
    width: 136,
    height: 30,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameParent: {
    top: 477,
    left: 64,
    width: 145,
    height: 121,
    position: "absolute",
  },
  groupParent: {
    top: -52,
    left: -435,
    width: 397,
    height: 598,
    position: "absolute",
  },
  chatWithUs: {
    left: 110,
    fontSize: FontSize.size_xl,
    width: 125,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 30,
    position: "absolute",
    top: 0,
  },
  groupItem: {
    marginLeft: -187,
    top: 57,
    borderColor: Color.colorSlategray_200,
    borderBottomWidth: 1,
    height: 1,
    left: "50%",
    borderStyle: "solid",
    width: 374,
    overflow: "hidden",
  },
  chatWithUsParent: {
    top: 30,
    height: 58,
    left: 0,
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
  },
  exit: {
    top: 24,
    left: 25,
    borderRadius: Border.br_5xs,
    padding: Padding.p_7xs,
    justifyContent: "center",
    position: "absolute",
  },
  analyseMyThis: {
    marginTop: -305,
    marginLeft: -162.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.font_size,
  },
  gstChild: {
    top: 455,
    borderColor: Color.lightGray11,
    width: 279,
    height: 128,
    borderWidth: 1,
    borderStyle: "solid",
  },
  qrcode12: {
    top: 478,
    left: 214,
    width: 91,
    height: 91,
    position: "absolute",
    overflow: "hidden",
  },
  paymentDetails: {
    top: 460,
    left: 39,
    fontFamily: FontFamily.interSemiBold,
    color: Color.lightGray11,
    width: 95,
    height: 23,
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
  },
  gstItem: {
    top: 494,
  },
  gstInner: {
    top: 508,
  },
  rectangleView: {
    top: 524,
  },
  label: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    fontSize: FontSize.font_size,
  },
  login: {
    top: 656,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGoldenrod_100,
    width: 327,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    top: 0,
    left: 0,
    position: "absolute",
  },
  gstInvoice: {
    top: 40,
    left: 48,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemiBold,
    width: 286,
    height: 31,
    fontWeight: "600",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "7.2%",
    top: "4.43%",
    right: "81.6%",
    bottom: "90.64%",
    width: "11.2%",
    height: "4.93%",
    position: "absolute",
  },
  gst: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhitesmoke_500,
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default Gst;
