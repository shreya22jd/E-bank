import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent from "./FrameComponent";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const NewPlan = () => {
  const navigation = useNavigation();
  const [targetAmount, setTargetAmount] = React.useState(""); // State for target amount
  const [dailyAmount, setDailyAmount] = React.useState(""); // State for today's amount

  const calculateBalanceAndDays = () => {
    const target = parseFloat(targetAmount) || 0;
    const daily = parseFloat(dailyAmount) || 0;
    
    if (daily > 0) {
      const currentBalance = target - daily; // Calculate the balance

      // Calculate days to reach the target if daily amount is greater than 0
      const days = currentBalance > 0 ? Math.ceil(currentBalance / daily) : 0; 
      
      return { currentBalance, days }; // Return calculated values
    } else {
      return { currentBalance: null, days: null }; // Reset values if daily amount is zero
    }
  };

  return (
    <View style={[styles.newPlan, styles.plusPosition]}>
      <View style={[styles.selection, styles.viewLayout]}>
        <View style={styles.selectionChild} />
        <View style={styles.selectionChild} />
        <View style={styles.selectionChild} />
      </View>
      <View style={[styles.plus, styles.plusPosition]}>
        <Text style={styles.newPlanEnterContainer}>
          <Text style={styles.newPlan1}>New plan{"\n"}</Text>
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

      {/* TextInput for manually entering the target amount */}
      <TextInput
        style={styles.targetInput}
        placeholder="Enter target amount"
        value={targetAmount}
        keyboardType="numeric"
        onChangeText={setTargetAmount} // Updates targetAmount
      />

      {/* TextInput for today's amount */}
      <TextInput
        style={styles.targetInput}
        placeholder="Enter today's amount"
        value={dailyAmount}
        keyboardType="numeric"
        onChangeText={setDailyAmount} // Updates dailyAmount
      />
    
      <FrameComponent
        onFramePressablePress={() => {
          const { currentBalance, days } = calculateBalanceAndDays(); // Calculate values
          navigation.navigate("MyPlan", {
            balance: currentBalance, // Pass balance as a parameter
            daysToTarget: days, // Pass daysToTarget as a parameter
          });
        }}
        propTop={330}
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
  targetInput: {
    width: 310,
    height: 44,
    borderWidth: 1,
    borderColor: Color.colorGray_1800,
    borderRadius: Border.br_mini,
    paddingHorizontal: 10,
    fontSize: FontSize.size_smi,
    color: Color.lightGray11,
    backgroundColor: Color.colorLinen_100,
    marginTop: 15,
    marginBottom: 10,
    top: 150,
  },
  resultText: {
    fontSize: FontSize.size_smi,
    color: Color.lightGray11,
    marginTop: 10,
  },
  viewLayout: {
    height: 44,
    width: 44,
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
  newPlan: {
    top: 147,
    backgroundColor: Color.colorGray_2200,
    width: 340,
    height: 395,
  },
});

export default NewPlan;
