import { Validator } from "../library/validator.js";
import { form } from '../main.js'

export default function showErrors(isSuccess,elem,elemName) {
    
    let messageError = form.querySelector(`[data-for="${elemName}"]`);
    
    if (isSuccess) {
        elem.classList.remove("error");
        elem.classList.add("success");
        messageError.innerHTML = "";
        messageError.style.display = "none";
    } else {
        elem.classList.add("error");
        elem.classList.remove("success");
        messageError.innerHTML = Object.values(Validator.errors[elemName] || {}).map(message => `<span>${message}</span>`).join('');
        messageError.style.display = "block";
    }
}