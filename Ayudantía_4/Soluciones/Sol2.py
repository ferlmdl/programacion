compra = float(input("Ingrese el monto de la compra: $"))
socio = input("¿Es usted socio? (s/n): ").lower()

descuento = 0.0

if socio == 's' and compra > 50000:
    descuento = 0.20
elif socio == 's' and compra <= 50000:
    descuento = 0.10
elif socio == 'n' and compra > 80000:
    descuento = 0.05

precio_final = compra * (1 - descuento)
print(f"Descuento aplicado: {int(descuento*100)}%")
print(f"El precio final a pagar es: ${precio_final}")
