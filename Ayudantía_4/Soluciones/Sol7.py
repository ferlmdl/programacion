especiales = "@#$!"
valida = False

while not valida:
    clave = input("Ingresa una contraseña: ")

    largo = len(clave) >= 8
    mayuscula = any(c.isupper() for c in clave)
    numero   = any(c.isdigit() for c in clave)
    especial  = any(c in especiales for c in clave)

    if largo and mayuscula and numero and especial:
        valida = True
        print("Contraseña aceptada")
    else:
        print("Contraseña débil. Requisitos faltantes:")
        if not largo: print("  - Mínimo 8 caracteres")
        if not mayuscula: print("  - Al menos una mayúscula")
        if not numero:   print("  - Al menos un número")
        if not especial:   print("  - Al menos un carácter especial (@#$!)")
