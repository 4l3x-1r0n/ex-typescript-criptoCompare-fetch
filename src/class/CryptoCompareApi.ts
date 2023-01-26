import { TCryptoCompareDataResponse, TCryptoCompareCotizacionInfo } from "../types.js";
export class CryptoCompareApi {
    constructor(
        private howManyImportantCriptos: number
    ) { }

    getCriptos(): Promise<TCryptoCompareDataResponse[]> {
        return new Promise((resolve, reject) => {
            fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${this.howManyImportantCriptos}&tsym=USD`)
                .then((response) => response.json())
                .then((result) => resolve(result.Data))
                .catch((error) => console.log(error));
        });
    }

    cotizar(moneda: string, criptomoneda: string): Promise<TCryptoCompareCotizacionInfo> {

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => response.json())
                .then((result) => resolve(result.DISPLAY[criptomoneda][moneda]))
                .catch((error) => console.log(error));
        });

    }
}
