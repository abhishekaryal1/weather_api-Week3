import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server: string ="http:/localhost";
const port:string = "4001";

const mnemonic: string = "occur warm purity age double damp rifle foster chicken drink candy all goose width atom license unit pink exhibit label north empower sort about disagree"

export function getClient(): algosdk.Algodv2 {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}

export function getAccount(): algosdk.Account {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}