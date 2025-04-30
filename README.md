# 🌟 Calculadora Astronômica

Bem-vindo à **Calculadora Astronômica**, um projeto full-stack que une ciência e encanto visual! 🚀  
Com uma API RESTful poderosa e uma interface interativa feita com **Three

---

## 🎯 Funcionalidades

### Backend (API)
- **Conversão de Unidades**: Transforme anos-luz em quilômetros e unidades astronômicas (UA).
- **Cálculo de Gravidade**: Descubra seu peso em planetas como Marte ou Júpiter.
- **Listagem de Planetas**: Veja a lista de planetas disponíveis para cálculos.

### Frontend (Experiência Visual)
- **Céu Estrelado**: Um fundo 3D com estrelas brilhantes que se movem com o mouse, criando uma experiência mágica.
- **Interface Intuitiva**: Formulários simples para interagir com a API.
- **Animações Cósmicas**: Resultados exibidos com efeitos visuais estelares.

---

## 🛠 Tecnologias

### Backend
- .NET Core (ASP.NET Core)
- C#
- API RESTful

### Frontend
- Three.js (renderização 3D)
- HTML, CSS, JavaScript

---

## 🌌 Endpoints da API

### 1. Converter Unidades
Converte anos-luz em quilômetros e unidades astronômicas.

**Método:** `GET`  
**URL:** `/api/Astronomical/converter-unidades?anosLuz={valor}`  

**Parâmetros:**  
- `anosLuz` (double): Valor em anos-luz (positivo).

**Resposta (200):**  
```json
{
  "AnosLuz": 1,
  "UnidadesAstronomicas": 63241,
  "Quilometros": 9461000000000
}
```

**Erro (400):**  
- `"Anos-luz deve ser um valor positivo."`

### 2. Calcular Gravidade
Calcula seu peso em outro planeta.

**Método:** `GET`  
**URL:** `/api/Astronomical/calcular-gravidade?planetaIndex={índice}&peso={valor}`  

**Parâmetros:**  
- `planetaIndex` (int): Índice do planeta (0 a 7).  
- `peso` (double): Peso na Terra em kg (maior que zero).

**Resposta (200):**  
```json
{
  "Planeta": "Marte",
  "PesoNoPlaneta": 37.86
}
```

**Erros (400):**  
- `"Planeta inválido."`  
- `"Peso deve ser maior que zero."`

### 3. Listar Planetas
Retorna a lista de planetas disponíveis.

**Método:** `GET`  
**URL:** `/api/Astronomical/planetas`  

**Resposta (200):**  
```json
[
  { "Index": 0, "Nome": "Mercúrio" },
  { "Index": 1, "Nome": "Vênus" },
  { "Index": 2, "Nome": "Terra" },
  { "Index": 3, "Nome": "Marte" },
  { "Index": 4, "Nome": "Júpiter" },
  { "Index": 5, "Nome": "Saturno" },
  { "Index": 6, "Nome": "Urano" },
  { "Index": 7, "Nome": "Netuno" }
]
```

---

## 🚀 Como Executar

### Pré-requisitos
- **Backend**: .NET SDK 6.0 ou superior, editor de código (ex.: VS Code).  
- **Frontend**: Node.js (se usar npm), navegador com suporte a WebGL.

### Passos

#### Backend
1. Clone o repositório:  
   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   ```
2. Entre no diretório do backend:  
   ```bash
   cd AstronomicalCalculatorApi
   ```
3. Restaure as dependências:  
   ```bash
   dotnet restore
   ```
4. Inicie a API:  
   ```bash
   dotnet run
   ```
5. Acesse: `http://localhost:5000`

#### Frontend
1. Entre no diretório do frontend:  
   ```bash
   cd AstronomicalCalculatorFrontend
   ```
2. Instale as dependências (se houver):  
   ```bash
   npm install
   ```
3. Inicie o servidor:  
   ```bash
   npm start
   ```
4. Acesse: `http://localhost:3000`  
5. Certifique-se de que o backend está rodando.

### Integração
- O frontend consome a API em `http://localhost:5000/api/Astronomical`. Ajuste a URL no código do frontend se necessário.  
- As estrelas no fundo reagem ao movimento do mouse, tornando os cálculos ainda mais envolventes.

---

## 🌠 Visual com Three.js
- **Estrelas Dinâmicas**: Um fundo 3D com estrelas que brilham e se movem com o mouse, criando um céu cósmico interativo.  
- **Interatividade**: Formulários simples com animações que destacam os resultados.  
- **Imersão**: Uma experiência visual que faz você se sentir explorando o universo!

---

## 🧪 Exemplos

### Converter 2 anos-luz
Digite "2" no campo de anos-luz:  
```json
{
  "AnosLuz": 2,
  "UnidadesAstronomicas": 126482,
  "Quilometros": 18922000000000
}
```
As estrelas podem pulsar para ilustrar a distância! ✨

### Peso em Marte
Escolha "Marte" (índice 3) e insira "70" kg:  
```json
{
  "Planeta": "Marte",
  "PesoNoPlaneta": 26.48
}
```
O resultado aparece com um brilho estelar na interface.

---

## 🤝 Contribuições
Quer adicionar um toque cósmico? 🌟  
1. Faça um fork do repositório.  
2. Crie uma branch:  
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas mudanças:  
   ```bash
   git commit -m "Nova feature"
   ```
4. Envie:  
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## 📜 Licença
[MIT License](LICENSE) - Explore, modifique e compartilhe!
