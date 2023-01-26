import { TCripto, TMonedasACotizar, TCryptoCompareCotizacionInfo } from "../types.js";
import { moneda_select, criptomoneda_select, resultado_div } from "../selectors.js";


export class UI {
    validateForm(): TMonedasACotizar {
        if (!moneda_select.value.trim() || !criptomoneda_select.value.trim()) {
            this.showAlert("Ambos campos son obligatorios");
            return {
                moneda: "",
                criptomoneda: ""
            };
        }
        return {
            moneda: moneda_select.value.trim(),
            criptomoneda: criptomoneda_select.value.trim()
        };
    }

    fillCriptomonedasSelect(criptoName: TCripto[]) {
        criptoName.forEach(({ name, fullName }) => {
            const option = document.createElement("option");
            option.value = name;
            option.textContent = fullName;
            criptomoneda_select.append(option);
        });
    }

    showCotizacion(cotizacionInfo: TCryptoCompareCotizacionInfo) {
        this.resetHtml(resultado_div);
        const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacionInfo;

        const precio = document.createElement("p");
        precio.classList.add("precio");
        precio.innerHTML = `
        El precio es: <span>${PRICE}</span>
        `;

        const precioAlto = document.createElement("p");
        precioAlto.innerHTML = `
        El precio mas alto del dia es: <span>${HIGHDAY}</span>
        `;

        const precioBajo = document.createElement("p");
        precioBajo.innerHTML = `
        El precio mas bajo del dia es: <span>${LOWDAY}</span>
        `;

        const ultimasHoras = document.createElement("p");
        ultimasHoras.innerHTML = `
        Variación ultimas 24 Horas: <span>${CHANGEPCT24HOUR}%</span>
        `;

        const ultimaActualizacion = document.createElement("p");
        ultimaActualizacion.innerHTML = `
        Ultima Actualizacion: <span>${LASTUPDATE}</span>
        `;

        resultado_div.append(precio);
        resultado_div.append(precioAlto);
        resultado_div.append(precioBajo);
        resultado_div.append(ultimasHoras);
        resultado_div.append(ultimaActualizacion);
    }

    private showAlert(msg: string) {
        resultado_div.querySelector(".error")?.remove();


        const alert = document.createElement("p");

        alert.classList.add("error");

        alert.textContent = msg;
        resultado_div.append(alert);

        setTimeout(() => {
            alert.remove();
        }, 3000);
    }

    private resetHtml(element: HTMLElement) {
        while (element.firstChild) {
            element.firstChild.remove();
        }
    }

    showSpinner() {
        this.resetHtml(resultado_div);
        const spinner = document.createElement("div");
        spinner.classList.add("spinner");

        spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
        `;
        resultado_div.append(spinner);
    }

}
