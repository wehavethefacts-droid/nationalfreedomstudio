# GitHub Pages Deployment Guide for National Freedom Studio

## Overview
This document explains the exact configuration needed to deploy the National Freedom Studio website to GitHub Pages.

## Key Configuration Requirements

### 1. Vite Configuration (`vite.config.ts`)
**Critical Setting:** The `base` path MUST be set to the repository name with leading and trailing slashes:

```typescript
export default defineConfig({
  base: '/nationalfreedomstudio/',  // ← MUST match your GitHub repo name
  // ... rest of config
});
```

**Why:** GitHub Pages serves user repos from `https://username.github.io/repo-name/`, so the base path tells Vite to generate assets with this prefix.

### 2. React Router Configuration (`client/src/App.tsx`)
**Critical Setting:** Use `wouter` with hash-based location:

```typescript
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

function App() {
  return (
    <Router hook={useHashLocation}>  // ← Hash-based routing is REQUIRED
      <AppRouter />
    </Router>
  );
}
```

**Why:** GitHub Pages doesn't support server-side routing. Hash-based routing (`/#/page`) works because everything after the `#` is client-side only and doesn't trigger a server request.

### 3. HTML Initial Redirect (`docs/index.html`)
**Critical Script:** Add this redirect script immediately after the opening `<body>` tag:

```html
<body>
  <script>
    // Ensure we're using hash-based routing
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#/';
    }
  </script>
  <!-- rest of body content -->
</body>
```

**Why:** When users visit the root URL without a hash, this redirects them to `#/` so the router can match the home page route.

### 4. Remove Manus Debug Script
**Critical:** Remove or disable the Manus debug collector script from the built HTML:

```bash
# After building, remove this line from docs/index.html:
sed -i '/<script src="\/__manus__\/debug-collector.js"/d' docs/index.html
```

**Why:** This script tries to load from `/__manus__/debug-collector.js` which doesn't exist on GitHub Pages and breaks the app.

### 5. GitHub Pages Settings
**Repository Settings → Pages:**
- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/docs`

**Why:** We build to the `docs` folder and GitHub Pages serves from there.

## Build and Deploy Process

### Step 1: Build the Project
```bash
cd /path/to/nationalfreedomstudio
pnpm build
```

This creates:
- `dist/public/` - Built React app with all assets
- `dist/index.js` - Server bundle (not used for GitHub Pages)

### Step 2: Prepare for Deployment
```bash
# Remove old docs folder
rm -rf docs

# Copy built files to docs
cp -r dist/public docs

# Remove the Manus debug script
sed -i '/<script src="\/__manus__\/debug-collector.js"/d' docs/index.html
```

### Step 3: Commit and Push
```bash
git add -A
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Step 4: Wait for GitHub Pages to Build
GitHub automatically builds and deploys when you push to the `main` branch. Wait 1-2 minutes, then visit:
```
https://wehavethefacts-droid.github.io/nationalfreedomstudio/
```

## How It Works: The Complete Flow

1. **User visits:** `https://wehavethefacts-droid.github.io/nationalfreedomstudio/`
2. **HTML redirect script runs:** Detects no hash, redirects to `/#/`
3. **URL becomes:** `https://wehavethefacts-droid.github.io/nationalfreedomstudio/#/`
4. **React Router matches:** The `#/` hash matches the home route
5. **Home component renders:** Page displays correctly

## Routing Examples

All routes use hash-based routing:

| Route | URL |
|-------|-----|
| Home | `https://wehavethefacts-droid.github.io/nationalfreedomstudio/#/` |
| Studio | `https://wehavethefacts-droid.github.io/nationalfreedomstudio/#/studio` |
| Gear | `https://wehavethefacts-droid.github.io/nationalfreedomstudio/#/gear` |
| Discography | `https://wehavethefacts-droid.github.io/nationalfreedomstudio/#/discography` |
| Mastering | `https://wehavethefacts-droid.github.io/nationalfreedomstudio/#/mastering` |
| About | `https://wehavethefacts-droid.github.io/nationalfreedomstudio/#/about` |
| Contact | `https://wehavethefacts-droid.github.io/nationalfreedomstudio/#/contact` |

## Making Changes and Redeploying

### To Update Content:
1. Edit the relevant page file (e.g., `client/src/pages/Home.tsx`)
2. Run `pnpm build`
3. Run the deployment steps above (Steps 2-3)

### To Update Styling:
1. Edit CSS files (e.g., `client/src/index.css`)
2. Run `pnpm build`
3. Run the deployment steps above

### To Add New Pages:
1. Create new component in `client/src/pages/NewPage.tsx`
2. Add route in `client/src/App.tsx`:
   ```typescript
   <Route path="/newpage" component={NewPage} />
   ```
3. Add navigation link in `client/src/components/Layout.tsx`
4. Run `pnpm build`
5. Run the deployment steps above

## Troubleshooting

### Issue: Page shows 404
**Solution:** Make sure the redirect script is in `docs/index.html` and the base path in `vite.config.ts` is `/nationalfreedomstudio/`

### Issue: Assets not loading (CSS/JS broken)
**Solution:** Check that `base: '/nationalfreedomstudio/'` is set in `vite.config.ts` and rebuild

### Issue: Navigation doesn't work
**Solution:** Ensure `useHashLocation` is used in the Router component

### Issue: Changes don't appear after pushing
**Solution:** Wait 1-2 minutes for GitHub Pages to rebuild. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

## File Structure for Deployment

```
nationalfreedomstudio/
├── docs/                          # ← GitHub Pages serves from here
│   ├── index.html                # ← Contains redirect script
│   ├── assets/
│   │   ├── index-[hash].js       # React app bundle
│   │   └── index-[hash].css      # Styles
│   └── [other assets]
├── client/src/                    # Source code
│   ├── pages/                     # Page components
│   ├── components/                # Reusable components
│   ├── App.tsx                    # Router configuration
│   └── index.css                  # Global styles
├── vite.config.ts                 # ← base: '/nationalfreedomstudio/'
└── package.json
```

## GitHub Repository Setup

Your repository is configured as:
- **Owner:** wehavethefacts-droid
- **Repository:** nationalfreedomstudio
- **GitHub Pages URL:** https://wehavethefacts-droid.github.io/nationalfreedomstudio/
- **Source Branch:** main
- **Source Folder:** /docs

## One-Command Deployment Script

You can save this as `deploy.sh` for quick redeployment:

```bash
#!/bin/bash
set -e

echo "Building project..."
pnpm build

echo "Preparing deployment..."
rm -rf docs
cp -r dist/public docs
sed -i '/<script src="\/__manus__\/debug-collector.js"/d' docs/index.html

echo "Committing changes..."
git add -A
git commit -m "Deploy to GitHub Pages - $(date)"

echo "Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete! Visit: https://wehavethefacts-droid.github.io/nationalfreedomstudio/"
```

Usage:
```bash
chmod +x deploy.sh
./deploy.sh
```

## Important Notes

- **Do NOT** change the repository name without updating `vite.config.ts` base path
- **Do NOT** use path-based routing (`/page`) - only hash-based routing works on GitHub Pages
- **Do NOT** store large files in the repo - GitHub has size limits
- **Do NOT** commit the `node_modules` folder
- The `docs` folder is auto-generated from the build - don't edit it manually
