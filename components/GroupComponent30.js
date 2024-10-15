import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent30 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      <Pressable
        style={[styles.wrapper, styles.groupLayout1]}
        onPress={() => navigation.navigate("ChildScheme")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-79.png")}
        />
      </Pressable>
      <Text style={[styles.lifeInsurance, styles.homeTypo]}>
        Life Insurance
      </Text>
      <Image
        style={[styles.groupChild, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/group-82.png")}
      />
      <Text style={[styles.homeInsurance, styles.insuranceTypo]}>
        Home Insurance
      </Text>
      <Image
        style={[styles.groupItem, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-83.png")}
      />
      <Text style={[styles.vehicleInsurance, styles.insuranceTypo]}>
        Vehicle Insurance
      </Text>
      <Image
        style={[styles.groupInner, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-80.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/group-81.png")}
      />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={styles.guaranteedBonus}>Guaranteed Bonus</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    height: "27.91%",
    width: "17.65%",
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  homeTypo: {
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.m3LabelLarge_size,
    top: "34.42%",
    position: "absolute",
  },
  groupPosition: {
    bottom: "17.21%",
    top: "54.88%",
  },
  insuranceTypo: {
    top: "89.3%",
    height: "10.7%",
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  groupLayout: {
    left: "39.41%",
    right: "42.94%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "27.91%",
    width: "17.65%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    bottom: "72.09%",
    top: "0%",
    right: "78.24%",
    left: "4.12%",
    width: "17.65%",
  },
  lifeInsurance: {
    height: "10.6%",
    width: "30.32%",
    left: "0%",
  },
  groupChild: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "27.91%",
    width: "17.65%",
    position: "absolute",
    right: "78.24%",
    left: "4.12%",
  },
  homeInsurance: {
    width: "37.65%",
    left: "0%",
  },
  groupItem: {
    bottom: "17.21%",
    top: "54.88%",
  },
  vehicleInsurance: {
    width: "38.24%",
    left: "37.65%",
  },
  groupInner: {
    bottom: "72.09%",
    top: "0%",
  },
  groupIcon: {
    right: "7.65%",
    left: "74.71%",
    height: "27.91%",
    width: "17.65%",
    position: "absolute",
    bottom: "72.09%",
    top: "0%",
  },
  home: {
    height: "7.44%",
    width: "14.41%",
    left: "43.53%",
  },
  guaranteedBonus: {
    height: "7.67%",
    width: "29.71%",
    left: "70.29%",
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.m3LabelLarge_size,
    top: "34.42%",
    position: "absolute",
  },
  groupParent: {
    height: "26.48%",
    width: "90.67%",
    top: "50%",
    right: "6.67%",
    bottom: "23.52%",
    left: "2.67%",
    position: "absolute",
  },
});

export default GroupComponent30;
