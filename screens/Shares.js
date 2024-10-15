import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Card2 from "../components/Card2";
import Card1 from "../components/Card1";
import Card from "../components/Card";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Gap,
  Padding,
} from "../GlobalStyles";

const Shares = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.shares}>
      <Card2 />
      <Card1 />
      <View style={[styles.tab, styles.tabLayout]}>
        <Text style={[styles.overview, styles.overviewFlexBox]}>Overview</Text>
        <Text style={[styles.marketStats, styles.appleIncPosition]}>
          Market Stats
        </Text>
        <Text style={[styles.financialas, styles.appleIncPosition]}>
          Financialas
        </Text>
        <Text style={[styles.institutional, styles.openPriceTypo]}>
          Institutional
        </Text>
        <Image
          style={[styles.progressBarIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/progress-bar.png")}
        />
      </View>
      <View style={[styles.section, styles.tabLayout]}>
        <View style={[styles.card, styles.cardPosition]}>
          <View style={[styles.rectangle, styles.rectangleShadowBox]} />
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
          <View style={[styles.text, styles.textPosition]}>
            <Text style={[styles.openPrice, styles.openPriceTypo]}>
              Open Price
            </Text>
            <Text style={[styles.text1, styles.textTypo]}>9,453.76</Text>
          </View>
        </View>
        <View style={[styles.card1, styles.cardPosition]}>
          <View style={[styles.rectangle1, styles.rectangleShadowBox]} />
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon3.png")}
          />
          <View style={[styles.text2, styles.textPosition]}>
            <Text style={[styles.openPrice, styles.openPriceTypo]}>Volume</Text>
            <Text style={styles.textTypo}>
              <Text style={styles.text4}>₹</Text>
              <Text style={styles.text5}>2,782,002</Text>
            </Text>
          </View>
        </View>
        <Card
          icon={require("../assets/icon4.png")}
          hHigh="24h High"
          prop="782.00"
          prop1="+2,6%"
        />
        <Card
          propLeft={200}
          icon={require("../assets/icon5.png")}
          propWidth={115}
          hHigh="24h Low"
          prop="982.82"
          prop1="-2,4%"
          propLeft1="65.22%"
          propColor="#d14242"
        />
      </View>
      <View style={styles.statusBarParent}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth="100%"
          statusBarHeight="100%"
          statusBarTop="0%"
          statusBarLeft="0%"
          statusBarBackgroundColor="#e0a340"
          statusBarRight="0%"
          statusBarBottom="0%"
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
          source={require("../assets/wifi-signal--light1.png")}
        />
        <Image
          style={[styles.timeLight, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/time--light1.png")}
        />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <View style={styles.header}>
        <Text style={[styles.appleInc, styles.appleIncPosition]}>
          Apple Inc.
        </Text>
        <Image
          style={[styles.icon3, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/icon6.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabLayout: {
    width: 386,
    position: "absolute",
  },
  overviewFlexBox: {
    textAlign: "left",
    letterSpacing: 1,
  },
  appleIncPosition: {
    textAlign: "center",
    letterSpacing: 1,
    top: "50%",
    position: "absolute",
  },
  openPriceTypo: {
    color: Color.colorDarkgray_300,
    fontFamily: FontFamily.sFProText,
    fontWeight: "500",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cardPosition: {
    height: 693,
    top: 0,
    position: "absolute",
  },
  rectangleShadowBox: {
    height: 71,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 48,
    shadowRadius: 48,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.04)",
    top: 622,
    width: 186,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    top: 643,
    position: "absolute",
  },
  textPosition: {
    gap: Gap.gap_10xs,
    height: 43,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.colorDarkolivegreen,
    fontSize: FontSize.m3TitleMedium_size,
    textAlign: "left",
    letterSpacing: 1,
  },
  lightPosition: {
    bottom: "78.95%",
    top: "7.37%",
    height: "13.68%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  overview: {
    color: Color.colorBurlywood_100,
    fontFamily: FontFamily.sFProText,
    fontWeight: "500",
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "left",
    left: "0%",
    top: "50%",
    marginTop: -10.5,
    position: "absolute",
  },
  marketStats: {
    left: "23.32%",
    color: Color.colorDarkgray_300,
    fontFamily: FontFamily.sFProText,
    fontWeight: "500",
    fontSize: FontSize.mobileBody3Regular_size,
    marginTop: -10.5,
    textAlign: "center",
  },
  financialas: {
    left: "52.33%",
    color: Color.colorDarkgray_300,
    fontFamily: FontFamily.sFProText,
    fontWeight: "500",
    fontSize: FontSize.mobileBody3Regular_size,
    marginTop: -10.5,
    textAlign: "center",
  },
  institutional: {
    left: "79.02%",
    textAlign: "right",
    letterSpacing: 1,
    top: "50%",
    color: Color.colorDarkgray_300,
    marginTop: -10.5,
    position: "absolute",
  },
  progressBarIcon: {
    height: "4.76%",
    top: "95.24%",
    right: "0%",
    bottom: "0%",
    maxWidth: "100%",
    left: "0%",
    width: "100%",
  },
  tab: {
    top: 590,
    height: 21,
    left: 14,
    overflow: "hidden",
  },
  rectangle: {
    left: 0,
  },
  icon: {
    left: 14,
  },
  openPrice: {
    textAlign: "left",
    letterSpacing: 1,
  },
  text1: {
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
  },
  text: {
    width: 78,
    justifyContent: "flex-end",
    paddingRight: Padding.p_12xs,
    left: 58,
  },
  card: {
    width: 186,
    height: 693,
    top: 0,
    left: 0,
  },
  rectangle1: {
    left: 142,
  },
  icon1: {
    left: 156,
  },
  text4: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  text5: {
    fontFamily: FontFamily.interRegular,
  },
  text2: {
    width: 100,
    left: 0,
  },
  card1: {
    width: 328,
    left: 58,
    height: 693,
    top: 0,
  },
  section: {
    top: 14,
    height: 778,
    left: 0,
  },
  batteryLight: {
    width: "6.41%",
    right: "7.95%",
    left: "85.64%",
  },
  networkSignalLight: {
    width: "5.13%",
    right: "20%",
    left: "74.87%",
  },
  wifiSignalLight: {
    width: "4.1%",
    right: "15.13%",
    left: "80.77%",
  },
  timeLight: {
    height: "20%",
    width: "13.85%",
    top: "4.21%",
    right: "86.15%",
    bottom: "75.79%",
    borderRadius: Border.br_xl,
    left: "0%",
  },
  statusBarParent: {
    height: "11.7%",
    width: "104%",
    top: "0%",
    right: "-4%",
    bottom: "88.3%",
    left: "0%",
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 32,
    top: 34,
    width: 40,
    height: 40,
    position: "absolute",
  },
  appleInc: {
    marginTop: -18.5,
    width: "35%",
    left: "23.42%",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    fontWeight: "600",
  },
  icon3: {
    height: "94.84%",
    width: "0.53%",
    top: "5.16%",
    right: "1.84%",
    left: "97.63%",
    bottom: "0%",
    maxWidth: "100%",
  },
  header: {
    top: 38,
    left: 22,
    width: 380,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  shares: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Shares;
