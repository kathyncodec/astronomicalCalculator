# 🌟 Astronomical Calculator

Welcome to the **Astronomical Calculator**, a full-stack project that blends science with visual magic! 🚀  
Featuring a powerful RESTful API and an interactive interface built with **Three.js**, you can explore the universe, convert cosmic distances, and discover your weight on other planets—all set against a backdrop of shimmering stars that dance with your mouse movements. ✨

---

## 🎯 Features

### Backend (API)
- **Unit Conversion**: Transform light-years into kilometers and astronomical units (AU).  
- **Gravity Calculation**: Find out your weight on planets like Mars or Jupiter.  
- **Planet Listing**: View all available planets for calculations.

### Frontend (Visual Experience)
- **Starry Sky**: A 3D background with twinkling stars that move with your mouse, creating a magical experience.  
- **Intuitive Interface**: Simple forms to interact with the API.  
- **Cosmic Animations**: Results displayed with stellar visual effects.

---

## 🛠 Technologies

### Backend
- .NET Core (ASP.NET Core)  
- C#  
- RESTful API  

### Frontend
- Three.js (3D rendering)  
- HTML, CSS, JavaScript  

---

## 🌌 API Endpoints

### 1. Convert Units
Converts light-years to kilometers and astronomical units.

**Method:** `GET`  
**URL:** `/api/Astronomical/converter-unidades?anosLuz={value}`  

**Parameters:**  
- `anosLuz` (double): Light-years value (positive).  

**Response (200):**  
```json
{
  "AnosLuz": 1,
  "UnidadesAstronomicas": 63241,
  "Quilometros": 9461000000000
}
```

**Error (400):**  
- `"Light-years must be a positive value."`

### 2. Calculate Gravity
Calculates your weight on another planet.

**Method:** `GET`  
**URL:** `/api/Astronomical/calcular-gravidade?planetaIndex={index}&peso={value}`  

**Parameters:**  
- `planetaIndex` (int): Planet index (0 to 7).  
- `peso` (double): Weight on Earth in kg (greater than zero).  

**Response (200):**  
```json
{
  "Planeta": "Mars",
  "PesoNoPlaneta": 37.86
}
```

**Errors (400):**  
- `"Invalid planet."`  
- `"Weight must be greater than zero."`

### 3. List Planets
Returns the list of available planets.

**Method:** `GET`  
**URL:** `/api/Astronomical/planetas`  

**Response (200):**  
```json
[
  { "Index": 0, "Nome": "Mercury" },
  { "Index": 1, "Nome": "Venus" },
  { "Index": 2, "Nome": "Earth" },
  { "Index": 3, "Nome": "Mars" },
  { "Index": 4, "Nome": "Jupiter" },
  { "Index": 5, "Nome": "Saturn" },
  { "Index": 6, "Nome": "Uranus" },
  { "Index": 7, "Nome": "Neptune" }
]
```

---

## 🚀 How to Run

### Prerequisites
- **Backend**: .NET SDK 6.0 or higher, code editor (e.g., VS Code).  
- **Frontend**: Node.js (if using npm), browser with WebGL support.

### Steps

#### Backend
1. Clone the repository:  
   ```bash
   git clone <REPOSITORY_URL>
   ```
2. Navigate to the backend directory:  
   ```bash
   cd AstronomicalCalculatorApi
   ```
3. Restore dependencies:  
   ```bash
   dotnet restore
   ```
4. Start the API:  
   ```bash
   dotnet run
   ```
5. Access: `http://localhost:5000`

#### Frontend
1. Navigate to the frontend directory:  
   ```bash
   cd AstronomicalCalculatorFrontend
   ```
2. Install dependencies (if applicable):  
   ```bash
   npm install
   ```
3. Start the server:  
   ```bash
   npx vite
   ```
4. Access: `http://localhost:3000`  
5. Ensure the backend is running for API requests.

### Integration
- The frontend makes requests to `http://localhost:5000/api/Astronomical`. Update the base URL in the frontend code if needed.  
- The stars in the background respond to mouse movements, enhancing the calculations with a captivating visual experience.

---

## 🌠 Visuals with Three.js
- **Dynamic Stars**: A 3D background with twinkling stars that move with your mouse, creating an interactive cosmic sky.  
- **Interactivity**: Simple forms paired with animations that highlight results.  
- **Immersion**: A visual experience that makes you feel like you're exploring the universe!

---

## 🧪 Examples

### Convert 2 Light-Years
Enter "2" in the light-years field:  
```json
{
  "AnosLuz": 2,
  "UnidadesAstronomicas": 126482,
  "Quilometros": 18922000000000
}
```
The stars may pulse to illustrate the distance! ✨

### Weight on Mars
Select "Mars" (index 3) and enter "70" kg:  
```json
{
  "Planeta": "Mars",
  "PesoNoPlaneta": 26.48
}
```
The result appears with a stellar glow in the interface.

---

## 🤝 Contributions
Want to add a cosmic touch? 🌟  
1. Fork the repository.  
2. Create a branch:  
   ```bash
   git checkout -b my-feature
   ```
3. Commit your changes:  
   ```bash
   git commit -m "New feature"
   ```
4. Push:  
   ```bash
   git push origin my-feature
   ```
5. Open a Pull Request.

---

## 📜 License
[MIT License](LICENSE) - Explore, modify, and share!
