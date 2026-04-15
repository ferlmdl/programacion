n = int(input("Ingresa un número: "))

print("Pirámide:")
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()

print("Pirámide invertida:")
for i in range(n, 0, -1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
