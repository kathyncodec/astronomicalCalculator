const API_BASE_URL = 'http://localhost:5007/api/astronomical';

// Carregar a lista de planetas ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    fetch(`${API_BASE_URL}/planetas`)
        .then(response => response.json())
        .then(data => {
            const selectPlaneta = document.getElementById('planeta');
            data.forEach(planeta => {
                const option = document.createElement('option');
                option.value = planeta.index;
                option.textContent = planeta.nome;
                selectPlaneta.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar planetas:', error);
            alert('Erro ao carregar planetas. Verifique se a API está rodando.');
        });
});

function calcularGravidade() {

    const peso = parseFloat(document.getElementById('peso').value);
    const planetaIndex = document.getElementById('planeta').value;
    const resultadoDiv = document.getElementById('resultadoGravidade');

    if (!peso || peso <= 0) {
        alert('Por favor, insira um peso valido.');
        return;
    }
    if (planetaIndex === '') {
        alert('Por favor, selecione um planeta.');
        return;
    }

    fetch(`${API_BASE_URL}/calcular-gravidade?planetaIndex=${planetaIndex}&peso=${peso}`)
        .then(response => response.json())
        .then(data => {
            resultadoDiv.style.display = 'block';
            resultadoDiv.innerHTML = `
                        Seu peso em ${data.planeta} seria ${data.pesoNoPlaneta} kg.
                    `;
        })
        .catch(error => {
            console.error('Erro no cálculo de gravidade:', error);
            alert('Erro: ' + (error.message || 'Falha na requisição'));
        });
}