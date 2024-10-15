import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontFamily,
  Color,
  FontSize,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const ApplyForPolicy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.applyForPolicy2}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector29.png")}
      />
      <View style={styles.applyForPolicy2Child} />
      <Text style={styles.applyForPolicy}>Apply for Policy</Text>
      <View style={styles.groupParent}>
        <View style={[styles.villageTownParent, styles.parentPosition]}>
          <Text style={[styles.villageTown, styles.postTypo]}>
            Village / Town
          </Text>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.enterYourVillage, styles.enterTypo1]}>
            Enter Your Village / Town Name
          </Text>
        </View>
        <View style={[styles.postOfficeParent, styles.parentPosition]}>
          <Text style={[styles.postOffice, styles.postTypo]}>Post Office</Text>
          <View style={[styles.groupItem, styles.groupChildShadowBox]} />
          <Text style={[styles.enterYourPost, styles.enterTypo1]}>
            Enter Your Post Office Name
          </Text>
        </View>
        <View style={[styles.policeStationParent, styles.parentPosition]}>
          <Text style={[styles.policeStation, styles.postTypo]}>
            Police Station
          </Text>
          <View style={[styles.groupInner, styles.groupChildShadowBox]} />
          <Text style={[styles.enterYourPolice, styles.enterTypo1]}>
            Enter Your Police Station Name
          </Text>
        </View>
        <View style={[styles.postCodeIfAnyParent, styles.parentPosition]}>
          <Text style={[styles.postCodeIf, styles.postTypo]}>
            Post Code (If any)
          </Text>
          <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
          <Text style={[styles.enterYourPost1, styles.enterTypo1]}>
            Enter Your Post Code
          </Text>
        </View>
        <View style={[styles.districParent, styles.parentPosition]}>
          <Text style={[styles.distric, styles.postTypo]}>Distric</Text>
          <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
          <Text style={[styles.enterYourDistric, styles.enterTypo]}>
            Enter Your Distric Name
          </Text>
        </View>
        <View style={[styles.contactNumberParent, styles.parentPosition]}>
          <Text style={[styles.contactNumber, styles.postTypo]}>
            Contact Number
          </Text>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.enterYourDistric1, styles.enterTypo]}>
            Enter Your Distric Name
          </Text>
        </View>
        <Text style={[styles.permanentAddress, styles.nextTypo]}>
          Permanent address
        </Text>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ApplyForPolicy3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Pressable
        style={styles.applyForPolicy2Inner}
        onPress={() => navigation.navigate("ApplyForPolicy1")}
      >
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild3, styles.groupChild3Position]} />
          <Text style={[styles.next, styles.nextTypo]}>Next</Text>
        </View>
      </Pressable>
      <View style={[styles.statusBarwhite, styles.groupChild3Position]}>
        <Text style={styles.time}>9:41</Text>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  parentPosition: {
    right: "0%",
    height: "12.7%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  postTypo: {
    fontFamily: FontFamily.interRegular,
    height: "28.12%",
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
    left: "0%",
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  enterTypo1: {
    opacity: 0.6,
    left: "3.03%",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    height: "28.12%",
    textAlign: "left",
    position: "absolute",
  },
  groupChildShadowBox: {
    bottom: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  enterTypo: {
    width: "51.19%",
    opacity: 0.6,
    left: "3.03%",
    color: Color.lightGray11,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    height: "28.12%",
    textAlign: "left",
    position: "absolute",
  },
  nextTypo: {
    fontSize: FontSize.font_size,
    textAlign: "left",
    position: "absolute",
  },
  groupChild3Position: {
    backgroundColor: Color.colorGoldenrod_100,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  vectorIcon: {
    height: "111.08%",
    width: "102.51%",
    right: "-1.39%",
    bottom: "-11.08%",
    left: "-1.12%",
    top: "0%",
    position: "absolute",
  },
  applyForPolicy2Child: {
    height: "92.52%",
    top: "9.2%",
    right: "-0.27%",
    bottom: "-1.72%",
    left: "0.27%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  applyForPolicy: {
    height: "4.41%",
    width: "51.39%",
    top: "4.19%",
    left: "23.47%",
    fontSize: FontSize.m3TitleLarge_size,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  villageTown: {
    width: "29.99%",
    color: Color.lightGray11,
  },
  groupChildShadowBox1: {
    borderRadius: Border.br_8xs,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.45)",
    bottom: "0.14%",
    top: "37.36%",
    height: "62.5%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  enterYourVillage: {
    width: "67.57%",
    top: "56.11%",
  },
  villageTownParent: {
    top: "8.15%",
    bottom: "79.14%",
    left: "0%",
  },
  postOffice: {
    width: "23.94%",
    color: Color.lightGray11,
  },
  groupItem: {
    top: "37.5%",
    bottom: "0%",
    borderRadius: Border.br_8xs,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    height: "62.5%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  enterYourPost: {
    width: "61.52%",
    top: "56.25%",
  },
  postOfficeParent: {
    top: "23.83%",
    bottom: "63.47%",
    left: "0%",
  },
  policeStation: {
    width: "29.7%",
    color: Color.lightGray11,
  },
  groupInner: {
    top: "37.5%",
    bottom: "0%",
    borderRadius: Border.br_8xs,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    height: "62.5%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  enterYourPolice: {
    width: "66.96%",
    top: "56.25%",
  },
  policeStationParent: {
    top: "39.69%",
    bottom: "47.61%",
    left: "0%",
  },
  postCodeIf: {
    width: "38.77%",
    color: Color.lightGray11,
  },
  rectangleView: {
    top: "37.5%",
    bottom: "0%",
    borderRadius: Border.br_8xs,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    height: "62.5%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  enterYourPost1: {
    width: "46.04%",
    top: "56.25%",
  },
  postCodeIfAnyParent: {
    top: "55.57%",
    bottom: "31.73%",
    left: "0%",
  },
  distric: {
    width: "13.93%",
    color: Color.lightGray11,
  },
  groupChild1: {
    top: "37.5%",
    bottom: "0%",
    borderRadius: Border.br_8xs,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    height: "62.5%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  enterYourDistric: {
    top: "56.25%",
  },
  districParent: {
    top: "71.44%",
    bottom: "15.86%",
    left: "0%",
  },
  contactNumber: {
    width: "35.75%",
    color: Color.lightGray11,
  },
  enterYourDistric1: {
    top: "56.11%",
  },
  contactNumberParent: {
    top: "87.32%",
    bottom: "-0.02%",
    left: "0%",
  },
  permanentAddress: {
    height: "4.69%",
    width: "58.46%",
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightGray11,
    left: "0%",
    top: "0%",
  },
  groupParent: {
    height: "68.26%",
    width: "91.68%",
    top: "10.54%",
    right: "4.16%",
    bottom: "21.19%",
    left: "4.16%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "1.6%",
    top: "5.17%",
    right: "87.73%",
    bottom: "89.9%",
    width: "10.67%",
    height: "4.93%",
    position: "absolute",
  },
  groupChild3: {
    shadowColor: "rgba(0, 0, 0, 0.41)",
    shadowRadius: 3,
    elevation: 3,
    borderRadius: Border.br_base,
    height: "100%",
    bottom: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  next: {
    height: "33.33%",
    width: "15.9%",
    top: "33.33%",
    left: "42.2%",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    color: Color.white,
    fontSize: FontSize.font_size,
  },
  rectangleParent: {
    width: 327,
    height: 54,
  },
  applyForPolicy2Inner: {
    height: "6.65%",
    width: "87.2%",
    top: "84.11%",
    right: "7.47%",
    bottom: "9.24%",
    left: "5.33%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_base,
    position: "absolute",
  },
  time: {
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    textAlign: "center",
    fontWeight: "700",
    color: Color.lightGray11,
    fontSize: FontSize.size_mini,
  },
  connectionsIcon: {
    width: 68,
    height: 16,
  },
  statusBarwhite: {
    height: "4.43%",
    bottom: "95.57%",
    flexDirection: "row",
    paddingLeft: Padding.p_5xl,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_4xl,
    paddingBottom: Padding.p_5xs,
    gap: Gap.gap_20xl,
    alignItems: "center",
  },
  applyForPolicy2: {
    borderRadius: Border.br_5xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default ApplyForPolicy;
