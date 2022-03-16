import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4em 0;
  background-color: var(--clr_b_primary);
  gap: 3.5em;

  ul {
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
      gap: 1.5em;
  }
  li{
      list-style-type: none;
      color: var(--clr_w_primary);
      padding:0 0 0.25em 0;
      font-family: 'Alata', sans-serif;
      font-size:clamp(1rem,1.5vw,1.0rem);
      width:fit-content;
  }
  .social-connect{
      display: flex;
      gap: 1.5em;
      align-items:center;
      justify-content: center;
      width:fit-content;
  }
  .copyright{
      color: var(--clr_g_primary);
      font-family: 'Alata', sans-serif;
      font-size:clamp(1rem,1.5vw,1.0rem);
      margin-top:-2em;
  }
  @media (min-width:768px){
      flex-direction:row;
      justify-content:space-between;
      align-items:stretch;
      flex-wrap: wrap;
      padding: 2em 10em;
      width: 100%;
      gap: 2em;

      &>*{
          width:42%;
      }

      .social-connect{
          order:2;
          
      }

      ul{
          flex-direction:row;
          order:3;
          gap:1em;
          justify-content:space-between;
      }
      .copyright{
          order:4;
          margin-top:0;
          text-align:right;
          margin-top:-1em;

      }

  }
`;
