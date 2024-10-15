import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import CurrentPlan from "../components/CurrentPlan";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  Border,
  FontSize,
  Color,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const MyPlan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myPlan}>
      <View style={styles.plans}>
        <View style={[styles.apr, styles.aprFlexBox]}>
          <View style={styles.container} />
          <View style={[styles.plan1, styles.planFlexBox]}>
            <View style={[styles.info, styles.infoFlexBox]}>
              <View style={styles.aprWrapper}>
                <Text style={styles.apr1}>APR</Text>
              </View>
              <Text style={styles.plan25AprContainer}>
                <Text style={styles.planClr}>{`Plan 25
`}</Text>
                <Text style={styles.apr11Clr}>Apr 1 - Apr 30, 2022</Text>
              </Text>
            </View>
            <View style={[styles.ammount, styles.ammountLayout]}>
              <Text style={[styles.text, styles.textTypo]}>INR 2,500</Text>
            </View>
          </View>
        </View>
        <View style={styles.aprFlexBox}>
          <View style={styles.container} />
          <View style={[styles.plan2, styles.planFlexBox]}>
            <View style={[styles.info, styles.infoFlexBox]}>
              <View style={[styles.marWrapper, styles.wrapperLayout]}>
                <Text style={styles.apr1}>MAR</Text>
              </View>
              <Text style={[styles.plan10MarContainer, styles.containerLayout]}>
                <Text style={styles.planClr}>{`Plan 10
`}</Text>
                <Text style={styles.apr11Clr}>Mar 1 - Mar 31, 2022</Text>
              </Text>
            </View>
            <View style={[styles.ammount1, styles.ammountLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>INR 157,12</Text>
            </View>
          </View>
        </View>
        <View style={styles.aprFlexBox}>
          <View style={styles.container} />
          <View style={[styles.plan3, styles.planFlexBox]}>
            <View style={[styles.info, styles.infoFlexBox]}>
              <View style={[styles.febWrapper, styles.wrapperLayout]}>
                <Text style={styles.apr1}>FEB</Text>
              </View>
              <Text style={styles.plan25FebContainer}>
                <Text style={styles.planClr}>{`Plan 25%
`}</Text>
                <Text style={styles.apr11Clr}>Feb 1 - Feb 28, 2022</Text>
              </Text>
            </View>
            <View style={[styles.ammount1, styles.ammountLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>INR 375,04</Text>
            </View>
          </View>
        </View>
        <View style={styles.aprFlexBox}>
          <View style={styles.container} />
          <View style={[styles.plan4, styles.planFlexBox]}>
            <View style={[styles.info, styles.infoFlexBox]}>
              <View style={[styles.febWrapper, styles.wrapperLayout]}>
                <Text style={styles.apr1}>JAN</Text>
              </View>
              <Text style={styles.containerLayout}>
                <Text style={[styles.plan5, styles.planClr]}>{`Plan 5%
`}</Text>
                <Text style={[styles.jan11, styles.apr11Clr]}>
                  Jan 1 - Jan 31, 2022
                </Text>
              </Text>
            </View>
            <View style={[styles.ammount1, styles.ammountLayout]}>
              <Text style={[styles.text3, styles.textTypo]}>€89,00</Text>
            </View>
          </View>
        </View>
      </View>
      <CurrentPlan />
      <View style={[styles.exit, styles.exitFlexBox]}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrowleft7.png")}
        />
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text4, styles.text4Position]}>₹</Text>
        <View style={[styles.amount, styles.infoFlexBox]}>
          <Text style={styles.label}>2,400</Text>
          <View style={styles.liner} />
        </View>
      </View>
      <Pressable
        style={[styles.wrapper, styles.exitPosition]}
        onPress={() => navigation.navigate("SavingPlan")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <View style={[styles.statusBarwhite, styles.text4Position]}>
        <Text style={styles.time}>9:41</Text>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aprFlexBox: {
    justifyContent: "flex-end",
    height: 80,
    alignItems: "center",
    width: 350,
  },
  planFlexBox: {
    marginTop: -65,
    flexDirection: "row",
    alignItems: "center",
  },
  infoFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  ammountLayout: {
    padding: Padding.p_3xs,
    height: 44,
    width: 90,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_2400,
    textAlign: "left",
    letterSpacing: 0.2,
  },
  wrapperLayout: {
    paddingVertical: 0,
    justifyContent: "center",
    overflow: "hidden",
    height: 50,
    width: 50,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
  },
  containerLayout: {
    width: 164,
    textAlign: "left",
  },
  planClr: {
    color: Color.colorGray_2400,
    fontSize: FontSize.m3TitleMedium_size,
  },
  apr11Clr: {
    color: Color.white,
    fontSize: FontSize.size_smi,
  },
  exitFlexBox: {
    height: 36,
    flexDirection: "row",
    alignItems: "center",
  },
  text4Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  exitPosition: {
    top: 39,
    position: "absolute",
  },
  container: {
    borderColor: Color.colorGray_2300,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGoldenrod_100,
    height: 80,
    width: 350,
  },
  apr1: {
    color: Color.colorGoldenrod_100,
    textAlign: "left",
    fontFamily: FontFamily.helvetica,
    fontWeight: "700",
    letterSpacing: 0.2,
    fontSize: FontSize.m3TitleMedium_size,
  },
  aprWrapper: {
    justifyContent: "center",
    overflow: "hidden",
    height: 50,
    width: 50,
    borderRadius: Border.br_31xl,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  plan25AprContainer: {
    width: 159,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  info: {
    gap: Gap.gap_7xs,
  },
  text: {
    fontFamily: FontFamily.adaminaRegular,
  },
  ammount: {
    borderColor: "rgba(255, 255, 255, 0.46)",
  },
  plan1: {
    gap: Gap.gap_11xs,
  },
  apr: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  marWrapper: {
    paddingHorizontal: Padding.p_7xs,
  },
  plan10MarContainer: {
    fontFamily: FontFamily.interRegular,
  },
  text1: {
    fontFamily: FontFamily.interRegular,
  },
  ammount1: {
    borderColor: Color.colorGray_2500,
  },
  plan2: {
    gap: Gap.gap_19xs,
  },
  febWrapper: {
    paddingHorizontal: Padding.p_5xs,
  },
  plan25FebContainer: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  plan3: {
    gap: Gap.gap_7xl,
  },
  plan5: {
    fontFamily: FontFamily.helvetica,
    fontWeight: "700",
  },
  jan11: {
    fontFamily: FontFamily.helvetica,
  },
  text3: {
    fontFamily: FontFamily.helvetica,
  },
  plan4: {
    gap: Gap.gap_16xs,
  },
  plans: {
    top: 562,
    height: 500,
    paddingBottom: 120,
    gap: Gap.gap_xs,
    alignItems: "center",
    width: 350,
    left: 20,
    position: "absolute",
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
    display: "none",
  },
  exit: {
    left: 24,
    borderRadius: Border.br_5xs,
    width: 37,
    padding: Padding.p_7xs,
    top: 39,
    position: "absolute",
    justifyContent: "center",
  },
  text4: {
    fontSize: FontSize.kudaProjectHeaderText32Bold_size,
    lineHeight: 48,
    fontFamily: FontFamily.interBold,
    color: Color.colorPeru_200,
    textAlign: "left",
    fontWeight: "700",
  },
  label: {
    fontSize: FontSize.size_9xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.lightGray11,
    textAlign: "left",
  },
  liner: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primaryMain,
    width: 1,
    height: 28,
    opacity: 0.5,
  },
  amount: {
    top: 8,
    width: 150,
    gap: Gap.gap_17xs,
    left: 20,
    flexDirection: "row",
    position: "absolute",
  },
  parent: {
    top: 491,
    left: 131,
    width: 170,
    height: 48,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 17,
    width: 40,
    height: 40,
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.helvetica,
    fontWeight: "700",
  },
  connectionsIcon: {
    width: 68,
    height: 16,
  },
  statusBarwhite: {
    width: 375,
    paddingLeft: Padding.p_5xl,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_4xl,
    paddingBottom: Padding.p_5xs,
    gap: Gap.gap_20xl,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorGoldenrod_100,
    left: 0,
    top: 0,
  },
  myPlan: {
    borderRadius: Border.br_5xl,
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default MyPlan;
