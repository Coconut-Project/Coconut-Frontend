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

export const VeryLowScore = ({ children }: { children?: React.ReactNode }) => {
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
              d="M99.42 16.62c-.36-6.894 4.953-12.857 11.838-12.356a100 100 0 0 1 80.904 52.54c3.258 6.085-.029 13.365-6.474 15.839s-13.59-.819-17.099-6.764a75.004 75.004 0 0 0-56.034-36.39c-6.859-.787-12.773-5.975-13.135-12.869Z"
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
            x1={108}
            x2={180}
            y1={18}
            y2={63.5}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#30F6B7" />
            <Stop offset={1} stopColor="#96F630" />
          </LinearGradient>
        </Defs>
      </Svg>
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
