import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "./FrameComponent";
import { Color, Border, FontSize, FontFamily, Gap } from "../GlobalStyles";

const NewPlan = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newPlan, styles.plusPosition]}>
      <View style={[styles.selection, styles.viewLayout]}>
        <View style={styles.selectionChild} />
        <View style={styles.selectionChild} />
        <View style={styles.selectionChild} />
      </View>
      <View style={[styles.plus, styles.plusPosition]}>
        <Text style={styles.newPlanEnterContainer}>
          <Text style={styles.newPlan1}>{`New plan
`}</Text>
          <Text style={styles.enterTheParameters}>
            Enter the parameters of the month
          </Text>
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={styles.fixedCosts}>
        <View style={[styles.fixedCostsChild, styles.childLayout]} />
        <Text style={[styles.dailyTargetInr, styles.targetTypo]}>
          Daily Target INR 100
        </Text>
      </View>
      <View style={[styles.newPlanChild, styles.childLayout]} />
      <Text style={[styles.targetInr2500, styles.targetTypo]}>
        Target INR 2,500
      </Text>
      <View style={[styles.parent, styles.parentPosition]}>
        <View style={styles.viewLayout}>
          <View style={[styles.child, styles.childBorder]} />
          <Text style={styles.text}>5</Text>
        </View>
        <View style={styles.viewLayout}>
          <View style={[styles.child, styles.childBorder]} />
          <Text style={[styles.text1, styles.textTypo1]}>10</Text>
        </View>
        <View style={styles.viewLayout}>
          <View style={[styles.child, styles.childBorder]} />
          <Text style={[styles.text2, styles.textPosition]}>15</Text>
        </View>
        <View style={styles.viewLayout}>
          <View style={[styles.child, styles.childBorder]} />
          <Text style={[styles.text3, styles.textTypo]}>20</Text>
        </View>
        <View style={styles.viewLayout}>
          <View style={[styles.child, styles.childBorder]} />
          <Text style={[styles.text4, styles.textPosition]}>25</Text>
        </View>
        <View style={styles.viewLayout}>
          <View style={[styles.child2, styles.childBorder]} />
          <Text style={[styles.text5, styles.textTypo]}>30</Text>
        </View>
      </View>
      <FrameComponent
        onFramePressablePress={() => navigation.navigate("MyPlan")}
        propTop={328}
        propLeft={79}
        save="Save"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  plusPosition: {
    left: 20,
    position: "absolute",
  },
  viewLayout: {
    height: 44,
    width: 44,
  },
  childLayout: {
    borderWidth: 3,
    borderColor: Color.colorGray_1800,
    backgroundColor: Color.colorLinen_100,
    width: 310,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    height: 44,
    position: "absolute",
  },
  targetTypo: {
    letterSpacing: 0.2,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  parentPosition: {
    top: 236,
    position: "absolute",
  },
  childBorder: {
    borderColor: Color.colorGray_2100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 44,
    width: 44,
    position: "absolute",
  },
  textTypo1: {
    width: 27,
    height: 15,
    fontFamily: FontFamily.adaminaRegular,
    letterSpacing: 0.2,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  textPosition: {
    left: 13,
    top: 15,
  },
  textTypo: {
    width: 28,
    height: 15,
    fontFamily: FontFamily.adaminaRegular,
    letterSpacing: 0.2,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  selectionChild: {
    borderColor: Color.colorPeru_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 44,
    width: 44,
    position: "absolute",
  },
  selection: {
    left: 227,
    top: 236,
    position: "absolute",
  },
  newPlan1: {
    fontSize: FontSize.m3TitleLarge_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  enterTheParameters: {
    fontSize: FontSize.m3TitleMedium_size,
    fontFamily: FontFamily.interRegular,
  },
  newPlanEnterContainer: {
    left: 23,
    textAlign: "left",
    color: Color.lightGray11,
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -15.5,
    marginLeft: -146.5,
    top: "50%",
    left: "50%",
    width: 13,
    height: 13,
    position: "absolute",
  },
  plus: {
    top: -11,
    width: 293,
    height: 53,
  },
  fixedCostsChild: {
    left: 0,
    top: 0,
    borderColor: Color.colorGray_1800,
    backgroundColor: Color.colorLinen_100,
  },
  dailyTargetInr: {
    width: 249,
    left: 12,
    top: 15,
  },
  fixedCosts: {
    top: 167,
    width: 310,
    left: 14,
    height: 44,
    position: "absolute",
  },
  newPlanChild: {
    top: 101,
    left: 14,
  },
  targetInr2500: {
    top: 115,
    left: 27,
    width: 279,
  },
  child: {
    backgroundColor: Color.colorGray_1900,
  },
  text: {
    left: 15,
    width: 19,
    height: 15,
    fontFamily: FontFamily.adaminaRegular,
    letterSpacing: 0.2,
    fontSize: FontSize.size_smi,
    top: 15,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  text1: {
    left: 12,
    top: 15,
    color: Color.lightGray11,
    width: 27,
  },
  text2: {
    width: 27,
    height: 15,
    fontFamily: FontFamily.adaminaRegular,
    letterSpacing: 0.2,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
    color: Color.lightGray11,
  },
  text3: {
    left: 13,
    top: 15,
  },
  text4: {
    color: Color.colorGray_2000,
    width: 27,
    height: 15,
    fontFamily: FontFamily.adaminaRegular,
    letterSpacing: 0.2,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  child2: {
    backgroundColor: Color.colorGoldenrod_100,
  },
  text5: {
    top: 16,
    left: 11,
  },
  parent: {
    flexDirection: "row",
    gap: Gap.gap_11xs,
    left: 14,
  },
  newPlan: {
    top: 147,
    backgroundColor: Color.colorGray_2200,
    width: 340,
    height: 395,
  },
});

export default NewPlan;
