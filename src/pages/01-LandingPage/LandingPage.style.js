
import styled from "styled-components";

export const LandingPageStyled = styled.div`
  width: 100vw;
  height:100vh;
  background:lightgrey;
  display:flex;
  justify-content:center;
  align-items:center;
  
   .TetrisContainer{
    border: thick solid blue;
    width:700px;
    height:700px;
    display:flex;
    flex-flow:wrap;
  }

  .Tetris-box{
    background-color: gray;

box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    height:10%;
    width:10%;
  }
`


