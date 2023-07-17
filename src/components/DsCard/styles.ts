
import { Card as MuiCard } from "../index";
import { styled } from "../styled";

export const Card = styled(MuiCard)(
  () => `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 0.5rem;
min-width: 20rem;
width: 40%;
padding: 4rem;
border-radius: 0.5rem;
background-color: #fff;
`
);
