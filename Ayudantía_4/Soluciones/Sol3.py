a = float(input("Primer número: "))
b = float(input("Segundo número: "))
op = input("Operador (+, -, *, /, %, **): ")

if op == "+":
    print(f"Resultado: {a + b}")
elif op == "-":
    print(f"Resultado: {a - b}")
elif op == "*":
    print(f"Resultado: {a * b}")
elif op == "/":
    if b == 0:
        print("Error: división por cero")
    else:
        print(f"Resultado: {a / b}")
elif op == "%":
    if b == 0:
        print("Error: módulo por cero")
    else:
        print(f"Resultado: {a % b}")
elif op == "**":
    print(f"Resultado: {a ** b}")
else:
    print("Error: operador no válido")
