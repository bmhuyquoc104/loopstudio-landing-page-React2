import styled from "styled-components";

export const InteractiveSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5em 2em;
  justify-content: center;
  gap: 2em;
  align-items: center;
  background-color: var(--clr_w_primary);
  text-align: center;

  .image {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 0 1.2em;
  }

  h2 {
    color: var(--clr_b_primary);
    font-size: clamp(2rem, 4vw, 3rem);
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 2px;
  }

  p {
    color: var(--clr_g_primary);
    font-size: clamp(1rem, 2vw, 1.15rem);
    line-height: 1.5;
    font-family: "Alata", sans-serif;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    min-height:100vh;
    gap: 0;
    position: relative;
    justify-content:center;
    align-items: center;
    margin-top:10em;
    .image {
      width: 50%;
      position: absolute;
      top: 0vh ;
      left: 10em;
    }

    .content {
      position: absolute;
      padding: 6em;
      background-color:var(--clr_w_primary);
      left: 50vw;
      width: 50%;
      top:18vh;
      margin-right: 10em;
    }
  }
`;
