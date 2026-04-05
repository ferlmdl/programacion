export const levels = [
  // --- CAPÍTULO 1: LA ANOMALÍA (Variables e IFs simples) ---
  {
    id: 1,
    title: "1. Diagnóstico de Motores (Variables)",
    description: "La nave ha sufrido un pulso electromagnético. Define una variable `energia` con valor `100`. Luego, crea otra variable `dano` con valor `45`. Finalmente, imprime la resta de energía menos daño. (¡Hazlo tú mismo!)",
    initialCode: "# Declara las variables y muestra el resultado\n\n\n\n",
    visualizerHTML: `<div class="radar-box"></div><p style="margin-top:15px; color: var(--primary);">Escaneando sistemas...</p>`,
    validate: (output) => output.includes("55") && !output.endsWith("0"),
    successMessage: "Nivel de energía diagnosticado.",
    successVisualHTML: `<div style="font-size: 3rem;">⚡</div><p style="color:#10B981;">Energía estable: 55</p>`
  },
  {
    id: 2,
    title: "2. Señal Cifrada (Módulo %)",
    description: "Recibimos una comunicación. Las señales aliadas siempre tienen un ID número par. Usa el operador módulo `%` para saber si `señal_id = 1204` es par. Imprime el resultado de `señal_id % 2`.",
    initialCode: "senal_id = 1204\n# Calcula e imprime el residuo de la división por 2\n\n\n",
    visualizerHTML: `<div style="display:flex; gap:5px;"><div class="visual-item">?</div></div><p>Desencriptando...</p>`,
    validate: (output) => output.trim() === "0",
    successMessage: "¡Residuo cero! Es una nave aliada.",
    successVisualHTML: `<div style="font-size: 2rem;">📻</div><p style="color:#10B981;">Señal Aliada Confirmada</p>`
  },
  {
    id: 3,
    title: "3. Temperatura Crítica (IF / ELSE)",
    description: "El núcleo se calienta. Te damos la variable `temp`. Escribe tu primer bloque condicional:\nSi `temp` es mayor o igual a `100`, imprime `'Peligro'`. Si es menor (usando `else`), imprime `'Seguro'`. Presta atención a los espacios.",
    initialCode: "temp = 115\n# Escribe el if y el else abajo:\n\n\n",
    visualizerHTML: `<div style="font-size:2rem; color:red">🌡️ NÚCLEO CRÍTICO</div>`,
    validate: (output) => output.toLowerCase().includes("peligro") && !output.toLowerCase().includes("seguro"),
    successMessage: "Protocolos térmicos activados.",
    successVisualHTML: `<div style="font-size:2rem; color:#10B981">❄️ TEMPERATURA MONITOREADA</div>`
  },

  // --- CAPÍTULO 2: LÓGICA DE SUPERVIVENCIA ---
  {
    id: 4,
    title: "4. Escudos Multicapa (Lógica AND)",
    description: "Dos escudos protegen la nave: frontal y trasero. Si **ambos** superan la carga de 50, estamos a salvo.\nTienes `frontal = 80` y `trasero = 45`.\nUsa un `if` con el operador `and` para imprimir `'Protegidos'` si frontal > 50 y trasero > 50. Si no (con `else`), imprime `'Vulnerables'`.",
    initialCode: "frontal = 80\ntrasero = 45\n# Escribe la condición usando 'and'. Usa else para el escenario vulnerable.\n\n\n\n",
    visualizerHTML: `<p>Impacto de meteoritos inminente...</p>`,
    validate: (output) => output.toLowerCase().includes("vulnerables"),
    successMessage: "Estado defensivo actualizado. El escudo trasero requiere recarga.",
    successVisualHTML: `<div style="font-size:2rem; color:#FBBF24">🛡️ IMPACTO RECIBIDO - ALERTA</div>`
  },
  {
    id: 5,
    title: "5. Sistemas Vitales (ELIF encadenado)",
    description: "El soporte vital debe clasificarse. Escribe la lógica completa:\nSi `oxigeno > 80`, imprime `'Optimo'`.\nSino si (`elif`) `oxigeno > 50`, imprime `'Estable'`.\nSino (`else`), imprime `'Critico'`.\nHazlo para `oxigeno = 65`.",
    initialCode: "oxigeno = 65\n# Clasifica el oxígeno con if, elif y else\n\n\n\n\n\n",
    visualizerHTML: `<div style="color:cyan;">O2 en flujo constante...</div>`,
    validate: (output) => output.toLowerCase().includes("estable") && !output.toLowerCase().includes("optimo"),
    successMessage: "Niveles de oxígeno identificados.",
    successVisualHTML: `<div style="font-size:2rem; color:#00FFCC">💨 SISTEMA ESTABLE</div>`
  },
  {
    id: 6,
    title: "6. Secuencia de Aborto (Lógica OR y NOT)",
    description: "Durante el despegue interplanetario, abortaremos si el tren de aterrizaje no se guardó o si la orden de cabina está cancelada.\n`tren_guardado = False`\n`orden_cancelada = False`\nEscribe un código largo: Si `not tren_guardado` **o** (`or`) `orden_cancelada == True`, imprime `'Abortar Despegue'`. De lo contrario imprime `'Acelerar'`.",
    initialCode: "tren_guardado = False\norden_cancelada = False\n# Crea la estructura IF requerida. Trata de no equivocarte al indentar.\n\n\n\n\n",
    visualizerHTML: `<p>Motores en ignición principal.</p>`,
    validate: (output) => output.toLowerCase().includes("abortar"),
    successMessage: "Emergencia detectada. Ignición detenida a tiempo.",
    successVisualHTML: `<p style="color:red">DESPEGUE ABORTADO</p>`
  },

  // --- CAPÍTULO 3: EL ARMERÍA (Inicios de Listas) ---
  {
    id: 7,
    title: "7. Inventario Físico (Creación de Listas)",
    description: "Tu computadora soporta almacenar múltiples datos juntos llamados Listas.\nCrea manualmente una lista llamada `armas` que contenga 3 textos: `'Laser'`, `'Torpedos'`, y `'Plasma'`. Luego, sabiendo que el primer elemento es el 0, **imprime el segundo elemento** (Torpedos).",
    initialCode: "# Crea la lista de 3 textos y luego imprime el que corresponde al índice 1.\n\n\n\n",
    visualizerHTML: `<p>Contando suministros de ataque...</p>`,
    validate: (output) => output.includes("Torpedos"),
    successMessage: "Torpedos enlazados y listos.",
    successVisualHTML: `<p style="color:#00FFCC">Arma seleccionada: Torpedos</p>`
  },
  {
    id: 8,
    title: "8. Redistribución de Carga (Sustitución en Lista)",
    description: "Tenemos una lista de compartimientos con comida: `cargas = [10, 50, 0, 30]`.\nEl compartimiento número 2 (el de índice 2, que ahora tiene 0) acaba de recibir 45 raciones extras. Modifica por código ese valor usando el índice, y luego imprime la lista entera.",
    initialCode: "cargas = [10, 50, 0, 30]\n# Modifica el elemento en la posición 2 para que valga 45\n\n\n# Imprime cargas\n",
    visualizerHTML: `<p>Bahía 2 en nivel Cero. Alerta alimenticia.</p>`,
    validate: (output) => output.includes("45") && !output.split(/[ \n\r]+/).includes("0"),
    successMessage: "Las raciones se han equilibrado correctamente.",
    successVisualHTML: `<p style="color:#10B981">Inventario Asegurado: [10, 50, 45, 30]</p>`
  },
  {
    id: 9,
    title: "9. Recolección Espacial (Append y Remove)",
    description: "Encontramos minerales!\n`minerales = ['Roca', 'Plata']`\n1. Usa `minerales.append('Oro')` para añadir material valioso.\n2. Usa `minerales.remove('Roca')` para botar la basura que ocupa espacio.\n3. Imprime la lista completa.",
    initialCode: "minerales = ['Roca', 'Plata']\n# Escribe ambas operaciones y luego el print\n\n\n\n",
    visualizerHTML: `<p>Brazo mecánico en acción...</p>`,
    validate: (output) => output.includes("Oro") && output.includes("Plata") && !output.includes("Roca"),
    successMessage: "Basura expulsada. Almacén optimizado.",
    successVisualHTML: `<p style="color:#FBBF24">Riqueza Mineral Obtenida</p>`
  },

  // --- CAPÍTULO 4: GESTIÓN AVANZADA (Listas + Condicionales) ---
  {
    id: 10,
    title: "10. Tripulación Insuficiente (Len e IFs)",
    description: "La función `len(lista)` nos dice cuántos elementos hay. Cuentas con esta lista de técnicos: `tripulacion = ['Ana', 'Bob']`.\nHaz un bloque If/Else: Si `len(tripulacion) < 3`, usa `.append('Clon')` en la lista y luego imprime `'Refuerzo creado'`. Si no (else), imprime `'Personal completo'`. (No olvides los espacios dentro de tu bloque).",
    initialCode: "tripulacion = ['Ana', 'Bob']\n# Arma tu bloque condicional midiendo la longitud\n\n\n\n\n\n",
    visualizerHTML: `<p>Calculando puestos vitales...</p>`,
    validate: (output) => output.toLowerCase().includes("refuerzo"),
    successMessage: "Clon de asistencia activado exitosamente.",
    successVisualHTML: `<div style="font-size:2rem">🧑‍🔧🤖🧑‍🔧</div>`
  },
  {
    id: 11,
    title: "11. Decodificador (Strings como Listas)",
    description: "Los String (textos) también se pueden medir con `len()` y acceder por índices.\nLa variable `codigo = 'Z-99'` acaba de entrar. Escribe un código largo:\nSi el primer caracter (`codigo[0]`) es `'Z'` **y** la longitud de la cadena es `4`, imprime `'Sector Z Autorizado'`. Sino, imprime `'Deneagdo'`. ¡Intenta no usar atajos!",
    initialCode: "codigo = 'Z-99'\n# Construye el condicional completo (mira ambos requisitos con and)\n\n\n\n\n\n",
    visualizerHTML: `<p style="color:#FBBF24">Autenticando puerta espacial...</p>`,
    validate: (output) => output.toLowerCase().includes("sector z autorizado") || output.toLowerCase().includes("autorizado"),
    successMessage: "Puerta al Sector Z abierta.",
    successVisualHTML: `<div style="font-size:2rem">🚪🔓</div>`
  },
  {
    id: 12,
    title: "12. Protocolo de Aterrizaje (Reemplazo Manual)",
    description: "Tienes los estados de los 3 propulsores: `atr = ['Malo', 'Malo', 'Malo']`.\nSe acercan las montañas. No podemos usar if/else normales aquí. Solo quiero que asuman control manual:\n1. Cambia por índice el primer `Malo` a `'Ok'`.\n2. Cambia el segundo a `'Ok'`.\n3. Cambia el tercero a `'Ok'`.\n4. Imprime la lista completa. (Te obligará a escribir 4 líneas completas).",
    initialCode: "atr = ['Malo', 'Malo', 'Malo']\n# Escribe 4 líneas de código hacia abajo arreglando cada uno por su índice.\n\n\n\n\n",
    visualizerHTML: `<p style="color:red">⚠️ TURBULENCIA FUERTE</p>`,
    validate: (output) => output.toLowerCase().includes("'ok', 'ok', 'ok'") || output.toLowerCase().includes('"ok", "ok", "ok"'),
    successMessage: "Propulsores manuales bloqueados en verde.",
    successVisualHTML: `<p style="color:#10B981">✈️ Vuelo Controlado</p>`
  },

  // --- CAPÍTULO 5: EXAMEN DE GRADUACIÓN (Integración Pura) ---
  {
    id: 13,
    title: "13. Sobrecarga de Datos (Condicionales + Append)",
    description: "Hemos encontrado un planeta. Los sensores mandaron unos datos.\nCrea una lista vacía `habitable = []`.\nTienes dos variables: `agua = True` y `veneno = False`.\nConstruye un bloque if: Si hay agua **y** (and) el veneno es falso (`veneno == False` o `not veneno`), entonces usa `.append('Planeta Tierra 2')` a la lista `habitable`, y enseguida imprime la lista.\n(Recuerda no imprimir si la condición no se cumple).",
    initialCode: "agua = True\nveneno = False\n# Crea la lista vacía, escribe el condicional, haz el append e imprime adentro del IF.\n\n\n\n\n\n\n",
    visualizerHTML: `<p>Analizando ecosistema...</p>`,
    validate: (output) => output.includes("Planeta Tierra 2"),
    successMessage: "¡Hemos encontrado un lugar para la humanidad!",
    successVisualHTML: `<div style="font-size:3rem">🌍</div>`
  },
  {
    id: 14,
    title: "14. Fallo Masivo (Múltiples ELIF de Rescate)",
    description: "Tu nave se partió a la mitad. Crea una lista `acciones = []`. Hay una variable `gravedad = 15`.\nElabora una condición triple (con elif):\n1. Si `gravedad > 20`: Agrega `'Traje'` a `acciones`.\n2. Sino si `gravedad > 10`: Agrega `'Correr'` a `acciones`. (Esta es la que debe entrar).\n3. Sino (`else`): Agrega `'Flotar'` a `acciones`.\nTras terminar el bloque if/elif/else, en la última línea (sin indentar), imprime `acciones`.",
    initialCode: "gravedad = 15\nacciones = []\n# Escribe toda la lógica y el print final por tu cuenta:\n\n\n\n\n\n\n\n\n",
    visualizerHTML: `<div class="radar-box" style="border-radius:10px;"></div><p style="color:red; margin-top:10px;">Alerta de Fisura en Casco</p>`,
    validate: (output) => output.includes("Correr") && !output.includes("Flotar") && !output.includes("Traje"),
    successMessage: "Reaccionaste a tiempo según la gravedad local.",
    successVisualHTML: `<p style="color:#00FFCC">Corriendo al módulo de escape...</p>`
  },
  {
    id: 15,
    title: "15. Graduación: El Módulo de Escape (Desafío Final)",
    description: "Ya casi aterrizamos de emergencia.\nTenes: `pasajeros = ['Presidente', 'Cientifico']`, `pod_listo = True`, `bateria = 40`. \nEscribe un código largo con un IF general y un ELSE lógico:\nSI (1) la cantidad de `pasajeros` es igual a 2 (`len() == 2`), **Y** (2) `pod_listo` es verdadero, **Y** (3) `bateria` es mayor a 30... entonces haz: `pasajeros.remove('Presidente')` seguido de un `print('Salvados')`.\nEn caso contrario (else), imprime `'Game Over'`. ¡Demuestra tu maestría!",
    initialCode: "pasajeros = ['Presidente', 'Cientifico']\npod_listo = True\nbateria = 40\n\n# La prueba de fuego comandante. No hay margen de error.\n\n\n\n\n\n\n\n",
    visualizerHTML: `<div style="font-size:3rem">🚨</div><p style="color:yellow; margin-top:10px;">Preparando eyección</p>`,
    validate: (output) => output.toLowerCase().includes("salvados") && !output.toLowerCase().includes("game over"),
    successMessage: "¡MISION COMPUTADA! Bienvenido a la Tierra Central.",
    successVisualHTML: `<div style="font-size:3rem">🚀✨</div><br/><h2 style="color:#10B981">Aterrizaje Perfecto. Juego Terminado.</h2>`
  }
];
