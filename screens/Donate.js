import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Donate = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.donate}>
      <View style={[styles.donateInner, styles.donatePosition]}>
        <View style={[styles.donateInner, styles.donatePosition]}>
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
            style={[styles.timeLight, styles.donate2Layout]}
            contentFit="cover"
            source={require("../assets/time--light1.png")}
          />
        </View>
      </View>
      <View style={styles.header}>
        <Text style={[styles.donate1, styles.donatePosition]}>Donate</Text>
      </View>
      <Pressable
        style={[styles.wrapper, styles.iconLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Image
        style={styles.bxsbusIcon}
        contentFit="cover"
        source={require("../assets/bxsbus.png")}
      />
      <View style={[styles.donateChild, styles.donateChildLayout1]}>
        <View style={[styles.groupWrapper, styles.donateChildLayout1]}>
          <View style={[styles.groupWrapper, styles.donateChildLayout1]}>
            <View style={[styles.groupWrapper, styles.donateChildLayout1]}>
              <Image
                style={[
                  styles.interfaceEssentialsearchL,
                  styles.donateChildLayout1,
                ]}
                contentFit="cover"
                source={require("../assets/interface-essentialsearch-loupe.png")}
              />
              <Text style={styles.searchLanguage}>Type NGO or Cause name</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.searchButton} />
      <View style={[styles.donate2, styles.donate2Layout]}>
        <Text style={[styles.causes, styles.ngoTypo]}>Causes</Text>
        <View style={[styles.donateItem, styles.donateChildLayout]} />
        <View style={[styles.lineView, styles.donateChildLayout]} />
        <View style={[styles.donateChild1, styles.donateChildLayout]} />
        <View style={[styles.donateChild2, styles.donateChildLayout]} />
        <View style={[styles.donateChild3, styles.donateChildLayout]} />
        <View style={[styles.donateChild4, styles.donateChildLayout]} />
        <View style={[styles.donateChild5, styles.donateChildLayout]} />
        <View style={[styles.donateChild6, styles.donateChildLayout]} />
        <View style={[styles.searchButton1, styles.searchLayout]} />
        <View style={[styles.searchButton2, styles.searchLayout]} />
        <View style={[styles.searchButton3, styles.searchLayout]} />
        <View style={[styles.searchButton4, styles.searchLayout]} />
        <View style={[styles.searchButton5, styles.searchLayout]} />
        <View style={[styles.searchButton6, styles.searchLayout]} />
        <View style={[styles.searchButton7, styles.searchLayout]} />
        <View style={[styles.searchButton8, styles.searchLayout]} />
        <Image
          style={[styles.image126Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-126.png")}
        />
        <Image
          style={[styles.image128Icon, styles.wrapperPosition]}
          contentFit="cover"
          source={require("../assets/image-128.png")}
        />
        <Text style={[styles.ngo, styles.ngoTypo]}>NGO</Text>
        <Text style={[styles.institutions, styles.ngoTypo]}>Institutions</Text>
        <Image
          style={[styles.image130Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-130.png")}
        />
        <Text style={[styles.smileFoundation, styles.sponsorPosition]}>
          Smile Foundation
        </Text>
        <Text style={[styles.sponsorAMeal, styles.sponsorPosition]}>
          Sponsor a meal
        </Text>
        <Text style={[styles.donateToSponsor, styles.donateTypo]}>
          Donate to Sponsor a Meal
        </Text>
        <Text style={[styles.donateToIndian, styles.donateTypo]}>
          Donate to Indian cancer society
        </Text>
        <Text style={[styles.helpAPoor, styles.sponsorPosition]}>
          Help a poor child fight cancer
        </Text>
        <Text style={[styles.careIndia, styles.sponsorPosition]}>
          Care India
        </Text>
        <Text style={[styles.pratham, styles.sponsorPosition]}>Pratham</Text>
        <Text style={[styles.jyotibaTemple, styles.sponsorPosition]}>
          Jyotiba Temple
        </Text>
        <Text style={[styles.shriAiyappaSwami, styles.sponsorPosition]}>
          Shri Aiyappa Swami Temple
        </Text>
        <Text style={[styles.shriSiddivinayakTemple, styles.sponsorPosition]}>
          Shri Siddivinayak Temple
        </Text>
        <Image
          style={styles.image131Icon}
          contentFit="cover"
          source={require("../assets/image-131.png")}
        />
        <Image
          style={[styles.image132Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-132.png")}
        />
        <Image
          style={[styles.image133Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-133.png")}
        />
        <Image
          style={styles.image134Icon}
          contentFit="cover"
          source={require("../assets/image-134.png")}
        />
        <Image
          style={[styles.image135Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-135.png")}
        />
        <Pressable
          style={[styles.searchButtonParent, styles.searchLayout]}
          onPress={() => navigation.navigate("DonateForEducation")}
        >
          <View style={[styles.searchButton9, styles.searchLayout]} />
          <Text
            style={[styles.donateToVipla, styles.educateAGirlPosition]}
          >{`Donate to Vipla Foundation India `}</Text>
          <Text style={[styles.educateAGirl, styles.educateAGirlPosition]}>
            Educate a girl child!
          </Text>
          <Image
            style={[styles.image136Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-136.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  donatePosition: {
    top: 0,
    left: 0,
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  donate2Layout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  iconLayout: {
    width: 40,
    position: "absolute",
  },
  donateChildLayout1: {
    height: 20,
    position: "absolute",
  },
  ngoTypo: {
    color: Color.lightGray11,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.m3TitleMedium_size,
    left: 21,
    textAlign: "left",
    lineHeight: 14,
    position: "absolute",
  },
  donateChildLayout: {
    height: 1,
    width: 381,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_800,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  searchLayout: {
    height: 50,
    position: "absolute",
  },
  iconPosition: {
    left: 26,
    width: 40,
    position: "absolute",
  },
  wrapperPosition: {
    left: 29,
    height: 40,
  },
  sponsorPosition: {
    left: 96,
    color: Color.lightGray11,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  donateTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  educateAGirlPosition: {
    left: 75,
    color: Color.lightGray11,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
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
    left: 0,
    overflow: "hidden",
  },
  donateInner: {
    width: 390,
    height: 95,
    left: 0,
    position: "absolute",
  },
  donate1: {
    fontSize: FontSize.size_5xl,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  header: {
    top: 42,
    left: 126,
    width: 90,
    height: 28,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 36,
    height: 40,
    left: 29,
  },
  bxsbusIcon: {
    top: 160,
    left: 279,
    width: 75,
    height: 75,
    position: "absolute",
    overflow: "hidden",
  },
  interfaceEssentialsearchL: {
    width: 20,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  searchLanguage: {
    top: 2,
    left: 28,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    width: 201,
    height: 16,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  groupWrapper: {
    width: 229,
    height: 20,
    left: 0,
    top: 0,
  },
  donateChild: {
    top: 129,
    left: 32,
    width: 229,
    height: 20,
  },
  searchButton: {
    top: 117,
    left: 11,
    width: 351,
    height: 42,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  causes: {
    top: 31,
  },
  donateItem: {
    top: 131,
  },
  lineView: {
    top: 208,
  },
  donateChild1: {
    top: 281,
  },
  donateChild2: {
    top: 733,
  },
  donateChild3: {
    top: 817,
  },
  donateChild4: {
    top: 579,
  },
  donateChild5: {
    top: 500,
  },
  donateChild6: {
    top: 415,
  },
  searchButton1: {
    top: 65,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 21,
  },
  searchButton2: {
    top: 143,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 21,
  },
  searchButton3: {
    top: 348,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 21,
  },
  searchButton4: {
    top: 433,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 21,
  },
  searchButton5: {
    top: 518,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 21,
  },
  searchButton6: {
    top: 664,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 21,
  },
  searchButton7: {
    top: 834,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 21,
  },
  searchButton8: {
    top: 751,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 21,
  },
  image126Icon: {
    top: 70,
    height: 40,
  },
  image128Icon: {
    top: 149,
    width: 35,
    height: 40,
    position: "absolute",
  },
  ngo: {
    top: 306,
  },
  institutions: {
    top: 619,
  },
  image130Icon: {
    top: 358,
    height: 31,
  },
  smileFoundation: {
    top: 366,
    fontFamily: FontFamily.interRegular,
  },
  sponsorAMeal: {
    top: 76,
    fontFamily: FontFamily.interRegular,
  },
  donateToSponsor: {
    top: 96,
    left: 96,
    color: Color.lightGray11,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  donateToIndian: {
    top: 174,
    left: 96,
    color: Color.lightGray11,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  helpAPoor: {
    top: 154,
    fontFamily: FontFamily.interRegular,
  },
  careIndia: {
    top: 450,
    fontFamily: FontFamily.interRegular,
  },
  pratham: {
    top: 529,
    fontFamily: FontFamily.interRegular,
  },
  jyotibaTemple: {
    top: 682,
    fontFamily: FontFamily.interRegular,
  },
  shriAiyappaSwami: {
    top: 762,
    fontFamily: FontFamily.interRegular,
  },
  shriSiddivinayakTemple: {
    top: 852,
    fontFamily: FontFamily.interRegular,
  },
  image131Icon: {
    top: 436,
    left: 30,
    width: 34,
    height: 40,
    position: "absolute",
  },
  image132Icon: {
    top: 523,
    height: 40,
  },
  image133Icon: {
    top: 674,
    left: 27,
    height: 29,
  },
  image134Icon: {
    top: 756,
    left: 31,
    width: 30,
    height: 40,
    position: "absolute",
  },
  image135Icon: {
    top: 839,
    height: 40,
  },
  searchButton9: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  donateToVipla: {
    top: 30,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  educateAGirl: {
    top: 11,
    fontFamily: FontFamily.interRegular,
  },
  image136Icon: {
    top: 13,
    left: 5,
    height: 24,
  },
  searchButtonParent: {
    top: 220,
    width: 288,
    left: 21,
  },
  donate2: {
    top: 186,
    left: 2,
    backgroundColor: Color.colorLinen_100,
    width: 370,
    height: 912,
  },
  donate: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Donate;
