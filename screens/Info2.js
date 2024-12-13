import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const Info2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.info14}>
      <View style={[styles.info14Child, styles.info14Bg]} />
      <View style={[styles.info14Item, styles.info14Bg]} />
      <Pressable
        style={[styles.info14Inner, styles.parentFlexBox]}
        onPress={() => navigation.navigate("QRCode")}
      >
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-1272628259.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={styles.frameItem} />
        <View style={[styles.homeIndicatorwhite, styles.rectanglePosition]}>
          <View style={styles.shape} />
        </View>
        <View style={[styles.iconoutlinehomeParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinehome.png")}
          />
          <View style={[styles.rectangleGroup, styles.frameInnerLayout]}>
            <View style={[styles.frameInner, styles.frameInnerLayout]} />
            <View style={[styles.ioncarSportParent, styles.parentFlexBox]}>
              <Image
                style={styles.iconoutlinehome}
                contentFit="cover"
                source={require("../assets/ioncarsport1.png")}
              />
              <Text style={[styles.insurance, styles.insuranceTypo]}>
                Insurance
              </Text>
            </View>
          </View>
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinesmviewgridadd.png")}
          />
          <Image
            style={styles.iconoutlinehome}
            contentFit="cover"
            source={require("../assets/iconoutlinequestionmarkcircle1.png")}
          />
        </View>
      </View>
      <View style={[styles.statusBarwhite, styles.rectanglePosition]}>
        <Text style={styles.time}>9:41</Text>
        <Image
          style={styles.connectionsIcon}
          contentFit="cover"
          source={require("../assets/connections.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-33722.png")}
        />
        <Text style={[styles.successful, styles.insuranceTypo]}>
          Successful!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info14Bg: {
    backgroundColor: Color.colorSilver_200,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rectanglePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  frameInnerLayout: {
    width: 122,
    height: 36,
  },
  insuranceTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.mobileBody3Regular_size,
  },
  groupLayout: {
    width: 112,
    position: "absolute",
  },
  info14Child: {
    top: 1143,
    left: 110,
    width: 155,
    height: 42,
    opacity: 0,
  },
  info14Item: {
    top: 1444,
    left: 157,
    width: 62,
    height: 37,
    display: "none",
  },
  frameChild: {
    width: 42,
    height: 40,
  },
  info14Inner: {
    top: 55,
    left: 10,
    backgroundColor: Color.colorGray_1800,
    paddingRight: Padding.p_10xs,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorGoldenrod_300,
    height: 92,
    top: 0,
    width: 375,
  },
  frameItem: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(17, 17, 17, 0.12)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.white,
    position: "absolute",
    width: "100%",
  },
  shape: {
    marginLeft: -67.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_600,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicatorwhite: {
    top: 62,
    height: 34,
  },
  iconoutlinehome: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameInner: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.secondary,
    opacity: 0.15,
    height: 36,
  },
  insurance: {
    color: Color.secondary,
    textAlign: "left",
  },
  ioncarSportParent: {
    gap: Gap.gap_16xs,
    marginLeft: -54,
  },
  rectangleGroup: {
    justifyContent: "flex-end",
    height: 36,
    alignItems: "center",
    flexDirection: "row",
  },
  iconoutlinehomeParent: {
    top: 20,
    left: 24,
    gap: Gap.gap_8xl,
    position: "absolute",
  },
  rectangleParent: {
    top: 716,
    height: 96,
    display: "none",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.helvetica,
    color: Color.lightGray11,
    textAlign: "center",
  },
  connectionsIcon: {
    width: 68,
    height: 16,
  },
  statusBarwhite: {
    top: 2,
    backgroundColor: Color.colorGoldenrod_100,
    paddingLeft: Padding.p_5xl,
    paddingRight: Padding.p_4xl,
    gap: Gap.gap_20xl,
    height: 36,
    alignItems: "center",
    flexDirection: "row",
  },
  groupIcon: {
    height: 112,
    left: 0,
    width: 112,
    top: 0,
  },
  successful: {
    top: "87.84%",
    left: "136.61%",
    color: Color.text,
    textAlign: "center",
    position: "absolute",
  },
  groupParent: {
    top: 361,
    left: 132,
    height: 148,
  },
  info14: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorLinen_100,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default Info2;
