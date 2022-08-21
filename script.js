let texto = document.querySelector("#inputMensagem");
let mostraTexto = document.querySelector("#resultado");
let fundoOutput = document.querySelector(".outputMensagem");

let botaoCriptografar = document.getElementById("botao-criptografar");
let botaoDescriptografar = document.getElementById("botao-descriptografar");
let botaoCopy = document.getElementById("botao-copy");

function removeImage() {
    fundoOutput.style.background = "white";
}

function criptografaTexto() {
    let criptografia = texto.value;
    criptografia = criptografia.replace(/e/gi , "enter");
    criptografia = criptografia.replace(/i/gi , "imes");
    criptografia = criptografia.replace(/a/gi , "ai");
    criptografia = criptografia.replace(/o/gi , "ober");
    criptografia = criptografia.replace(/u/gi , "ufat");
    
    removeImage();
    mostraTexto.innerText = criptografia;
}

function descriptografaTexto() {
    let descriptografia = texto.value;
    descriptografia = descriptografia.replace(/enter/gi , "e");
    descriptografia = descriptografia.replace(/imes/gi , "i");
    descriptografia = descriptografia.replace(/ai/gi , "a");
    descriptografia = descriptografia.replace(/ober/gi , "o");
    descriptografia = descriptografia.replace(/ufat/gi , "u");

    removeImage();
    mostraTexto.innerText = descriptografia;
}

function copiaTexto() {
    mostraTexto.select();
    mostraTexto.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    mostraTexto.innerText = "";
}

botaoCriptografar.onclick = criptografaTexto;
botaoDescriptografar.onclick = descriptografaTexto; 
botaoCopy.onclick = copiaTexto;