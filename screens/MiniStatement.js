import * as React from "react";
import { StyleSheet, View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Ministatement = () => {
  const navigation = useNavigation();
  const [pin, setPin] = React.useState("");
  const [showTransactions, setShowTransactions] = React.useState(false);

  // Sample transaction data
  const transactions = [
    { id: 1, date: "2024-10-01", amount: "₹100", status: "Success" },
    { id: 2, date: "2024-10-05", amount: "₹250", status: "Success" },
    { id: 3, date: "2024-10-10", amount: "₹500", status: "Failed" },
    { id: 4, date: "2024-10-15", amount: "₹150", status: "Success" },
    { id: 5, date: "2024-10-20", amount: "₹300", status: "Success" },
  ];

  // Function to handle input change and limit the length to 4 digits
  const handlePinChange = (value) => {
    if (value.length <= 4) {
      setPin(value);
    }
  };

  // Function to handle the continue button press
  const handleContinue = () => {
    if (pin.length === 4) {
      setShowTransactions(true); // Show transactions instead of navigating
    } else {
      alert("Please enter a valid 4-digit UPI PIN.");
    }
  };

  return (
    <View style={styles.ministatement}>
      <View style={styles.body}>
        {showTransactions ? (
          // Display transactions if showTransactions is true
          <ScrollView style={styles.transactionList}>
            <Text style={styles.transactionHeader}>Transaction History</Text>
            {transactions.map((transaction) => (
              <View key={transaction.id} style={styles.transactionItem}>
                <Text style={styles.transactionText}>{transaction.date}</Text>
                <Text style={styles.transactionText}>{transaction.amount}</Text>
                <Text style={styles.transactionText}>{transaction.status}</Text>
              </View>
            ))}
          </ScrollView>
        ) : (
          // PIN input if showTransactions is false
          <View style={styles.codeNumber}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              maxLength={4}
              value={pin}
              onChangeText={handlePinChange}
              secureTextEntry={true}
              autoFocus={true}
            />
            <Text style={styles.otpAuthentication}>Enter UPI PIN</Text>
          </View>
        )}
      </View>

      <View style={[styles.statusBarParent, styles.timeLightPosition]}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={412}
          statusBarHeight={95}
          statusBarTop={0.5}
          statusBarLeft={0.5}
          statusBarBackgroundColor="#e0a340"
          statusBarRight="unset"
          statusBarBottom="unset"
          notch={require("../assets/notch.png")}
          statusIconsWidth={69}
          statusIconsHeight={14}
          showNetworkSignalLight={false}
          wiFiSignalLight={require("../assets/wifi-signal--light.png")}
          showWiFiSignalLight={false}
          showBatteryLight={false}
          showTimeLight={false}
        />
      </View>

      {/* Pressable for Check Balance */}
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("CheckBalance")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Text style={[styles.checkBalance, styles.labelTypo]}>Get Mini Statement</Text>

      {/* Pressable button for Continue */}
      {!showTransactions && (
        <Pressable style={styles.buttonSend} onPress={handleContinue}>
          <Text style={[styles.label, styles.labelTypo]}>Continue</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  timeLightPosition: {
    left: 0,
    position: "absolute",
  },
  labelTypo: {
    textAlign: "center",
    color: Color.white,
    fontWeight: "700",
  },
  codeNumber: {
    height: "9.8%",
    width: "83.2%",
    top: "19.16%",
    right: "7.47%",
    bottom: "71.04%",
    left: "9.33%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    height: 60,
    fontSize: 32,
    borderBottomWidth: 2,
    borderColor: "#000",
    textAlign: "center",
    letterSpacing: 8,
  },
  otpAuthentication: {
    marginTop: -331.5,
    width: "81.33%",
    top: "50%",
    left: "13.87%",
    letterSpacing: -1,
    lineHeight: 32,
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  body: {
    height: "81.65%",
    top: "18.35%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  statusBarParent: {
    top: 0,
    width: 390,
    height: 95,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 28,
    top: 30,
    width: 40,
    height: 40,
    position: "absolute",
  },
  checkBalance: {
    top: 33,
    left: 100,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_5xl,
    color: Color.white,
    position: "absolute",
  },
  label: {
    fontSize: FontSize.font_size,
    textTransform: "capitalize",
    fontFamily: FontFamily.montserratBold,
  },
  buttonSend: {
    top: 406,
    left: 27,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGoldenrod_100,
    width: 327,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
  },
  ministatement: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
  transactionList: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  transactionHeader: {
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: Color.lightGray11,
    borderBottomWidth: 1,
  },
  transactionText: {
    flex: 1,
    textAlign: "center",
  },
});

export default Ministatement;
