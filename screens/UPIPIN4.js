import * as React from "react";
import { StyleSheet, View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native"; // Import useRoute
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const UPIPIN4 = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Use useRoute to get the route parameters
  const { contactName, contactNumber, amount } = route.params; // Destructure the parameters
  const [upiPin, setUpiPin] = React.useState("");

  const handleChange = (text) => {
    const cleanedText = text.replace(/\s/g, '').slice(0, 4);
    const formattedText = cleanedText.replace(/(.{1})/g, '$1 ').trim();
    setUpiPin(formattedText);
  };

  const isUPIPinValid = upiPin.replace(/\s/g, '').length === 4; // Check if UPI PIN has 4 digits

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0} 
    >  
      <View style={styles.upiPin}>
        <Text style={styles.otpAuthentication}>Enter UPI PIN</Text>
        <TextInput
          style={styles.input}
          placeholder="• • • •"
          placeholderTextColor="#000"
          keyboardType="numeric"
          maxLength={7}
          value={upiPin}
          onChangeText={handleChange}
        />
        <Image
          style={styles.image111Icon}
          contentFit="cover"
          source={require("../assets/image-111.png")}
        />
        <Text style={styles.bankOfBaroda}>Bank of Baroda</Text>

        {/* Display the contact name, number, and amount */}
        <Text style={styles.detailsText}>Contact Name: {contactName}</Text>
        <Text style={styles.detailsText}>Contact Number: {contactNumber}</Text>
        <Text style={styles.detailsText}>Amount: ₹{amount}</Text>

        {/* Proceed to Pay Button */}
        <Pressable
          style={[ 
            styles.signIn,
            { backgroundColor: isUPIPinValid ? Color.colorGoldenrod_100 : Color.gray4 }, // Change color based on validity
          ]}
          onPress={() => {
            if (isUPIPinValid) {
              navigation.navigate("Info8", {
                contactName,
                contactNumber,
                amount,
              }); // Navigate to Info8

              // Set a timeout to navigate back to SendMoneyHome after a few seconds
              setTimeout(() => {
                navigation.navigate("SendMoneyHome", {
                  contactName,
                  contactNumber,
                  amount,
                });
              }, 2000); // Adjust the time (in milliseconds) as needed
            } else {
              console.log("Please enter a valid UPI PIN.");
            }
          }}
          disabled={!isUPIPinValid} // Disable if the UPI PIN is not valid
        >
          <Text style={styles.text}>Proceed to Pay</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white, 
  },
  otpAuthentication: {
    marginTop: 200,
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    lineHeight: 25,
    fontFamily: FontFamily.dMSansBold,
    color: Color.blackB100,
    textAlign: "center",
    fontWeight: "700",
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: FontSize.size_5xl,
    marginVertical: 20,
    width: '60%',
    alignSelf: 'center',
  },
  image111Icon: {
    top: 80,
    left: 180,
    width: 55,
    height: 55,
    position: "absolute",
  },
  bankOfBaroda: {
    top: 127,
    left: 160,
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    position: "absolute",
    color: Color.lightGray11,
  },
  detailsText: {
    fontSize: FontSize.size_m, // Adjust font size as needed
    color: Color.blackB100,
    textAlign: "center",
    marginVertical: 5, // Space between the texts
  },
  signIn: {
    marginTop: 30,
    height: 56,
    width: "60%",
    borderRadius: Border.br_base,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
    fontWeight: "700",
  },
  upiPin: {
    flex: 1,
    backgroundColor: Color.white,
    paddingVertical: 20,
  },
});

export default UPIPIN4;
