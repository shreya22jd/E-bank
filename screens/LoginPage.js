import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [atmPin, setAtmPin] = React.useState("");
  const [upiPin, setUpiPin] = React.useState("");
  const [isOtpSent, setIsOtpSent] = React.useState(false);
  const [isOtpVerified, setIsOtpVerified] = React.useState(false);

  // Mock backend database
  const mockDatabase = {
    validOtp: "1234", // Simulated OTP
    user: {
      userName: "John Doe", // Default name
      upiId: "1234567890@bank", // Simulated UPI ID
    },
  };

  const handleSendOtp = () => {
    if (phoneNumber.length !== 10) {
      Alert.alert("Error", "Please enter a valid 10-digit phone number.");
      return;
    }
    console.log(`Sending OTP to ${phoneNumber}`);
    setIsOtpSent(true);
    Alert.alert("OTP Sent", `An OTP has been sent to ${phoneNumber}`);
  };

  const handleVerifyOtp = () => {
    if (otp === mockDatabase.validOtp) {
      setIsOtpVerified(true);
      Alert.alert("Success", "OTP verified successfully.");
    } else {
      Alert.alert("Error", "Invalid OTP. Please try again.");
    }
  };

  const handleSetUpiPin = () => {
    if (atmPin.length === 4 && upiPin.length === 4) {
      const upiId = `${phoneNumber}@bank`;
      mockDatabase.user.userName = userName || mockDatabase.user.userName;
      mockDatabase.user.upiId = upiId;
      Alert.alert("Success!", `UPI PIN set successfully. Your UPI ID is ${upiId}`);
      navigation.navigate("Home", { userName: mockDatabase.user.userName, upiId });
    } else {
      Alert.alert("Error", "Please enter valid ATM and UPI PINs.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/LoginImg.png")}
        />
      </View>
      <View style={[styles.content, styles.contentLayout]}>
        <View style={styles.start}>
          <View style={styles.textGroup}>
            <Text style={[styles.title, styles.titleTypo]}>Welcome</Text>
            <Text style={styles.description}>
              EasyPay, Paving the Way to Your Financial Future
            </Text>
          </View>
        </View>
      </View>

      {!isOtpSent && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name"
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </>
      )}

      {isOtpSent && !isOtpVerified && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          />
          <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </>
      )}

      {isOtpVerified && (
        <>
          <TextInput
            style={styles.input}
            placeholder="ATM PIN"
            keyboardType="number-pad"
            secureTextEntry={true}
            value={atmPin}
            onChangeText={setAtmPin}
          />
          <TextInput
            style={styles.input}
            placeholder="New UPI PIN"
            keyboardType="number-pad"
            secureTextEntry={true}
            value={upiPin}
            onChangeText={setUpiPin}
          />
          <TouchableOpacity style={styles.button} onPress={handleSetUpiPin}>
            <Text style={styles.buttonText}>Set UPI PIN</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  titleTypo: {
    textAlign: "center",
    fontSize: 24,
    paddingBottom: 10,
  },
  description: {
    textAlign: "center",
    paddingBottom: 30,
  },
  input: {
    backgroundColor: Color.lightGray10,
    padding: 10,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    marginVertical: 10,
    fontSize: FontSize.size_1xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.black,
  },
  button: {
    backgroundColor: "#e0a340",
    padding: 15,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: Color.white,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratBold,
  },
  icon: {
    height: 60,
    width: 60,
    paddingTop: 70,
  },
  frame: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default LoginPage;
