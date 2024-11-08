document.getElementById('process-button').addEventListener('click', processImage);

function processImage() {
    const inputImage = document.getElementById('input-image').files[0];
    const output = document.getElementById('output');

    if (!inputImage) {
        alert('Por favor, selecciona una imagen.');
        return;
    }

    output.textContent = 'Procesando la imagen...';

    Tesseract.recognize(
        inputImage,
        'spa', // Idioma español.
        {
            logger: (m) => console.log(m), // Para ver el progreso en la consola.
        }
    ).then(({ data: { text } }) => {
        output.textContent = 'Texto extraído:\n' + text;
        calculateHours(text);
    }).catch((error) => {
        console.error('Error al procesar la imagen:', error);
        output.textContent = 'Ocurrió un error al procesar la imagen.';
    });
}

function calculateHours(text) {
    // Aquí se implementaría la lógica para calcular las horas trabajadas.
    console.log('Calculando horas a partir del texto:', text);
    // Ejemplo simple de salida
    document.getElementById('output').textContent += '\n\n(Cálculo de horas aún por implementar)';
}
