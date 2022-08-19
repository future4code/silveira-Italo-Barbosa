export class HashManagerMock {
    createHash = (plainText: string): string => {
        return "hash"
    }

    compareHash = (plainText: string, cypherText: string): boolean => {
        return plainText === cypherText
    }
}

export class IdGeneratorMock {
    public generate(): string {
        return "id"
    }
}


import { authenticationData } from "../../types/authenticationData"

export class TokenGeneratorMock {
    public generateToken = (input: authenticationData): string => {
        return "token"
    }

    public getTokenData(token: string) {
        return {
            id: "id_mock",
            email: "email_mock"
        }
    }
}

