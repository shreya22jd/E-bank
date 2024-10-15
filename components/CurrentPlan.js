import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Gap } from "../GlobalStyles";

const CurrentPlan = () => {
  return (
    <View style={[styles.currentPlan, styles.currentPosition]}>
      <View style={styles.currentPlanChild} />
      <View style={[styles.currentPlan25DaysParent, styles.parentFlexBox]}>
        <Text style={[styles.currentPlan25Container, styles.containerClr]}>
          <Text style={styles.currentPlan1}>{`Current plan
`}</Text>
          <Text style={styles.days}>25 days</Text>
        </Text>
        <View style={[styles.groupParent, styles.parentFlexBox]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group3.png")}
          />
          <Image
            style={styles.groupIcon1}
            contentFit="cover"
            source={require("../assets/group4.png")}
          />
        </View>
      </View>
      <View style={[styles.lineParent, styles.linePosition]}>
        <View style={styles.frameChild} />
        <View style={styles.frameChild} />
        <View style={styles.frameChild} />
        <View style={styles.frameChild} />
        <View style={styles.frameChild} />
      </View>
      <Text style={[styles.greatTodayIsContainer, styles.containerClr]}>
        <Text style={styles.currentPlan1}>{`Great!
`}</Text>
        <Text style={styles.todayIsMay}>{`Today is May 17th and you saved:
INR 100
Still:`}</Text>
      </Text>
      <Image
        style={[styles.lineIcon, styles.linePosition]}
        contentFit="cover"
        source={require("../assets/line12.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textPosition]}>0%</Text>
        <Image
          style={[styles.groupChild, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-15.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currentPosition: {
    left: 20,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  containerClr: {
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
  },
  linePosition: {
    left: 17,
    position: "absolute",
  },
  textPosition: {
    top: 0,
    position: "absolute",
  },
  currentPlanChild: {
    top: 247,
    borderStyle: "solid",
    borderColor: Color.lightGray11,
    borderTopWidth: 1,
    width: 341,
    height: 1,
    left: 0,
    position: "absolute",
  },
  currentPlan1: {
    fontSize: FontSize.size_xl,
  },
  days: {
    fontSize: FontSize.m3TitleMedium_size,
  },
  currentPlan25Container: {
    textAlign: "left",
  },
  groupIcon: {
    width: 14,
    height: 16,
  },
  groupIcon1: {
    width: 16,
    height: 16,
  },
  groupParent: {
    gap: Gap.gap_5xs,
  },
  currentPlan25DaysParent: {
    top: 33,
    gap: Gap.gap_15xl,
    left: 20,
    position: "absolute",
  },
  frameChild: {
    borderStyle: "dashed",
    borderColor: Color.colorGray_2000,
    borderRadius: 0.001,
    borderRightWidth: 0.5,
    width: 1,
    height: 131,
  },
  lineParent: {
    top: 117,
    width: 244,
    height: 130,
    gap: Gap.gap_13xl,
    flexDirection: "row",
    left: 17,
  },
  todayIsMay: {
    fontSize: FontSize.m3LabelLarge_size,
  },
  greatTodayIsContainer: {
    top: 266,
    textAlign: "center",
    width: 300,
    left: 20,
    position: "absolute",
  },
  lineIcon: {
    top: 246,
    width: 10,
    height: 15,
  },
  text: {
    left: 4,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.2,
    fontFamily: FontFamily.adaminaRegular,
    color: Color.colorGray_2000,
    width: 27,
    height: 13,
    textAlign: "left",
  },
  groupChild: {
    width: 22,
    height: 20,
    left: 0,
  },
  parent: {
    top: 88,
    left: 11,
    width: 31,
    height: 20,
    position: "absolute",
  },
  currentPlan: {
    top: 96,
    width: 340,
    height: 395,
  },
});

export default CurrentPlan;
