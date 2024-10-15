import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  Color,
  FontFamily,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

const RoomCreated = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.roomcreated}>
      <Text style={[styles.hoorayNewRoom, styles.timeTypo]}>{`Hooray!
New Room Created`}</Text>
      <Text style={[styles.comeExploreYour, styles.timeTypo]}>
        Come explore your new room
      </Text>
      <Image
        style={[styles.confettiIcon, styles.confettiIconPosition]}
        contentFit="cover"
        source={require("../assets/confetti.png")}
      />
      <Image
        style={[styles.roomcreatedChild, styles.roomcreatedChildPosition]}
        contentFit="cover"
        source={require("../assets/frame-110.png")}
      />
      <Image
        style={[
          styles.teenyiconstickCircleSolid,
          styles.roomcreatedChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/teenyiconstickcirclesolid.png")}
      />
      <Button
        style={[styles.roomcreatedItem, styles.statusBarwhiteFlexBox]}
        mode="contained"
        labelStyle={styles.frameButtonBtn}
        onPress={() => navigation.navigate("EmptyRoomlist")}
        contentStyle={styles.frameButtonBtn1}
      >
        Go to room
      </Button>
      <View style={[styles.statusBarwhite, styles.statusBarwhiteFlexBox]}>
        <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
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
  frameButtonBtn: {
    color: "#454545",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "NotoSansTC-Bold",
  },
  frameButtonBtn1: {
    paddingHorizontal: 115,
    paddingVertical: 13,
    borderRadius: 30,
    width: 272,
  },
  timeTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  confettiIconPosition: {
    left: 0,
    top: 0,
  },
  roomcreatedChildPosition: {
    left: "50%",
    position: "absolute",
  },
  statusBarwhiteFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  hoorayNewRoom: {
    marginLeft: -112.5,
    top: 436,
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.font,
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  comeExploreYour: {
    marginLeft: -121.5,
    top: 510,
    fontSize: FontSize.m3LabelLarge_size,
    color: "#b98141",
    width: 244,
    fontFamily: FontFamily.font,
    textAlign: "center",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  confettiIcon: {
    width: 390,
    height: 844,
    overflow: "hidden",
    position: "absolute",
    left: 0,
    top: 0,
  },
  roomcreatedChild: {
    marginLeft: -108.5,
    top: 263,
    width: 218,
    height: 129,
  },
  teenyiconstickCircleSolid: {
    marginLeft: -21.5,
    top: 381,
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  roomcreatedItem: {
    top: 562,
    left: 59,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_300,
    borderWidth: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    textAlign: "center",
    fontWeight: "700",
  },
  connectionsIcon: {
    width: 68,
    height: 16,
  },
  statusBarwhite: {
    backgroundColor: Color.colorGoldenrod_100,
    width: 375,
    height: 36,
    alignItems: "center",
    paddingLeft: Padding.p_5xl,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_4xl,
    paddingBottom: Padding.p_5xs,
    gap: Gap.gap_20xl,
    left: 0,
    top: 0,
  },
  roomcreated: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 812,
  },
});

export default RoomCreated;
