import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import StatusBar1 from "../components/StatusBar1";
const FAQs = [
  {
    question: "How can I reset my bank account password?",
    answer:
      "To reset your bank account password, go to the login screen and click on the 'Forgot Password' link. You will be asked to enter your registered email or mobile number to receive a reset link.",
  },
  {
    question: "How do I check my account balance?",
    answer:
      "You can check your account balance by logging into your online banking portal or mobile banking app. Additionally, you can check your balance by visiting an ATM or calling customer service.",
  },
  {
    question: "How can I block my lost or stolen debit card?",
    answer:
      "To block your lost or stolen debit card, contact customer service immediately through the banking app or call our helpline. Alternatively, you can log into your account and report the lost card.",
  },
  {
    question: "What should I do if I suspect fraud on my account?",
    answer:
      "If you suspect fraud, immediately contact customer support and report the unauthorized transaction. You can also block your debit or credit card from the mobile app to prevent further issues.",
  },
  {
    question: "How do I apply for a loan?",
    answer:
      "To apply for a loan, log in to your account on the bank's official website or app. Navigate to the 'Loan Services' section, choose the loan type, and submit your application with the necessary documents.",
  },
];

export default function App() {
  const [searchText, setSearchText] = useState("");

  const filteredFAQs = FAQs.filter((faq) =>
    faq.question.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <StatusBar1
        statusBarPosition="absolute"
        statusBarWidth={412}
        statusBarHeight={90}
        statusBarTop={0}
        statusBarLeft={0}
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

      {/* Header Title */}
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Banking FAQs</Text>
      </View>

      {/* Scrollable FAQs Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search FAQs"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />

        {/* FAQs List */}
        <View style={styles.faqContainer}>
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <View key={index} style={styles.faqItem}>
                <Text style={styles.faqText}>{faq.question}</Text>
                <View style={styles.faqAnswerContainer}>
                  <Text style={styles.faqAnswer}>{faq.answer}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noResults}>No FAQs found.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerTitleContainer: {
    backgroundColor: "#e0a340", // Header background color
    height: 90, // Height of header
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 1, // Ensure header stays above content
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    top:10,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 100, // Adjusted for header spacing
    paddingBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  faqContainer: {
    paddingBottom: 20,
  },
  faqItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  faqText: {
    fontSize: 16,
    color: "#333",
  },
  faqAnswerContainer: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    marginLeft:-5,
  },
  faqAnswer: {
    fontSize: 16,
    color: "#555",
    textAlign:"left",
  },
  noResults: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});
