import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  Image,
  Alert,
  Animated,
  ScrollView,
} from "react-native";

const MyCards = () => {
  const [currentScreen, setCurrentScreen] = useState("BankSelection");
  const [selectedBank, setSelectedBank] = useState("");
  const [cvv, setCvv] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ringScale] = useState(new Animated.Value(1));

  useEffect(() => {
    if (currentScreen === "Success") {
      animateRings();
    }
  }, [currentScreen]);

  const bankData = [
    { name: "HDFC Bank", icon: require("../assets/hdfcbank.jpeg") },
    { name: "Axis Bank", icon: require("../assets/axis-icon.jpeg") },
    { name: "SBI Bank", icon: require("../assets/sbi.jpeg") },
    { name: "ICICI Bank", icon: require("../assets/icici-icon.jpeg") },
  ];

  const handleBankSelection = (bankName) => {
    setSelectedBank(bankName);
    setCurrentScreen("EnterDetails");
  };

  const handlePayment = () => {
    if (cvv.length !== 3 || phoneNumber.length !== 10) {
      Alert.alert(
        "Invalid Input",
        "Please enter a valid CVV and phone number."
      );
      return;
    }
    setCurrentScreen("Success");
  };

  const animateRings = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(ringScale, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(ringScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const renderBankSelection = () => (
    <ScrollView contentContainerStyle={styles.bankContainer}>
      {bankData.map((bank, index) => (
        <Pressable
          key={index}
          style={styles.bankItem}
          onPress={() => handleBankSelection(bank.name)}
        >
          <Image source={bank.icon} style={styles.bankIcon} />
          <Text style={styles.bankName}>{bank.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );

  const renderEnterDetails = () => (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsText}>
        Enter Payment Details for {selectedBank}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter CVV"
        keyboardType="numeric"
        maxLength={3}
        onChangeText={setCvv}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        maxLength={10}
        onChangeText={setPhoneNumber}
      />
      <Pressable style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Make Payment</Text>
      </Pressable>
    </View>
  );

  const renderSuccess = () => (
    <View style={styles.successContainer}>
      <Animated.View
        style={[styles.ring, { transform: [{ scale: ringScale }] }]}
      />
      <Text style={styles.successMessage}>Payment Successful!</Text>
      <Text style={styles.successDetails}>
        Your payment with {selectedBank} was completed successfully.
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => setCurrentScreen("BankSelection")}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bank Payment</Text>
      </View>
      {currentScreen === "BankSelection" && renderBankSelection()}
      {currentScreen === "EnterDetails" && renderEnterDetails()}
      {currentScreen === "Success" && renderSuccess()}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#e0a340",
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  bankContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 20,
  },
  bankItem: {
    width: "40%",
    margin: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
  },
  bankIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  bankName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  detailsText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#e0a340",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  successContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    position: "relative",
  },
  ring: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: "absolute",
    backgroundColor: "rgba(255, 200, 150, 0.3)",
    top: "40%",
  },
  successMessage: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e0a340",
    marginBottom: 10,
    textAlign: "center",
  },
  successDetails: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default MyCards;