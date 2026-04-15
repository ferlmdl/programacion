import random

secreto = random.randint(1, 100)
intentos = 0
max_intentos = 7
adivinado = False

while intentos < max_intentos and not adivinado:
    intento = int(input(f"Intento {intentos+1}/{max_intentos} — Adivina: "))
    intentos += 1

    if intento == secreto:
        print(f"¡Correcto! Lo adivinaste en {intentos} intento(s).")
        adivinado = True
    elif intento < secreto:
        print("El número es mayor.")
    else:
        print("El número es menor.")

if not adivinado:
    print(f"Se acabaron los intentos. El número era {secreto}.")
