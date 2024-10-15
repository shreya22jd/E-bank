import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  Color,
  FontFamily,
  FontSize,
  Border,
  Gap,
} from "../GlobalStyles";

const EmptyRoomlist = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.emptyRoomlist}>
      <View style={styles.emptyRoomlistChild} />
      <FrameComponent2
        propFontFamily="NotoSansTC-Bold"
        propFontFamily1="NotoSansTC-Bold"
      />
      <View style={[styles.newRoomWrapper, styles.buttonFlexBox]}>
        <Text style={[styles.newRoom, styles.textTypo]}>New Room</Text>
      </View>
      <View style={[styles.friendListParent, styles.friendListParentFlexBox]}>
        <Pressable onPress={() => navigation.navigate("Account")}>
          <Text style={[styles.friendList1, styles.listTypo]}>Friend list</Text>
        </Pressable>
        <Text style={[styles.roomList, styles.listTypo]}>Room list</Text>
      </View>
      <View style={[styles.statusBarwhite, styles.statusBarwhitePosition]}>
        <Image
          style={[styles.connectionsIcon, styles.searchLanguageLayout]}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={styles.searchButton} />
      <View
        style={[styles.interfaceEssentialsearchLParent, styles.interfaceLayout]}
      >
        <Image
          style={[styles.interfaceEssentialsearchL, styles.interfaceLayout]}
          contentFit="cover"
          source={require("../assets/interface-essentialsearch-loupe.png")}
        />
        <Text style={[styles.searchLanguage, styles.searchLanguageLayout]}>
          Search....
        </Text>
      </View>
      <View
        style={[styles.formComponentWrapper, styles.friendListParentFlexBox]}
      >
        <View style={[styles.formComponent, styles.formComponentBorder]}>
          <Text style={[styles.text, styles.textTypo]}>
            Birthday contribution
          </Text>
          <Pressable
            style={[styles.button, styles.buttonFlexBox]}
            onPress={() => navigation.navigate("PaymentMethod1")}
          >
            <Text style={styles.button1}>PAY</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={styles.wrapper}
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
  buttonFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.colorGoldenrod_100,
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.font,
    fontSize: FontSize.font_size,
    textAlign: "left",
    fontWeight: "700",
  },
  friendListParentFlexBox: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
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
  statusBarwhitePosition: {
    left: 0,
    top: 0,
  },
  searchLanguageLayout: {
    height: 16,
    position: "absolute",
  },
  interfaceLayout: {
    height: 20,
    position: "absolute",
  },
  formComponentBorder: {
    borderWidth: 1,
    borderColor: Color.textBigTitle,
    borderStyle: "solid",
  },
  emptyRoomlistChild: {
    top: 339,
    height: 436,
    alignItems: "center",
    left: 16,
    right: 16,
    position: "absolute",
  },
  newRoom: {
    textAlign: "left",
    color: Color.white,
  },
  newRoomWrapper: {
    marginLeft: -178.5,
    top: 174,
    left: "50%",
    borderRadius: Border.br_mini,
    height: 58,
    width: 358,
    position: "absolute",
  },
  friendList1: {
    color: Color.textDescription,
    textAlign: "center",
  },
  roomList: {
    color: Color.textBigTitle,
    textAlign: "center",
  },
  friendListParent: {
    top: 244,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    paddingVertical: Padding.p_3xs,
    gap: Gap.gap_xs,
    borderWidth: 1,
    borderColor: Color.textBigTitle,
    borderStyle: "solid",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    left: 16,
    right: 16,
    backgroundColor: Color.white,
  },
  connectionsIcon: {
    top: 9,
    right: 23,
    width: 68,
  },
  time: {
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  searchButton: {
    top: 297,
    left: 12,
    backgroundColor: Color.colorWhitesmoke_800,
    width: 351,
    height: 42,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  interfaceEssentialsearchL: {
    width: 20,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  searchLanguage: {
    top: 2,
    left: 57,
    lineHeight: 14,
    fontFamily: FontFamily.mobileBody3Regular,
    color: Color.colorDarkgray_100,
    width: 124,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
  },
  interfaceEssentialsearchLParent: {
    top: 308,
    left: 29,
    width: 152,
  },
  text: {
    color: Color.colorDarkslategray_200,
    textAlign: "left",
  },
  button1: {
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.m3TitleMedium,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
    color: Color.white,
  },
  button: {
    borderRadius: Border.br_5xs,
    width: 55,
    height: 32,
  },
  formComponent: {
    backgroundColor: Color.colorFloralwhite,
    height: 56,
    paddingLeft: Padding.p_lg,
    paddingTop: Padding.p_mini,
    paddingRight: Padding.p_4xl,
    paddingBottom: Padding.p_mini,
    gap: 25,
    borderRadius: Border.br_3xs,
    borderColor: Color.textBigTitle,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  formComponentWrapper: {
    top: 351,
    left: 9,
    paddingVertical: 0,
    width: 358,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 20,
    top: 48,
    width: 40,
    height: 40,
    position: "absolute",
  },
  emptyRoomlist: {
    borderRadius: Border.br_5xl,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default EmptyRoomlist;
