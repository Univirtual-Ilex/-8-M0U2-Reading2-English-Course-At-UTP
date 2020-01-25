import {css} from 'styled-components'

const fontIcon = css`
@font-face {
  font-family: 'Ilex-Icons';
  src:  url('fonts/Ilex-Icons.eot?3cvmsi');
  src:  url('fonts/Ilex-Icons.eot?3cvmsi#iefix') format('embedded-opentype'),
    url('fonts/Ilex-Icons.ttf?3cvmsi') format('truetype'),
    url('fonts/Ilex-Icons.woff?3cvmsi') format('woff'),
    url('fonts/Ilex-Icons.svg?3cvmsi#Ilex-Icons') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="ilx-"], [class*=" ilx-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'Ilex-Icons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ilx-ayuda:before {
  content: "\\e901";
}
.ilx-volver:before {
  content: "\\e902";
}
.ilx-bocina:before {
  content: "\\e900";
}


`

export default fontIcon