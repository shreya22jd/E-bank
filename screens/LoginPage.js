import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Frame13 from "../components/Frame13";
import Inputs from "../components/Inputs";
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
  const handleLogin = () => {
    // Navigate to home page or other screen upon successful login
    navigation.navigate('Home');
  };

  const handleRegister = () => {
    // Navigate to the registration page
    navigation.navigate('Register');
  };

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

        {/* Social Media Login Options */}
        <View style={styles.signInWithFlexBox}>
          <TouchableOpacity
            style={[styles.continueWithAppleLeftAli, styles.registerFlexBox]}
            onPress={() => console.log('Apple Login')}
          >
            <Image
              style={styles.path4Icon}
              contentFit="cover"
              source={require("../assets/path4.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.continueWithAppleLeftAli, styles.registerFlexBox]}
            onPress={() => console.log('Google Login')}
          >
            <Image
              style={styles.logoGoogleg48dp}
              contentFit="cover"
              source={require("../assets/logo-googleg-48dp.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.continueWithAppleLeftAli, styles.registerFlexBox]}
            onPress={() => console.log('Facebook Login')}
          >
            <Image
              style={styles.logoGoogleg48dp}
              contentFit="cover"
              source={require("../assets/path14.png")}
            />
          </TouchableOpacity>
        </View>

        {/* Separator for Social Media and Email Login */}
        <View style={[styles.signInWith, styles.signInWithFlexBox]}>
          <View style={styles.liner} />
          <Text style={styles.label}>or sign in with</Text>
          <View style={styles.liner} />
        </View>

        {/* Email Login Inputs */}
        <Inputs />

        {/* Forgot Password */}
        <View style={[styles.rectangleParent, styles.registerFlexBox]}>
          <View style={styles.frameChild} />
          <TouchableOpacity onPress={() => console.log('Forgot Password')}>
            <Text style={styles.forgotPassword}>Forgot password</Text>
          </TouchableOpacity>
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

          <TouchableOpacity style={[styles.register, styles.registerFlexBox]} onPress={handleRegister}>
            <Text style={[styles.label1, styles.titleTypo]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Home Indicator */}
      <View style={[styles.homeIndicator, styles.contentLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
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
