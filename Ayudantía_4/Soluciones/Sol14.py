import requests

url = input("Ingresa una URL: ")

try:
    r = requests.get(url, timeout=5)
    if r.status_code == 200:
        nombre = "pagina.html"
        with open(nombre, "w", encoding="utf-8") as f:
            f.write(r.text)
        lineas = r.text.count("\n")
        print(f"Archivo guardado como '{nombre}'")
        print(f"Cantidad de líneas: {lineas}")
    else:
        print(f"No se pudo guardar. Código de error: {r.status_code}")
except Exception as e:
    print(f"Error de conexión: {e}")
