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

export const VeryHighScore = ({ children }: { children?: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Svg width={208} height={208} fill="none">
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h208v208H0z" />
          </ClipPath>
          <ClipPath id="e">
            <Path d="M0 0h208v208H0z" />
          </ClipPath>
          <LinearGradient
            id="d"
            x1={204.503}
            x2={3.003}
            y1={104.002}
            y2={104.002}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#F63030" />
            <Stop offset={1} stopColor="#F63079" />
          </LinearGradient>
        </Defs>
        <G clipPath="url(#a)">
          <Path
            fill="#fff"
            d="M104.003 204.002c55.228 0 100-44.771 100-100 0-55.228-44.772-100-100-100-55.229 0-100 44.772-100 100 0 55.229 44.771 100 100 100Z"
          />
          <G>
            <Path
              fill="url(#d)"
              d="M203.866 98.769c2.89 55.152-39.477 102.206-94.629 105.096C54.083 206.755 7.03 164.388 4.14 109.236 1.25 54.083 43.616 7.03 98.769 4.14c55.153-2.89 102.206 39.476 105.097 94.629Z"
            />
          </G>
          <Path
            fill="#F5F6FA"
            d="M104.003 179.002c41.421 0 75-33.578 75-75 0-41.421-33.579-75-75-75-41.422 0-75 33.579-75 75 0 41.422 33.578 75 75 75Z"
          />
        </G>
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
