import { levels } from './levels.js';

let currentLevelIndex = 0;
let score = 0;

const runBtn = document.getElementById('run-btn');
const outputLog = document.getElementById('output-log');
const codeEditor = document.getElementById('code-editor');
const nextLevelBtn = document.getElementById('next-level-btn');
const successOverlay = document.getElementById('success-overlay');

// Configuración de visualización
const levelTitle = document.getElementById('level-title');
const levelDesc = document.getElementById('level-description');
const currentLevelText = document.getElementById('current-level-text');
const gameVisualizer = document.getElementById('game-visualizer');
const scoreText = document.getElementById('score-text');
const levelPathList = document.getElementById('level-path-list');

// Inicializar Barra Lateral
function initSidebar() {
  levels.forEach((level, idx) => {
    const li = document.createElement('li');
    li.className = 'path-node';
    li.id = `path-node-${idx}`;
    
    const topicMatch = level.title.match(/\(([^)]+)\)/);
    const topic = topicMatch ? topicMatch[1] : 'Desafío';
    
    li.innerHTML = `
      <span class="node-level">NIVEL ${idx + 1}</span>
      <span class="node-title">${topic}</span>
    `;
    
    li.addEventListener('click', () => {
      currentLevelIndex = idx;
      loadLevel(idx);
    });
    
    levelPathList.appendChild(li);
  });
}
initSidebar();

function loadLevel(index) {
  if(index >= levels.length) {
    // Has ganado todo el juego
    levelTitle.textContent = "🏆 ¡VICTORIA TOTAL!";
    levelDesc.textContent = "Has demostrado gran dominio de la lógica Python. La nave está completamente operativa gracias a ti.";
    gameVisualizer.innerHTML = `<div style="font-size: 5rem;">🧑‍🚀✨</div><p style="margin-top:20px;">Misión Cumplida</p>`;
    codeEditor.value = "# Ya no hay más errores que arreglar.\n# ¡Excelente trabajo comandante!";
    codeEditor.disabled = true;
    runBtn.style.display = 'none';
    currentLevelText.textContent = "Finalizado";
    return;
  }

  const level = levels[index];
  currentLevelText.textContent = index + 1;
  levelTitle.textContent = level.title;
  levelDesc.innerHTML = level.description;
  codeEditor.value = level.initialCode;
  gameVisualizer.innerHTML = level.visualizerHTML;
  outputLog.textContent = "Esperando ejecución de rutinas...";
  outputLog.className = "";
  
  // Actualizar Sidebar
  document.querySelectorAll('.path-node').forEach((node, idx) => {
    if (idx < index) {
      node.className = 'path-node completed';
    } else if (idx === index) {
      node.className = 'path-node active';
      // Center the active node in scroll view smoothly
      node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      node.className = 'path-node';
    }
  });
}

function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

function runCode() {
    const code = codeEditor.value;
    outputLog.textContent = '';
    outputLog.className = "";
    
    let pythonOutput = '';

    Sk.pre = "output-log";
    Sk.configure({
        output: function(text) {
            pythonOutput += text;
            outputLog.textContent += text;
        },
        read: builtinRead
    });

    // Usar Sk.misceval.asyncToPromise para ejecutar Python de forma asíncrona pero bloqueante para JS
    const myPromise = Sk.misceval.asyncToPromise(() => {
        return Sk.importMainWithBody("<stdin>", false, code, true);
    });

    myPromise.then(() => {
        checkLevelSuccess(pythonOutput);
    }, (err) => {
        outputLog.textContent += "\n\n[ERRORES DETECTADOS EN EL PROTOCOLO]:\n" + err.toString();
        outputLog.className = "error-text";
    });
}

function checkLevelSuccess(output) {
  const level = levels[currentLevelIndex];
  if(level.validate(output.trim())) {
    // Si la condición de la misión se cumple
    if (!level.completed) {
      score += 100; // Otorga 100 puntos por nivel
      scoreText.textContent = score;
      level.completed = true; // Evitar dar puntos repetidos
    }
    
    gameVisualizer.innerHTML = level.successVisualHTML;
    document.getElementById('success-message').textContent = level.successMessage;
    // Un retardo de un segundo antes del modal para que se vea la animación de la nave
    setTimeout(() => {
      successOverlay.classList.remove('hidden');
    }, 1500);
  }
}

nextLevelBtn.addEventListener('click', () => {
  successOverlay.classList.add('hidden');
  currentLevelIndex++;
  loadLevel(currentLevelIndex);
});

runBtn.addEventListener('click', runCode);

// Manejar correctamente el Tabeo en el Editor para escribir Python rápido (4 espacios)
codeEditor.addEventListener('keydown', function(e) {
  if (e.key == 'Tab') {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;
    
    // Inserta 4 espacios como indentación
    this.value = this.value.substring(0, start) +
      "    " + this.value.substring(end); 
    
    this.selectionStart = this.selectionEnd = start + 4;
  }
});

// Arrancar Misión 1
loadLevel(currentLevelIndex);
