import * as React from "react";
import { View, StyleSheet } from "react-native";
import Svg, {
  G,
  Path,
  Defs,
  ClipPath,
  LinearGradient,
  Stop,
} from "react-native-svg";

export const ModerateScore = ({ children }: { children?: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Svg width={208} height={208} fill="none">
        <G clipPath="url(#a)" filter="url(#b)">
          <Path
            fill="#fff"
            d="M104 204c55.228 0 100-44.772 100-100S159.228 4 104 4 4 48.772 4 104s44.772 100 100 100Z"
          />
          <G filter="url(#c)">
            <Path
              fill="url(#d)"
              d="M99.42 16.62c-.36-6.894 4.952-12.857 11.838-12.356a100.007 100.007 0 0 1 70.457 36.804 100.003 100.003 0 0 1-3.401 129.845 99.988 99.988 0 0 1-117.897 23.09c-6.213-3.009-7.833-10.829-4.073-16.619 3.76-5.79 11.476-7.326 17.809-4.579a75.013 75.013 0 0 0 56.725 1.214 75.008 75.008 0 0 0 45.566-50.608 75.009 75.009 0 0 0-41.939-87.927 74.991 74.991 0 0 0-21.951-5.994c-6.858-.788-12.772-5.976-13.134-12.87Z"
            />
          </G>
          <Path
            fill="#F5F6FA"
            d="M104 179c41.421 0 75-33.579 75-75s-33.579-75-75-75-75 33.579-75 75 33.579 75 75 75Z"
          />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h208v208H0z" />
          </ClipPath>
          <ClipPath id="e">
            <Path fill="#fff" d="M50 61h108v86H50z" />
          </ClipPath>
          <LinearGradient
            id="d"
            x1={109}
            x2={64}
            y1={14.5}
            y2={184}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#F6E930" />
            <Stop offset={1} stopColor="#F69030" />
          </LinearGradient>
        </Defs>
      </Svg>
      {/* pass the product here */}
      <View style={styles.centeredChildren}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 208,
    height: 208,
  },
  centeredChildren: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
