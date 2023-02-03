function binaryToDecimal(number){
    return parseInt(number, 2);
}

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("#submit-button");
    const errorMessage = document.getElementById("#error-mesage");
    const inputField = document.getElementById("#input-field");
    const resultado = document.getElementById("#result");

    if(submitButton) {
        submitButton.addEventListener("click", function(event) {
            event.preventDefault();
            const value = inputField.value;
            if(value.match(/[^01]/)){
                errorMessage.style.display = "block";
                errorMessage.innerHTML = "Insira apenas 0s e 1s.";
               // this.value = this.value.replace(/[^01]/g, "");
            } else {
                errorMessage.style.display = "none";
                let decimal = binaryToDecimal(value);
                resultado.innerHTML = value + " em decimal é: " + decimal;
            }
            
            inputField.value = "";
        });
    }

})

