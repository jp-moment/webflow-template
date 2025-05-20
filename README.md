# Webflow Template – Finsweet + JS Starter

[![Built with pnpm](https://img.shields.io/badge/Built%20with-pnpm-blueviolet?style=flat&logo=pnpm)](https://pnpm.io)  
Starter Webflow avec JavaScript moderne : Vite, TypeScript, pnpm & GitHub CDN.

---

## 🧪 Étapes rapides pour démarrer

1. Cloner ce repo :
```bash
git clone https://github.com/jp-moment/webflow-template.git mon-projet
cd mon-projet
```

2. Supprimer les fichiers liés à Git :
```bash
rm -rf .git .github
```

3. Réinitialiser Git et faire ton premier commit :
```bash
git init
git add .
git commit -m "Initial commit"
```

4. Installer les dépendances :
```bash
pnpm install
```

5. Démarrer en local :
```bash
pnpm dev
```

6. Ouvrir le navigateur à cette adresse :
```
http://localhost:5173/
```

---

## 📁 Structure du projet

- `src/index.ts` → point d'entrée de ton script personnalisé
- `dist/index.js` → fichier final à intégrer dans Webflow
- `public/` → ressources statiques (optionnel)

---

## 📦 Build pour Webflow

Avant d'intégrer dans Webflow, exécute :
```bash
pnpm build
```
Puis utilise le fichier généré dans `dist/index.js`

---

## 📡 Intégration Webflow

Dans **Project Settings > Custom Code**, colle ce script dans "Before </body> tag" :
```html
<script src="https://cdn.jsdelivr.net/gh/jp-moment/webflow-template@main/dist/index.js"></script>
```

Publie le site, puis vérifie la console du navigateur :
> clic droit → Inspecter → onglet Console
