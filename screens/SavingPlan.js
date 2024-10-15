import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import NewPlan from "../components/NewPlan";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import {
  Border,
  Color,
  FontSize,
  FontFamily,
  Gap,
  Padding,
} from "../GlobalStyles";

const SavingPlan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.savingPlan}>
      <View style={[styles.vectorParent, styles.insightPosition]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
      </View>
      <Text style={[styles.insight, styles.insightPosition]}>Insight</Text>
      <View style={[styles.options, styles.totaleLayout]}>
        <View style={[styles.totale, styles.totaleLayout]} />
        <Text style={[styles.statistics, styles.apr1FlexBox]}>Statistics</Text>
      </View>
      <NewPlan />
      <View style={styles.plans}>
        <View style={styles.apr}>
          <View style={[styles.container, styles.ammountBorder]} />
          <View style={[styles.plan1, styles.planFlexBox]}>
            <View style={styles.info}>
              <View style={styles.aprWrapper}>
                <Text style={[styles.apr1, styles.apr1FlexBox]}>APR</Text>
              </View>
              <Text style={styles.plan25AprContainer}>
                <Text style={styles.plan25}>{`Plan 25
`}</Text>
                <Text style={styles.apr11}>Apr 1 - Apr 30, 2022</Text>
              </Text>
            </View>
            <View style={[styles.ammount, styles.ammountBorder]}>
              <Text style={[styles.inr2500, styles.apr1FlexBox]}>
                INR 2,500
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.apr}>
          <View style={[styles.container, styles.ammountBorder]} />
          <View style={[styles.plan2, styles.planFlexBox]}>
            <View style={styles.info}>
              <View style={[styles.marWrapper, styles.wrapperLayout]}>
                <Text style={[styles.apr1, styles.apr1FlexBox]}>MAR</Text>
              </View>
              <Text style={[styles.plan10MarContainer, styles.containerLayout]}>
                <Text style={styles.plan25}>{`Plan 10
`}</Text>
                <Text style={styles.apr11}>Mar 1 - Mar 31, 2022</Text>
              </Text>
            </View>
            <View style={[styles.ammount, styles.ammountBorder]}>
              <Text style={[styles.inr2500, styles.apr1FlexBox]}>
                INR 150.40
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.apr}>
          <View style={[styles.container, styles.ammountBorder]} />
          <View style={[styles.plan3, styles.planFlexBox]}>
            <View style={styles.info}>
              <View style={[styles.febWrapper, styles.wrapperLayout]}>
                <Text style={[styles.apr1, styles.apr1FlexBox]}>FEB</Text>
              </View>
              <Text style={styles.plan25FebContainer}>
                <Text style={styles.plan251}>{`Plan 25%
`}</Text>
                <Text style={styles.feb11}>Feb 1 - Feb 28, 2022</Text>
              </Text>
            </View>
            <View style={[styles.ammount, styles.ammountBorder]}>
              <Text style={[styles.text, styles.apr1FlexBox]}>€375,04</Text>
            </View>
          </View>
        </View>
        <View style={styles.apr}>
          <View style={[styles.container, styles.ammountBorder]} />
          <View style={[styles.plan4, styles.planFlexBox]}>
            <View style={styles.info}>
              <View style={[styles.febWrapper, styles.wrapperLayout]}>
                <Text style={[styles.apr1, styles.apr1FlexBox]}>JAN</Text>
              </View>
              <Text style={styles.containerLayout}>
                <Text style={styles.plan251}>{`Plan 5%
`}</Text>
                <Text style={styles.feb11}>Jan 1 - Jan 31, 2022</Text>
              </Text>
            </View>
            <View style={[styles.ammount, styles.ammountBorder]}>
              <Text style={[styles.text, styles.apr1FlexBox]}>€89,00</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.statusBarParent, styles.statisticsPosition]}>
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
          source={require("../assets/wifi-signal--light1.png")}
        />
        <Image
          style={styles.timeLight}
          contentFit="cover"
          source={require("../assets/time--light1.png")}
        />
      </View>
      <Text style={styles.savingPlan1}>Saving Plan</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  insightPosition: {
    display: "none",
    position: "absolute",
  },
  totaleLayout: {
    width: 602,
    position: "absolute",
  },
  apr1FlexBox: {
    letterSpacing: 0.2,
    textAlign: "left",
  },
  ammountBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  planFlexBox: {
    marginTop: -50,
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperLayout: {
    paddingVertical: 0,
    overflow: "hidden",
    height: 50,
    width: 50,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  containerLayout: {
    width: 164,
    textAlign: "left",
  },
  statisticsPosition: {
    top: 0,
    position: "absolute",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  vectorIcon: {
    width: 6,
    height: 12,
  },
  frameChild: {
    width: 5,
    height: 21,
  },
  vectorParent: {
    top: 75,
    left: 30,
    gap: 319,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  insight: {
    top: 74,
    left: 161,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.3,
    textAlign: "left",
    color: Color.colorGray_2400,
    fontFamily: FontFamily.helvetica,
    fontWeight: "700",
  },
  totale: {
    top: 81,
    backgroundColor: Color.colorGray_2100,
    height: 9,
    left: 0,
  },
  statistics: {
    left: 95,
    width: 115,
    height: 56,
    fontSize: FontSize.m3TitleMedium_size,
    top: 0,
    position: "absolute",
    color: Color.colorGray_2400,
    fontFamily: FontFamily.helvetica,
  },
  options: {
    top: 23,
    left: -220,
    height: 90,
  },
  container: {
    backgroundColor: Color.colorGoldenrod_100,
    borderColor: Color.colorGray_2300,
    borderRadius: Border.br_31xl,
    borderStyle: "solid",
    height: 80,
    width: 350,
  },
  apr1: {
    color: Color.colorGoldenrod_100,
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.helvetica,
    fontWeight: "700",
  },
  aprWrapper: {
    overflow: "hidden",
    height: 50,
    width: 50,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  plan25: {
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.colorGray_2400,
  },
  apr11: {
    color: Color.white,
    fontSize: FontSize.size_smi,
  },
  plan25AprContainer: {
    width: 159,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  info: {
    gap: Gap.gap_7xs,
    alignItems: "center",
    flexDirection: "row",
  },
  inr2500: {
    color: Color.white,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interRegular,
  },
  ammount: {
    borderColor: Color.colorGray_2500,
    width: 90,
    height: 44,
    padding: Padding.p_3xs,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  plan1: {
    gap: Gap.gap_11xs,
  },
  apr: {
    justifyContent: "flex-end",
    height: 80,
    width: 350,
    alignItems: "center",
  },
  marWrapper: {
    paddingHorizontal: Padding.p_7xs,
  },
  plan10MarContainer: {
    fontFamily: FontFamily.interRegular,
  },
  plan2: {
    gap: Gap.gap_19xs,
  },
  febWrapper: {
    paddingHorizontal: Padding.p_5xs,
  },
  plan251: {
    fontSize: FontSize.m3TitleMedium_size,
    color: Color.colorGray_2400,
    fontFamily: FontFamily.helvetica,
    fontWeight: "700",
  },
  feb11: {
    color: Color.white,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.helvetica,
  },
  plan25FebContainer: {
    textAlign: "left",
  },
  text: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_2400,
    fontFamily: FontFamily.helvetica,
  },
  plan3: {
    gap: Gap.gap_7xl,
  },
  plan4: {
    gap: Gap.gap_16xs,
  },
  plans: {
    top: 577,
    left: 20,
    height: 521,
    paddingBottom: 141,
    gap: Gap.gap_xs,
    width: 350,
    alignItems: "center",
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
    borderRadius: Border.br_xl,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  statusBarParent: {
    width: 390,
    height: 95,
    left: 0,
  },
  savingPlan1: {
    top: 38,
    left: 109,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0.4,
    fontFamily: FontFamily.poppinsBold,
    width: 191,
    height: 42,
    color: Color.white,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 24,
    top: 31,
    width: 40,
    height: 40,
    position: "absolute",
  },
  savingPlan: {
    borderRadius: Border.br_5xl,
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SavingPlan;
