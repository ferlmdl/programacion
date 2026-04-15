notas = []
entrada = input("Ingresa una nota (o -1 para terminar): ")

while entrada != "-1":
    notas.append(float(entrada))
    entrada = input("Ingresa una nota (o -1 para terminar): ")

if len(notas) == 0:
    print("No ingresaste notas.")
else:
    suma = 0
    mayor = notas[0]
    menor = notas[0]
    sobre_4 = 0

    for n in notas:
        suma += n
        if n > mayor:
            mayor = n
        if n < menor:
            menor = n
        if n >= 4.0:
            sobre_4 += 1

    print(f"Promedio: "suma/len(notas))
    print("Nota más alta: " mayor)
    print("Nota más baja: "menor)
    print(f"Sobre 4.0: {sobre_4} nota(s)")
