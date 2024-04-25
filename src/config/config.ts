import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server: string ="http:/localhost";
const port:string = "4001";

const mnemonic: string = "push brave joke either basic punch fragile where bottom example mistake lake knee skull head more merry gap school arch gift friend certain abandon dad"

export function getClient(): algosdk.Algodv2 {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}

export function getAccount(): algosdk.Account {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}