import requests

urls = [
    "https://www.google.cl",
    "https://www.wikipedia.org",
    "https://www.url-inexistente-xyz.com"
]

for url in urls:
    print(f"\nURL: {url}")
    try:
        r = requests.get(url, timeout=5)
        estado = "Exitosa" if r.status_code == 200 else "Con errores"
        print(f"  Código: {r.status_code} — {estado}")
        print(f"  Contenido: {r.text[:100]}...")
    except Exception as e:
        print(f"  Error al conectar: {e}")
