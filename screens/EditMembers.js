import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Gap, Color, Border } from "../GlobalStyles";

const EditMembers = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editMembers}>
      <View style={styles.searchButton} />
      <View
        style={[styles.interfaceEssentialsearchLParent, styles.wrapperPosition]}
      >
        <Image
          style={[styles.interfaceEssentialsearchL, styles.notchIconPosition]}
          contentFit="cover"
          source={require("../assets/interface-essentialsearch-loupe.png")}
        />
        <Text style={[styles.searchLanguage, styles.contactsTypo]}>
          Search....
        </Text>
      </View>
      <Text style={[styles.contacts, styles.contactsTypo]}>Contacts</Text>
      <Pressable
        style={[styles.info, styles.infoLayout]}
        onPress={() => navigation.navigate("RoomSettings1")}
      >
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user.png")}
        />
        <View>
          <Text style={[styles.reason, styles.reasonTypo]}>Alex</Text>
          <Text style={styles.timeTypo}>+91-2384659236</Text>
        </View>
      </Pressable>
      <View style={[styles.info1, styles.infoPosition]}>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user.png")}
        />
        <View>
          <Text style={[styles.reason, styles.reasonTypo]}>Sangu</Text>
          <Text style={[styles.time1, styles.timeTypo]}>+91-897869704</Text>
        </View>
      </View>
      <View style={[styles.info2, styles.infoLayout]}>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user.png")}
        />
        <View>
          <Text style={[styles.reason, styles.reasonTypo]}>Srushti</Text>
          <Text style={styles.timeTypo}>+91-8756947563</Text>
        </View>
      </View>
      <View style={[styles.info3, styles.infoLayout]}>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user.png")}
        />
        <View>
          <Text style={[styles.reason, styles.reasonTypo]}>Shubh</Text>
          <Text style={styles.timeTypo}>+91-9876590456</Text>
        </View>
      </View>
      <View style={[styles.info4, styles.infoPosition]}>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user.png")}
        />
        <View>
          <Text style={[styles.reason, styles.reasonTypo]}>Sona</Text>
          <Text style={styles.timeTypo}>+91-9875649807</Text>
        </View>
      </View>
      <View style={[styles.info5, styles.infoLayout]}>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user.png")}
        />
        <View>
          <Text style={[styles.reason, styles.reasonTypo]}>Kana</Text>
          <Text style={styles.timeTypo}>+91-8079678945</Text>
        </View>
      </View>
      <View style={[styles.info6, styles.infoPosition]}>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user.png")}
        />
        <View>
          <Text style={[styles.reason, styles.reasonTypo]}>Dev</Text>
          <Text style={styles.timeTypo}>+91-9080798967</Text>
        </View>
      </View>
      <View style={[styles.info7, styles.infoLayout]}>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user.png")}
        />
        <View>
          <Text style={[styles.reason, styles.reasonTypo]}>Harry</Text>
          <Text style={styles.timeTypo}>+91-8747563809</Text>
        </View>
      </View>
      <View style={styles.statusPosition}>
        <View style={[styles.statusBar, styles.statusPosition]}>
          <Image
            style={[styles.notchIcon, styles.notchIconPosition]}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.statusIcons}>
            <Image
              style={styles.networkSignalLight}
              contentFit="cover"
              source={require("../assets/network-signal-light.png")}
            />
            <Image
              style={styles.wifiSignalLight}
              contentFit="cover"
              source={require("../assets/wifi-signal--light.png")}
            />
            <Image
              style={styles.batteryLight}
              contentFit="cover"
              source={require("../assets/battery--light.png")}
            />
          </View>
          <Image
            style={styles.indicatorIcon}
            contentFit="cover"
            source={require("../assets/indicator.png")}
          />
          <Image
            style={[styles.timeLight, styles.timeLayout]}
            contentFit="cover"
            source={require("../assets/time--light.png")}
          />
        </View>
        <Image
          style={[styles.batteryLight1, styles.lightPosition]}
          contentFit="cover"
          source={require("../assets/battery--light1.png")}
        />
        <Image
          style={[styles.networkSignalLight1, styles.lightPosition]}
          contentFit="cover"
          source={require("../assets/network-signal-light1.png")}
        />
        <Image
          style={[styles.wifiSignalLight1, styles.lightPosition]}
          contentFit="cover"
          source={require("../assets/wifi-signal--light1.png")}
        />
        <Image
          style={[styles.timeLight1, styles.timeLayout]}
          contentFit="cover"
          source={require("../assets/time--light1.png")}
        />
      </View>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("RoomSettings")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <Text style={[styles.editMembers1, styles.reasonTypo]}>Edit Members</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    left: 22,
    position: "absolute",
  },
  notchIconPosition: {
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  contactsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.mobileBody3Regular,
    lineHeight: 14,
    fontSize: FontSize.m3LabelLarge_size,
    position: "absolute",
  },
  infoLayout: {
    gap: Gap.gap_md,
    height: 68,
    alignItems: "center",
    flexDirection: "row",
    width: 351,
    position: "absolute",
  },
  reasonTypo: {
    textAlign: "center",
    fontWeight: "600",
  },
  infoPosition: {
    left: 8,
    gap: Gap.gap_md,
    alignItems: "center",
    flexDirection: "row",
    height: 68,
    width: 351,
    position: "absolute",
  },
  timeTypo: {
    color: Color.darkWhiteGrey60,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.mobileBody3Regular_size,
    textAlign: "center",
  },
  statusPosition: {
    height: 95,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  searchButton: {
    top: 119,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_800,
    height: 42,
    width: 351,
    left: 11,
    position: "absolute",
  },
  interfaceEssentialsearchL: {
    width: 20,
    left: 0,
    height: 20,
  },
  searchLanguage: {
    top: 2,
    left: 28,
    color: Color.colorDarkgray_100,
    width: 124,
    height: 16,
  },
  interfaceEssentialsearchLParent: {
    top: 130,
    width: 152,
    height: 20,
  },
  contacts: {
    top: 205,
    left: 16,
    color: Color.lightGray11,
  },
  userIcon: {
    width: 43,
    height: 45,
  },
  reason: {
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_800,
  },
  info: {
    top: 232,
    left: 11,
    gap: Gap.gap_md,
    height: 68,
  },
  time1: {
    display: "flex",
    justifyContent: "center",
    width: 100,
    alignItems: "center",
  },
  info1: {
    top: 772,
  },
  info2: {
    top: 691,
    left: 11,
    gap: Gap.gap_md,
    height: 68,
  },
  info3: {
    top: 610,
    left: 13,
  },
  info4: {
    top: 529,
  },
  info5: {
    top: 448,
    left: 11,
    gap: Gap.gap_md,
    height: 68,
  },
  info6: {
    top: 376,
  },
  info7: {
    top: 304,
    left: 11,
    gap: Gap.gap_md,
    height: 68,
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    height: 30,
    left: 0,
  },
  networkSignalLight: {
    display: "none",
    height: 14,
    width: 20,
  },
  wifiSignalLight: {
    width: 16,
    display: "none",
    height: 14,
  },
  batteryLight: {
    width: 25,
    display: "none",
    height: 14,
  },
  statusIcons: {
    top: 16,
    right: 14,
    width: 69,
    gap: Gap.gap_18xs,
    height: 14,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    left: 21,
    height: 21,
    display: "none",
  },
  statusBar: {
    backgroundColor: Color.colorGoldenrod_100,
    overflow: "hidden",
  },
  batteryLight1: {
    left: 334,
    width: 25,
  },
  networkSignalLight1: {
    left: 292,
    width: 20,
  },
  wifiSignalLight1: {
    left: 315,
    width: 16,
  },
  timeLight1: {
    top: 4,
    height: 19,
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 30,
    width: 40,
    height: 40,
  },
  editMembers1: {
    top: 33,
    left: 103,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.white,
    position: "absolute",
  },
  editMembers: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default EditMembers;
