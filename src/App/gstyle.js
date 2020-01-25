import { createGlobalStyle } from 'styled-components'
import Ilex from './variables'
import icons from './fontIcon'


const Gstyle = createGlobalStyle`
    ${icons}

    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    body,html{
        width:100%;
        height: 100%;
    }
    body{
        @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800|Rubik:400,700,900&display=swap');
        font-family:${Ilex.font};
        font-size: ${Ilex.font_size};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    #root{
        width:100%;
        height:100%;
    }
    h1,h2,h3,h4,h5{
        font-family:${Ilex.titulos}
    }

    .btn-clean{
        border: none;
        background-color: transparent;
        outline:none;
        padding:0;
    }

`
export default Gstyle