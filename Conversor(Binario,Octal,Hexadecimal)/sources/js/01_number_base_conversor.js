/**
 * Convierte a la base especificada (base), mostrando un
 * mensaje con el texto asociado a la misma (baseName)
 * 
 * @param {string} baseName
 * @param {number} base
 */
const convertToBase = (baseName, base) => {
  removeAllChildNodes("output_p");
  let inputField = document.getElementById("input_number").value;
  let outputText = `Error: no puedo procesar el valor '${inputField}'`;
  if (checkInputNumericIntGreaterOrEqualThanZero(inputField)) {
    outputText = `El resultado de convertir '${inputField}' a ${baseName} es '${Number(inputField).toString(base)}'`;
  }
  document.getElementById("output_p").appendChild(document.createTextNode(outputText));
};

const convertToBinary = () => convertToBase("binario", 2);
const convertToOctal = () => convertToBase("octal", 8);
const convertToHexadecimal = () => convertToBase("hexadecimal", 16);
