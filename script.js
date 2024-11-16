document.getElementById('generatePdf').addEventListener('click', () => {
    const form = document.getElementById('fichaForm');
    const formData = new FormData(form);

    let content = '';
    for (let [key, value] of formData.entries()) {
        content += `${key}: ${value}\n`;
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Ficha_Cadastral.pdf';
    link.click();
});
