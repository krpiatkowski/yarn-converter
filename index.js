function calculate() {
    const expected = Number.parseInt(document.getElementById('expected').value);
    const fromG = Number.parseInt(document.getElementById('from-g').value);
    const fromM = Number.parseInt(document.getElementById('from-m').value);
    const toG = Number.parseInt(document.getElementById('to-g').value);
    const toM = Number.parseInt(document.getElementById('to-m').value);
    const resultNode =  document.getElementById('result');

    if([expected, fromG, fromM, toG, toM].includes(NaN)) {
        resultNode.innerHTML = "-";
        return;
    }

    const result = Math.ceil((toG/toM) / (fromG/fromM) * expected);
    resultNode.innerText = result + "g";

}