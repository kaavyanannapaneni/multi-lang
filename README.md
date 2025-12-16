# i18n multi language example

## Tech
- [i18n](https://www.i18next.com/)
- [React-19.2.3](https://react.dev/)
- [React Bootstrap-2.10.10](https://react-bootstrap.netlify.app/)
- [Vite-7.2.7](https://vite.dev/)

## Installation
1. Clone repo
```bash
git clone <repo>
```
2. Navigate to folder
```bash
cd <project-folder>
```
3. Install dependencies
```bash
npm install
```
4. Run 
```bash
npm run dev 
```
## Deploying using github pages 

1. gh-pages to publish gh-pages branch
```
npm i gh-pages
```

2. In `vite.config.js` add
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/<repo-name>/',
})
```

3. `package.json` add
```json
 "homepage": "https://<username>.github.io/<repo-name>/",

  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
  },
```
4. In `i18n.js` add
```javascript
 backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/translation.json`,
    },
```

## Features
- Language switching
- Static and dynamic text translation (Interpolation)
- Trans Component 
- Fallback language support 
- RTL, LTR 
- Lazy loading, translation files 
