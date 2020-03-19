import { createGlobalStyle } from 'styled-components'
import Ilex from './variables'
import icons from './fontIcon'
import animations from './animations'

const Gstyle = createGlobalStyle`
    ${icons}
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800|Rubik:400,700,900&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');

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

    .entrada-top-Y{
        animation: ${animations.entrada_top_Y} 0.6s cubic-bezier(1,0,.09,1);
    }

    .entrada-top-Y-2{
        animation: ${animations.entrada_top_Y} 0.7s cubic-bezier(1,0,.09,1);
    }

    .entrada-top-Y-3{
        animation: ${animations.entrada_top_Y} 1s cubic-bezier(1,0,.09,1);
    }

    .saldida-top-Y{
        animation-name: ${animations.entrada_top_Y} 0.6s cubic-bezier(1,0,.09,1);
    }
    .zoom-in-button{
        animation-name: ${animations.zoom_in_1} 0.6s cubic-bezier(1,0,.09,1);
    }

`
export default Gstyle