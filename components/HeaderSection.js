import React, { useMemo } from "react";
import { View, Dimensions, StyleSheet, Pressable, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Time from "./Time";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  Border,
  FontFamily,
  Gap,
  Color,
  FontSize,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HeaderSection = ({
  propTop,
  propLeft,
  onMenuPress,
  hours,
  minutes,
  showLocation,
  propColor,
  propColor1,
  propColor2,
}) => {
  const headerSectionStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.headerSection, headerSectionStyle]}
      locations={[0, 0.8]}
      colors={["#e0a340", "#7a5923"]}
    >
      <View style={styles.gruopStatus}>
        <Time
          hours={hours}
          minutes={minutes}
          showLocation={showLocation}
          propColor={propColor}
          propColor1={propColor1}
          propColor2={propColor2}
          locationArrow={require("../assets/location-arrow1.png")}
        />
        <View style={styles.icons}>
          <Image
            style={styles.cellularSignalIcon}
            contentFit="cover"
            source={require("../assets/cellular-signal1.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi5.png")}
          />
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery1.png")}
          />
        </View>
      </View>
      <View>
        <View style={styles.header}>
          <Pressable
            style={[styles.menu, styles.menuFlexBox]}
            onPress={onMenuPress}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon14.png")}  //help, setting, about us..button
            />
          </Pressable>
          <View style={[styles.title, styles.menuFlexBox]}>
            <Text style={styles.label}>
              <Text style={styles.welcomeBackName}>
                <Text style={styles.label1Typo}>Welcome Back</Text>
                <Text style={styles.name}>, ‘Name’</Text>
              </Text>
              <Text style={styles.name}>
                <Text style={styles.text1}>!</Text>
              </Text>
            </Text>
          </View>
          <Pressable
            style={[styles.notification, styles.menuFlexBox]}
            onPress={() => navigation.navigate("Notification1")}
          >
            <Image
              style={[styles.notificationBingIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/notificationbing1.png")}
            />
            <Image
              style={styles.badgeIcon}
              contentFit="cover"
              source={require("../assets/badge1.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.ebank}>
        <Text style={styles.amount}>E - Bank</Text>
      </View>
      <Pressable
        style={styles.updates}
        onPress={() => navigation.navigate("Plans1")}
      >
        <View style={styles.send}>
          <View style={[styles.icon1, styles.menuFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/send21.png")}
            />
          </View>
          <Text style={[styles.label1, styles.label1Typo]}>Updates</Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  menuFlexBox: {
    padding: Padding.p_7xs,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  label1Typo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  cellularSignalIcon: {
    width: 18,
    height: 10,
  },
  wifiIcon: {
    width: 16,
    overflow: "hidden",
    height: 12,
  },
  batteryIcon: {
    width: 24,
    overflow: "hidden",
    height: 12,
  },
  icons: {
    justifyContent: "flex-end",
    gap: Gap.gap_13xs,
    alignItems: "center",
    flexDirection: "row",
  },
  gruopStatus: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icon: {
    overflow: "hidden",
  },
  menu: {
    backgroundColor: Color.colorGray_1300,
  },
  name: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  welcomeBackName: {
    color: Color.colorGray_1400,
  },
  text1: {
    color: Color.white,
  },
  label: {
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
  },
  title: {
    alignSelf: "stretch",
  },
  notificationBingIcon: {
    zIndex: 0,
  },
  badgeIcon: {
    top: 6,
    left: 21,
    width: 7,
    height: 7,
    zIndex: 1,
    position: "absolute",
  },
  notification: {
    backgroundColor: Color.colorAliceblue_500,
  },
  header: {
    gap: Gap.gap_xl,
    flexDirection: "row",
  },
  amount: {
    fontSize: FontSize.kudaProjectHeaderText32Bold_size,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    fontWeight: "600",
    textAlign: "left",
  },
  ebank: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  icon1: {
    backgroundColor: Color.colorGray_1500,
    alignSelf: "stretch",
  },
  label1: {
    fontSize: FontSize.size_3xs,
    color: Color.white,
    textAlign: "left",
  },
  send: {
    flex: 1,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: Color.colorGray_1600,
    padding: Padding.p_5xs,
    gap: Gap.gap_16xs,
    justifyContent: "center",
    alignItems: "center",
  },
  updates: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  headerSection: {
    top: 12,
    left: 13,
    borderRadius: Border.br_5xl,
    width: 351,
    padding: Padding.p_5xl,
    gap: Gap.gap_7xs,
    backgroundColor: "transparent",
    position: "absolute",
  },
});

export default HeaderSection;
