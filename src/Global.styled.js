import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
     :root{
         --clr_w_primary: hsl(0, 0%, 100%);
         --clr_b_primary:hsl(0, 0%, 0%);
         --clr_dr_primary:hsl(0, 0%, 55%);
         --clr_g_primary:hsl(0, 0%, 41%);
     }

    *,*::after,*::before{
        padding: 0;
        margin: 0;
        box-sizing:border-box;
    }

    body{
        min-height:100vh;
        font-size:0.9375rem;
    }
`