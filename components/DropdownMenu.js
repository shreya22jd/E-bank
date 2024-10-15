import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DropdownMenu = ({
  selectMenu = "Select ",
  propPosition,
  propTop,
  propLeft,
  vector,
}) => {
  const dropdownMenuStyle = useMemo(() => {
    return {
      ...getStyleValue("position", propPosition),
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <View style={[styles.dropdownMenu, dropdownMenuStyle]}>
      <Text style={styles.select}>{selectMenu}</Text>
      <Image style={styles.vectorIcon} contentFit="cover" source={vector} />
    </View>
  );
};

const styles = StyleSheet.create({
  select: {
    fontSize: FontSize.mobileBody3Regular_size,
    fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "left",
  },
  vectorIcon: {
    width: 12,
    height: 7,
  },
  dropdownMenu: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGoldenrod_100,
    width: 100,
    height: 30,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_2xl,
    paddingBottom: Padding.p_xs,
    gap: Gap.gap_9xs,
  },
});

export default DropdownMenu;
