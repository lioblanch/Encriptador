const cajaEncriptar = document.querySelector(".caja-encriptar");
const mensajeDesencriptado = document.querySelector(".mensaje-desencriptado");



function botonEncriptar(){

    const textoEncriptado = encriptar(cajaEncriptar.value)
    mensajeDesencriptado.value = textoEncriptado;
    cajaEncriptar.value = "";
    mensajeDesencriptado.style.backgroundImage = "none";
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(cajaEncriptar.value)
    mensajeDesencriptado.value = textoDesencriptado
    cajaEncriptar.value = "";
}

function encriptar(stringEncriptado){

    let valoresEncriptar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i<valoresEncriptar.length; i++) {
        if(stringEncriptado.includes(valoresEncriptar[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(valoresEncriptar[i][0], valoresEncriptar[i][1]);
        }

    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){

    let valoresEncriptar = [ ["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i<valoresEncriptar.length; i++) {
        if(stringDesencriptado.includes(valoresEncriptar[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(valoresEncriptar[i][0], valoresEncriptar[i][1]);
        }

    }
    return stringDesencriptado;
}


function copiarTexto(){
    const mensajeDesencriptado = document.querySelector(".mensaje-desencriptado");
    const texto = mensajeDesencriptado.value;

    if(navigator.clipboard){
        navigator.clipboard.writeText(texto)
      .then(() => {
        console.log('Texto copiado al portapapeles.');
      })
      .catch(err => {
        console.error('Error al copiar texto: ', err);
      });
    } else {
        const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = texto;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    console.log('Texto copiado al portapapeles.');
  
    }
}