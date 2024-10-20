import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import CurrentPlan from "../components/CurrentPlan";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native'
import {
  Padding,
  Border,
  FontSize,
  Color,
  FontFamily,
  Gap,
} from "../GlobalStyles";
import NewPlan from '../components/NewPlan';

const MyPlan = ({ targetAmount }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { balance, daysToTarget } = route.params;
  return (
    <View style={styles.myPlan}>
        <Text style={styles.resultText}>
                Balance: {balance !== undefined ? balance : 0} {/* Displaying 0 if undefined */}
            </Text>
            <Text style={styles.resultText}>
                Days to reach target: {daysToTarget !== undefined ? daysToTarget : 'N/A'} {/* Displaying N/A if undefined */}
            </Text>
      <View style={styles.plans}>
        {/* Plan 1 */}
        <View style={[styles.apr, styles.aprFlexBox]}>
          <View style={styles.container} />
          <View style={[styles.plan1, styles.planFlexBox]}>
            <View style={[styles.info, styles.infoFlexBox]}>
              <View style={styles.aprWrapper}>
                <Text style={styles.apr1}>APR</Text>
              </View>
              <Text style={styles.plan25AprContainer}>
                <Text style={styles.planClr}>Plan 25</Text>
                <Text style={styles.apr11Clr}>Apr 1 - Apr 30, 2024</Text>
              </Text>
            </View>
            <View style={[styles.ammount, styles.ammountLayout]}>
              <Text style={[styles.text, styles.textTypo]}>INR 2,500</Text>
            </View>
          </View>
        </View>

        {/* Plan 2 */}
        <View style={styles.aprFlexBox}>
          <View style={styles.container} />
          <View style={[styles.plan2, styles.planFlexBox]}>
            <View style={[styles.info, styles.infoFlexBox]}>
              <View style={[styles.marWrapper, styles.wrapperLayout]}>
                <Text style={styles.apr1}>MAR</Text>
              </View>
              <Text style={[styles.plan10MarContainer, styles.containerLayout]}>
                <Text style={styles.planClr}>Plan 10</Text>
                <Text style={styles.apr11Clr}>Mar 1 - Mar 31, 2024</Text>
              </Text>
            </View>
            <View style={[styles.ammount1, styles.ammountLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>INR 157,12</Text>
            </View>
          </View>
        </View>

        {/* Plan 3 */}
        <View style={styles.aprFlexBox}>
          <View style={styles.container} />
          <View style={[styles.plan3, styles.planFlexBox]}>
            <View style={[styles.info, styles.infoFlexBox]}>
              <View style={[styles.febWrapper, styles.wrapperLayout]}>
                <Text style={styles.apr1}>FEB</Text>
              </View>
              <Text style={styles.plan25FebContainer}>
                <Text style={styles.planClr}>Plan 25%</Text>
                <Text style={styles.apr11Clr}>Feb 1 - Feb 28, 2024</Text>
              </Text>
            </View>
            <View style={[styles.ammount1, styles.ammountLayout]}>
              <Text style={[styles.text1, styles.textTypo]}>INR 375,04</Text>
            </View>
          </View>
        </View>

        {/* Plan 4 */}
        <View style={styles.aprFlexBox}>
          <View style={styles.container} />
          <View style={[styles.plan4, styles.planFlexBox]}>
            <View style={[styles.info, styles.infoFlexBox]}>
              <View style={[styles.febWrapper, styles.wrapperLayout]}>
                <Text style={styles.apr1}>JAN</Text>
              </View>
              <Text style={styles.containerLayout}>
                <Text style={[styles.plan5, styles.planClr]}>Plan 5%</Text>
                <Text style={[styles.jan11, styles.apr11Clr]}>
                  Jan 1 - Jan 31, 2024
                </Text>
              </Text>
            </View>
            
          </View>
        </View>
      </View>

      <CurrentPlan />
      <View style={[styles.exit, styles.exitFlexBox]}>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrowleft7.png")}
        />
      </View>
      
      <View style={styles.parent}>
        
        <View style={[styles.amount, styles.infoFlexBox]}>
          {/* Display the target amount passed as a prop */}
          <Text style={styles.label}>{targetAmount}</Text>
          <View style={styles.liner} />
        </View>
      </View>

      <Pressable
        style={[styles.wrapper, styles.exitPosition]}
        onPress={() => navigation.navigate("SavingPlan")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-1272628274.png")}
        />
      </Pressable>
      <View style={[styles.statusBarwhite, styles.text4Position]}>
        <Text style={styles.time}>9:41</Text>
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
  aprFlexBox: {
    justifyContent: "flex-end",
    height: 80,
    alignItems: "center",
    width: 350,
    top:330,
    left:10,

  },
  plan:{
top:550,
  },
 
resultText: {
    fontSize: 18,
    marginBottom: 10,
    top:350,
    left:15,
},
  planFlexBox: {
    marginTop: -65,
    flexDirection: "row",
    alignItems: "center",
  },
  infoFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  ammountLayout: {
    padding: Padding.p_3xs,
    height: 44,
    width: 90,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_2400,
    textAlign: "left",
    letterSpacing: 0.2,
  },
  wrapperLayout: {
    paddingVertical: 0,
    justifyContent: "center",
    overflow: "hidden",
    height: 50,
    width: 50,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
  },
  containerLayout: {
    width: 164,
    textAlign: "left",
  },
  planClr: {
    color: Color.colorGray_2400,
    fontSize: FontSize.m3TitleMedium_size,
  },
  apr11Clr: {
    color: Color.white,
    fontSize: FontSize.size_smi,
  },
  exitFlexBox: {
    height: 36,
    flexDirection: "row",
    alignItems: "center",
  },
  text4Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  exitPosition: {
    top: 39,
    position: "absolute",
  },
  container: {
    borderColor: Color.colorGray_2300,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGoldenrod_100,
    height: 80,
    width: 350,
  },
  apr1: {
    color: Color.colorGoldenrod_100,
    textAlign: "left",
    fontFamily: FontFamily.helvetica,
    fontWeight: "700",
    letterSpacing: 0.2,
    fontSize: FontSize.m3TitleMedium_size,
  },
  aprWrapper: {
    justifyContent: "center",
    overflow: "hidden",
    height: 50,
    width: 50,
    borderRadius: Border.br_31xl,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  plan25AprContainer: {
    width: 159,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  info: {
    gap: Gap.gap_7xs,
  },
  text: {
    fontFamily: FontFamily.adaminaRegular,
  },
  ammount: {
    borderColor: "rgba(255, 255, 255, 0.46)",
  },
  plan1: {
    gap: Gap.gap_11xs,
  },
  apr: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 2,
  },
  amount: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    width: 164,
  },
  label: {
    fontFamily: FontFamily.adaminaRegular,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_2400,
  },
  liner: {
    height: 2,
    width: 164,
    backgroundColor: Color.colorGray_2400,
    marginTop: 6,
    top:500,
  },
});

export default MyPlan;