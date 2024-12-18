import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const ProfileIcon = (props: SvgProps) => (
  <Svg
    width={31}
    height={30}
    fill="none"
    // {...props}
  >
    <Path
      stroke="#fff"
      {...props}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M25.5 26.25v-2.5a5 5 0 0 0-5-5h-10a5 5 0 0 0-5 5v2.5M15.5 13.75a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
  </Svg>
)