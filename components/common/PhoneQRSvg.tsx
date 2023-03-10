import * as React from 'react';
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Path,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: script */

const SvgComponent = ({
  color,
  currentBackgroundColor,
}: {
  color: string;
  currentBackgroundColor: string;
}) => (
  <Svg
    width={78.655}
    height={87.68}
  >
    <Defs>
      <LinearGradient
        id='a'
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits='objectBoundingBox'
      >
        <Stop
          offset={0}
          stopColor='#1cbfdf'
        />
        <Stop
          offset={1}
          stopColor='#2e3092'
        />
      </LinearGradient>
    </Defs>
    <Path
      d='M39.563 86.68a7.465 7.465 0 0 1-7.457-7.457V22.655a7.464 7.464 0 0 1 7.457-7.455H70.2a7.464 7.464 0 0 1 7.456 7.454v56.569A7.465 7.465 0 0 1 70.2 86.68ZM35.9 79.223a3.669 3.669 0 0 0 3.665 3.665H70.2a3.669 3.669 0 0 0 3.664-3.665v-2.651H35.9Zm0-56.568v50.128h37.963V22.655A3.669 3.669 0 0 0 70.2 18.99H39.563a3.669 3.669 0 0 0-3.663 3.665ZM7.457 71.482A7.466 7.466 0 0 1 0 64.025V7.457A7.466 7.466 0 0 1 7.457 0h30.636a7.462 7.462 0 0 1 7.453 7.457v2.861a1.894 1.894 0 1 1-3.788 0V7.457a3.67 3.67 0 0 0-3.665-3.665H7.457a3.669 3.669 0 0 0-3.665 3.665v50.125h23.655a1.9 1.9 0 0 1 0 3.792H3.792v2.651a3.669 3.669 0 0 0 3.665 3.665h19.99a1.9 1.9 0 0 1 0 3.792Zm54.49-6.56a1.9 1.9 0 0 1 0-3.792H65.6a.632.632 0 0 0 .63-.63v-3.652a1.9 1.9 0 0 1 3.792 0V60.5a4.428 4.428 0 0 1-4.422 4.422Zm-17.785 0A4.427 4.427 0 0 1 39.74 60.5v-3.652a1.9 1.9 0 0 1 3.792 0V60.5a.632.632 0 0 0 .63.63h3.652a1.9 1.9 0 0 1 0 3.792Zm-34.1-14.974a3.173 3.173 0 0 1-3.172-3.171v-3.832a1.895 1.895 0 0 1 3.789 0v3.215h3.215a1.894 1.894 0 1 1 0 3.789Zm56.167-7.234v-3.651a.632.632 0 0 0-.63-.63h-3.652a1.9 1.9 0 0 1 0-3.792H65.6a4.428 4.428 0 0 1 4.422 4.422v3.652a1.9 1.9 0 0 1-3.792 0Zm-26.489 0v-3.651a4.427 4.427 0 0 1 4.422-4.422h3.652a1.9 1.9 0 0 1 0 3.792h-3.652a.632.632 0 0 0-.63.63v3.652a1.9 1.9 0 0 1-3.792 0Zm-14.187-1.447v-.9a1.894 1.894 0 1 1 3.788 0v.9a1.894 1.894 0 1 1-3.788 0Zm-6.554 0v-.9a1.9 1.9 0 0 1 3.793 0v.9a1.9 1.9 0 0 1-3.793 0Zm-6.553 0V28.628a1.894 1.894 0 1 1 3.788 0v12.64a1.894 1.894 0 1 1-3.788 0Zm13.106-6.183v-6.456a1.894 1.894 0 1 1 3.788 0v6.456a1.894 1.894 0 1 1-3.788 0Zm-6.554 0v-6.456a1.9 1.9 0 0 1 3.793 0v6.456a1.9 1.9 0 0 1-3.793 0ZM6.89 26.947v-3.829a3.176 3.176 0 0 1 3.173-3.175h3.831a1.9 1.9 0 0 1 0 3.792h-3.215v3.212a1.895 1.895 0 1 1-3.789 0Zm43.086-.133a1.9 1.9 0 0 1 0-3.792h9.812a1.9 1.9 0 0 1 0 3.792Zm-32.106-15.2a1.894 1.894 0 1 1 0-3.789h9.812a1.894 1.894 0 1 1 0 3.789Z'
      transform='translate(.5 .5)'
      stroke={currentBackgroundColor}
      fill={color}
      // style={{
      //   fill: color,
      // }}
    />
  </Svg>
);

export default SvgComponent;
