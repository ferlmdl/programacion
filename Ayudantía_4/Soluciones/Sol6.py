saldo = 200000
opcion = ""

while opcion != "4":
    print("Bienvenido al cajero: ")
    print("1) Consultar saldo")
    print("2) Retirar dinero")
    print("3) Depositar dinero")
    print("4) Salir")
    opcion = input("Elige una opción: ")

    if opcion == "1":
        print(f"Saldo disponible: ${saldo:,}")
    elif opcion == "2":
        monto = float(input("¿Cuánto deseas retirar? $"))
        if monto <= 0:
            print("Monto inválido.")
        elif monto > saldo:
            print("Saldo insuficiente.")
        else:
            saldo -= monto
            print(f"Retiro exitoso. Saldo restante: ${saldo:,}")
    elif opcion == "3":
        monto = float(input("¿Cuánto deseas depositar? $"))
        if monto <= 0:
            print("Monto inválido.")
        else:
            saldo += monto
            print(f"Depósito exitoso. Nuevo saldo: ${saldo:,}")
    elif opcion == "4":
        print("¡Hasta luego!")
    else:
        print("Opción no válida.")
