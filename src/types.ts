export type TCryptoCompareDataResponse = {
    CoinInfo: {
        Name: string;
        FullName: string;
    }
}

export type TCryptoCompareCotizacionInfo = {
    PRICE: string;
    HIGHDAY: string;
    LOWDAY: string;
    CHANGEPCT24HOUR: string;
    LASTUPDATE: string;

}

export type TCripto = {
    name: string;
    fullName: string;
}

export type TMonedasACotizar = {
    moneda: string;
    criptomoneda: string;
};
