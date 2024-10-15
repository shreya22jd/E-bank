import * as React from "react";
import { Image, Alert } from "react-native";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import Frame13 from "../components/Frame13";
import StatusDefaultStyleprimarySizeLargeIconfalseTexttrue from "../components/StatusDefaultStyleprimarySizeLargeIconfalseTexttrue";
import {
  FontSize,
  Gap,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const LoginPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [isOtpSent, setIsOtpSent] = React.useState(false);

  const handleLogin = () => {
    // Implement login logic with phone number and OTP verification
    if (otp) {
      navigation.navigate('Home');
    } else {
      Alert.alert("Please enter the OTP to continue.");
    }
  };

  const handleSendOtp = () => {
    if (phoneNumber.length !== 10) {
      Alert.alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Here, you would call your OTP generation API or service.
    // For now, we mock the process and assume OTP is sent.
    console.log(`OTP sent to ${phoneNumber}`);
    setIsOtpSent(true);
    Alert.alert("OTP sent!", `An OTP has been sent to ${phoneNumber}.`);
  };

  // const handleRegister = () => {
  //   navigation.navigate('Register');
  // };

  return (
    <View style={styles.loginPage}>
      <Frame13 />
      <View style={styles.frame}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/1052854-1.png")}
        />
      </View>
      <View style={[styles.content, styles.contentLayout]}>
        <View style={styles.start}>
          <View style={styles.textGroup}>
            <Text style={[styles.title, styles.titleTypo]}>Welcome Back</Text>
            <Text style={styles.description}>
              EasyPay, Paving the Way to Your Financial Future
            </Text>
          </View>
        </View>

        {/* Phone Number and OTP Inputs */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          {/* 'Send OTP' button */}
          <TouchableOpacity
            style={styles.sendOtpButton}
            onPress={handleSendOtp}
          >
            <Text style={styles.sendOtpText}>Send OTP</Text>
          </TouchableOpacity>

          {isOtpSent && (
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              keyboardType="number-pad"
              value={otp}
              onChangeText={setOtp}
              secureTextEntry={true}
            />
          )}
        </View>

        {/* Forgot Password */}
        <View style={[styles.rectangleParent, styles.registerFlexBox]}>
          {/* <View style={styles.frameChild} /> */}
          {/* <TouchableOpacity onPress={() => console.log('Forgot Password')}>
            <Text style={styles.forgotPassword}>Forgot password</Text>
          </TouchableOpacity> */}
        </View>

        {/* Login and Register Buttons */}
        <View style={styles.buttons}>
          <TouchableOpacity onPress={handleLogin}>
            <StatusDefaultStyleprimarySizeLargeIconfalseTexttrue
              statusDefaultStyleprimaryPosition="unset"
              statusDefaultStyleprimaryBackgroundColor="#e0a340"
              statusDefaultStyleprimaryTop="unset"
              statusDefaultStyleprimaryLeft="unset"
              statusDefaultStyleprimaryWidth="unset"
              statusDefaultStyleprimaryHeight="unset"
              statusDefaultStyleprimaryAlignSelf="stretch"
              label="Login"
              labelFontWeight="700"
              labelFontFamily="Montserrat-Bold"
              labelColor="#fff"
            />
          </TouchableOpacity>

          {/* <TouchableOpacity style={[styles.register, styles.registerFlexBox]} onPress={handleRegister}>
            <Text style={[styles.label1, styles.titleTypo]}>Register</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      {/* Home Indicator */}
      <View style={[styles.homeIndicator, styles.contentLayout]} />
    </View>
  );
};


const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  input: {
    backgroundColor: Color.lightGray10,
    padding: 10,
    borderRadius: Border.br_3xs,
    borderWidth:1,
    marginVertical: 10,
    fontSize: FontSize.size_1xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.black,
    width:330,
    alignSelf:"center",
  },
  sendOtpButton: {
    backgroundColor: "#e0a340",
    padding: 10,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    justifyContent:"center",
    marginVertical: 10,
    height:50,
    width:330,
    alignSelf:"center",
  },
  sendOtpText: {
    color: Color.white,
    fontSize: 15,
    fontFamily: FontFamily.montserratBold,
    alignItems:"center",
  },
  rectangleParent: {
    width: 320,
    height: 16,
  },
  forgotPassword: {
    textDecoration: "underline",
    letterSpacing: 0.1,
    fontFamily: FontFamily.montserratRegular,
    color: Color.primaryMain,
    textAlign: "left",
    width: 311,
    height: 13,
    marginLeft: -92,
    textTransform: "capitalize",
    fontSize: FontSize.size_2xs,
    overflow: "hidden",
  },
  buttons: {
    gap: Gap.gap_16xs,
    alignSelf: "stretch",
  },
  contentLayout: {
    width: 375,
    alignItems: "center",
  },
  titleTypo: {
    fontSize: FontSize.font_size,
    textAlign: "center",
  },
  registerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  signInWithFlexBox: {
    gap: Gap.gap_8xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icon: {
    height: 55,
    width: 58,
  },
  frame: {
    height: 60,
    justifyContent: "flex-end",
    width: 58,
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.lightGray11,
    textAlign: "center",
    alignSelf: "stretch",
  },
  description: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.darkWhiteGrey60,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    alignSelf: "stretch",
  },
  textGroup: {
    gap: Gap.gap_18xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  start: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  path4Icon: {
    width: 19,
    height: 23,
  },
  continueWithAppleLeftAli: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue_300,
    borderWidth: 1,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    flex: 1,
  },
  logoGoogleg48dp: {
    width: 23,
    height: 23,
  },
  liner: {
    backgroundColor: Color.colorGainsboro_500,
    height: 1,
    flex: 1,
  },
  label: {
    fontSize: FontSize.mobileBody3Regular_size,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
    color: Color.lightGray7,
    textAlign: "center",
  },
  signInWith: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild: {
    backgroundColor: Color.colorGray_1800,
    width: 124,
    height: 16,
  },
  forgotPassword: {
    textDecoration: "underline",
    letterSpacing: 0.1,
    fontFamily: FontFamily.montserratRegular,
    color: Color.primaryMain,
    textAlign: "left",
    width: 311,
    height: 13,
    marginLeft: -92,
    textTransform: "capitalize",
    fontSize: FontSize.size_2xs,
    overflow: "hidden",
  },
  rectangleParent: {
    width: 320,
    height: 16,
  },
  label1: {
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorPeru_300,
    textTransform: "capitalize",
    textAlign: "center",
  },
  register: {
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  buttons: {
    gap: Gap.gap_16xs,
    alignSelf: "stretch",
  },
  content: {
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    gap: Gap.gap_2xl,
  },
  homeIndicator: {
    height: 98,
    justifyContent: "center",
  },
  loginPage: {
    shadowColor: "rgba(176, 176, 176, 0.2)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 44.8,
    elevation: 44.8,
    shadowOpacity: 1,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    width: "100%",
    height: 812,
    gap: Gap.gap_sm,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default LoginPage;
