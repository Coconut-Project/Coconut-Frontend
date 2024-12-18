import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"

export const ScanIcon = (props: SvgProps) => (
  <Svg
    width={53}
    height={52}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeWidth={2}
      d="M1.5 13.5V11c0-5.523 4.477-10 10-10H14M1.5 38.5V41c0 5.523 4.477 10 10 10H14M39 1h2.5c5.523 0 10 4.477 10 10v2.5M39 51h2.5c5.523 0 10-4.477 10-10v-2.5"
    />
    <Circle cx={17.333} cy={16.833} r={7} fill="#fff" stroke="#fff" />
    <Circle cx={36.5} cy={14.333} r={4.5} fill="#fff" stroke="#fff" />
    <Circle cx={35.667} cy={35.167} r={7} fill="#fff" stroke="#fff" />
    <Circle cx={18.167} cy={37.667} r={4.5} fill="#fff" stroke="#fff" />
  </Svg>
)