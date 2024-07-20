import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent({color}) {
  return (
    <Svg
      width="210mm"
      height="297mm"
      viewBox="0 0 210 297"
    >
      
      <Path
        d="M105.03 120.784L52.831 94.693 1.747 122.901l8.684-57.706-42.614-39.867 57.565-9.574L50.13-37.093l26.893 51.789 57.91 7.206-40.945 41.58z"
        transform="translate(55.432 89.859)"
        fill={color}
        stroke="#000"
        strokeWidth={4.99999}
      />
    </Svg>
  )
}

export default SvgComponent
