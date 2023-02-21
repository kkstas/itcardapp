
import SmallButtonWithIcon from "../../components/common/SmallButtonWithIcon"
import { IReceiptState } from "./asyncStorageHandler";
import useCustomColors from "../../hooks/useCustomColors"
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from 'react-native'

// id: number;
// transactionStartDateTime: string;
// deviceName: string;
// transactionID: string;
// localizationName: string;
// localizationStreet: string;
// localizationCity: string;
// trempcardNumberFormatted: string;
// amount: string;
// trxType: "ci" | "co" | "bi" | "bo";
// ci: cashIn
// co: cashOut
// bi: blikCashIn
// bo: blikCashOut

const returnHtml = (data: IReceiptState) => {
  const trxTypeName = data.trxType === "co" || data.trxType === "bo" ? "Wypłata" : "Wpłata"
  return (`
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: start;">
<!-- start a5 div -->
<div
style="
width: 100vw;
height: 100vh;
padding: 8%;
padding-top: 16%;
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: space-between;
font-family: Lucida Console, Monaco, monospace;
">
<div style="width: 100vw; paddingTop: 250px;">


<svg
   version="1.1"
   id="svg18"
   width="402.56589"
   height="189.63846"
   viewBox="0 0 402.56589 189.63845"
   sodipodi:docname="planetCashLogoSvg.svg"
   inkscape:export-filename="planetCashLogoSvg.svg"
   inkscape:export-xdpi="157.01933"
   inkscape:export-ydpi="157.01933"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview145"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     showgrid="false" />
  <defs
     id="defs22">
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath34">
      <path
         d="M 0,0 H 2483.3333 V 3540.4702 H 0 Z"
         clip-rule="evenodd"
         id="path32" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath46">
      <path
         d="M 0,0 H 2483.3333 V 3512.3215 H 0 Z"
         clip-rule="evenodd"
         id="path44" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath58">
      <path
         d="M 0,0 H 2483.3333 V 3512.3215 H 0 Z"
         clip-rule="evenodd"
         id="path56" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath82">
      <path
         d="M 0,0 H 2483.3333 V 3512.3215 H 0 Z"
         clip-rule="evenodd"
         id="path80" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath102">
      <path
         d="M 407.08813,941.63208 H 1173.3559 V 1295.0536 H 407.08813 Z"
         clip-rule="evenodd"
         id="path100" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath150">
      <path
         d="M 0,0 H 2483.3333 V 3512.3215 H 0 Z"
         clip-rule="evenodd"
         id="path148" />
    </clipPath>
  </defs>
  <g
     id="g26"
     transform="matrix(0.31999998,0,0,0.31999998,-166.8915,-232.00126)">
    <g
       id="g28">
      <g
         id="g30"
         clip-path="url(#clipPath34)">
        <g
           id="g36"
           transform="scale(3.1276238)">
          <path
             d="M 0,0 H 794 V 1132 H 0 Z"
             style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path38" />
        </g>
      </g>
    </g>
    <g
       id="g40">
      <g
         id="g42"
         clip-path="url(#clipPath46)">
        <g
           id="g48"
           transform="scale(3.1276238)">
          <path
             d="M 0,0 H 794 V 1123 H 0 Z"
             style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path50" />
        </g>
      </g>
    </g>
    <g
       id="g52"
       inkscape:export-filename="pcachrecsvg.svg"
       inkscape:export-xdpi="62.807732"
       inkscape:export-ydpi="62.807732">
      <g
         id="g54"
         clip-path="url(#clipPath58)">
        <g
           id="g60"
           transform="scale(3.1276238)">
          <path
             d="M 0,0 H 794 V 1123 H 0 Z"
             style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path62" />
        </g>
      </g>
    </g>
    <g
       id="g76">
      <g
         id="g78"
         clip-path="url(#clipPath82)">
        <g
           id="g84"
           transform="matrix(3.1303246,-0.00361381,0.00361069,3.1276217,407.08871,2123.7036)">
          <path
             d="M 0.5,0.5 H 578.00812"
             style="fill:none;stroke:#e7e1e6;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path86" />
        </g>
        <g
           id="g88"
           transform="matrix(0,3.1269491,-3.1276238,0,232.85907,-454.55804)">
          <path
             d="M 0.5,0.5 H 1230.7743"
             style="fill:none;stroke:#e7e1e6;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path90" />
        </g>
        <g
           id="g92"
           transform="matrix(3.1303246,-0.00361381,0.00361069,3.1276217,407.08871,2758.8687)">
          <path
             d="M 0.5,0.5 H 578.00812"
             style="fill:none;stroke:#e7e1e6;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path94" />
        </g>
      </g>
    </g>
    <g
       id="g96"
       transform="matrix(1.6461101,0,0,1.6769816,-150.44376,-854.09569)"
       inkscape:export-filename="./g96.svg"
       inkscape:export-xdpi="157.01933"
       inkscape:export-ydpi="157.01933">
      <g
         id="g98"
         clip-path="url(#clipPath102)"
         inkscape:export-filename="pcashsvgprint.svg"
         inkscape:export-xdpi="62.807732"
         inkscape:export-ydpi="62.807732">
        <g
           id="g104"
           transform="matrix(21.063232,0,0,-21.035944,717.09473,1081.902)">
          <path
             d="M 0,0 H -1.015 C -1.857,0 -2.23,-0.20200001 -2.23,-0.94800007 -2.23,-1.763 -1.814,-2.0570002 -1.2030001,-2.0570002 -0.55900002,-2.0570002 0,-1.8800001 0,-1.8800001 Z m 0.29700002,-3.1530001 c -0.50400001,-0.231 -1.26299998,-0.494 -2.03399992,-0.494 -1.4119998,0 -2.3210002,0.842 -2.3210002,2.67300012 0,1.51900006 0.9749999,2.32299998 2.671,2.32299998 L 0,1.349 V 1.8410001 C 0,2.6819999 -0.41600001,3.1960001 -1.415,3.029 -2.125,2.9130001 -2.9219999,2.767 -3.335,2.677 l -0.2690001,1.5279999 c 0.773,0.1900001 1.846,0.441 2.549,0.5209999 C 1.193,4.974 1.9360001,3.7639999 1.9360001,1.547 V -3.526 H 0.42000002 Z"
             style="fill:#000001;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path106" />
        </g>
        <g
           id="g108"
           transform="matrix(21.063232,0,0,-21.035944,1034.0332,1053.5455)">
          <path
             d="M 0,0 C -0.026,1.267 -0.49700001,1.694 -1.281,1.694 -2.177,1.694 -2.5239999,1.255 -2.6059999,0 Z m -4.5799999,-0.70899999 c 0,2.64300009 1.042,4.07099999 3.283,4.07099999 1.937,0 3.0859999,-1.1339998 3.0859999,-3.737 v -0.974 h -4.3540001 c 0.08,-1.4560001 0.686,-2.148 1.96400003,-1.937 0.30200002,0.05 1.06299996,0.1990001 1.91799997,0.3629999 l 0.268,-1.5239999 c -0.77599994,-0.1919999 -1.50199995,-0.395 -2.42799995,-0.4900003 -2.59000005,-0.2639999 -3.73699985,1.332 -3.73699985,4.22800019"
             style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path110" />
        </g>
        <g
           id="g112"
           transform="matrix(21.063232,0,0,-21.035944,-12732.685,1875.8406)">
          <path
             d="m 631.54102,34.216 h 1.961 v 10.195 h -1.961 z"
             style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path114" />
        </g>
        <g
           id="g116"
           transform="matrix(21.063232,0,0,-21.035944,865.65332,982.50714)">
          <path
             d="m 0,0 c -0.866,0 -1.737,-0.30200002 -2.2809999,-0.51999998 l -0.122,0.375 h -1.516 V -8.2509995 h 1.947 v 6.2030001 c 0,0 0.727,0.285 1.21700002,0.285 0.746,0 1.35800004,-0.2529999 1.35800004,-1.1739999 V -8.2509995 H 2.5380001 v 5.3140002 C 2.5380001,-1.015 1.549,0 0,0"
             style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path118" />
        </g>
        <g
           id="g120"
           transform="matrix(21.063232,0,0,-21.035944,1172.46,1017.3426)">
          <path
             d="M 0,0 V 1.51 H -1.6389999 V 3.599 H -3.51 V 1.51 H -4.4190001 L -4.1550002,0 h 0.566 v -4.3239999 c 0,-1.5099997 0.8530001,-2.52 2.2420001,-2.4029999 0.57099996,0.046 1.34699998079071,0.1700001 1.34699998079071,0.1700001 L -0.25700012,-5.0739994 c 0,0 -0.52499994,-0.053 -0.70899996,-0.053 -0.57400002,0 -0.67300012,0.2410002 -0.67300012,0.842 V 0 Z"
             style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path122" />
        </g>
        <g
           id="g124"
           transform="matrix(21.063232,0,0,-21.035944,473.72949,1051.7786)">
          <path
             d="m 0,0 h -1.16 v 3.4200001 h 1.14800004 C 1.067,3.4200001 1.669,2.9060001 1.669,1.709 1.669,0.51300001 1.0140001,0 0,0 M 0,5.2360001 H -3.1099999 V -4.9580002 h 1.9500001 v 3.2220001 H 0 c 2.605,0 3.6199999,1.17900006 3.6199999,3.445 0,2.2679999 -1.0570002,3.5270002 -3.6199999,3.5270002"
             style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path126" />
        </g>
        <g
           id="g128"
           transform="matrix(21.063232,0,0,-21.035944,979.1416,1264.3467)">
          <path
             d="m 0,0 h -0.405 c -0.33699998,0 -0.48700002,-0.08100001 -0.48700002,-0.37900001 0,-0.32499999 0.16500002,-0.444 0.41099998,-0.444 0.25799999,0 0.481000010197678,0.073 0.481000010197678,0.073 z m 0.119,-1.2590001 c -0.20300001,-0.095 -0.50599996,-0.199 -0.81499998,-0.199 -0.56300012,0 -0.92900002,0.3370001 -0.92900002,1.07000009 0,0.606 0.391,0.92800003 1.07099998,0.92800003 L 0,0.54000002 V 0.73700005 C 0,1.075 -0.168,1.278 -0.56700003,1.212 -0.85000002,1.1670001 -1.169,1.108 -1.335,1.072 l -0.1080001,0.612 c 0.31,0.074 0.73900004,0.1770001 1.02,0.207 C 0.47600004,1.99 0.773,1.507 0.773,0.62 V -1.409 H 0.169 Z"
             style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path130" />
        </g>
        <g
           id="g132"
           transform="matrix(21.063232,0,0,-21.035944,924.04004,1280.6075)">
          <path
             d="M 0,0 C -0.51099998,-0.086 -0.79199994,0.17200002 -0.79199994,0.99199998 -0.79199994,1.813 -0.51099992,2.0710001 0,1.9860001 c 0.12100001,-0.02 0.24600001,-0.04 0.58700001,-0.1050001 L 0.69499999,2.4910002 C 0.38400003,2.569 0.27400002,2.609 -0.09900001,2.6459999 -1.123,2.75 -1.5910001,2.105 -1.5910001,0.99199998 c 0,-1.11000001 0.468,-1.75800001 1.492,-1.65300011 0.373,0.037 0.48300001,0.079 0.79399997,0.15499997 L 0.58700001,0.104 C 0.24600001,0.039 0.12100001,0.019 0,0"
             style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path134" />
        </g>
        <g
           id="g136"
           transform="matrix(21.063232,0,0,-21.035944,1092.377,1224.5678)">
          <path
             d="m 0,0 c -0.29000002,0 -0.583,-0.08500001 -0.79699999,-0.162 0.005,0.087 0.007,0.17200002 0.007,0.23200001 v 0.707 H -1.569 V -3.3010001 h 0.77899995 v 2.48099993 c 0,0 0.29000002,0.11500001 0.48600003,0.11500001 0.29900002,0 0.54400003,-0.102 0.54400003,-0.47099994 v -2.125 H 1.0140001 v 2.125 C 1.0140001,-0.40600002 0.61900002,0 0,0"
             style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path138" />
        </g>
        <g
           id="g140"
           transform="matrix(21.063232,0,0,-21.035944,1025.333,1294.7017)">
          <path
             d="M 0,0 C -0.23200001,0 -0.78899997,0.141 -1.0499999,0.20300001 L -0.94199997,0.815 c 0.24900001,-0.048 0.66700005,-0.12400002 0.91800004,-0.16500002 0.31200001,-0.055 0.47900003,0.068 0.47900003,0.29799997 0,0.53499995 -1.4739999,0.29799995 -1.4739999,1.41100005 0,0.565 0.39600001,1.0269999 1.161,0.97 C 0.412,3.3080001 0.85100001,3.223 1.108,3.161 L 1.001,2.5510001 c -0.25699998,0.049 -0.552,0.094 -0.75899999,0.122 -0.33600001,0.046 -0.48300002,-0.047 -0.48300002,-0.247 0,-0.5020001 1.46699991,-0.381 1.46699991,-1.3830001 C 1.2259999,0.38600004 0.91800004,0 0,0"
             style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path142" />
        </g>
      </g>
    </g>
    <g
       id="g144">
      <g
         id="g146"
         clip-path="url(#clipPath150)">
        <g
           id="g152"
           transform="matrix(3.1276238,0,0,3.1276238,411.92679,1440.0441)">
          <text
             xml:space="preserve"
             transform="translate(0,20)"
             style="font-variant:normal;font-weight:normal;font-size:18.66px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Regular;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text156"><tspan
               x="0 14.458603 25.391174 32.984268 43.91684 48.730148 54.028519 58.841827 69.363953 79.382355 90.314926"
               y="0"
               id="tspan154">Data i czas</tspan></text>
        </g>
        <g
           id="g158"
           transform="matrix(3.1276238,0,0,3.1276238,1753.2572,1440.0441)">
          <text
             xml:space="preserve"
             transform="translate(78.03125,20)"
             style="font-variant:normal;font-weight:bold;font-size:18.66px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text162"><tspan
               x="0 7.6863708 18.880127 23.357635 31.044006 42.834763 47.312271 58.506027"
               y="0"
               id="tspan160">12:19:20</tspan></text>
        </g>
        <g
           id="g164"
           transform="matrix(3.1276238,0,0,3.1276238,408.37152,1550.9992)">
          <text
             xml:space="preserve"
             transform="translate(0,20)"
             style="font-variant:normal;font-weight:normal;font-size:18.66px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Regular;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text168"><tspan
               x="0 10.801971 21.771851 29.122421 48.580887 53.879257 66.248352 77.180923"
               y="0"
               id="tspan166">Terminal</tspan></text>
        </g>
        <g
           id="g170"
           transform="matrix(3.1276238,0,0,3.1276238,1749.7018,1550.9992)">
          <text
             xml:space="preserve"
             transform="translate(52.921875,20)"
             style="font-variant:normal;font-weight:bold;font-size:18.66px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text174"><tspan
               x="0 13.507126 28.170944 40.745255 52.144226 63.934982 74.345169 84.755356"
               y="0"
               id="tspan172">RNET6338</tspan></text>
        </g>
        <g
           id="g176"
           transform="matrix(3.1276238,0,0,3.1276238,407.09048,1661.3024)">
          <text
             xml:space="preserve"
             transform="translate(0,20)"
             style="font-variant:normal;font-weight:normal;font-size:18.66px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Regular;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text180"><tspan
               x="0 14.775757 22.126328 26.939636 34.53273 41.883301 52.815872 65.184967 73.9534 84.885971 95.986435 106.50856 111.8629"
               y="0"
               id="tspan178">Nr transakcji</tspan></text>
        </g>
        <g
           id="g182"
           transform="matrix(3.1276238,0,0,3.1276238,1249.2378,1661.3024)">
          <text
             xml:space="preserve"
             transform="translate(76.359375,20)"
             style="font-variant:normal;font-weight:bold;font-size:18.66px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text186"><tspan
               x="0 13.115341 24.309097 37.219223 48.319687 61.229813 73.020569 84.214325 95.408081 105.81827 117.01202 128.98933 139.39952 153.26112 166.37646 179.49181 192.60715 200.29352 213.40886 225.19962"
               y="0"
               id="tspan184">02C5C6223283G0001091</tspan></text>
        </g>
        <g
           id="g188"
           transform="matrix(3.1276238,0,0,3.1276238,407.09277,1771.6055)">
          <text
             xml:space="preserve"
             transform="translate(0,20)"
             style="font-variant:normal;font-weight:normal;font-size:18.66px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Regular;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text192"><tspan
               x="0 9.9624329 21.622589 32.723053 43.655624 49.159225 54.457596 64.475998 75.408569 85.930695 91.285034"
               y="0"
               id="tspan190">Lokalizacja</tspan></text>
        </g>
        <g
           id="g194"
           transform="matrix(3.1276238,0,0,3.1276238,407.08813,2377.2336)">
          <text
             xml:space="preserve"
             transform="translate(0,27)"
             style="font-variant:normal;font-weight:bold;font-size:24.79px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#222222;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text198"><tspan
               x="0 26.788513 43.639755 60.490997 74.864105 93.945648 109.08698 128.16852"
               y="0"
               id="tspan196">WYPŁATA:</tspan></text>
        </g>
        <g
           id="g200"
           transform="matrix(3.1276238,0,0,3.1276238,1408.9336,1771.6055)">
          <text
             xml:space="preserve"
             transform="translate(185.76563,20)"
             style="font-variant:normal;font-weight:bold;font-size:18.66px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text204"><tspan
               x="0 5.9326935 17.331665 30.241791 44.607101 58.114227"
               y="0"
               id="tspan202">ITCARD</tspan></text>
          <text
             xml:space="preserve"
             transform="translate(103.5,46)"
             style="font-variant:normal;font-weight:bold;font-size:18.66px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text208"><tspan
               x="0 12.369095 18.357758 22.89122 27.219467 39.812439 57.29335 68.113983 78.598801 84.400894 95.631958 105.20262 116.95605 128.14981 132.47806 144.28746"
               y="0"
               id="tspan206">ul. Zwycięska 43</tspan></text>
          <text
             xml:space="preserve"
             transform="translate(172.625,72)"
             style="font-variant:normal;font-weight:bold;font-size:18.66px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text212"><tspan
               x="0 20.167404 28.133621 40.017654 50.502472 56.901566 68.095322"
               y="0"
               id="tspan210">Wrocław</tspan></text>
        </g>
        <g
           id="g214"
           transform="matrix(0,-3.1276238,3.1276238,0,124.35139,3379.7964)">
          <text
             xml:space="preserve"
             transform="translate(334.15625,21)"
             style="font-variant:normal;font-weight:normal;font-size:20.89px;font-family:Garet;-inkscape-font-specification:Garet-Book;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text218"><tspan
               x="0 19.543663 43.471069 62.576363 91.075394 103.25019 122.14673 142.60889 164.69931 183.44974 202.34628 224.58282 236.75761 255.65414 267.43231 289.52274 313.45013 333.87054 357.79794 380.03448 400.47577 422.71231 434.88712"
               y="0"
               id="tspan216">POTWIERDZENIE DOKONANIA</tspan></text>
          <text
             xml:space="preserve"
             transform="translate(813.03125,21)"
             style="font-variant:normal;font-weight:normal;font-size:20.89px;font-family:Garet;-inkscape-font-specification:Garet-Book;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text222"><tspan
               x="0 19.105293 39.567459 60.008751 82.245285 102.14382 122.58511 143.00552 166.34842 182.53122"
               y="0"
               id="tspan220">TRANSAKCJI</tspan></text>
        </g>
        <g
           id="g224"
           transform="matrix(4.066505,0,0,4.066505,398.28751,3125.3613)">
          <text
             xml:space="preserve"
             transform="translate(11.109375,15)"
             style="font-variant:normal;font-weight:bold;font-size:14.8px;font-family:Quicksand;-inkscape-font-specification:Quicksand-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text228"><tspan
               x="0 14.960634 28.929874 37.379845 50.22451 64.297325 79.109993 91.658714 104.50338 121.00289 134.2027 142.72665 151.17662 159.70058 173.66982 187.50587 200.80925 215.35558 229.19164 242.40622 256.37546 270.21152 286.71103 299.91083 308.43478 321.73816 337.34985 352.60645 368.21814 386.55249 401.80908 410.25906 423.10373"
               y="0"
               id="tspan226">DZIĘKUJEMY I ZAPRASZAMY PONOWNIE!</tspan></text>
        </g>
        <g
           id="g230"
           transform="matrix(3.1276238,0,0,3.1276238,1867.827,2527.5347)">
          <text
             xml:space="preserve"
             transform="translate(41.0625,14)"
             style="font-variant:normal;font-weight:bold;font-size:13.54px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text234"><tspan
               x="0 8.0510712 17.563507 20.824524 30.33696 39.849396 42.988632 52.18985 59.767334"
               y="0"
               id="tspan232">50,00 PLN</tspan></text>
        </g>
        <g
           id="g236"
           transform="matrix(3.1276238,0,0,3.1276238,407.08813,2232.5308)">
          <text
             xml:space="preserve"
             transform="translate(0,20)"
             style="font-variant:normal;font-weight:bold;font-size:18.66px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#222222;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text240"><tspan
               x="0 14.663818 27.032913 46.379456 57.610519 65.576736 69.904984 81.658417 92.852173 100.81839 108.93385 119.75449"
               y="0"
               id="tspan238">Numer karty:</tspan></text>
        </g>
        <g
           id="g242"
           transform="matrix(3.1276238,0,0,3.1276238,1249.2378,2232.5308)">
          <text
             xml:space="preserve"
             transform="translate(183.46875,20)"
             style="font-variant:normal;font-weight:bold;font-size:18.66px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#222222;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text246"><tspan
               x="0 11.809402 22.89122 33.991684 45.78244 56.882904 67.964722 75.016785 82.068848 93.859604 104.96007 115.37025"
               y="0"
               id="tspan244">475657**9533</tspan></text>
        </g>
        <g
           id="g248"
           transform="matrix(3.1276238,0,0,3.1276238,1473.7911,2377.2336)">
          <text
             xml:space="preserve"
             transform="translate(93.640625,27)"
             style="font-variant:normal;font-weight:bold;font-size:24.79px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#222222;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text252"><tspan
               x="0 14.868744 29.613571 47.034775 53.00705 70.428253 87.849457 93.598709 110.44995 124.32744"
               y="0"
               id="tspan250">250,00 PLN</tspan></text>
        </g>
        <g
           id="g254"
           transform="matrix(3.1276238,0,0,3.1276238,1867.827,2630.4194)">
          <text
             xml:space="preserve"
             transform="translate(31.484375,14)"
             style="font-variant:normal;font-weight:bold;font-size:13.54px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text258"><tspan
               x="0 8.1187286 17.631165 27.1436 30.404617 39.917053 49.429489 52.568726 61.769943 69.347427"
               y="0"
               id="tspan256">200,00 PLN</tspan></text>
        </g>
        <g
           id="g260"
           transform="matrix(3.1276238,0,0,3.1276238,1194.2418,2630.4194)">
          <text
             xml:space="preserve"
             transform="translate(0,14)"
             style="font-variant:normal;font-weight:bold;font-size:13.54px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text264"><tspan
               x="0 5.5748596 15.087296 24.599731 27.860748 37.373184 46.88562 50.024857 59.226074 66.803558"
               y="0"
               id="tspan262">100,00 PLN</tspan></text>
        </g>
        <g
           id="g266"
           transform="matrix(3.1276238,0,0,3.1276238,1772.658,2630.4194)">
          <text
             xml:space="preserve"
             transform="translate(15.5,14)"
             style="font-variant:normal;font-weight:bold;font-size:13.54px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text270"><tspan
               x="0"
               y="0"
               id="tspan268">=</tspan></text>
        </g>
        <g
           id="g272"
           transform="matrix(3.1276238,0,0,3.1276238,1772.658,2527.5347)">
          <text
             xml:space="preserve"
             transform="translate(15.5,14)"
             style="font-variant:normal;font-weight:bold;font-size:13.54px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text276"><tspan
               x="0"
               y="0"
               id="tspan274">=</tspan></text>
        </g>
        <g
           id="g278"
           transform="matrix(3.1276238,0,0,3.1276238,1654.1082,2527.5347)">
          <text
             xml:space="preserve"
             transform="translate(16.15625,14)"
             style="font-variant:normal;font-weight:bold;font-size:13.54px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text282"><tspan
               x="0"
               y="0"
               id="tspan280">1</tspan></text>
        </g>
        <g
           id="g284"
           transform="matrix(3.1276238,0,0,3.1276238,1654.1082,2630.4194)">
          <text
             xml:space="preserve"
             transform="translate(14.890625,14)"
             style="font-variant:normal;font-weight:bold;font-size:13.54px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text288"><tspan
               x="0"
               y="0"
               id="tspan286">2</tspan></text>
        </g>
        <g
           id="g290"
           transform="matrix(3.1276238,0,0,3.1276238,1535.5582,2527.5347)">
          <text
             xml:space="preserve"
             transform="translate(13.28125,14)"
             style="font-variant:normal;font-weight:bold;font-size:13.54px;font-family:DejaVuSans;-inkscape-font-specification:DejaVuSans-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text294"><tspan
               x="0"
               y="0"
               id="tspan292">✱</tspan></text>
        </g>
        <g
           id="g296"
           transform="matrix(3.1276238,0,0,3.1276238,1535.5582,2630.4194)">
          <text
             xml:space="preserve"
             transform="translate(13.28125,14)"
             style="font-variant:normal;font-weight:bold;font-size:13.54px;font-family:DejaVuSans;-inkscape-font-specification:DejaVuSans-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text300"><tspan
               x="0"
               y="0"
               id="tspan298">✱</tspan></text>
        </g>
        <g
           id="g302"
           transform="matrix(3.1276238,0,0,3.1276238,1194.2418,2527.5347)">
          <text
             xml:space="preserve"
             transform="translate(0,14)"
             style="font-variant:normal;font-weight:bold;font-size:13.54px;font-family:Montserrat;-inkscape-font-specification:Montserrat-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text306"><tspan
               x="0 8.0510712 17.563507 20.824524 30.33696 39.849396 42.988632 52.18985 59.767334"
               y="0"
               id="tspan304">50,00 PLN</tspan></text>
        </g>
        <g
           id="g308"
           transform="matrix(4.066505,0,0,4.066505,397.48508,3040.3716)">
          <text
             xml:space="preserve"
             transform="translate(120.21875,13)"
             style="font-variant:normal;font-weight:bold;font-size:13.46px;font-family:Quicksand;-inkscape-font-specification:Quicksand-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text312"><tspan
               x="0 16.672331 33.344662 50.016991 57.352928 69.451241 80.997978 93.580589 107.45469 119.13595 131.54367 143.96484 156.54745 168.56505 182.22391 189.55984 201.65816"
               y="0"
               id="tspan310">WWW.PLANETCASH.PL</tspan></text>
        </g>
        <g
           id="g314"
           transform="matrix(4.066505,0,0,4.066505,396.68149,2961.3188)">
          <text
             xml:space="preserve"
             transform="translate(152.625,11)"
             style="font-variant:normal;font-weight:bold;font-size:12.13px;font-family:Quicksand;-inkscape-font-specification:Quicksand-Bold;writing-mode:lr-tb;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="text318"><tspan
               x="0 11.181772 21.708805 32.114578 38.725227 45.711746 56.432777 67.469055 75.474083 82.460602 93.072502 104.10878 112.11381 119.10033 129.33636 140.37265"
               y="0"
               id="tspan316">TEL. 801 501 601</tspan></text>
        </g>
      </g>
    </g>
  </g>
</svg>


</div>

 <p
      style="
        border-bottom: 1px solid rgba(0, 0, 0, 0.234);
        padding-bottom: 0;
        margin-bottom: 0;
        margin-top: 50px;
        font-size: 12px;
        letter
      ">
      POTWIERDZENIE DOKONANIA TRANSAKCJI
    </p>
    <!-- start trx info -->
    <div style="display: flex">
      <!--  start kolumna lewa  -->
      <div style="">
        <p style="">Data i czas</p>
        <p style="">Terminal</p>
        <p style="">Nr transakcji</p>
        <p style="">Lokalizacja</p>
        <!--  end kolumna lewa  -->
      </div>
      <!--  start kolumna prawa -->
      <div style="flex: 1; text-align: end">
        <p style="">${data.transactionStartDateTime}</p>
        <p style="">${data.deviceName}</p>
        <p style="">${data.transactionID}</p>
        <p style="">${data.localizationName}</p>
        <p style="">${data.localizationStreet}</p>
        <p style="">${data.localizationCity}</p>
        <!--  end kolumna prawa -->
      </div>
      <!-- end trx info -->
    </div>
    <!-- separator  -->
    <div
      style="
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.234);
      ">
      <!-- end separator -->
    </div>
    <!-- start trx amounts -->
    <div style="display: flex">
      <!--  start kolumna lewa  -->
      <div style="line-height: 10px;">
        <p style="font-size: 20px">Numer karty:</p>
        <p style="font-size: 28px; font-weight: 600">${trxTypeName}:</p>
        <!--  end kolumna lewa  -->
      </div>
      <!--  start kolumna prawa -->
      <div style="flex: 1; line-height: 10px; text-align: end">
        <p style="font-size: 20px">${data.trempcardNumberFormatted}</p>
        <p style="font-size: 28px; font-weight: 600">${data.amount}</p>
        <!--  end kolumna prawa -->
      </div>
      <!-- end trx amounts -->
    </div>
    <!-- separator  -->
    <div
      style="width: 100%; height: 1px; margin-top: 30px; background-color: rgba(0, 0, 0, 0.234);">
      <!-- end separator -->
    </div>
    <!-- start dziękujemy zapraszamy ponownie  -->
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 400;
      ">
      <p style="margin: 2px; font-size: 10px; letter-spacing: 1px">
        TEL. 801 501 601
      </p>
      <p style="margin: 2px; font-size: 12.2px; letter-spacing: 1px">
        WWW.PLANETCASH.PL
      </p>
      <p style="margin: 2px; font-size: 14px; letter-spacing: 1px">
        DZIĘKUJEMY I ZAPRASZAMY PONOWNIE
      </p>
      <!-- end dziękujemy zapraszamy ponownie  -->
    </div>
    <!-- end a5 div -->
  </div>
</html>
`)
}

const ShareReceiptButton = ({ data }: { data: IReceiptState }) => {
  const t = useCustomColors()

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const html = returnHtml(data)
    const { uri } = await Print.printToFileAsync({ html });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };

  return (
    <SmallButtonWithIcon onPress={printToFile} text="Pobierz / Udostępnij" style={{ backgroundColor: t.indigo, marginBottom: 10 }} textStyle={{ color: "white" }} />
  )
}


export const ShareReceiptMiniButton = ({ data, iconsColor }: { data: IReceiptState, iconsColor: string }) => {
  const t = useCustomColors()

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const html = returnHtml(data)
    const { uri } = await Print.printToFileAsync({ html });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

  return (<TouchableOpacity onPress={printToFile} style={s.downloadBtn}>
    <Ionicons name="download-outline" size={22} color={iconsColor} />
  </TouchableOpacity>
  )
}


export default ShareReceiptButton


const s = StyleSheet.create({
  downloadBtn: {
    padding: 15,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})




