# Fupix Solutions — Website

Simple static site scaffold for Fupix Solutions Corporation (Gaming Corporation).

Quick start:

```bash
# open locally
# Option 1: open index.html in your browser
start index.html

# Option 2: serve with Python (for local dev)
python -m http.server 8000
# then open http://localhost:8000
```

Next steps:
- Replace placeholder content and images in `assets/images`.
- Add build tooling (Vite/React) if you want a SPA.
- Add CI and hosting (Netlify, Vercel, GitHub Pages).

Project structure (current):

```
fupix-website/
	index.html
	about.html
	games.html
	contact.html
	careers.html
	README.md
	assets/
		css/
			style.css
		js/
			main.js
		images/
			logo.svg        # placeholder logo (replace with provided raster if desired)
			favicon.ico     # (optional) add your favicon here
```

Place your official raster logo at `assets/images/logo.png` or `assets/images/logo.svg`. The placeholder `assets/images/logo.svg` included here is a simple vector shape you can replace.

Local preview (Windows):

```powershell
start index.html
# or
python -m http.server 8000
Invoke-Item http://localhost:8000
```
