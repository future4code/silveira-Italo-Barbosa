import styled from "styled-components"



const LotBack = (loteria) => {

  switch (loteria) {
    case "0":
      return "#6DF29C"

    case "1":
      return "#7D6BF2"

    case "2":
      return "#D979C9"

    case "3":
      return "#F2955E"

    case "4":
      return "#58A673"

    case "5":
      return "#BFAA84"

    default:
      return "#6DF29C";

  }
}
export const BackgroundDyn = styled.div`
    background: radial-gradient(0% 10% at bottom, #efefef 60%, ${(Color) => LotBack(Color.loteria)} 60%);
    background-color:${(Color) => LotBack(Color.loteria)};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-right: 70px;
    @media(max-width: 800px) {
          height: 80%;
          width: 100%;
          background: radial-gradient(100% 15% at bottom, #dcdcdc 70%, ${(Color) => LotBack(Color.loteria)} 70%);
          padding-right: 0px;
          font-size: 30px;
      }
  `;

export const Sorteio = styled.div`
   display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 70%;
        height: 100%;
        text-align: center;
        margin: auto;
  `