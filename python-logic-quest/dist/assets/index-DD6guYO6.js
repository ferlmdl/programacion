var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r=e((()=>{n=[{id:1,title:`1. Despertar (Listas)`,description:`Despiertas en tu nave tras un pulso electromagnético. La lista de motores en línea está incompleta. Agrega 'Principal' a la lista <code>motores</code> usando el método <code>.append()</code> y usa <code>print(motores)</code>.`,initialCode:`motores = ['Secundario', 'Auxiliar']
# Agrega 'Principal' a la lista



`,visualizerHTML:`<div class="radar-box"></div><p style="margin-top:15px; color: var(--primary);">Esperando activación...</p>`,validate:e=>e.includes(`'Secundario', 'Auxiliar', 'Principal'`)||e.includes(`"Secundario", "Auxiliar", "Principal"`),successMessage:`¡Motor Principal en línea!`,successVisualHTML:`<div style="font-size: 3rem;">🚀</div><p style="color:#10B981;">Motores estables</p>`},{id:2,title:`2. Recarga de Oxígeno (For Loop)`,description:`Tus niveles de oxígeno son bajos. Usa un ciclo <code>for</code> y <code>range(1, 6)</code> para imprimir los números y reactivar los 5 tanques.`,initialCode:`# Recarga los 5 tanques
for tanque in range(____):  # Completa el rango
    
    `,visualizerHTML:`<div style="display:flex; gap:5px;"><div class="visual-item">T1</div><div class="visual-item">T2</div><div class="visual-item">T3</div><div class="visual-item">T4</div><div class="visual-item">T5</div></div>`,validate:e=>e.includes(`1`)&&e.includes(`2`)&&e.includes(`3`)&&e.includes(`4`)&&e.includes(`5`)&&!e.includes(`6`),successMessage:`Respiración estabilizada.`,successVisualHTML:`<div style="display:flex; gap:5px;"><div class="visual-item" style="background:#10B981;">T1</div>... <div class="visual-item" style="background:#10B981;">T5</div></div>`},{id:3,title:`3. Sistema de Refrigeración (While Loop)`,description:`El núcleo se calienta rápido. Inicia una variable <code>temp = 100</code>. Usa un ciclo <code>while</code> para imprimir la temperatura e ir reduciéndola de a 20 (<code>temp -= 20</code>) mientras sea mayor o igual a 20.`,initialCode:`temp = 100
# Mientras la temp sea mayor o igual a 20


`,visualizerHTML:`<div style="font-size:2rem; color:red">🌡️ NÚCLEO CRÍTICO</div>`,validate:e=>e.includes(`100`)&&e.includes(`80`)&&e.includes(`20`)&&!e.includes(`0`),successMessage:`Núcleo enfriado correctamente.`,successVisualHTML:`<div style="font-size:2rem; color:#10B981">❄️ TEMPERATURA ÓPTIMA</div>`},{id:4,title:`4. Escudos Frontales (Índices)`,description:`Se acercan meteoritos. Tienes una lista <code>escudos = ['Trasero', 'Lateral', 'Frontal']</code>. Selecciona e imprime SOLO el escudo 'Frontal' usando su índice numérico correcto (recuerda que empiezan en 0).`,initialCode:`escudos = ['Trasero', 'Lateral', 'Frontal']
# Imprime el escudo correcto

`,visualizerHTML:`<p>Impacto inminente...</p>`,validate:e=>e.trim()===`Frontal`||e.includes(`Frontal`),successMessage:`Escudo desplegado. Impacto absorbido.`,successVisualHTML:`<div style="font-size:2rem; color:#00FFCC">🛡️ DEFENSAS ARRIBA</div>`},{id:5,title:`5. Polizón a Bordo (For + If)`,description:`Hay una forma de vida desconocida.
En tu lista de pasajeros hay un 'Alien'. Recorre la lista con un ciclo <code>for</code> y usa un <code>if</code> para imprimir 'Expulsar' cuando encuentres al 'Alien'.`,initialCode:`pasajeros = ['P1', 'P2', 'Alien', 'P3']

for ente in pasajeros:
    # Verifica si es el Alien
    
`,visualizerHTML:`<div style="color:red; animation: blink 1s infinite">ALERTA INTRUSO</div><style>@keyframes blink{50%{opacity:0}}</style>`,validate:e=>e.toLowerCase().includes(`expulsar`)&&!e.toLowerCase().includes(`p1`),successMessage:`Entidad desconocida purgada de la nave.`,successVisualHTML:`<div style="font-size:2rem;">👾🔫 EXPULSADO</div>`},{id:6,title:`6. Inventario Crítico (Len)`,description:`¿Cuántos suplementos nos quedan? Tienes una lista <code>cajas = ['Agua', 'Comida', 'Medkit']</code>. Usa la función <code>len()</code> para imprimir cuántos elementos tiene la lista.`,initialCode:`cajas = ['Agua', 'Comida', 'Medkit']
# Imprime la longitud de la lista

`,visualizerHTML:`<p>Contando suministros...</p>`,validate:e=>e.includes(`3`),successMessage:`Inventario contabilizado. Tenemos para 3 semanas.`,successVisualHTML:`<p style="color:#00FFCC">Suministros: 3</p>`},{id:7,title:`7. Ajuste de Coordenadas (Modificar Lista)`,description:`Nuestras coordenadas Z son erróneas. Tienes <code>coords = [10, 50, 0]</code>. Sustituye el último elemento (índice 2) por <code>30</code> y luego imprime la lista.`,initialCode:`coords = [10, 50, 0]
# Cambia el último número por 30


print(coords)`,visualizerHTML:`<p>Z=0. ¡Colisión inminente con un planeta!</p>`,validate:e=>e.includes(`10`)&&e.includes(`50`)&&e.includes(`30`)&&!e.includes(`0`),successMessage:`Coordenadas corregidas. Ruta salvada.`,successVisualHTML:`<p style="color:#10B981">Ruta Asegurada: [10, 50, 30]</p>`},{id:8,title:`8. Purga de Sistema (Remove)`,description:`El pulso nos infectó con un 'Virus.exe'. Usa el método <code>.remove('Virus.exe')</code> en la lista <code>archivos</code> para eliminarlo. Luego imprime la lista.`,initialCode:`archivos = ['OS.sys', 'Navegacion.dll', 'Virus.exe']
# Elimina el virus y luego imprime la lista


`,visualizerHTML:`<p style="color:red">Archivos Corruptos: 1</p>`,validate:e=>e.includes(`OS.sys`)&&!e.includes(`Virus.exe`),successMessage:`Virus neutralizado exitosamente.`,successVisualHTML:`<p style="color:#00FFCC">Sistema Limpio</p>`},{id:9,title:`9. Descifrando el S.O.S (For en Listas)`,description:`Recibimos un mensaje de auxilio codificado. Tienes una lista de caracteres basura mezclados con S.O.S.
Imprime cada letra usando un <code>for</code> solo si la letra no es 'x'.`,initialCode:`senal = ['S', 'x', 'O', 'x', 'S']

for letra in senal:
    # Si la letra NO es igual (!=) a 'x'
    
`,visualizerHTML:`<p>Analizando frecuencias...</p>`,validate:e=>e.includes(`S`)&&e.includes(`O`)&&!e.includes(`x`),successMessage:`Señal clara recibida.`,successVisualHTML:`<p style="color:#FBBF24">Mensaje: S O S</p>`},{id:10,title:`10. Secuencia de Cuenta Regresiva (While)`,description:"Prepárate para salto hiperespacial. Inicia <code>t = 3</code>. Mientras <code>t > 0</code>, imprime la variable `t` y luego réstale 1. Al final del bucle (fuera de él), imprime '¡Salto!'",initialCode:`t = 3
# Haz un bucle while


`,visualizerHTML:`<div class="radar-box" style="border-radius:0;"></div><p>Cargando Hiper-Motor...</p>`,validate:e=>e.includes(`3`)&&e.includes(`2`)&&e.includes(`1`)&&e.toLowerCase().includes(`salto`),successMessage:`¡Hemos entrado al hiperespacio!`,successVisualHTML:`<div style="font-size:3rem">🌌🚀</div>`},{id:11,title:`11. Baterías a Tope (Acumulador For)`,description:`Necesitamos saber el total de energía. Tienes una lista <code>baterias = [10, 20, 30]</code>. Crea una variable <code>total = 0</code> y un <code>for</code> que sume cada batería al total. Al final, imprime el <code>total</code>.`,initialCode:`baterias = [10, 20, 30]
total = 0
# Bucle for para sumar cada celda


print(total)`,visualizerHTML:`<p>Midiendo celdas de energía...</p>`,validate:e=>e.trim()===`60`||e.includes(`60`),successMessage:`Tenemos 60kW, suficiente para llegar.`,successVisualHTML:`<p style="color:#00FFCC">Energía Total Confirmada: 60</p>`},{id:12,title:`12. Escaneo de Amenazas (For + Condicional)`,description:`Tus sensores detectan firmas térmicas. Identifica el mayor peligro. Inicia <code>max_calor = 0</code>. Recorre <code>firmas = [45, 99, 12, 70]</code> y si una firma es mayor a <code>max_calor</code>, actualízala. Al final imprime <code>max_calor</code>.`,initialCode:`firmas = [45, 99, 12, 70]
max_calor = 0
# Encuentra el mayor número


print(max_calor)`,visualizerHTML:`<p style="color:#FBBF24">Buscando fuentes de calor...</p>`,validate:e=>e.trim()===`99`||e.includes(`99`),successMessage:`Amenaza principal identificada a 99 grados.`,successVisualHTML:`<p style="color:red">Blanco fijado (Calor: 99)</p>`},{id:13,title:`13. Extracción de Minerales (Filtrar Lista)`,description:`Hemos encontrado asteroides. Crea una nueva lista vacía <code>valiosos = []</code>. Recorre la lista <code>rocas = ['Polvo', 'Oro', 'Polvo']</code> y si la roca es 'Oro', añádela (<code>.append()</code>) a <code>valiosos</code>. Por último, imprímela.`,initialCode:`rocas = ['Polvo', 'Oro', 'Polvo']
valiosos = []
# Filtra e inserta en la nueva lista


print(valiosos)`,visualizerHTML:`<p>Minería láser activada...</p>`,validate:e=>e.includes(`['Oro']`)||e.includes(`['Oro']`),successMessage:`Hemos minado material valioso valioso para la Federación.`,successVisualHTML:`<div style="font-size:2rem">💎</div>`},{id:14,title:`14. Calibración de Motores (Range con saltos)`,description:`Los motores derecho y frontal están atascados: motores pares. Usa un bucle <code>for</code> con la función <code>range(2, 9, 2)</code> para imprimir todos los números pares del 2 al 8. (El rango va de A hasta B, saltando de a C).`,initialCode:`# Imprime los pares del 2 al 8 usando range()


`,visualizerHTML:`<p>Desatascando propulsores...</p>`,validate:e=>e.includes(`2`)&&e.includes(`4`)&&e.includes(`6`)&&e.includes(`8`)&&!e.includes(`1`)&&!e.includes(`9`),successMessage:`Motores pares libres de escombros.`,successVisualHTML:`<p style="color:#10B981">Motores Calibrados Parciales [2, 4, 6, 8]</p>`},{id:15,title:`15. Despliegue de Paneles (Booleans + While)`,description:`El sistema falla. Crea una variable <code>abierto = False</code>. Mientras <code>abierto</code> sea <code>False</code> (puedes usar <code>while not abierto:</code> o <code>while abierto == False:</code>), imprime 'Abriendo' y luego cambia el valor a <code>abierto = True</code> para no quedar en un bucle infinito.`,initialCode:`abierto = False
# Bucle while


`,visualizerHTML:`<p>Paneles Solares bloqueados.</p>`,validate:e=>e.toLowerCase().includes(`abriendo`)&&e.match(/abriendo/gi).length===1,successMessage:`Paneles solares exitosamente desplegados.`,successVisualHTML:`<div style="font-size:2rem; color:#FBBF24">☀️🔋 ENERGÍA SOLAR ACTIVADA</div>`},{id:16,title:`16. Tripulación a Zafarrancho (Slicing)`,description:`Hay que rotar guardias. Solo los dos primeros pueden descansar. Tienes la lista <code>tripulacion = ['Ana', 'Bob', 'Cal', 'Dan']</code>. Imprime el sub-segmento de la lista usando Slicing: <code>tripulacion[0:2]</code>.`,initialCode:`tripulacion = ['Ana', 'Bob', 'Cal', 'Dan']
# Imprime a los dos primeros

`,visualizerHTML:`<p>Asignando camas...</p>`,validate:e=>e.includes(`Ana`)&&e.includes(`Bob`)&&!e.includes(`Cal`),successMessage:`Guardia rotada correctamente.`,successVisualHTML:`<p style="color:#00FFCC">Descansando: Ana y Bob</p>`},{id:17,title:`17. Aceleración Exponencial (Math For)`,description:`Cuidado con la fuerza G. Inicializa <code>g = 1</code>. Haz un <code>for</code> con <code>range(3)</code>. Dentro del bucle, haz que <code>g = g * 2</code>. Tras acabar el bucle, imprime la variable <code>g</code>.`,initialCode:`g = 1
# Haz el bucle para multiplicar g * 2 tres veces


print(g)`,visualizerHTML:`<p>Acelerando motores de iones...</p>`,validate:e=>e.trim()===`8`||e.includes(`8`),successMessage:`Hemos alcanzado la velocidad de 8G sin desmayarnos.`,successVisualHTML:`<p style="color:#10B981">Velocidad 8G Estable</p>`},{id:18,title:`18. Reconocimiento Amigo (List In)`,description:`Una nave se aproxima. Para saber si es amiga, usa el operador <code>in</code>. Dado un objeto <code>codigo = 'Alpha'</code>, escribe un <code>if</code> que verifique si <code>codigo in aliados</code> y, si es así, imprime 'Bienvenido'. <code>aliados = ['Beta', 'Omega', 'Alpha']</code>.`,initialCode:`aliados = ['Beta', 'Omega', 'Alpha']
codigo = 'Alpha'
# Revisa si la nave es aliada e imprime Bienvenido


`,visualizerHTML:`<p style="color:#FBBF24">Nave interceptora acercándose...</p>`,validate:e=>e.toLowerCase().includes(`bienvenido`),successMessage:`Nave aliada identificada. Escolta habilitada.`,successVisualHTML:`<div style="font-size:2rem">🤝🛸</div>`},{id:19,title:`19. Descenso Atmosférico (Doble Condición)`,description:`Estamos cayendo. Tienes variable de escudos <code>s = 100</code> y velocidad <code>v = 8000</code>. Haz un <code>if</code> para ver si <code>s > 50</code> **y** (cláusula <code>and</code>) <code>v < 10000</code>. Si ambas se cumplen imprime 'Descenso Seguro'.`,initialCode:`s = 100
v = 8000
# Escribe el if con and


`,visualizerHTML:`<p style="color:red">Fricción Atmosférica al Máximo...</p>`,validate:e=>e.toLowerCase().includes(`descenso seguro`),successMessage:`Ingresando a la atmósfera de manera segura.`,successVisualHTML:`<p style="color:#10B981">🔥☁️ Atravesando Nubes</p>`},{id:20,title:`20. Contacto Inminente (Boss Final)`,description:`Tienes una serie de operaciones. Crea un <code>for</code> que vaya de <code>rango 1 a 6 (range(1, 6))</code>. Si el número exacto es 5, imprime '¡Aterrizado!', de lo contrario, imprime 'Bajando'. ¡Estación de mando espera tu confirmación final!`,initialCode:`# Bucle del 1 al 5.
# Usa if para el 5 y else para el resto.


`,visualizerHTML:`<div class="radar-box" style="border-radius:10px;"></div><p style="color:#00FFCC; margin-top:10px;">Aproximación final...</p>`,validate:e=>{let t=(e.match(/bajando/gi)||[]).length===4,n=e.toLowerCase().includes(`aterrizado`);return t&&n},successMessage:`¡MISION COMPUTADA! Bienvenido a la Tierra Central.`,successVisualHTML:`<div style="font-size:3rem">🌍🚀</div><br/><h2 style="color:#10B981">Aterrizaje Perfecto</h2>`}]}));t((()=>{r();var e=0,t=0,i=document.getElementById(`run-btn`),a=document.getElementById(`output-log`),o=document.getElementById(`code-editor`),s=document.getElementById(`next-level-btn`),c=document.getElementById(`success-overlay`),l=document.getElementById(`level-title`),u=document.getElementById(`level-description`),d=document.getElementById(`current-level-text`),f=document.getElementById(`game-visualizer`),p=document.getElementById(`score-text`);function m(e){if(e>=n.length){l.textContent=`🏆 ¡VICTORIA TOTAL!`,u.textContent=`Has demostrado gran dominio de la lógica Python. La nave está completamente operativa gracias a ti.`,f.innerHTML=`<div style="font-size: 5rem;">🧑‍🚀✨</div><p style="margin-top:20px;">Misión Cumplida</p>`,o.value=`# Ya no hay más errores que arreglar.
# ¡Excelente trabajo comandante!`,o.disabled=!0,i.style.display=`none`,d.textContent=`Finalizado`;return}let t=n[e];d.textContent=e+1,l.textContent=t.title,u.innerHTML=t.description,o.value=t.initialCode,f.innerHTML=t.visualizerHTML,a.textContent=`Esperando ejecución de rutinas...`,a.className=``}function h(e){if(Sk.builtinFiles===void 0||Sk.builtinFiles.files[e]===void 0)throw`File not found: '`+e+`'`;return Sk.builtinFiles.files[e]}function g(){let e=o.value;a.textContent=``,a.className=``;let t=``;Sk.pre=`output-log`,Sk.configure({output:function(e){t+=e,a.textContent+=e},read:h}),Sk.misceval.asyncToPromise(()=>Sk.importMainWithBody(`<stdin>`,!1,e,!0)).then(()=>{_(t)},e=>{a.textContent+=`

[ERRORES DETECTADOS EN EL PROTOCOLO]:
`+e.toString(),a.className=`error-text`})}function _(r){let i=n[e];i.validate(r.trim())&&(i.completed||=(t+=100,p.textContent=t,!0),f.innerHTML=i.successVisualHTML,document.getElementById(`success-message`).textContent=i.successMessage,setTimeout(()=>{c.classList.remove(`hidden`)},1500))}s.addEventListener(`click`,()=>{c.classList.add(`hidden`),e++,m(e)}),i.addEventListener(`click`,g),o.addEventListener(`keydown`,function(e){if(e.key==`Tab`){e.preventDefault();var t=this.selectionStart,n=this.selectionEnd;this.value=this.value.substring(0,t)+`    `+this.value.substring(n),this.selectionStart=this.selectionEnd=t+4}}),m(e)}))();