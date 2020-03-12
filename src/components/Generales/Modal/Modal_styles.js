import { css } from 'styled-components'
import Ilex from '../../../App/variables'

const style = css`
    &.ok{
        background-color: ${ Ilex.modal(84,236,194,.8)};
    }
    &.err{
        background-color: ${ Ilex.modal(204,73,110,.8)};
    }
    background-color: ${ Ilex.modal(208,127,207,.8)};
    position: absolute;
    width: 100%;
    height:100%;
    top:0;
    left:0;
    right:0;
    bottom:0%;
    z-index:10000;
    display: ${props => props.visible ? 'flex' : 'none' };
    justify-content:center;
    align-items:center;
    &>div{/*div que recibe los props*/
        background-color: #fff;
        width: ${ (props) => { 
            if(props.w && props.w!=='') {return props.w} else {return 70} } }% ;
        padding:1.5em;
        transform:translateY(-2em);
        border-radius: 0.5em;
        text-align:center;
        .ilx-modal-content{
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
            .content-ok, .content-error{
                font-size: 2em;
                font-family:${Ilex.font};
                color:${Ilex.color_grisMedio};
                font-weight:bold;
                padding: 1em 0;
            }
        }
        .ilx-modal-footer{
            button{
                margin:0 1em
            }
        }
    }

`
export default style