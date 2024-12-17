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

export const HighScore = ({ children }: { children?: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Svg width={208} height={208} fill="none">
        <G clipPath="url(#a)" filter="url(#b)">
          <Path
            fill="#fff"
            d="M104 204c55.229 0 100-44.772 100-100S159.229 4 104 4C48.772 4 4 48.772 4 104s44.772 100 100 100Z"
          />
          <G filter="url(#c)">
            <Path
              fill="url(#d)"
              d="M99.421 16.62c-.362-6.894 4.952-12.857 11.837-12.356a100 100 0 1 1-106.324 86.1c.942-6.84 7.88-10.797 14.547-9.01 6.669 1.786 10.514 8.65 9.858 15.522a75 75 0 1 0 83.216-67.386c-6.859-.788-12.773-5.976-13.134-12.87Z"
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
            x1={106.5}
            x2={15}
            y1={13}
            y2={89.5}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#F69030" />
            <Stop offset={1} stopColor="#F63030" />
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
