# Calculadora web

Aplicación web estática de una calculadora básica hecha con HTML, CSS y JavaScript.

## Ejecutar en local

Puedes abrir `index.html` directamente en tu navegador o levantar un servidor local:

```bash
python3 -m http.server 4173
```

Luego entra a `http://localhost:4173`.

## Publicación en GitHub Pages

Este repositorio incluye el workflow `.github/workflows/deploy.yml` para publicar automáticamente en GitHub Pages cuando haces push a `main`.

### Pasos

1. Sube este repositorio a GitHub.
2. Haz push a `main`.
3. Espera a que termine el workflow **Deploy static site to GitHub Pages**.
4. El paso `configure-pages` habilita Pages automáticamente con `enablement: true` si todavía no está activado.
5. Tu web quedará disponible en la URL que indique el workflow.
