import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import BarsTopBarsV2 from "../components/BarsTopBarsV2";
import { useNavigation } from "@react-navigation/native";
import Login from "../components/Login";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const BillsNotification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.billsNotification}>
      <Image
        style={[styles.vectorIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View
        style={[styles.billsNotificationChild, styles.vectorIconPosition]}
      />
      <Text style={[styles.electricBill, styles.dthTypo]}>Electric Bill</Text>
      <Text style={[styles.water, styles.gasTypo]}>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.water1}>Water</Text>
      </Text>
      <Text style={[styles.loanRepayment, styles.gasTypo]}>{`Loan repayment
`}</Text>
      <Text style={[styles.gas, styles.gasTypo]}>Gas</Text>
      <Text style={[styles.mobileRecharge, styles.dthTypo]}>{`Mobile recharge
 
`}</Text>
      <BarsTopBarsV2
        capIconBackgroundColor="#fff"
        capIconHeight={100}
        capIconTop={-35}
        capIconWidth={375}
        propMarginTop={10}
        wifi={require("../assets/wifi.png")}
        cellularConnection={require("../assets/cellular-connection.png")}
        showBattery
        barsStatusBariPhoneLightPosition="absolute"
        barsStatusBariPhoneLightBackground="unset"
        barsStatusBariPhoneLightHeight="44%"
        barsStatusBariPhoneLightTop="0%"
        barsStatusBariPhoneLightRight="0%"
        barsStatusBariPhoneLightBottom="56%"
        barsStatusBariPhoneLightLeft="0%"
        wifiIconHeight="11"
        wifiIconWidth="15"
        cellularConnectionIconHeight="11"
        cellularConnectionIconWidth="17"
      />
      <BarsTopBarsV2
        capIconBackgroundColor="#e0a340"
        capIconHeight={100}
        capIconWidth={375}
        propMarginTop={10}
        wifi={require("../assets/wifi.png")}
        cellularConnection={require("../assets/cellular-connection.png")}
        showBattery
        barsStatusBariPhoneLightPosition="absolute"
        barsStatusBariPhoneLightBackground="unset"
        barsStatusBariPhoneLightHeight="44%"
        barsStatusBariPhoneLightTop="0%"
        barsStatusBariPhoneLightRight="0%"
        barsStatusBariPhoneLightBottom="56%"
        barsStatusBariPhoneLightLeft="0%"
        wifiIconHeight="11"
        wifiIconWidth="15"
        cellularConnectionIconHeight="11"
        cellularConnectionIconWidth="17"
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout3]}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
      <Text style={styles.payBills}>Pay Bills</Text>
      <View style={styles.billsNotificationItem} />
      <Image
        style={[styles.billsNotificationInner, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-1272628293.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/group-1272628298.png")}
      />
      <View style={[styles.rectangleParent, styles.groupViewPosition]}>
        <View style={[styles.groupChild, styles.iconLayout3]} />
        <Image
          style={[styles.ionwaterSharpIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/ionwatersharp.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.iconLayout3]} />
        <Image
          style={[styles.vectorIcon1, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/vector31.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.iconLayout3]} />
        <Image
          style={[styles.cryptocurrencydthIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/cryptocurrencydth.png")}
        />
      </View>
      <Text style={[styles.dth, styles.dthTypo]}>DTH</Text>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.groupChild, styles.iconLayout3]} />
        <Image
          style={[styles.iconoirgas, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/iconoirgas.png")}
        />
      </View>
      <Image
        style={[styles.billsNotificationChild1, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/group-1272628297.png")}
      />
      <Text style={[styles.rent, styles.dthTypo]}>Rent</Text>
      <View style={styles.frameView}>
        <View style={styles.searchButtonParent}>
          <View style={styles.searchButton} />
          <View style={[styles.searchButton1, styles.searchBorder]} />
          <View style={styles.searchButton2} />
          <View style={[styles.searchButton3, styles.searchBorder]} />
          <Image
            style={[styles.image139Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-139.png")}
          />
          <Text
            style={[
              styles.alintaEnergyElectricityContainer,
              styles.containerClr,
            ]}
          >
            <Text style={[styles.alintaEnergy, styles.ptsTypo]}>{`Alinta Energy
`}</Text>
            <Text style={[styles.electricity, styles.dueDateTypo]}>
              Electricity
            </Text>
          </Text>
          <Text style={[styles.payBill, styles.orFlexBox]}>Pay bill</Text>
          <Image
            style={[styles.groupIcon1, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group5.png")}
          />
          <Text style={[styles.dueDate25Container, styles.ptsFlexBox]}>
            <Text style={styles.dueDate25Container1}>
              <Text style={styles.dueDateTypo}>{`Due date
`}</Text>
              <Text style={styles.ptsTypo}>25 AUG 24</Text>
            </Text>
          </Text>
          <Text style={[styles.amount, styles.amountPosition]}>Amount</Text>
          <Image
            style={[styles.bxrupeeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bxrupee1.png")}
          />
          <Text style={[styles.text1, styles.ptsFlexBox]}>1024.75</Text>
          <Text style={[styles.payNowEarn, styles.amountPosition]}>
            Pay now, earn
          </Text>
          <Text style={[styles.pts, styles.ptsClr]}>100pts</Text>
          <Login
            propTop={313}
            propLeft={1}
            propBorderRadius={10}
            propWidth={300}
            propBackgroundColor="#e0a340"
            propBorderStyle="unset"
            propBorderColor="unset"
            confirm1="pay now"
            propColor="#000"
            propFontSize={18}
          />
          <Login />
          <View style={[styles.lineView, styles.lineViewBorder]} />
          <View style={[styles.groupChild1, styles.lineViewBorder]} />
          <Text style={[styles.or, styles.orTypo]}>OR</Text>
          <Text style={[styles.payMultipleBills, styles.orTypo]}>
            Pay multiple bills at once
          </Text>
          <Image
            style={[styles.phquestionDuotoneIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/phquestionduotone.png")}
          />
          <Text style={styles.bundleThisBill}>
            Bundle this bill with other bills and pay them off together.
          </Text>
          <Text style={[styles.startBundlePayment, styles.orTypo]}>
            Start bundle payment
          </Text>
          <Image
            style={[styles.openmojibooksIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/openmojibooks.png")}
          />
          <Pressable
            style={styles.basilcrossSolid}
            onPress={() => navigation.navigate("PayBills")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout3]}
              contentFit="cover"
              source={require("../assets/basilcrosssolid.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
    width: "100%",
  },
  dthTypo: {
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.m3TitleMedium_size,
    position: "absolute",
  },
  gasTypo: {
    height: "2.83%",
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
  },
  groupIconPosition: {
    bottom: "33.13%",
    top: "60.71%",
    width: "13.33%",
    height: "6.16%",
    position: "absolute",
  },
  groupPosition: {
    left: "41.6%",
    right: "45.07%",
  },
  groupViewPosition: {
    left: "6.93%",
    right: "79.73%",
  },
  iconLayout2: {
    height: 36,
    width: 36,
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition: {
    bottom: "18.6%",
    top: "75.25%",
    width: "13.33%",
    height: "6.16%",
    position: "absolute",
  },
  searchBorder: {
    top: 200,
    height: 96,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout1: {
    width: 34,
    position: "absolute",
  },
  containerClr: {
    color: Color.lightGray11,
    textAlign: "left",
  },
  ptsTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  dueDateTypo: {
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
  },
  orFlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  ptsFlexBox: {
    alignItems: "flex-end",
    display: "flex",
    position: "absolute",
  },
  amountPosition: {
    top: 215,
    alignItems: "flex-end",
    display: "flex",
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  iconLayout: {
    width: 27,
    position: "absolute",
    overflow: "hidden",
  },
  ptsClr: {
    color: Color.colorGoldenrod_100,
    fontSize: FontSize.m3LabelLarge_size,
  },
  lineViewBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.lightGray11,
    borderStyle: "solid",
    position: "absolute",
  },
  orTypo: {
    fontFamily: FontFamily.montserratBold,
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    position: "absolute",
  },
  vectorIcon: {
    height: "111.01%",
    bottom: "-11.01%",
    left: "0.27%",
    right: "-0.27%",
    position: "absolute",
    width: "100%",
    top: "0%",
  },
  billsNotificationChild: {
    height: "101.71%",
    top: "11.39%",
    bottom: "-13.1%",
    backgroundColor: Color.white,
  },
  electricBill: {
    height: "2.81%",
    width: "27.49%",
    left: "34.4%",
    top: "68.35%",
  },
  text: {
    fontSize: FontSize.size_mini,
  },
  water1: {
    fontSize: FontSize.m3TitleMedium_size,
  },
  water: {
    width: "33.07%",
    left: "-4.53%",
    top: "68.35%",
  },
  loanRepayment: {
    width: "30.93%",
    top: "82.88%",
    left: "32.53%",
    fontSize: FontSize.m3TitleMedium_size,
  },
  gas: {
    width: "15.47%",
    top: "96.92%",
    left: "5.6%",
    fontSize: FontSize.m3TitleMedium_size,
  },
  mobileRecharge: {
    height: "3.94%",
    width: "26.93%",
    left: "66.4%",
    top: "68.35%",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "7.47%",
    top: "5.42%",
    right: "81.33%",
    bottom: "89.66%",
    width: "11.2%",
    height: "4.93%",
    position: "absolute",
  },
  payBills: {
    height: "4.84%",
    width: "55.28%",
    top: "5.3%",
    left: "29.07%",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  billsNotificationItem: {
    top: 100,
    left: 4,
    borderColor: Color.colorPeru_200,
    borderTopWidth: 2,
    width: 377,
    height: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  billsNotificationInner: {
    right: "12.27%",
    left: "74.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon: {
    bottom: "33.13%",
    top: "60.71%",
    width: "13.33%",
    height: "6.16%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke_700,
    top: "0%",
    position: "absolute",
  },
  ionwaterSharpIcon: {
    left: 6,
    width: 36,
    top: 7,
  },
  rectangleParent: {
    bottom: "33.13%",
    top: "60.71%",
    width: "13.33%",
    height: "6.16%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "71.4%",
    width: "71.4%",
    top: "22%",
    right: "14.6%",
    bottom: "6.6%",
    left: "14%",
    position: "absolute",
  },
  rectangleGroup: {
    left: "41.6%",
    right: "45.07%",
  },
  cryptocurrencydthIcon: {
    left: 7,
    top: 7,
  },
  rectangleContainer: {
    right: "13.33%",
    left: "73.33%",
  },
  dth: {
    top: 675,
    left: 286,
  },
  iconoirgas: {
    top: 5,
    left: 6,
    width: 36,
  },
  groupView: {
    top: "89.29%",
    bottom: "4.56%",
    width: "13.33%",
    height: "6.16%",
    right: "79.73%",
    position: "absolute",
  },
  billsNotificationChild1: {
    left: "6.93%",
    right: "79.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rent: {
    top: 673,
    left: 32,
  },
  searchButton: {
    top: 104,
    width: 300,
    height: 96,
    borderColor: Color.colorGainsboro_400,
    borderWidth: 1,
    left: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  searchButton1: {
    width: 175,
    left: 1,
  },
  searchButton2: {
    top: 243,
    left: 218,
    borderRadius: Border.br_11xl,
    borderColor: "#5b5c5b",
    width: 67,
    height: 27,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  searchButton3: {
    left: 176,
    width: 125,
  },
  image139Icon: {
    top: 130,
    left: 9,
    height: 23,
  },
  alintaEnergy: {
    fontSize: FontSize.m3TitleMedium_size,
  },
  electricity: {
    fontSize: FontSize.m3LabelLarge_size,
  },
  alintaEnergyElectricityContainer: {
    top: 124,
    left: 54,
    width: 120,
    textAlign: "left",
    position: "absolute",
  },
  payBill: {
    top: 4,
    left: 117,
    width: 66,
    height: 30,
    alignItems: "flex-end",
    display: "flex",
    position: "absolute",
    fontSize: FontSize.font_size,
    justifyContent: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  groupIcon1: {
    height: "3.64%",
    width: "4.22%",
    top: "21.45%",
    right: "5.38%",
    bottom: "74.91%",
    left: "90.4%",
    position: "absolute",
  },
  dueDate25Container1: {
    width: "100%",
  },
  dueDate25Container: {
    top: 129,
    left: 213,
    width: 79,
    height: 51,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
    color: Color.lightGray11,
  },
  amount: {
    left: 11,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    width: 58,
    height: 17,
  },
  bxrupeeIcon: {
    top: 241,
    left: 15,
    height: 29,
  },
  text1: {
    top: 239,
    left: 43,
    width: 115,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    alignItems: "flex-end",
    color: Color.lightGray11,
  },
  payNowEarn: {
    left: 196,
    width: 99,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 215,
  },
  pts: {
    top: 244,
    left: 227,
    width: 53,
    height: 22,
    alignItems: "flex-end",
    display: "flex",
    position: "absolute",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  lineView: {
    top: 401,
    width: 135,
    left: 1,
  },
  groupChild1: {
    top: 402,
    left: 174,
    width: 127,
  },
  or: {
    top: 385,
    left: 139,
    width: 37,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.font_size,
    color: Color.lightGray11,
  },
  payMultipleBills: {
    top: 424,
    width: 212,
    height: 24,
    fontSize: FontSize.m3LabelLarge_size,
    left: 1,
    textAlign: "left",
    color: Color.lightGray11,
  },
  phquestionDuotoneIcon: {
    top: 423,
    left: 219,
    height: 26,
  },
  bundleThisBill: {
    top: 458,
    fontSize: FontSize.mobileBody3Regular_size,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
    width: 291,
    display: "flex",
    left: 1,
    alignItems: "center",
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  startBundlePayment: {
    top: 514,
    left: 86,
    width: 172,
    color: Color.colorGoldenrod_100,
    fontSize: FontSize.m3LabelLarge_size,
    justifyContent: "center",
    textAlign: "center",
  },
  openmojibooksIcon: {
    top: 503,
    left: 51,
    height: 42,
    overflow: "hidden",
  },
  icon1: {
    overflow: "hidden",
  },
  basilcrossSolid: {
    left: 260,
    top: 0,
    width: 32,
    height: 38,
    position: "absolute",
  },
  searchButtonParent: {
    width: 301,
    height: 550,
  },
  frameView: {
    top: 137,
    left: 18,
    width: 325,
    height: 608,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
  billsNotification: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
});

export default BillsNotification;
