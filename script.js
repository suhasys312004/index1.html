function appendCharacter(char) {
    document.getElementById('result').value += char;
}

function deleteLastCharacter() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate() {
    var result = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(result);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}