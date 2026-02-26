# Portfolio Website - Static Version

A fast, static portfolio website that works perfectly on GitHub Pages. No build step required!

## Features

- ✅ **Fast & Static** - Pure HTML/CSS/JS, no runtime backend
- ✅ **GitHub Pages Ready** - Works out of the box
- ✅ **Minimal & Clean** - Black and white design
- ✅ **Responsive** - Works on all devices

## Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styles
├── data.js         # Portfolio data (easy to edit)
├── script.js       # Rendering logic
├── assets/         # Images
│   └── devyani.png
└── README.md
```

## Setup for GitHub Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/yourusername.github.io
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Save

3. **Your site will be live at:**
   `https://yourusername.github.io`

## Local Development

Just open `index.html` in your browser, or use a simple server:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve

# Then open http://localhost:8000
```

## Updating Content

Edit `data.js` to update:
- Social links
- Experience
- Technical stack
- Achievements
- Education
- Projects
- Blogs

All sections are data-driven - just update the JavaScript object!

## Customization

- **Colors**: Edit CSS variables in `styles.css` (`:root` section)
- **Content**: Edit `data.js`
- **Styling**: Edit `styles.css`

## License

MIT
