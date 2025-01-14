import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Image, // Import Image for the icons
  Linking, // Make sure to import Linking
} from "react-native";
import StatusBar1 from "../components/StatusBar1";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const investmentData = [
  {
    type: "Stocks",
    description: "Equity investment in companies.",
    icon: require("../assets/stocks-icon.jpeg"),
    url: "https://www.nyse.com/listings_directory/stock",
  },
  {
    type: "Crypto",
    description: "Digital currencies like Bitcoin, Ethereum.",
    icon: require("../assets/crypto.jpeg"),
    url: "https://www.coindesk.com",
  },
  {
    type: "Gold",
    description: "Invest in physical or digital gold.",
    icon: require("../assets/gold-icon.jpeg"),
    url: "https://www.gold.org",
  },
  {
    type: "Mutual Funds",
    description: "Pool of funds managed by professionals.",
    icon: require("../assets/mutualfunds-icon.jpeg"),
    url: "https://groww.in/mutual-funds",
  },
  {
    type: "Bonds",
    description: "Fixed-income investment options.",
    icon: require("../assets/bonds.jpeg"),
    url: "https://www.investor.gov/financial-tools-calculators/bond-investing",
  },
];

const Shares = () => {
  const handleInvestmentClick = (investment) => {
    // Directly open the website when an investment option is clicked
    Linking.openURL(investment.url);
  };

  return (
    <ScrollView style={styles.shares}>
      <StatusBar1 statusBarBackgroundColor="#e0a340" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Investment Options</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Choose an Investment Option</Text>
        {investmentData.map((investment, index) => (
          <Pressable
            key={index}
            style={styles.investmentOption}
            onPress={() => handleInvestmentClick(investment)} // Opens the respective website
          >
            <Image source={investment.icon} style={styles.icon} />{" "}
            {/* Displaying the icon */}
            <View style={styles.optionContent}>
              <Text style={styles.optionTitle}>{investment.type}</Text>
              <Text style={styles.optionDescription}>
                {investment.description}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  shares: {
    flex: 1,
    backgroundColor: Color.colorLightGray,
  },
  header: {
    backgroundColor: Color.colorDarkgray_500,
    paddingVertical: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkgray_500,
    marginBottom: 20,
  },
  investmentOption: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_500,
    borderRadius: 20,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
  },
  icon: {
    width: 40, // Adjust the width and height as needed
    height: 40, // Adjust the width and height as needed
    marginRight: 15,
  },
  optionContent: { flex: 1 },
  optionTitle: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkgray_500,
  },
  optionDescription: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppins,
    color: Color.colorDarkgray_500,
  },
});

export default Shares;