function calcular(operacion) {
    let A = document.getElementById('A').value;
    let B = document.getElementById('B').value;
    let resultado;

        switch (operacion) {
            case 'suma':
                resultado = A + B;
                break;
            case 'resta':
                resultado = A - B;
                break;
            case 'multiplicacion':
                resultado = A * B;
                break;
            case 'division':
                if (B == 0) {
                    resultado = 'No se puede dividir por cero.';
                } else {
                    resultado = A/B;
                }
        }

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
