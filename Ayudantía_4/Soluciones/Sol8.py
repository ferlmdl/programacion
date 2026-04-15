import numpy

N = int(input("Ingrese el tamaño de la matriz (N): "))

matriz = numpy.zeros([N, N])

for i in range(N):
    for j in range(N):
        if i == j: 
            matriz[i, j] = 1

print("Matriz resultante:")
print(matriz)
