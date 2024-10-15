import * as React from "react";
import { Text, StyleSheet, View, Pressable, Linking, Alert } from "react-native";
import { Image } from "expo-image";
import TopBar from "../components/TopBar";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ShopList = () => {
  const navigation = useNavigation();

  // Function to open Amazon or fallback to web
  const openAmazon = async () => {
    const url = "https://www.amazon.com";
    const appUrl = "amazon://";

    const supported = await Linking.canOpenURL(appUrl);
    if (supported) {
      Linking.openURL(appUrl);
    } else {
      Linking.openURL(url);
    }
  };

  // Function to open Flipkart or fallback to web
  const openFlipkart = async () => {
    const url = "https://www.flipkart.com";
    const appUrl = "flipkart://";

    const supported = await Linking.canOpenURL(appUrl);
    if (supported) {
      Linking.openURL(appUrl);
    } else {
      Linking.openURL(url);
    }
  };

  return (
    <View style={styles.shopList}>
      <TopBar />

      <View style={styles.storeContainer}>
        {/* Flipkart */}
        <Pressable onPress={openFlipkart} style={styles.storeButton}>
          <Text style={[styles.storeText, styles.amazonTypo]}>Flipkart</Text>
          <Image
            style={styles.iconImage}
            contentFit="cover"
            source={require("../assets/flipkart-iconicons-1.png")}
          />
        </Pressable>

        {/* Amazon */}
        <Pressable onPress={openAmazon} style={styles.storeButton}>
          <Text style={[styles.storeText, styles.amazonTypo]}>Amazon</Text>
          <Image
            style={styles.iconImage}
            contentFit="cover"
            source={require("../assets/arrows-diagramsarrow.png")}
          />
        </Pressable>
      </View>

      {/* Navigation Button */}
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
  shopList: {
    flex: 1,
    backgroundColor: Color.white,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  storeContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  storeButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    padding: 20,
    backgroundColor: Color.lightGray,
    borderRadius: Border.br_base,
    marginVertical: 10,
  },
  storeText: {
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.montserratBold,
    color: Color.black,
  },
  amazonTypo: {
    textAlign: "left",
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  wrapper: {
    marginTop: 40,
    width: 50,
    height: 50,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
});

export default ShopList;