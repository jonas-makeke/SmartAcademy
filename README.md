# SmartAcademy Digital – Site vitrine

Site web vitrine **premium, moderne et responsive** pour l’académie de formation en technologies numériques **SmartAcademy Digital**.

Technos utilisées :
- **HTML5** (structure sémantique)
- **CSS3** (design custom, responsive, light/dark mode)
- **JavaScript** (menu mobile, scroll doux, compteurs animés, bascule clair/sombre)

---

## 1. Structure du projet

- `index.html` – page principale contenant toutes les sections :
  - Accueil (Hero)
  - À propos
  - Formations
  - Admission / Inscription
  - Actualités / Blog
  - Contact + Carte Google Maps
- `styles.css` – feuille de styles :
  - Palette bleu / blanc / orange
  - Design premium (cartes, boutons, ombres, grilles responsives)
  - Mode **clair** + **sombre** (classe `body.dark`)
- `script.js` – logique front :
  - Menu burger (mobile)
  - Scroll doux vers les sections
  - Animation des statistiques dans le Hero
  - Bascule **light / dark** avec mémorisation (`localStorage`)

Le logo utilisé est `image1.jpeg` (ou `image2.png` selon ton choix de fichier) situé à la racine du dossier `SmartAcademy`.

---

## 2. Lancer le site en local

Aucune installation `npm` n’est nécessaire.

1. Ouvrir l’explorateur de fichiers.
2. Aller dans :

   `C:\Users\Jonas\Desktop\JmakekeCode\SmartAcademy\smartacademy-site`

3. **Double-cliquer** sur `index.html`.

Le site se lance directement dans ton navigateur (Chrome, Edge, Brave…).

---

## 3. Personnalisation rapide

- **Logo** : modifier le fichier d’image référencé dans l’`<img>` du header (`index.html`).
- **Couleurs** : adapter les variables CSS dans `styles.css` (bloc `:root`).
- **Texte des sections** : éditer directement les blocs HTML correspondants (`<section id="…">`).
- **Email de contact** :
  - Dans la section `#contact`, le lien `mailto:` pointe vers  
    `smartacademydigital1@gmail.com` (à mettre à jour si nécessaire).

---

## 4. Mode clair / sombre

- Le bouton circulaire 🌙 / ☀️ dans la barre de navigation permet de basculer entre :
  - **Mode clair** : fond gris très clair, cartes blanches, texte foncé.
  - **Mode sombre** : fond bleu nuit/noir, cartes sombres, texte clair.
- Le choix de thème est mémorisé dans le navigateur (`localStorage`) via `script.js`.

---

## 5. Idées d’évolutions

- Connexion du formulaire d’inscription à un back-end (API, Google Sheets, EmailJS…).
- Ajout de pages détaillées pour chaque formation (Web3, Dev Web, Réseaux, etc.).
- Intégration d’un blog dynamique (Markdown ou CMS headless).
- Déploiement sur un hébergeur statique (Netlify, Vercel, GitHub Pages).

Ce dépôt sert de base propre et lisible pour faire évoluer l’image en ligne de **SmartAcademy Digital**.

