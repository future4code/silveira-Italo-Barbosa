import CardModel from "../../model/CardModel"


const mockDate = new Date("2022-08-11T16:35:35.456Z")

export const cardMock = new CardModel(
    "id_mock1",
    "buy_id1",
    "italo",
    9599599599599599,
    mockDate,
    231
)

export const cardMock2 = new CardModel(
    "id_mock2",
    "buy_id2",
    "italo",
    9599599599599599,
    mockDate,
    959
)