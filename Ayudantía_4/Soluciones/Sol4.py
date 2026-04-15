import math

a = float(input("Ingrese el lado a: "))
b = float(input("Ingrese el lado b: "))
c = float(input("Ingrese el lado c: "))

if (a + b > c) and (a + c > b) and (b + c > a):
    if a == b == c:
        print("El triángulo es Equilátero.")
    elif a == b or a == c or b == c:
        print("El triángulo es Isósceles.")
    else:
        print("El triángulo es Escaleno.")
    
    s = (a + b + c) / 2
    area = math.sqrt(s * (s - a) * (s - b) * (s - c))
    print(f"El área del triángulo es: {area}")
else:
    print("No es un triángulo válido.")
