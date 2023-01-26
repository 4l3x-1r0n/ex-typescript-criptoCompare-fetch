import { form } from "./selectors.js";
import { cotizar, startApp } from "./functions.js";


document.addEventListener("DOMContentLoaded", startApp);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    cotizar();
});



// '';
