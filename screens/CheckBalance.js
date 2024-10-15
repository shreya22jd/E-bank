import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CheckBalance = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.checkBalance}>
      <View style={[styles.statusBarParent, styles.timeLightPosition]}>
      <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={412}
          statusBarHeight={95}
          statusBarTop={0.5}
          statusBarLeft={0.5}
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
        {/* <Image
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
        /> */}
      </View>

      {/* Bank of Baroda Pressable */}
      <Pressable
        onPress={() => navigation.navigate("UPIPIN2")}
        style={styles.bankContainer}
      >
        <Image
          style={styles.bankIcon}
          contentFit="cover"
          source={require("../assets/image-111.png")}
        />
        <Text style={styles.bankText}>Bank of Baroda</Text>
        <Image
          style={styles.arrowsIcon}
          contentFit="cover"
          source={require("../assets/arrows-diagramsarrow.png")}
        />
      </Pressable>

      {/* SBI Bank Pressable */}
      <Pressable
        onPress={() => navigation.navigate("UPIPIN2")}
        style={styles.bankContainer}
      >
        <Image
          style={styles.bankIcon}
          contentFit="cover"
          source={require("../assets/image-104.png")}
        />
        <Text style={styles.bankText}>SBI Bank</Text>
        <Image
          style={styles.arrowsIcon}
          contentFit="cover"
          source={require("../assets/arrows-diagramsarrow.png")}
        />
      </Pressable>

      {/* Canara Bank Pressable */}
      <Pressable
        onPress={() => navigation.navigate("UPIPIN2")}
        style={styles.bankContainer}
      >
        <Image
          style={styles.bankIcon}
          contentFit="cover"
          source={require("../assets/image-105.png")}
        />
        <Text style={styles.bankText}>Canara Bank</Text>
        <Image
          style={styles.arrowsIcon}
          contentFit="cover"
          source={require("../assets/arrows-diagramsarrow.png")}
        />
      </Pressable>

      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Text style={[styles.checkBalance1, styles.wrapperPosition]}>
        Check Balance
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeLightPosition: {
    left: 0,
    position: "absolute",
  },
  lightPosition: {
    height: 16,
    top: 7,
    position: "absolute",
  },
  bankContainer: {
    flexDirection: 'row',      // Align items horizontally
    alignItems: 'center',      // Center items vertically
    justifyContent: 'space-between',  // Add space between the text and icon
    marginVertical: 20,        // Space between each bank
    paddingHorizontal: 20,     // Padding around the container
  },
  bankIcon: {
    width: 55,
    height: 55,
    top:100,
    
  },
  bankText: {
    flex: 1,                    // Allow text to take available space
    marginLeft: 20,              // Space between the icon and text
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "700",
    top:100,
    fontSize: FontSize.size_2xl,
    textAlign: "left",           // Align text to the left
  },
  arrowsIcon: {
    width: 24,
    height: 24,
    top:100,
    left:-20,
  },
  batteryLight: {
    left: 334,
    width: 30,
  },
  networkSignalLight: {
    left: 292,
    width: 25,
  },
  wifiSignalLight: {
    left: 315,
    width: 20,
  },
  timeLight: {
    top: 4,
    borderRadius: Border.br_xl,
    width: 60,
    height: 22,
    overflow: "hidden",
  },
  statusBarParent: {
    top: 0,
    width: 390,
    height: 95,
  },
  wrapperPosition: {
    top: 35,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  checkBalance1: {
    left: 110,
    fontSize: 24,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    letterSpacing: 0,
    top: 36,
  },
  checkBalance: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CheckBalance;
