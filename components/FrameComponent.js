import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({ onFramePressablePress, propTop, propLeft, save }) => {
  const framePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.qrCodeInner, styles.groupChildLayout, framePressableStyle]}
      onPress={onFramePressablePress}
    >
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.scan}>{save}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    borderRadius: Border.br_base,
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.41)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    backgroundColor: Color.colorGoldenrod_100,
  },
  scan: {
    height: "33.33%",
    width: "34.23%",
    top: "33.33%",
    left: "35.45%",
    fontSize: FontSize.font_size,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    height: 54,
    width: 189,
  },
  qrCodeInner: {
    top: 607,
    left: 92,
    alignItems: "center",
    justifyContent: "center",
    width: 189,
  },
});

export default FrameComponent;
