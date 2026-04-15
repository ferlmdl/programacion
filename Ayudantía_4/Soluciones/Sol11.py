notas = [4.5, 6.0, 3.2, 7.0, 5.5, 2.8, 4.0]

suma = 0
max_nota = notas[0] 
min_nota = notas[0]
aprobados = 0

for nota in notas:
    suma = suma + nota
    if nota > max_nota:
        max_nota = nota
        
    if nota < min_nota:
        min_nota = nota
        
    if nota >= 4.0:
        aprobados = aprobados + 1

promedio = suma / len(notas)
archivo = open("reporte_notas.txt", "w")
archivo.write("Notas\n")
archivo.write(f"Promedio del curso: {promedio:.2f}\n") 
archivo.write(f"Nota más alta: {max_nota}\n")
archivo.write(f"Nota más baja: {min_nota}\n")
archivo.write(f"Cantidad de alumnos aprobados: {aprobados}\n")
archivo.close()

print("El reporte ha sido generado exitosamente. Revisa el archivo 'reporte_notas.txt'.")
