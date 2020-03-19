import {keyframes} from 'styled-components'
//import Ilex from '../../App/variables'
const entrada_top_Y = keyframes`
0%{ 
    opacity:0;
    transform:translateY(200px);
}
40%{
    opacity:1;
}
100%{
    transform:translateY(0)
}
`
const salida_top_Y = keyframes`
0%{ opacity: 1}
100%{  display:none; opacity: 0 }


`

const zoom_in_1 = keyframes`
0%{ transform:scale(1)}
100%{  transform:scale(1.2) }

`

export default {entrada_top_Y, salida_top_Y, zoom_in_1}