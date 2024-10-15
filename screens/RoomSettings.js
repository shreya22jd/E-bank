import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FormComponent from "../components/FormComponent";
import Theme from "../components/Theme";
import { useNavigation } from "@react-navigation/native";
import DropdownMenu from "../components/DropdownMenu";
import {
  Color,
  Padding,
  FontFamily,
  FontSize,
  Gap,
  Border,
} from "../GlobalStyles";

const RoomSettings = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.roomsettings, styles.titleFlexBox]}>
      <View style={[styles.content, styles.navbarPosition]}>
        <Image
          style={styles.contentChild}
          contentFit="cover"
          source={require("../assets/rectangle-591.png")}
        />
        <View style={[styles.formComponentWrapper, styles.formSpaceBlock]}>
          <FormComponent undefined="Birthday contribution" />
        </View>
        <View style={[styles.formComponentContainer, styles.formSpaceBlock]}>
          <FormComponent undefined="2000 INR" />
        </View>
        <View style={[styles.formComponentContainer, styles.formSpaceBlock]}>
          <Theme />
        </View>
        <Pressable
          style={[styles.roomMembersParent, styles.parentFlexBox]}
          onPress={() => navigation.navigate("EditMembers")}
        >
          <Text
            style={[styles.roomMembers, styles.roomTypo]}
          >{`Room members            `}</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/vector-32.png")}
          />
        </Pressable>
        <View style={styles.contentItem} />
        <Pressable
          style={[styles.targetParent, styles.formSpaceBlock]}
          onPress={() => navigation.navigate("TargetDay")}
        >
          <Text style={[styles.target, styles.roomTypo]}>Target</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/vector-32.png")}
          />
        </Pressable>
        <View style={styles.contentItem} />
        <View style={[styles.reminderParent, styles.parentFlexBox]}>
          <Text style={[styles.reminder, styles.roomTypo]}>Reminder</Text>
          <DropdownMenu
            selectMenu="Select "
            vector={require("../assets/vector25.png")}
          />
        </View>
      </View>
      <Image
        style={styles.materialSymbolseditIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolsedit1.png")}
      />
      <View style={styles.statusBarwhite}>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={[styles.navbar, styles.navbarPosition]}>
        <View style={[styles.title, styles.formSpaceBlock]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("EmptyFriendlist")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    flex: 1,
    backgroundColor: Color.white,
  },
  navbarPosition: {
    alignItems: "center",
    right: 0,
    left: 0,
    position: "absolute",
  },
  formSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  parentFlexBox: {
    paddingRight: Padding.p_base,
    flexDirection: "row",
    alignItems: "center",
  },
  roomTypo: {
    color: Color.textBigTitle,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
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
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  formComponentContainer: {
    alignSelf: "stretch",
  },
  roomMembers: {
    width: 245,
    textAlign: "center",
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  frameChild: {
    width: 6,
    height: 12,
  },
  roomMembersParent: {
    width: 473,
    paddingLeft: Padding.p_36xl,
    gap: Gap.gap_2xs,
  },
  contentItem: {
    borderStyle: "solid",
    borderColor: Color.textBigTitle,
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  target: {
    width: 223,
    textAlign: "center",
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  targetParent: {
    width: 461,
    gap: 72,
  },
  reminder: {
    width: 295,
    textAlign: "center",
    fontSize: FontSize.font_size,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  reminderParent: {
    width: 489,
    height: 39,
    paddingLeft: Padding.p_4xs,
    gap: Gap.gap_5xs,
  },
  content: {
    top: 111,
    height: 699,
    gap: Gap.gap_4xs,
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
    fontWeight: "700",
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    textAlign: "center",
    position: "absolute",
  },
  statusBarwhite: {
    top: 0,
    backgroundColor: Color.colorGoldenrod_100,
    width: 375,
    height: 36,
    left: 0,
    position: "absolute",
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
    textAlign: "center",
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
  navbar: {
    top: 47,
    height: 64,
    justifyContent: "center",
  },
  roomsettings: {
    borderRadius: Border.br_5xl,
    height: 812,
    width: "100%",
  },
});

export default RoomSettings;
