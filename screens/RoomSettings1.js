import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FormComponent from "../components/FormComponent";
import DropdownMenu from "../components/DropdownMenu";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  Padding,
  FontFamily,
  FontSize,
  Border,
  Gap,
} from "../GlobalStyles";

const RoomSettings1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.roomsettings, styles.titleFlexBox]}>
      <View style={styles.content}>
        <Image
          style={styles.contentChild}
          contentFit="cover"
          source={require("../assets/rectangle-59.png")}
        />
        <View style={[styles.formComponentWrapper, styles.titleSpaceBlock]}>
          <FormComponent undefined="Birthday contribution" />
        </View>
        <View style={[styles.formComponentWrapper, styles.titleSpaceBlock]}>
          <FormComponent undefined="2000 INR" />
        </View>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user1.png")}
        />
        <Text style={styles.reason}>Alex</Text>
        <View style={[styles.roomMembersParent, styles.reminderWrapperFlexBox]}>
          <Text
            style={[styles.roomMembers, styles.roomTypo]}
          >{`Room members            `}</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/vector-3.png")}
          />
        </View>
        <View style={styles.contentItem} />
        <View style={styles.frameParent}>
          <View style={[styles.reminderWrapper, styles.reminderWrapperFlexBox]}>
            <Text style={[styles.reminder, styles.roomTypo]}>Reminder</Text>
          </View>
          <DropdownMenu
            selectMenu="Select "
            propPosition="absolute"
            propTop={0}
            propLeft={278}
            vector={require("../assets/vector17.png")}
          />
        </View>
        <View style={styles.contentItem} />
        <Pressable
          style={[styles.targetDateParent, styles.titleSpaceBlock]}
          onPress={() => navigation.navigate("TargetDay")}
        >
          <Text
            style={[styles.targetDate, styles.roomTypo]}
          >{`        Target date                          `}</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/vector-3.png")}
          />
        </Pressable>
        <View style={styles.contentItem} />
        <Pressable
          style={styles.framePressable}
          onPress={() => navigation.navigate("RoomCreated")}
        >
          <View style={[styles.rectangleParent, styles.groupChildPosition]}>
            <View style={[styles.groupChild, styles.groupChildBg]} />
            <Text style={[styles.start, styles.timeTypo]}>Start</Text>
          </View>
        </Pressable>
      </View>
      <Image
        style={styles.materialSymbolseditIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolsedit1.png")}
      />
      <View style={[styles.statusBarwhite, styles.groupChildBg]}>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
      </View>
      <View style={[styles.navbar, styles.navbarFlexBox]}>
        <View style={[styles.navbar1, styles.navbarFlexBox]}>
          <View style={[styles.title, styles.titleSpaceBlock]}>
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
            <Text style={[styles.roomSettings, styles.roomTypo]}>
              Room Settings
            </Text>
          </View>
          <View style={styles.navbarChild} />
        </View>
        <View style={styles.navbarChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    flex: 1,
    backgroundColor: Color.white,
  },
  titleSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  reminderWrapperFlexBox: {
    paddingRight: Padding.p_base,
    width: 390,
    flexDirection: "row",
    alignItems: "center",
  },
  roomTypo: {
    color: Color.textBigTitle,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
  },
  groupChildPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupChildBg: {
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  timeTypo: {
    fontWeight: "700",
    position: "absolute",
  },
  navbarFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentChild: {
    maxWidth: "100%",
    height: 161,
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
  },
  formComponentWrapper: {
    alignSelf: "stretch",
  },
  userIcon: {
    width: 43,
    height: 45,
  },
  reason: {
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_800,
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.font_size,
  },
  roomMembers: {
    width: 201,
    fontSize: FontSize.font_size,
  },
  frameChild: {
    width: 6,
    height: 12,
  },
  roomMembersParent: {
    paddingLeft: Padding.p_36xl,
    gap: 33,
  },
  contentItem: {
    borderStyle: "solid",
    borderColor: Color.textBigTitle,
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  reminder: {
    width: 228,
    fontSize: FontSize.font_size,
  },
  reminderWrapper: {
    top: 2,
    paddingLeft: Padding.p_4xs,
    left: 0,
    position: "absolute",
  },
  frameParent: {
    height: 30,
    width: 390,
  },
  targetDate: {
    width: 202,
    fontSize: FontSize.font_size,
  },
  targetDateParent: {
    gap: 69,
    width: 390,
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.41)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    borderRadius: Border.br_base,
  },
  start: {
    height: "33.33%",
    width: "44.97%",
    top: "33.33%",
    left: "37.04%",
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.font_size,
  },
  rectangleParent: {
    position: "absolute",
  },
  framePressable: {
    width: 189,
    height: 54,
    borderRadius: Border.br_base,
  },
  content: {
    top: 118,
    height: 699,
    gap: Gap.gap_4xs,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  materialSymbolseditIcon: {
    top: 262,
    left: 351,
    borderRadius: Border.br_xl,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  connectionsIcon: {
    top: 9,
    right: 23,
    width: 68,
    height: 16,
    position: "absolute",
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
  },
  statusBarwhite: {
    top: 0,
    height: 36,
    width: 375,
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 40,
    height: 40,
  },
  roomSettings: {
    fontSize: FontSize.size_5xl,
    width: 313,
  },
  title: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.white,
  },
  navbarChild: {
    height: 0,
    alignSelf: "stretch",
  },
  navbar1: {
    height: 64,
    width: 375,
  },
  navbar: {
    top: 47,
    left: 0,
    right: 0,
    justifyContent: "center",
    position: "absolute",
  },
  roomsettings: {
    borderRadius: Border.br_5xl,
    height: 812,
    width: "100%",
  },
});

export default RoomSettings1;
