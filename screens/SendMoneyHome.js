import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Frame2 from "../components/Frame2";
import SendMoney2 from "../components/SendMoney2";
import {
  FontSize,
  FontFamily,
  Color,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";
import { LinearGradient } from 'expo-linear-gradient';

const SendMoneyHome = () => {
  return (
    <View style={styles.sendMoneyHome}>
      <Frame2 />
      <View style={styles.frame}>
        {/* <View style={styles.statusBarwhite}>
          <Text style={styles.time}>9:41</Text>
          <Image
            style={styles.connectionsIcon}
            contentFit="cover"
            source={require("../assets/connections.png")}
          />
        </View> */}
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <LinearGradient
              style={styles.headerSection}
              locations={[0, 0.8]}
              colors={["#e0a340", "#7a5923"]}
            >
              <View style={styles.statusBar} />
              <View style={styles.title}>
                <Text style={styles.label}>
                  <Text style={styles.welcomeBack}>
                    <Text style={styles.welcomeBack1}>Welcome Back</Text>
                    <Text style={styles.text}>{`, 
`}</Text>
                  </Text>
                  <Text style={styles.text}>
                    <Text style={styles.name1}>Name!</Text>
                  </Text>
                </Text>
              </View>
            </LinearGradient>
            <View style={styles.frame3}>
              <View style={styles.header} />
            </View>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame2.png")}
            />
          </View>
          <SendMoney2 />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    position: "relative",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    textAlign: "center",
  },
  connectionsIcon: {
    position: "relative",
    width: 68,
    height: 16,
  },
  statusBarwhite: {
    backgroundColor: Color.colorGoldenrod_100,
    width: 375,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: Padding.p_5xl,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_4xl,
    paddingBottom: Padding.p_5xs,
    gap: Gap.gap_20xl,
    marginLeft: 7,
  },
  statusBar: {
    alignSelf: "stretch",
    height: 36,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  welcomeBack1: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
  },
  welcomeBack: {
    color: Color.colorGray_1400,
  },
  name1: {
    color: Color.white,
  },
  label: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    width: 203,
    height: 134,
  },
  title: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    height: 209,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_7xs,
    marginTop: -24,
  },
  headerSection: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_7xl,
    width: 385,
    height: 204,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: Padding.p_5xl,
    backgroundColor: "transparent",
  },
  header: {
    alignSelf: "stretch",
    height: 43,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  frame3: {
    position: "absolute",
    top: 0,
    left: 155,
    width: 303,
    height: 57,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameIcon: {
    position: "absolute",
    top: 10,     //back button
    left: 21,
    width: 40,
    height: 55,
    overflow: "hidden",
  },
  frame2: {
    width: 458,
    height: 204,
    overflow: "hidden",
    marginLeft: 18,
  },
  frame1: {
    width: 476,
    height: 340,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 0,
    gap: Gap.gap_4xs,
  },
  frame: {
    position: "absolute",
    top: 45,
    left: -6,
    width: 476,
    height: 390,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: Gap.gap_7xs,
  },
  sendMoneyHome: {
    position: "relative",
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
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SendMoneyHome;
