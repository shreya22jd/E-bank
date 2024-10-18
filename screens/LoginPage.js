import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [userName, setUserName] = React.useState(""); // New state for username
  const [debitCard, setDebitCard] = React.useState("");
  const [expiryDate, setExpiryDate] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [atmPin, setAtmPin] = React.useState("");
  const [upiPin, setUpiPin] = React.useState("");
  const [isOtpSent, setIsOtpSent] = React.useState(false);

  const fetchLoginPage = () => {
    if (phoneNumber.length !== 10) {
      Alert.alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (userName.trim() === "") {
      Alert.alert("Please enter your name.");
      return;
    }
    // Fetch the bank account and card details using phone number.
    console.log(`Fetching bank details for ${phoneNumber}`);
    // Mock data for now
    setDebitCard("1234 5678 9876 5432");
    setExpiryDate("12/26");
  };

  const handleSendOtp = () => {
    if (debitCard) {
      console.log(`OTP sent for verification of card: ${debitCard}`);
      setIsOtpSent(true);
      Alert.alert("OTP Sent!", `OTP sent to the phone number ${phoneNumber}`);
    }
  };

  const handleSetUpiPin = () => {
    if (atmPin.length === 4 && upiPin.length === 4) {
      const upiId = `${phoneNumber}@bank`; // Example UPI ID format using phone number
      Alert.alert("Success!", "UPI PIN set successfully.");
  
      // Navigate to Profile2 with userName and upiId as params
      navigation.navigate("Profile2", { userName, upiId });
      setTimeout(() => {
        // Reset navigation stack and navigate to Home screen
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }], // Reset the stack to just the Home screen
        });
      }, 0);
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

      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        value={userName}
        onChangeText={setUserName} // Update username state
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.button} onPress={fetchLoginPage}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {debitCard ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Debit Card Number"
            value={debitCard}
            editable={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Expiry Date"
            value={expiryDate}
            editable={false}
          />

          <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </>
      ) : null}

      {isOtpSent && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          />
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
    textAlign:"center",
    fontSize:24,
    paddingBottom:10,
  },
  description: {
    textAlign:"center",
    paddingBottom:30,
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
    paddingTop:70,
  },
  frame: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default LoginPage;
