// Seleciona o elemento de exibição
let display = document.getElementById("display");

// Função para limpar o display
function clearDisplay() {
    display.textContent = "0";
}

// Função para adicionar um valor ao display
function appendValue(value) {
    if (display.textContent === "0") {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Função para apagar o último caractere
function deleteLast() {
    display.textContent = display.textContent.slice(0, -1) || "0";
}

// Função para calcular o resultado
function calculate() {
    try {
        display.textContent = eval(display.textContent) || "0";
    } catch (error) {
        display.textContent = "ERRO";
    }
}
