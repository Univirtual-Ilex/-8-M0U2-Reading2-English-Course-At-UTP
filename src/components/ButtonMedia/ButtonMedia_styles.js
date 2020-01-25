import { css } from 'styled-components'

const styles = css`
    display: inline-block;
    margin:0.4em;
    button{
        cursor: pointer;
    }
    .btn{
        width:32px;
        height:32px;
        background-image:url(./src/button_players.png);
        background-position: left top;
        background-repeat: no-repeat;

    }
    .btn.vplay{
        background-position: -64px 0;
        &:hover{
            background-position-y: -32px;
        }

        }

    .btn.vpause{
        background-position: -96px 0;
        &:hover{
            background-position-y: -32px;
        }
        }

    .btn.vrepeat{
        background-position: 0px 0;
        &:hover{
            background-position-y: -32px;
        }
    }
`

export default styles
    