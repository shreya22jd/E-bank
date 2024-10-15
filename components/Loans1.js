import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Gap,
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
} from "../GlobalStyles";

const Loans1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loans}>
      <View style={[styles.title, styles.titleFlexBox]}>
        <Text style={styles.label}>{`Loans & Schemes`}</Text>
      </View>
      <View style={styles.setarehParent}>
        <Pressable
          style={[styles.setareh, styles.setarehLayout]}
          onPress={() => navigation.navigate("Insuarance")}
        >
          <Image
            style={styles.goldLoanIcon}
            contentFit="cover"
            source={require("../assets/gold-loan.png")}
          />
          <Text style={[styles.name, styles.nameTypo]}>Insurance</Text>
        </Pressable>
        <Pressable
          style={[styles.goldLoanParent, styles.setarehLayout]}
          onPress={() => navigation.navigate("Loan")}
        >
          <Image
            style={styles.goldLoanIcon}
            contentFit="cover"
            source={require("../assets/gold-loan1.png")}
          />
          <View style={[styles.setareh1, styles.titleFlexBox]}>
            <Image
              style={styles.profilePictureIcon}
              contentFit="cover"
              source={require("../assets/profile-picture.png")}
            />
            <Text style={styles.nameTypo}>Loans</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.checkDepositParent}
          onPress={() => navigation.navigate("CheckDeposit")}
        >
          <Text style={[styles.checkDeposit, styles.name2Typo]}>{`Check 
deposit`}</Text>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/group-1272628247.png")}
          />
        </Pressable>
        <Pressable
          style={styles.nameParent}
          onPress={() => navigation.navigate("Products")}
        >
          <Text style={[styles.name2, styles.name2Typo]}>Schemes</Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  setarehLayout: {
    gap: Gap.gap_12xs,
    height: 76,
    alignItems: "center",
  },
  nameTypo: {
    color: Color.colorDarkslategray_800,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "center",
  },
  name2Typo: {
    justifyContent: "center",
    display: "flex",
    left: 0,
    color: Color.colorDarkslategray_800,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "center",
    alignItems: "center",
    position: "absolute",
  },
  label: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.lightGray11,
    textAlign: "center",
  },
  title: {
    flexDirection: "row",
  },
  goldLoanIcon: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  name: {
    alignSelf: "stretch",
    color: Color.colorDarkslategray_800,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  setareh: {
    width: 60,
  },
  profilePictureIcon: {
    borderRadius: Border.br_sm,
    width: 55,
    height: 55,
    display: "none",
    overflow: "hidden",
  },
  setareh1: {
    gap: Gap.gap_4xs,
  },
  goldLoanParent: {
    width: 54,
  },
  checkDeposit: {
    top: 46,
    width: 54,
  },
  groupChild: {
    top: 0,
    left: 4,
    width: 38,
    height: 38,
    position: "absolute",
  },
  checkDepositParent: {
    width: 54,
    height: 76,
  },
  name2: {
    top: 39,
    height: 28,
    width: 56,
  },
  vectorIcon: {
    height: "53.8%",
    width: "58.93%",
    top: "0%",
    right: "18.75%",
    bottom: "46.2%",
    left: "22.32%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  nameParent: {
    height: 67,
    width: 56,
  },
  setarehParent: {
    gap: Gap.gap_5xl,
    flexDirection: "row",
  },
  loans: {
    top: 455,
    left: 8,
    backgroundColor: Color.white,
    width: 378,
    paddingLeft: Padding.p_7xl,
    paddingRight: Padding.p_5xl,
    gap: Gap.gap_2xs,
    position: "absolute",
  },
});

export default Loans1;
