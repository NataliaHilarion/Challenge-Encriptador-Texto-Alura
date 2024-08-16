const btnOculto = document.getElementsByClassName("btn-copiar");
const btnEncriptar = document.getElementsByClassName("btn-encriptar");
const btnDesencriptar = document.getElementsByClassName("btn-desencriptar");
const mensajeEncriptado = document.getElementsByClassName("text-encriptado");
const areaTextParrafo = document.getElementsByClassName("text-encriptado-p");
const mensaje = document.getElementById("area-mensaje-encriptado");
const textArea = document.getElementById("section-one-text-area");
textArea.value = "";


btnEncriptar.addEventListener("click",  function encriptandoBoton() {
  const textoEncriptado = encriptando(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  btnOculto.style.display = "block";
  mensaje.style.backgroundImage = "none";
  areaTextParrafo.style.display = "none";
})

function encriptando(stringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringEncriptado = (stringEncriptado || "").toLowerCase();

  for (let index = 0; index < matrizCodigo.length; index++) {
    if (stringEncriptado.includes(matrizCodigo[index][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[index][0],
        matrizCodigo[index][1]
      );
    }
  }
  return stringEncriptado;
}

function desencriptando(stringDesencriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  stringDesencriptado = (stringDesencriptado || "").toLowerCase();

  for (let index = 0; index < matrizCodigo.length; index++) {
    if (stringDesencriptado.includes(matrizCodigo[index][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[index][1],
        matrizCodigo[index][0]
      );
    }
  }
  return stringDesencriptado;
}

btnDesencriptar.addEventListener("click",  function desEncriptandoBoton() {
  const textoDesencriptado = desencriptando(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
  btnOculto.style.display = "block";
  mensaje.style.backgroundImage = "none";
  areaTextParrafo.style.display = "none";
})

 async function copiandoEncriptacionBoton() {
   try {
     await navigator.clipboard.writeText(mensaje.value);
   } catch (err) {
     console.error("Error al copiar el texto");
   }
 }

