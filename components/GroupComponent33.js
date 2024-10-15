import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent33 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.educationLoanParent}>
      <Text style={[styles.educationLoan, styles.educationLoanTypo]}>{`Education
loan`}</Text>
      <Image
        style={[styles.groupChild, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-821.png")}
      />
      <Text style={[styles.homeInsurance, styles.educationLoanTypo]}>
        Home Insurance
      </Text>
      <Pressable
        style={[styles.rectangleWrapper, styles.groupInnerPosition]}
        onPress={() => navigation.navigate("Car")}
      >
        <View style={[styles.groupItem, styles.groupPosition]} />
      </Pressable>
      <Text style={[styles.vehicleInsurance, styles.loanCalculatorTypo]}>
        Vehicle Insurance
      </Text>
      <Text style={[styles.loanCalculator, styles.loanCalculatorTypo]}>
        Loan Calculator
      </Text>
      <Image
        style={[styles.groupInner, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/group-801.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-811.png")}
      />
      <Text style={styles.homeLoan}>{`Home Loan `}</Text>
      <Text
        style={[styles.guaranteedBonus, styles.educationLoanTypo]}
      >{`Guaranteed 
Bonus`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  educationLoanTypo: {
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.m3TitleMedium_size,
    position: "absolute",
  },
  groupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupInnerPosition: {
    left: "43.02%",
    right: "43.02%",
    width: "13.97%",
    height: "26.18%",
  },
  groupPosition: {
    top: "0%",
    position: "absolute",
  },
  loanCalculatorTypo: {
    width: "25.7%",
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.m3TitleMedium_size,
    height: "12.04%",
    position: "absolute",
  },
  educationLoan: {
    width: "32.12%",
    top: "28.8%",
    left: "0%",
    height: "12.04%",
    textAlign: "center",
  },
  groupChild: {
    top: "59.16%",
    right: "77.37%",
    bottom: "14.66%",
    left: "8.66%",
    width: "13.97%",
    height: "26.18%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  homeInsurance: {
    height: "9.42%",
    width: "27.09%",
    left: "2.79%",
    top: "86.39%",
  },
  groupItem: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorPeru_200,
    left: "0%",
  },
  rectangleWrapper: {
    top: "56.54%",
    bottom: "17.28%",
    position: "absolute",
  },
  vehicleInsurance: {
    left: "37.99%",
    top: "86.39%",
  },
  loanCalculator: {
    top: "87.96%",
    left: "73.18%",
  },
  groupInner: {
    bottom: "73.82%",
    left: "43.02%",
    right: "43.02%",
    width: "13.97%",
    height: "26.18%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupIcon: {
    top: "1.05%",
    right: "7.82%",
    bottom: "72.77%",
    left: "78.21%",
    width: "13.97%",
    height: "26.18%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  homeLoan: {
    width: "26.26%",
    top: "29.32%",
    left: "39.39%",
    textAlign: "left",
    color: Color.lightGray11,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.m3TitleMedium_size,
    height: "12.04%",
    position: "absolute",
  },
  guaranteedBonus: {
    height: "16.75%",
    width: "28.21%",
    top: "28.27%",
    left: "71.79%",
  },
  educationLoanParent: {
    height: "23.52%",
    width: "95.47%",
    top: "13.92%",
    right: "6.13%",
    bottom: "62.56%",
    left: "-1.6%",
    position: "absolute",
  },
});

export default GroupComponent33;
