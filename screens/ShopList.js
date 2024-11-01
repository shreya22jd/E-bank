import * as React from "react";
import { Text, StyleSheet, View, Pressable, Linking, Alert } from "react-native";
import { Image } from "expo-image";
import TopBar from "../components/TopBar";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ShopList = () => {
  const navigation = useNavigation();

  // Function to open app or website
  const openAppOrWebsite = async (url, appUrl) => {
    try {
      const supported = await Linking.canOpenURL(appUrl);
      if (supported) {
        await Linking.openURL(appUrl);  // Opens the app if installed
      } else {
        await Linking.openURL(url);     // Opens the website if app is not installed
      }
    } catch (error) {
      Alert.alert("Error", "Unable to open the link");
    }
  };

  return (
    <View style={styles.shopList}>
      <TopBar />
      
      {/* Flipkart Section */}
      <Pressable
        style={styles.iconContainer}  // Added container for proper alignment
        onPress={() => openAppOrWebsite("https://www.flipkart.com", "flipkart://")}>
        <Image
          style={[styles.flipkartIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/flipkart-iconicons-1.png")}
        />
        <Text style={[styles.flipkart, styles.iconText]}>Flipkart</Text>
      </Pressable>

      {/* Amazon Section */}
      <Pressable
        style={styles.iconContainer}  // Added container for proper alignment
        onPress={() => openAppOrWebsite("https://www.amazon.com", "amazon://")}>
        <Image
          style={[styles.amazonIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/flipkart-iconicons-1.png")}
        />
        <Text style={[styles.amazon, styles.iconText]}>Amazon</Text>
      </Pressable>

      {/* Other App Components */}
      <Pressable
        style={[styles.arrowsDiagramsarrowParent, styles.arrowsIconLayout]}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Image
          style={[styles.arrowsDiagramsarrowIcon2, styles.arrowsIconLayout]}
          contentFit="cover"
          source={require("../assets/arrows-diagramsarrow.png")}
        />
        <Text style={[styles.welcomeToCastore, styles.welcomePosition]}>
          STStore
        </Text>
      </Pressable>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,  // Adjust space between icons
    paddingHorizontal: 20,
  },
  iconLayout: {
    height: 42,
    width: 42,
    borderRadius: Border.br_3xs,
    marginRight: 10,  // Adds space between icon and text
  },
  iconText: {
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  flipkart: {
    // Specific styling for Flipkart text, if needed
  },
  amazon: {
    // Specific styling for Amazon text, if needed
  },
  arrowsIconLayout: {
    height: 24,
    position: "absolute",
  },
  welcomePosition: {
    height: 23,
    color: Color.blackB100,
    lineHeight: 32,
    letterSpacing: -1,
    top: "50%",
    marginTop: -11,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  flipkartIcon: {
    // Specific styling for Flipkart icon, if needed
  },
  amazonIcon: {
    // Specific styling for Amazon icon, if needed
  },
  arrowsDiagramsarrowIcon2: {
    top: 0,
    left: 393,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  welcomeToCastore: {
    width: "73.38%",
    left: "0%",
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
  },
  arrowsDiagramsarrowParent: {
    top: 302,
    left: -99,
    width: 417,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 28,
    top: 44,
    width: 40,
    height: 40,
    position: "absolute",
  },
  shopList: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ShopList;