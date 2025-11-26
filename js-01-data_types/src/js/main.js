console.log("Session JS01 - Data Types");

/* ================================================================
   1. VARIABLES Y NOMENCLATURA (5 min)
   ================================================================
   Reglas modernas:
   - 'const': Úsalo por defecto (valores constantes).
   - 'let': Úsalo solo si el valor va a cambiar (reasignación).
   - 'var': EVITAR (es obsoleto en desarrollo moderno).
   
   Nomenclatura (CamelCase):
   - Correcto: userAge, firstName, isActive
   - Incorrecto: user_age, FirstName, is_active
*/

// TODO: Declara 3 variables para un perfil de usuario ficticio
const userName = "John Doe"; // String
let userAge = 30; // Number
let isMember = true; // Boolean

// --- Template Literals (Backticks ``) ---
// Permiten interpolación ${} y saltos de línea. Más limpio que concatenar con '+'.
// ejemplo:  `Hola ch62, soy ${userName}`

const firstName = "Daniel";
let currentAge = 24;
const currentNationality = "Mexican";

// De las variables anteriores muestra en console el sig. mensaje:
// "My name is Daniel, I am 24 years old and I am Mexican."