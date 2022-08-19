


export default class CardModel {
    constructor(
        private id: string,
        private buy_id: string,
        private card_holder: string,
        private card_number: number,
        private card_expiration_date: Date,
        private card_cvv: number
    ){}
}

export interface inputCard {
    buy_id: string,
    card_holder: string,
    card_number: number,
    card_expiration_date: string,
    card_cvv: number
}
