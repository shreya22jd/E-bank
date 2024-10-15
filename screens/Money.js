import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import GroupComponent21 from "../components/GroupComponent21";
import StatusDefaultStyleprimarySizeLargeIconfalseTexttrue from "../components/StatusDefaultStyleprimarySizeLargeIconfalseTexttrue";
import StatusBar1 from "../components/StatusBar1";
import { useNavigation } from "@react-navigation/native";
import {
  Gap,
  FontFamily,
  Border,
  FontSize,
  Padding,
  Color,
} from "../GlobalStyles";

const Money = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.money}>
      <View style={[styles.content, styles.infoFlexBox]}>
        <Image
          style={styles.userIcon}
          contentFit="cover"
          source={require("../assets/user5.png")}
        />
        <View style={styles.userInfo}>
          <View style={styles.nameInfo}>
            <Text style={[styles.label, styles.labelTypo]}>Alex</Text>
            <Text style={[styles.whoIsHe, styles.sendTypo]}>Your Friend</Text>
          </View>
        </View>
        <GroupComponent21 label=" 3,000" />
        <View style={styles.activityGroup}>
          <View style={styles.selectCard}>
            <View style={[styles.info, styles.infoFlexBox]}>
              <View style={[styles.icon, styles.iconFlexBox]}>
                <Image
                  style={styles.cardIcon}
                  contentFit="cover"
                  source={require("../assets/card1.png")}
                />
              </View>
              <View style={styles.nameCardBalance}>
                <View style={styles.nameCard}>
                  <Text style={[styles.visa, styles.visaTypo]}>Visa</Text>
                  <Image
                    style={styles.dotsIcon}
                    contentFit="cover"
                    source={require("../assets/dots.png")}
                  />
                  <Text style={[styles.visa, styles.visaTypo]}>1234</Text>
                </View>
                <Text style={[styles.balanceAmount, styles.sendTypo]}>
                  $ 5,353.11
                </Text>
              </View>
            </View>
            <View style={[styles.dropButton, styles.titleFlexBox]}>
              <Image
                style={styles.arrowDownIcon}
                contentFit="cover"
                source={require("../assets/arrowdown1.png")}
              />
            </View>
          </View>
          <View style={styles.numberPad}>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label1, styles.labelTypo]}>1</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label1, styles.labelTypo]}>2</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label1, styles.labelTypo]}>3</Text>
              </View>
            </View>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label1, styles.labelTypo]}>4</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label1, styles.labelTypo]}>5</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label1, styles.labelTypo]}>6</Text>
              </View>
            </View>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label1, styles.labelTypo]}>7</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label1, styles.labelTypo]}>8</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label1, styles.labelTypo]}>9</Text>
              </View>
            </View>
            <View style={styles.row1}>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label1, styles.labelTypo]}>.</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Text style={[styles.label1, styles.labelTypo]}>0</Text>
              </View>
              <View style={[styles.number1, styles.iconFlexBox]}>
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/icon11.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonSendParent}>
          <StatusDefaultStyleprimarySizeLargeIconfalseTexttrue
            statusDefaultStyleprimaryPosition="absolute"
            statusDefaultStyleprimaryBackgroundColor="#e0a340"
            statusDefaultStyleprimaryTop={0}
            statusDefaultStyleprimaryLeft={0}
            statusDefaultStyleprimaryWidth={327}
            statusDefaultStyleprimaryHeight={54}
            statusDefaultStyleprimaryAlignSelf="unset"
            label="send"
            labelFontWeight="500"
            labelFontFamily="Montserrat-Medium"
            labelColor="#fff"
          />
          <Text style={[styles.send, styles.sendClr]}>Send</Text>
        </View>
      </View>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={[styles.frame1, styles.frameLayout]}>
          <View style={styles.frameLayout}>
            <View style={[styles.statusBarParent, styles.frameLayout]}>
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
                style={[styles.timeLight, styles.contentPosition]}
                contentFit="cover"
                source={require("../assets/time--light1.png")}
              />
            </View>
          </View>
          <View style={styles.tabBar}>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("SendMoneyHome")}
            >
              <Image
                style={styles.icon2}
                contentFit="cover"
                source={require("../assets/group-1272628240.png")}
              />
            </Pressable>
            <View style={[styles.title, styles.titleLayout]}>
              <Text style={[styles.label12, styles.sendClr]}>Send Money</Text>
            </View>
            <View style={[styles.hiddenShape, styles.titleLayout]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoFlexBox: {
    gap: Gap.gap_8xs,
    alignItems: "center",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  sendTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  iconFlexBox: {
    borderRadius: Border.br_xs,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  visaTypo: {
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
  },
  titleFlexBox: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  sendClr: {
    color: Color.white,
    textAlign: "left",
  },
  framePosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 95,
    width: 390,
  },
  lightPosition: {
    height: 13,
    top: 7,
    position: "absolute",
  },
  contentPosition: {
    left: 0,
    position: "absolute",
  },
  titleLayout: {
    height: 36,
    borderRadius: Border.br_5xs,
  },
  userIcon: {
    width: 105,
    height: 123,
  },
  label: {
    color: Color.lightGray11,
    fontSize: FontSize.font_size,
  },
  whoIsHe: {
    color: Color.darkWhiteGrey60,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
  },
  nameInfo: {
    gap: Gap.gap_18xs,
    alignItems: "center",
  },
  userInfo: {
    alignItems: "center",
  },
  cardIcon: {
    width: 26,
    height: 26,
  },
  icon: {
    backgroundColor: Color.colorMediumblue_200,
    width: 46,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  visa: {
    color: Color.lightGray11,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.m3LabelLarge_size,
  },
  dotsIcon: {
    width: 18,
    height: 4,
  },
  nameCard: {
    gap: Gap.gap_16xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  balanceAmount: {
    color: Color.blackWhiteGray50,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "left",
  },
  nameCardBalance: {
    gap: Gap.gap_17xs,
    justifyContent: "center",
  },
  info: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  arrowDownIcon: {
    width: 24,
    height: 24,
  },
  dropButton: {
    borderRadius: Border.br_5xs,
    padding: Padding.p_7xs,
  },
  selectCard: {
    borderRadius: Border.br_base,
    height: 70,
    justifyContent: "space-between",
    paddingLeft: Padding.p_xs,
    paddingRight: Padding.p_lg,
    paddingBottom: Padding.p_xs,
    flexDirection: "row",
    backgroundColor: Color.colorAliceblue_400,
    alignSelf: "stretch",
    paddingTop: Padding.p_xs,
    alignItems: "center",
    overflow: "hidden",
  },
  label1: {
    fontSize: FontSize.size_9xl,
    color: Color.blackWhiteGray100,
  },
  number1: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    backgroundColor: Color.colorAliceblue_400,
    flex: 1,
  },
  row1: {
    gap: Gap.gap_15xs,
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  icon1: {
    width: 34,
    height: 34,
    overflow: "hidden",
  },
  numberPad: {
    height: 267,
    gap: Gap.gap_10xs,
    alignSelf: "stretch",
  },
  activityGroup: {
    gap: Gap.gap_2xs,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  send: {
    top: 16,
    left: 140,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.font_size,
    position: "absolute",
    color: Color.white,
  },
  buttonSendParent: {
    width: 327,
    height: 54,
  },
  content: {
    right: 0,
    bottom: 9,
    height: 687,
    paddingHorizontal: Padding.p_5xl,
    paddingBottom: Padding.p_5xl,
    paddingTop: Padding.p_xs,
    justifyContent: "flex-end",
    left: 0,
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
    borderRadius: Border.br_xl,
    width: 54,
    height: 19,
    overflow: "hidden",
  },
  statusBarParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 51,
    height: 51,
  },
  label12: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  title: {
    padding: Padding.p_7xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  hiddenShape: {
    width: 36,
  },
  tabBar: {
    width: 342,
    height: 65,
    paddingTop: Padding.p_11xs,
    gap: Gap.gap_10xl,
    marginTop: -141,
    flexDirection: "row",
  },
  frame1: {
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  frame: {
    width: 391,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  money: {
    shadowColor: "rgba(176, 176, 176, 0.2)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 44.8,
    elevation: 44.8,
    shadowOpacity: 1,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Money;
