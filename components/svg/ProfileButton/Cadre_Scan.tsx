import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Cadre = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={327}
    height={402}
    fill="none"
    {...props}
  >
    <Path
      stroke="#232A36"
      strokeWidth={2}
      d="M244.75 401H296c16.569 0 30-13.431 30-30v-70m0-200V31c0-16.569-13.431-30-30-30h-51.25M82.25 1H31C14.431 1 1 14.431 1 31v70m0 200v70c0 16.569 13.431 30 30 30h51.25"
    />
  </Svg>
)
export default SvgComponent