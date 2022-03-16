import styled from "styled-components";

export const CreationSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--clr_w_primary);
  padding: 0 1.5em 5em 1.5em;
  justify-content: center;
  align-items: center;
  gap: 2em;

  .title h2 {
    color: var(--clr_b_primary);
    font-size: clamp(2rem, 3vw, 2.4rem);
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 2px;
  }

  .content {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 100%;
  }

  button {
    padding: 0.5em 3em;
    text-align: center;
    border: 1px solid var(--clr_b_primary);
    color: var(--clr_b_primary);
    text-transform: uppercase;
    letter-spacing: 4px;
    background-color: var(--clr_w_primary);
    font-family: "Alata", sans-serif;
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    padding: 0 10em;
    width:100%;
    margin-bottom:8em;
    .title {
      width: 100%;
    }
    .content {
      display: flex;
      grid-column: 1/3;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content:space-between;
      width: 100%;
      order: 2;
    }
    .content > * {
      width: max(23%,200px);
    }
    .seeall-button {
      order: 1;
      justify-self:end;
    }
    button {
      font-size: clamp(1rem, 1vw, 1.2rem);
    }
  }
`;
