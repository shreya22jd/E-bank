import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import GroupComponent19 from "../components/GroupComponent19";
import GroupComponent22 from "../components/GroupComponent22";
import GroupComponent11 from "../components/GroupComponent11";
import GroupComponent9 from "../components/GroupComponent9";
import GroupComponent14 from "../components/GroupComponent14";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LoanApply = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.loanApply, styles.loanLayout]}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector27.png")}
      />
      <View style={[styles.loanApplyChild, styles.loanApplyChildPosition]} />
      <View style={styles.groupParent}>
        <GroupComponent19 />
        <Text style={[styles.personalDetails, styles.presentAddressPosition]}>
          Personal Details
        </Text>
        <View style={[styles.rectangleParent, styles.loanApplyChildPosition]}>
          <View style={styles.groupChild} />
          <Text style={styles.search}>Search</Text>
        </View>
        <GroupComponent22 maskGroup={require("../assets/mask-group1.png")} />
        <GroupComponent11 />
        <View
          style={[styles.applicantNameBanglaParent, styles.nameParentPosition]}
        >
          <Text style={[styles.applicantNameBangla, styles.nameTypo]}>
            Applicant Name (Bangla)
          </Text>
          <View style={[styles.groupItem, styles.groupShadowBox]} />
          <Text style={[styles.enterYourFull, styles.enterPosition1]}>
            Enter Your Full name in Bangla
          </Text>
        </View>
        <GroupComponent9 />
        <View
          style={[styles.applicantsFatherNameParent, styles.nameParentPosition]}
        >
          <Text style={[styles.applicantsFatherName, styles.nameTypo]}>
            Applicant’s Father Name
          </Text>
          <View style={[styles.groupInner, styles.groupShadowBox]} />
          <Text style={[styles.enterYourFather, styles.enterPosition1]}>
            Enter Your Father Name
          </Text>
        </View>
        <View
          style={[styles.applicantsMotherNameParent, styles.nameParentPosition]}
        >
          <Text style={[styles.applicantsMotherName, styles.nameTypo]}>
            Applicant’s Mother Name
          </Text>
          <View style={[styles.rectangleView, styles.groupShadowBox]} />
          <Text style={[styles.enterYourMother, styles.enterPosition1]}>
            Enter Your Mother Name
          </Text>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={[styles.villageTownParent, styles.parentPosition]}>
          <Text style={[styles.villageTown, styles.districTypo]}>
            Village / Town
          </Text>
          <View style={styles.groupChildPosition} />
          <Text style={[styles.enterYourVillage, styles.enterPosition]}>
            Enter Your Village / Town Name
          </Text>
        </View>
        <GroupComponent14 />
        <View style={[styles.policeStationParent, styles.parentPosition]}>
          <Text style={[styles.policeStation, styles.districTypo]}>
            Police Station
          </Text>
          <View style={styles.groupChildPosition} />
          <Text style={[styles.enterYourPolice, styles.enterPosition]}>
            Enter Your Police Station Name
          </Text>
        </View>
        <View style={[styles.postCodeIfAnyParent, styles.parentPosition]}>
          <Text style={[styles.postCodeIf, styles.districTypo]}>
            Post Code (If any)
          </Text>
          <View style={styles.groupChildPosition} />
          <Text style={[styles.enterYourPost, styles.enterPosition]}>
            Enter Your Post Code
          </Text>
        </View>
        <View style={[styles.districParent, styles.parentPosition]}>
          <Text style={[styles.distric, styles.districTypo]}>Distric</Text>
          <View style={styles.groupChildPosition} />
          <Text style={[styles.enterYourDistric, styles.enterTypo]}>
            Enter Your Distric Name
          </Text>
        </View>
        <View style={[styles.contactNumberParent, styles.parentPosition]}>
          <Text style={[styles.contactNumber, styles.districTypo]}>
            Contact Number
          </Text>
          <View style={styles.groupChildPosition} />
          <Text style={[styles.enterYourDistric1, styles.enterTypo]}>
            Enter Your Distric Name
          </Text>
        </View>
        <Text style={[styles.presentAddress, styles.presentAddressPosition]}>
          Present Address
        </Text>
      </View>
      <View style={[styles.statusBarParent, styles.timeLightPosition]}>
        <StatusBar1
          statusBarPosition="absolute"
          statusBarWidth={390}
          statusBarHeight={95}
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
        <Image
          style={[styles.batteryLight, styles.lightPosition]}
          contentFit="cover"
          source={require("../assets/battery--light1.png")}
        />
        <Image
          style={[styles.networkSignalLight, styles.lightPosition]}
          contentFit="cover"
          source={require("../assets/network-signal-light1.png")}
        />
        <Image
          style={[styles.wifiSignalLight, styles.lightPosition]}
          contentFit="cover"
          source={require("../assets/wifi-signal--light2.png")}
        />
        <Image
          style={[styles.timeLight, styles.timeLightPosition]}
          contentFit="cover"
          source={require("../assets/time--light1.png")}
        />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Loan")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-1272628270.png")}
        />
      </Pressable>
      <Text style={[styles.applyForPolicy, styles.nextTypo]}>
        Apply for Policy
      </Text>
      <Pressable
        style={[styles.loanApplyInner, styles.frameChildLayout]}
        onPress={() => navigation.navigate("ApplyForPolicy")}
      >
        <View style={[styles.frameChild, styles.frameChildLayout]} />
      </Pressable>
      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loanLayout: {
    width: "100%",
    backgroundColor: Color.white,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
  },
  loanApplyChildPosition: {
    right: "0%",
    position: "absolute",
  },
  presentAddressPosition: {
    textAlign: "left",
    color: Color.lightGray11,
    top: "0%",
    position: "absolute",
  },
  nameParentPosition: {
    right: "0.31%",
    width: "99.69%",
    height: "10.61%",
    left: "0%",
    position: "absolute",
  },
  nameTypo: {
    fontFamily: FontFamily.interRegular,
    height: "28.05%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.lightGray11,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  enterPosition1: {
    opacity: 0.6,
    left: "3.04%",
    top: "56.3%",
    fontFamily: FontFamily.interRegular,
    height: "28.05%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  parentPosition: {
    height: "12.4%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  districTypo: {
    height: "28.06%",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.lightGray11,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  enterPosition: {
    left: "3.03%",
    top: "56.28%",
    height: "28.06%",
    opacity: 0.6,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  enterTypo: {
    width: "51.21%",
    left: "3.03%",
    height: "28.06%",
    opacity: 0.6,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.lightGray11,
    position: "absolute",
  },
  timeLightPosition: {
    left: 0,
    position: "absolute",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  nextTypo: {
    fontWeight: "700",
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  frameChildLayout: {
    width: 327,
    borderRadius: Border.br_base,
  },
  vectorIcon: {
    width: "105.55%",
    right: "-1.09%",
    left: "-4.45%",
    bottom: "0%",
    top: "0%",
    maxWidth: "100%",
    height: "100%",
    position: "absolute",
  },
  loanApplyChild: {
    height: "91.75%",
    top: "8.99%",
    bottom: "-0.74%",
    left: "0%",
    width: "100%",
    backgroundColor: Color.white,
  },
  personalDetails: {
    height: "3.64%",
    width: "43.79%",
    left: "0.11%",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.lightGray11,
    fontSize: FontSize.font_size,
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  search: {
    height: "39.84%",
    width: "60.17%",
    top: "28.73%",
    left: "20.45%",
    color: Color.white,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  rectangleParent: {
    height: "7.47%",
    width: "26.59%",
    top: "10.93%",
    bottom: "81.6%",
    left: "73.41%",
  },
  applicantNameBangla: {
    width: "53.34%",
  },
  groupItem: {
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    top: "37.4%",
    height: "62.6%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  enterYourFull: {
    width: "65.14%",
  },
  applicantNameBanglaParent: {
    top: "48.58%",
    bottom: "40.81%",
  },
  applicantsFatherName: {
    width: "52.43%",
  },
  groupInner: {
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    top: "37.4%",
    height: "62.6%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  enterYourFather: {
    width: "51.51%",
  },
  applicantsFatherNameParent: {
    top: "75.79%",
    bottom: "13.6%",
  },
  applicantsMotherName: {
    width: "53.95%",
  },
  rectangleView: {
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    top: "37.4%",
    height: "62.6%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  enterYourMother: {
    width: "53.03%",
  },
  applicantsMotherNameParent: {
    top: "89.39%",
    bottom: "0%",
  },
  groupParent: {
    height: "60.84%",
    width: "93.17%",
    top: "14.16%",
    right: "3.89%",
    bottom: "25%",
    left: "2.93%",
    position: "absolute",
  },
  villageTown: {
    width: "30%",
  },
  groupChildPosition: {
    top: "37.52%",
    height: "62.48%",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.45)",
    borderRadius: Border.br_8xs,
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  enterYourVillage: {
    width: "67.58%",
  },
  villageTownParent: {
    top: "8.13%",
    bottom: "79.46%",
  },
  policeStation: {
    width: "29.7%",
  },
  enterYourPolice: {
    width: "66.97%",
  },
  policeStationParent: {
    top: "39.92%",
    bottom: "47.67%",
  },
  postCodeIf: {
    width: "38.79%",
  },
  enterYourPost: {
    width: "46.06%",
  },
  postCodeIfAnyParent: {
    top: "55.81%",
    bottom: "31.79%",
  },
  distric: {
    width: "13.94%",
  },
  enterYourDistric: {
    top: "56.12%",
  },
  districParent: {
    top: "71.71%",
    bottom: "15.88%",
  },
  contactNumber: {
    width: "35.76%",
  },
  enterYourDistric1: {
    top: "56.28%",
    width: "51.21%",
  },
  contactNumberParent: {
    top: "87.6%",
    bottom: "0%",
  },
  presentAddress: {
    height: "4.65%",
    width: "48.79%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    left: "0%",
  },
  groupContainer: {
    height: "64.04%",
    width: "96.8%",
    top: "77.46%",
    right: "1.6%",
    bottom: "-41.5%",
    left: "1.6%",
    position: "absolute",
  },
  batteryLight: {
    left: 334,
    width: 25,
  },
  networkSignalLight: {
    left: 292,
    width: 20,
  },
  wifiSignalLight: {
    left: 315,
    width: 16,
  },
  timeLight: {
    top: 4,
    width: 54,
    height: 19,
    overflow: "hidden",
    left: 0,
    borderRadius: Border.br_xl,
  },
  statusBarParent: {
    top: 0,
    width: 390,
    height: 95,
  },
  icon: {
    maxWidth: "100%",
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "5.07%",
    top: "4.06%",
    right: "84.27%",
    bottom: "91.01%",
    width: "10.67%",
    height: "4.93%",
    position: "absolute",
  },
  applyForPolicy: {
    height: "4.43%",
    width: "52.91%",
    top: "4.56%",
    left: "23.73%",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsBold,
  },
  frameChild: {
    shadowColor: "rgba(0, 0, 0, 0.41)",
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: Color.colorGoldenrod_100,
    height: 54,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    borderRadius: Border.br_base,
  },
  loanApplyInner: {
    top: 740,
    left: 18,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  next: {
    height: "2.22%",
    width: "13.87%",
    top: "93.35%",
    left: "41.6%",
    fontFamily: FontFamily.montserratBold,
    fontSize: FontSize.font_size,
    fontWeight: "700",
  },
  loanApply: {
    flex: 1,
    height: 812,
    borderRadius: Border.br_xl,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default LoanApply;
