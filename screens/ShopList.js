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
        onPress={() => openAppOrWebsite("https://www.flipkart.com", "flipkart://")}>
        <Text style={[styles.flipkart, styles.amazonTypo]}>Flipkart</Text>
        <Image
          style={[styles.flipkartIconIcons1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/flipkart-iconicons-1.png")}
        />
      </Pressable>

      {/* Amazon Section */}
      <Pressable
        onPress={() => openAppOrWebsite("https://www.amazon.com", "amazon://")}>
        <Text style={[styles.amazon, styles.amazonTypo]}>Amazon</Text>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/flipkart-iconicons-1.png")}
        />
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
  amazonTypo: {
    textAlign: "center",
    color: Color.lightGray11,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    left: 119,
    position: "absolute",
  },
  arrowsIconLayout: {
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    height: 42,
    width: 42,
    borderRadius: Border.br_3xs,
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
  flipkart: {
    top: 142,
  },
  amazon: {
    top: 222,
  },
  flipkartIconIcons1: {
    top: 136,
    left: 20,
  },
  icon: {
    top: 219,
    left: 19,
    overflow: "hidden",
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