let qrActual = null;

function generarQR() {
    const texto = document.getElementById('qrText').value;
    const contenedor = document.getElementById('qrResult');
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (!texto) {
        alert('Escribe algo primero');
        return;
    }
    
    // Limpiar anterior
    contenedor.innerHTML = '';
    contenedor.style.display = 'block';
    downloadBtn.classList.remove('hidden');
    
    // Crear QR
    new QRCode(contenedor, {
        text: texto,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function descargarQR() {
    const img = document.querySelector('#qrResult img');
    if (img) {
        const link = document.createElement('a');
        link.download = 'mi-qr.png';
        link.href = img.src;
        link.click();
    }
}