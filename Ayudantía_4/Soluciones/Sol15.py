import requests

urls = [
    "https://www.google.cl",
    "https://www.wikipedia.org",
    "https://www.github.com",
    "https://www.url-falsa-xyz.com"
]

conteo = {url: 0 for url in urls}
rondas = 3

for ronda in range(1, rondas + 1):
    print(f"\n Ronda {ronda}")
    for url in urls:
        try:
            r = requests.get(url, timeout=4)
            if r.status_code == 200:
                conteo[url] += 1
                print(f"  {url} -> disponible")
            else:
                print(f"  {url} -> código {r.status_code}")
        except:
            print(f"  {url} -> sin respuesta")

print("\n Resumen")
for url, veces in conteo.items():
    print(f"{url:40} -> {veces}/{rondas} disponible")
