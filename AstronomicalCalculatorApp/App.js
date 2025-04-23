const API_BASE_URL = 'http://localhost:5007/api/astronomical';


function converterUnidades() {
    const anosLuz = parseFloat(document.getElementById('anosLuz').value);
    const resultadoDiv = document.getElementById('resultadoConversao');

    if (!anosLuz || anosLuz <= 0) {
        alert('Por favor, insira um valor positivo para anos-luz.');
        return;
    }

    fetch(`${API_BASE_URL}/converter-unidades?anosLuz=${anosLuz}`)
        .then(response => response.json())
        .then(data => {
            resultadoDiv.style.display = 'block';
            resultadoDiv.innerHTML = `
                        ${data.anosLuz} anos-luz equivalem a:<br>
                        ${data.unidadesAstronomicas} UA<br>
                        ${data.quilometros} km
                    `;
        })
        .catch(error => {
            console.error('Erro na conversão:', error);
            alert('Erro: ' + (error.message || 'Falha na requisição'));
        });
}

