import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigation } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const Account = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account}>
      <FrameComponent2
        propFontFamily="NotoSansTC-Bold"
        propFontFamily1="NotoSansTC-Bold"
      />
      <View style={[styles.newRoomWrapper, styles.newRoomWrapperFlexBox]}>
        <Text style={styles.newRoom}>New Room</Text>
      </View>
      <View style={[styles.friendListParent, styles.newRoomWrapperFlexBox]}>
        <Text style={[styles.friendList, styles.listTypo]}>Friend list</Text>
        <Pressable onPress={() => navigation.navigate("EmptyRoomlist")}>
          <Text style={[styles.roomList1, styles.listTypo]}>Room list</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.info}
        onPress={() => navigation.navigate("Message")}
      >
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user.png")}
        />
        <View>
          <Text style={styles.reason}>Alex</Text>
          <Text style={styles.time}>+91-2384659236</Text>
        </View>
      </Pressable>
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <View
          style={[
            styles.interfaceEssentialsearchLParent,
            styles.wrapperPosition,
          ]}
        >
          <Image
            style={[
              styles.interfaceEssentialsearchL,
              styles.searchButtonPosition,
            ]}
            contentFit="cover"
            source={require("../assets/interface-essentialsearch-loupe.png")}
          />
          <Text style={[styles.searchLanguage, styles.searchLanguageLayout]}>
            Search....
          </Text>
        </View>
        <View style={[styles.searchButton, styles.searchButtonPosition]} />
      </View>
      <View style={[styles.statusBarwhite, styles.searchButtonPosition]}>
        <Image
          style={[styles.connectionsIcon, styles.searchLanguageLayout]}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <Text style={styles.time1}>9:41</Text>
      </View>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628270.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  newRoomWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  listTypo: {
    alignSelf: "stretch",
    textAlign: "center",
    fontFamily: FontFamily.font,
    fontWeight: "700",
    fontSize: FontSize.font_size,
    flex: 1,
  },
  frameParentLayout: {
    height: 42,
    width: 351,
  },
  wrapperPosition: {
    left: 17,
    position: "absolute",
  },
  searchButtonPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  searchLanguageLayout: {
    height: 16,
    position: "absolute",
  },
  newRoom: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.font,
    fontWeight: "700",
    fontSize: FontSize.font_size,
  },
  newRoomWrapper: {
    marginLeft: -178.5,
    top: 174,
    left: "50%",
    borderRadius: Border.br_mini,
    width: 358,
    height: 58,
    padding: Padding.p_3xs,
    backgroundColor: Color.colorGoldenrod_100,
  },
  friendList: {
    color: Color.textBigTitle,
    textAlign: "center",
  },
  roomList1: {
    color: Color.textDescription,
    textAlign: "center",
  },
  friendListParent: {
    top: 239,
    right: 16,
    left: 16,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: Color.textBigTitle,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    gap: Gap.gap_xs,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  userIcon: {
    width: 43,
    height: 45,
  },
  reason: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_800,
    textAlign: "center",
    fontSize: FontSize.font_size,
  },
  time: {
    fontSize: FontSize.mobileBody3Regular_size,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.darkWhiteGrey60,
    textAlign: "center",
  },
  info: {
    top: 343,
    left: 22,
    height: 68,
    gap: Gap.gap_md,
    width: 351,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  interfaceEssentialsearchL: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  searchLanguage: {
    top: 2,
    left: 45,
    fontSize: FontSize.m3LabelLarge_size,
    lineHeight: 14,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    width: 124,
    textAlign: "left",
  },
  interfaceEssentialsearchLParent: {
    top: 11,
    width: 152,
    height: 20,
  },
  searchButton: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_800,
    height: 42,
    width: 351,
  },
  frameParent: {
    top: 293,
    left: 12,
    position: "absolute",
    height: 42,
  },
  connectionsIcon: {
    top: 9,
    right: 23,
    width: 68,
  },
  time1: {
    marginTop: -10,
    top: "50%",
    left: 24,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  statusBarwhite: {
    width: 375,
    height: 36,
    backgroundColor: Color.colorGoldenrod_100,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 48,
    width: 40,
    height: 40,
  },
  account: {
    borderRadius: Border.br_5xl,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Account;
