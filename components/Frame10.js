import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import LanguageDropdown from "./LanguageDropdown";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame10 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.frameLayout]}>
      <View style={styles.frameLayout}>
        <Text style={styles.general}>General</Text>
        <Pressable
          style={[styles.vectorParent, styles.groupParentLayout]}
          onPress={() => navigation.navigate("Language")}
        >
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-105.png")}
          />
          <View
            style={[styles.arrowsDiagramsarrowParent, styles.arrowsPosition]}
          >
            <Image
              style={[styles.arrowsDiagramsarrowIcon, styles.arrowsPosition]}
              contentFit="cover"
              source={require("../assets/arrows-diagramsarrow.png")}
            />
            <Text style={[styles.language, styles.contactTypo]}>Language</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.groupParent, styles.groupParentLayout]}
          onPress={() => navigation.navigate("About1")}
        >
          <View
            style={[styles.arrowsDiagramsarrowParent, styles.arrowsPosition]}
          >
            <Image
              style={[styles.arrowsDiagramsarrowIcon, styles.arrowsPosition]}
              contentFit="cover"
              source={require("../assets/arrows-diagramsarrow.png")}
            />
            <Text style={[styles.contactUs, styles.contactTypo]}>
              Contact Us
            </Text>
          </View>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-105.png")}
          />
        </Pressable>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <View
            style={[styles.arrowsDiagramsarrowParent, styles.arrowsPosition]}
          >
            <Image
              style={[styles.arrowsDiagramsarrowIcon, styles.arrowsPosition]}
              contentFit="cover"
              source={require("../assets/arrows-diagramsarrow.png")}
            />
            <Text style={[styles.contactUs1, styles.contactTypo]}>
              Notifications
            </Text>
          </View>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-105.png")}
          />
        </View>
        <Pressable
          style={[styles.groupPressable, styles.groupParentLayout]}
          onPress={() => navigation.navigate("Profile2")}
        >
          <View
            style={[styles.arrowsDiagramsarrowParent, styles.arrowsPosition]}
          >
            <Image
              style={[styles.arrowsDiagramsarrowIcon, styles.arrowsPosition]}
              contentFit="cover"
              source={require("../assets/arrows-diagramsarrow.png")}
            />
            <Text style={[styles.myProfile, styles.contactTypo]}>
              My Profile
            </Text>
          </View>
          <Image
            style={[styles.groupChild, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/vector-105.png")}
          />
        </Pressable>
      </View>
      <LanguageDropdown arrow={require("../assets/arrow.png")} showArrowIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 249,
    width: 336,
  },
  groupParentLayout: {
    height: 34,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    width: 335,
  },
  arrowsPosition: {
    height: 24,
    top: 0,
    position: "absolute",
  },
  contactTypo: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 4,
    left: 0,
    height: 16,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  general: {
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    width: 56,
    height: 16,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    left: 1,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 34,
    maxHeight: "100%",
    position: "absolute",
  },
  arrowsDiagramsarrowIcon: {
    left: 311,
    width: 24,
    overflow: "hidden",
  },
  language: {
    width: 71,
  },
  arrowsDiagramsarrowParent: {
    left: 0,
    width: 335,
  },
  vectorParent: {
    top: 47,
    width: 335,
    height: 34,
    left: 1,
  },
  contactUs: {
    width: 78,
  },
  groupParent: {
    top: 159,
    width: 335,
    height: 34,
    left: 1,
  },
  contactUs1: {
    width: 102,
  },
  groupContainer: {
    top: 215,
    height: 34,
    position: "absolute",
  },
  myProfile: {
    width: 68,
  },
  groupPressable: {
    top: 103,
    width: 335,
    height: 34,
    left: 1,
  },
  frame: {
    top: 127,
    left: 19,
    flexDirection: "row",
    justifyContent: "flex-end",
    overflow: "hidden",
    position: "absolute",
  },
});

export default Frame10;
