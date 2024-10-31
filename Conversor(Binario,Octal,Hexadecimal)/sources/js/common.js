const checkInputNumericInt = (input) => {
  let parsedNumber = Number(input);
  return input !='' && !isNaN(parsedNumber) && parsedNumber % 1 === 0;
};

const checkInputNumericIntGreaterThanZero = (input) => {
  return checkInputNumericInt(input) && Number(input) > 0;
};

const checkInputNumericIntGreaterOrEqualThanZero = (input) => {
  return checkInputNumericInt(input) && Number(input) >= 0;
};

/**
 * Removes all child nodes for the element specified
 * 
 * @param {string} elementName
 */
const removeAllChildNodes = (elementName) => {
  let elementNode = document.getElementById(elementName);
  while (elementNode.firstChild) {
    elementNode.removeChild(elementNode.firstChild);
  }
};