import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Frame11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.securitySection}>
        <Text style={[styles.security, styles.securityLayout]}>Security</Text>
        <Text style={[styles.chooseWhatData, styles.securityTypo]}>
          Choose what data you share with us
        </Text>
        <Pressable
          style={[styles.groupParent, styles.groupLayout]}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <View
            style={[styles.arrowsDiagramsarrowParent, styles.arrowsPosition]}
          >
            <Image
              style={[styles.arrowsDiagramsarrowIcon, styles.arrowsPosition]}
              contentFit="cover"
              source={require("../assets/arrows-diagramsarrow.png")}
            />
            <Text style={[styles.changePassword, styles.biometricTypo]}>
              Change Password
            </Text>
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/vector-105.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.groupContainer, styles.groupLayout]}
          onPress={() => navigation.navigate("TermCondition")}
        >
          <View
            style={[styles.arrowsDiagramsarrowParent, styles.arrowsPosition]}
          >
            <Image
              style={[styles.arrowsDiagramsarrowIcon, styles.arrowsPosition]}
              contentFit="cover"
              source={require("../assets/arrows-diagramsarrow.png")}
            />
            <Text style={[styles.privacyPolicy, styles.biometricTypo]}>
              Privacy Policy
            </Text>
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/vector-105.png")}
          />
        </Pressable>
        <View style={[styles.biometricParent, styles.securityLayout]}>
          <Text style={[styles.biometric, styles.biometricTypo]}>
            Biometric
          </Text>
          <Image
            style={[styles.groupInner, styles.securityLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-14.png")}
          />
        </View>
      </View>
      <View style={styles.toggle}>
        <View style={styles.toggleChild} />
        <View style={styles.toggleItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  securityLayout: {
    height: 16,
    position: "absolute",
  },
  securityTypo: {
    textAlign: "left",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.mobileBody3Regular,
    left: 0,
  },
  groupLayout: {
    height: 34,
    left: 0,
    width: 335,
    position: "absolute",
  },
  arrowsPosition: {
    height: 24,
    top: 0,
    position: "absolute",
  },
  biometricTypo: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    height: 16,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    left: 0,
    position: "absolute",
  },
  security: {
    width: 57,
    textAlign: "left",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.mobileBody3Regular,
    left: 0,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    height: 16,
    top: 0,
  },
  chooseWhatData: {
    top: 152,
    fontSize: FontSize.mobileBody3Regular_size,
    lineHeight: 12,
    width: 219,
    height: 14,
    position: "absolute",
  },
  arrowsDiagramsarrowIcon: {
    left: 311,
    width: 24,
    overflow: "hidden",
  },
  changePassword: {
    width: 129,
    top: 4,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  arrowsDiagramsarrowParent: {
    left: 0,
    width: 335,
  },
  groupChild: {
    top: 34,
    maxHeight: "100%",
    left: 0,
    width: 335,
    position: "absolute",
  },
  groupParent: {
    top: 47,
  },
  privacyPolicy: {
    width: 97,
    top: 4,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupContainer: {
    top: 103,
  },
  biometric: {
    width: 68,
    top: 0,
  },
  groupInner: {
    left: 301,
    width: 16,
    top: 0,
  },
  biometricParent: {
    top: 197,
    width: 317,
    left: 0,
  },
  securitySection: {
    height: 213,
    width: 335,
  },
  toggleChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_500,
    position: "absolute",
  },
  toggleItem: {
    height: "60%",
    width: "30%",
    top: "20%",
    right: "55%",
    bottom: "20%",
    left: "15%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    position: "absolute",
  },
  toggle: {
    width: 40,
    height: 20,
    marginLeft: -40,
  },
  frame: {
    top: 406,
    left: 20,
    height: 215,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    overflow: "hidden",
    width: 335,
    position: "absolute",
  },
});

export default Frame11;
