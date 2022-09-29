import { Button } from '@mui/material';
import styled, { createGlobalStyle } from 'styled-components';

import { primaryColor, secondaryColor } from '../Components/Color'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;
export const Reajust = styled.div`
display: flex;
margin: auto;
padding: auto;
`
export const BoxButtonsInicio = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-left: 200px;
`

export const BoxEduc = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
`

export const textP = styled.div`
  width: 356px;
  height: 29px;
  margin: 6px 13px 12px 0;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  color: #fff;
`
export const TextOne = styled.div`
  color: #fff;
  font-family: Montserrat;
`

export const Italo = styled.div`
  width: 294px;
  height: 122px;
  margin: 0 570px 6px 0;
  font-family: Montserrat;
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #011726;
`
export const Linkedin = styled.a`
  width: 30px;
  height: 30px;
  size: 30px;
`
export const WhatsApp = styled.a`
  width: 30px;
  height: 30px;
  size: 30px;
`
export const Github = styled.a`
  width: 30px;
  height: 30px;
  size: 30px;
`
export const Twitter = styled.a`
  width: 30px;
  height: 30px;
  size: 30px;
`
export const Img = styled.img`
  width: 40vw;
  height: 200vh;
  margin: auto;
  align-items: center;
`

export const whenIm = styled.div`
  width: 80px;
  height: 19px;
  margin: 3px 50px 3px 800px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  text-align: center;
  color: #f2b33e;
`
export const Project = styled.div`
  width: 64px;
  height: 19px;
  margin: 3px 3px 740px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  text-align: center;
  color: #fff;
`
export const Contact = styled.div`
  width: 61px;
  height: 19px;
  margin: 3px 3px 840px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  text-align: center;
  color: #fff;
`
export const Home = styled.div` 
    width: 100vw;
    min-height: 100vh;
    background-color: #fffffb;
    margin: auto;
    padding: auto;
    align-items: center;
 `

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 90%;
height: 100%;
`;

export const TCtext = styled.div`
  width: 432px;
  height: 132px;
  margin: auto;
  padding-top: 70px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.24px;
  color: #fff;
`

export const Rectangle = styled.div`
    width: 3px;
    height: 14px;
    margin: 28px 5px 34px 16px;
    background-color: #fff;
  `

export const TextBox = styled.div`
   width: 53px;
   height: 18px;
   margin: 26px 16px 32px 5px;
   font-family: Montserrat;
   font-size: 14px;
   font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
color: #fff;
`
export const CV = styled.div`
  width: 79px;
  height: 18px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;
  color: #011726;
`
export const Present = styled.div`
  width: 40vw;
  min-height: 50vh;
  margin: 0 12px 12px 0;
  padding: 20px 100px 80px;
  background-color: #011726;
`
export const Present2 = styled.div`
  width: 40vw;
  min-height: 50vh;
  margin: auto;
  padding: 153px 117px 100px 149px;
  background-color: none;
  /* background-color: rgba(1, 23, 38, 0.47); */
`
export const Present3 = styled.div`
  width: 100vw;
  height: 50vh;
  margin: auto;
  padding: auto;
  background-color: #1b818c;
`
export const PresentR = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  align-items: center;
`
export const Text1 = styled.div`
  width: 268px;
  height: 60px;
  margin: auto;
  padding: 15px;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15px;
  text-align: center;
  color: #fff;
`
export const TextFront = styled.div`
  width: 274px;
  height: 87px;
  margin: auto;
  font-family: Montserrat;
  font-size: 55px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  color: #fff;
`
export const BoxFront = styled.div`
  width: 267px;
  height: 133px;
  margin: auto;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  color: #fff;
`
export const TextBack = styled.div`
  width: 274px;
  height: 87px;
  margin: auto;
  font-family: Montserrat;
  font-size: 55px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  color: #fff;
`
export const BoxBack = styled.div`
  width: 267px;
  height: 133px;
  margin: auto;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  color: #fff;
`
export const CurseT = styled.div`
  width: 267px;
  height: 50px;
  margin: auto;
  padding: 20px;
  align-items: center;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #fff;
`

export const Education = styled.div`
  width: 128px;
  height: 30px;
  margin: auto;
  padding: 20px;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15px;
  text-align: center;
  color: #00436c;
`
export const Educ1 = styled.div`
  width: 50vw;
  height: 50vh;
  background-color: #025e73;
`

export const EducText = styled.div`
  width: 262px;
  height: 50px;
  margin: auto;
  padding: 20px;
  align-items: center;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #fff;
`

export const EducExtra = styled.div`
  width: 50vw;
  height: 50vh;
  background-color: #82d0d9;
`
export const Extra = styled.div`
  width: 262px;
  height: 50px;
  margin: auto;
  padding: 20px;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #fff;
`
export const Projects = styled.div`
  width: 100vw;
  height: 73px;
  margin: auto;
  padding: 2px 2px 2px 2px;
  align-items: center;
  text-align: center;
  background-color: #fff;
`
export const TProjects = styled.div`
  width: 183px;
  height: 30px;
  margin: auto;
  padding: 20px;
  font-family: Montserrat;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15px;
  text-align: center;
  color: #00436c;
`
export const CText = styled.div`
  width: 267px;
  height: 122px;
  margin: auto;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.16px;
  color: #fff;
`
export const BPro = styled(Button)`
  width: 100px;
  height: 50px;
  margin-top: 40px;
  padding: 2px 2px 2px 2px;
  font-family: Montserrat;
  font-size: 6px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  text-align: center;
  color: #00436c;
  box-shadow: 5px black;
  box-sizing: 5px;
  border-color: 5px black;
`

export const Contract = styled.div`
  width: 100vw;
  height: 60vh;
  margin-top: 12px;
  background-color: #1b818c;
`
export const TContract = styled.div`
  width: 400px;
  height: 52px;
  margin: auto;
  align-items: center;
  font-family: Montserrat;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  color: #fff;
`
export const TTitle = styled.div`
  font-family: Montserrat;
  font-size: 42px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  color: #fff;
  margin: auto;
`

export const Ppad = styled.div`
  width: 45vw;
  height: 250px;
  margin: auto;
  padding: 30px;
  align-items: center;
  background-color: #1b818c;
`
export const Tpad = styled.div`
  width: 144px;
  height: 52px;
  margin: auto;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  font-family: Montserrat;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #fff;
`
export const Papad = styled.div`
  width: 104px;
  height: 25px;
  margin: auto;
  align-items: center;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #fff;
`
export const Ttext = styled.div`
  width: 368px;
  height: 90px;
  margin: auto;
  padding-top: 10px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.16px;
  color: #fff;
`
export const Bpad = styled(Button)`
  width: 50px;
  height: 50px;
  font-size: 15px;
  margin: auto;
  padding: 30px;
  border-color: black;
`

export const BoxButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const Foot = styled.div`
  width: 100vw;
  height: 58px;
  margin: 20px 0 0;
  padding: 20px;
  background-color: #024159;
`
export const TFoot = styled.div`
  width: 119px;
  height: 22px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.24px;
  text-align: center;
  color: #fff;
`

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
min-height: 100vh;
font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
max-width: 600px;
`;

export const MainContainer = styled.div`
display:flex; 
flex-direction: column;
flex-wrap: nowrap;

`;

export const Container = styled.div`
display:flex; 
flex-direction: column;
flex-wrap: nowrap;
`;

export const Header = styled.header`
  display : flex; 
  width: 90%;
  height: 60px;
  margin: 0 0 ;
  padding: 19px 49px 16px 32px;
`;

export const Title = styled.h1`  `
export const Form = styled.form`  `
export const Input = styled.div` `

export const StyledLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    #main-text {
        display: flex;
        flex-direction: column;
        font-size: 300%;
        color: ${primaryColor};
        line-height: 40px;
    }
    #snd-text {
        font-weight: bold;
        color: ${secondaryColor};
    }
`;