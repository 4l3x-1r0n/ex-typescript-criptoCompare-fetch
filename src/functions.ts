import { UI } from "./class/UI.js";
import { CryptoCompareApi } from "./class/CryptoCompareApi.js";

const ui = new UI();
const criptoCompare = new CryptoCompareApi(10);

export function startApp() {
    criptoCompare.getCriptos()
        .then((data) => {
            const criptoNames = data.map((moneyData) => ({
                name: moneyData.CoinInfo.Name,
                fullName: moneyData.CoinInfo.FullName
            }));
            ui.fillCriptomonedasSelect(criptoNames);
        });
}

export function cotizar() {
    const { moneda, criptomoneda } = ui.validateForm();
    if (!moneda || !criptomoneda) {
        return;
    }

    ui.showSpinner();
    criptoCompare.cotizar(moneda, criptomoneda)
        .then((cotizacionInfo) => {
            ui.showCotizacion(cotizacionInfo);
        });
}
