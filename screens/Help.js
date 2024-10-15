import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Gap } from "../GlobalStyles";

const Help = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.help}>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.statusBarParent, styles.statusBarParentPosition]}>
          <View style={styles.statusBar}>
            <Image
              style={styles.notchIcon}
              contentFit="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.statusIcons}>
              <Image
                style={styles.networkSignalLight}
                contentFit="cover"
                source={require("../assets/network-signal-light.png")}
              />
              <Image
                style={styles.wifiSignalLight}
                contentFit="cover"
                source={require("../assets/wifi-signal--light.png")}
              />
              <Image
                style={styles.batteryLight}
                contentFit="cover"
                source={require("../assets/battery--light.png")}
              />
            </View>
            <Image
              style={styles.indicatorIcon}
              contentFit="cover"
              source={require("../assets/indicator.png")}
            />
            <Image
              style={[styles.timeLight, styles.timeLayout]}
              contentFit="cover"
              source={require("../assets/time--light.png")}
            />
          </View>
          <Image
            style={[styles.batteryLight1, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/battery--light1.png")}
          />
          <Image
            style={[styles.networkSignalLight1, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/network-signal-light1.png")}
          />
          <Image
            style={[styles.wifiSignalLight1, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light2.png")}
          />
          <Image
            style={[styles.timeLight1, styles.timeLayout]}
            contentFit="cover"
            source={require("../assets/time--light1.png")}
          />
        </View>
        <View style={[styles.statusBarParent, styles.statusBarParentPosition]}>
          <View style={styles.statusBar}>
            <Image
              style={styles.notchIcon}
              contentFit="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.statusIcons}>
              <Image
                style={styles.networkSignalLight}
                contentFit="cover"
                source={require("../assets/network-signal-light.png")}
              />
              <Image
                style={styles.wifiSignalLight}
                contentFit="cover"
                source={require("../assets/wifi-signal--light.png")}
              />
              <Image
                style={styles.batteryLight}
                contentFit="cover"
                source={require("../assets/battery--light.png")}
              />
            </View>
            <Image
              style={styles.indicatorIcon}
              contentFit="cover"
              source={require("../assets/indicator.png")}
            />
            <Image
              style={[styles.timeLight, styles.timeLayout]}
              contentFit="cover"
              source={require("../assets/time--light.png")}
            />
          </View>
          <Image
            style={[styles.batteryLight1, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/battery--light1.png")}
          />
          <Image
            style={[styles.networkSignalLight1, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/network-signal-light1.png")}
          />
          <Image
            style={[styles.wifiSignalLight1, styles.lightPosition]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light2.png")}
          />
          <Image
            style={[styles.timeLight1, styles.timeLayout]}
            contentFit="cover"
            source={require("../assets/time--light1.png")}
          />
        </View>
      </View>
      <View style={styles.searchButton} />
      <View
        style={[styles.interfaceEssentialsearchLParent, styles.interfaceLayout]}
      >
        <Image
          style={[styles.interfaceEssentialsearchL, styles.interfaceLayout]}
          contentFit="cover"
          source={require("../assets/interface-essentialsearch-loupe.png")}
        />
        <Text style={[styles.searchLanguage, styles.needHelpFlexBox]}>
          Search....
        </Text>
      </View>
      <Text style={[styles.help1, styles.help1FlexBox]}>Help</Text>
      <Text style={[styles.needHelp, styles.needHelpTypo]}>Need help?</Text>
      <View style={styles.helpChild} />
      <View style={[styles.helpItem, styles.helpPosition]} />
      <View style={[styles.helpInner, styles.helpLayout]} />
      <View style={[styles.rectangleView, styles.helpItemPosition]} />
      <View style={[styles.helpChild1, styles.helpLayout]} />
      <View style={[styles.helpChild2, styles.helpPosition]} />
      <Image
        style={[styles.gameIconstwoCoins, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/gameiconstwocoins.png")}
      />
      <Text style={[styles.paymentIssues, styles.paymentTypo]}>
        Payment Issues
      </Text>
      <Image
        style={[
          styles.iconamoonprofileFill,
          styles.iconamoonprofileFillPosition,
        ]}
        contentFit="cover"
        source={require("../assets/iconamoonprofilefill.png")}
      />
      <Text style={[styles.profilePayment, styles.paymentTypo]}>{`Profile & 
payment`}</Text>
      <Image
        style={[
          styles.fa6SolidmoneyBillTransferIcon,
          styles.iconamoonprofileFillPosition,
        ]}
        contentFit="cover"
        source={require("../assets/fa6solidmoneybilltransfer.png")}
      />
      <Text style={[styles.moneyTransfer, styles.paymentTypo]}>
        Money Transfer
      </Text>
      <Image
        style={[styles.mingcutebill2FillIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mingcutebill2fill.png")}
      />
      <Text style={[styles.rechargeBill, styles.othersTypo]}>{`Recharge & Bill 
Payment`}</Text>
      <Image
        style={[styles.bxsofferIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bxsoffer.png")}
      />
      <Text style={[styles.rewardRefer, styles.othersTypo]}>{`Reward & Refer
and Earn`}</Text>
      <Image
        style={[styles.bxsshapesIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bxsshapes.png")}
      />
      <Text style={[styles.others, styles.othersTypo]}>Others</Text>
      <Text style={[styles.recommendedForYou, styles.needHelpTypo]}>
        Recommended For You
      </Text>
      <Pressable
        style={[styles.whatIfPaymentContainer, styles.canIAddPosition]}
        onPress={() => navigation.navigate("Help2")}
      >
        <Text
          style={styles.canIAddTypo}
        >{`What if  payment is successful but the money
 has not reached the receiver?`}</Text>
      </Pressable>
      <Text
        style={[styles.whenWillI, styles.canIAddTypo]}
      >{`When will I receive a refund for a failed UPI 
payment?`}</Text>
      <Text style={[styles.canIAdd, styles.canIAddTypo]}>
        Can I add more then one Bank Account?
      </Text>
      <Pressable
        style={[styles.wrapper, styles.groupIconLayout]}
        onPress={() => navigation.navigate("Help2")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-671.png")}
        />
      </Pressable>
      <Image
        style={[styles.groupIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group-671.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group-671.png")}
      />
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 95,
    width: 390,
    position: "absolute",
  },
  statusBarParentPosition: {
    top: 0,
    left: 0,
  },
  timeLayout: {
    width: 54,
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  interfaceLayout: {
    height: 20,
    position: "absolute",
  },
  needHelpFlexBox: {
    textAlign: "left",
    lineHeight: 14,
  },
  help1FlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  needHelpTypo: {
    color: Color.lightGray11,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 11,
    position: "absolute",
  },
  helpPosition: {
    left: "69.33%",
    right: "5.87%",
    width: "24.8%",
    borderRadius: Border.br_xs,
    height: "12.68%",
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  helpLayout: {
    width: "24.8%",
    borderRadius: Border.br_xs,
    height: "12.68%",
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  helpItemPosition: {
    bottom: "39.78%",
    top: "47.54%",
  },
  iconLayout: {
    height: 75,
    width: 75,
    position: "absolute",
    overflow: "hidden",
  },
  paymentTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 332,
    color: Color.lightGray11,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  iconamoonprofileFillPosition: {
    top: 235,
    height: 75,
    width: 75,
    position: "absolute",
    overflow: "hidden",
  },
  othersTypo: {
    top: 503,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.lightGray11,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  canIAddPosition: {
    left: 14,
    position: "absolute",
  },
  canIAddTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.lightGray11,
    letterSpacing: 0,
    textAlign: "left",
  },
  groupIconLayout: {
    height: "2.34%",
    width: "5.33%",
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  notchIcon: {
    right: 0,
    height: 30,
    maxWidth: "100%",
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  networkSignalLight: {
    display: "none",
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
    display: "none",
    height: 14,
  },
  batteryLight: {
    width: 25,
    display: "none",
    height: 14,
  },
  statusIcons: {
    top: 16,
    right: 14,
    width: 69,
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_18xs,
    height: 14,
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    left: 21,
    height: 21,
    display: "none",
  },
  statusBar: {
    backgroundColor: Color.colorGoldenrod_100,
    top: 0,
    height: 95,
    width: 390,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  batteryLight1: {
    left: 334,
    width: 25,
  },
  networkSignalLight1: {
    left: 292,
    width: 20,
  },
  wifiSignalLight1: {
    left: 315,
    width: 16,
  },
  timeLight1: {
    top: 4,
    height: 19,
    left: 0,
  },
  statusBarParent: {
    height: 95,
    width: 390,
    position: "absolute",
  },
  groupParent: {
    left: 0,
    top: 2,
    height: 95,
    width: 390,
  },
  searchButton: {
    top: 119,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_800,
    borderStyle: "solid",
    borderColor: Color.lightGray11,
    borderWidth: 1,
    width: 351,
    height: 42,
    left: 11,
    position: "absolute",
  },
  interfaceEssentialsearchL: {
    width: 20,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  searchLanguage: {
    left: 28,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    width: 124,
    height: 16,
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 14,
    top: 2,
    position: "absolute",
  },
  interfaceEssentialsearchLParent: {
    top: 130,
    left: 22,
    width: 152,
  },
  help1: {
    top: 38,
    left: 146,
    fontSize: FontSize.size_5xl,
    color: Color.white,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  needHelp: {
    top: 188,
    textAlign: "left",
    lineHeight: 14,
  },
  helpChild: {
    width: "25.33%",
    right: "68.27%",
    left: "6.4%",
    borderRadius: Border.br_xs,
    height: "12.68%",
    bottom: "60.1%",
    top: "27.22%",
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  helpItem: {
    bottom: "39.78%",
    top: "47.54%",
  },
  helpInner: {
    top: "47.66%",
    right: "36.27%",
    bottom: "39.66%",
    left: "38.93%",
  },
  rectangleView: {
    right: "69.33%",
    left: "5.87%",
    width: "24.8%",
    borderRadius: Border.br_xs,
    height: "12.68%",
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  helpChild1: {
    right: "36.53%",
    left: "38.67%",
    bottom: "60.1%",
    top: "27.22%",
  },
  helpChild2: {
    bottom: "60.1%",
    top: "27.22%",
  },
  gameIconstwoCoins: {
    top: 249,
    left: 31,
    width: 75,
  },
  paymentIssues: {
    left: 20,
  },
  iconamoonprofileFill: {
    left: 147,
  },
  profilePayment: {
    left: 150,
  },
  fa6SolidmoneyBillTransferIcon: {
    left: 272,
  },
  moneyTransfer: {
    left: 260,
  },
  mingcutebill2FillIcon: {
    top: 400,
    left: 31,
    width: 75,
  },
  rechargeBill: {
    left: 12,
  },
  bxsofferIcon: {
    top: 404,
    left: 157,
  },
  rewardRefer: {
    left: 139,
  },
  bxsshapesIcon: {
    top: 401,
    left: 269,
  },
  others: {
    left: 283,
  },
  recommendedForYou: {
    top: 557,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.lightGray11,
    fontSize: FontSize.size_xl,
  },
  whatIfPaymentContainer: {
    top: 595,
  },
  whenWillI: {
    top: 660,
    left: 14,
    position: "absolute",
  },
  canIAdd: {
    top: 725,
    left: 14,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "92.53%",
    top: "74.14%",
    right: "2.13%",
    bottom: "23.52%",
  },
  groupIcon: {
    top: "82.14%",
    right: "2.67%",
    bottom: "15.52%",
    left: "92%",
    height: "2.34%",
    width: "5.33%",
    position: "absolute",
  },
  groupIcon1: {
    top: "89.78%",
    right: "3.2%",
    bottom: "7.88%",
    left: "91.47%",
    height: "2.34%",
    width: "5.33%",
    position: "absolute",
  },
  container: {
    left: "7.2%",
    top: "4.68%",
    right: "81.6%",
    bottom: "90.39%",
    width: "11.2%",
    height: "4.93%",
    position: "absolute",
  },
  help: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Help;
