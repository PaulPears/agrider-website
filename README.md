# AG Rider — Official Website

Official website for the **AG Rider** Android driver assistive application. Built with high-performance React 19, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 Key Highlights & Structure

- **Dark Emerald & Neon Green Aesthetics:** Engineered to match the AG Rider Android application with concentric circular radar animations and authentic screen mockups.
- **Direct APK Download Center (`/download`):** Instant APK file delivery (`AG-Rider-latest.apk`), Android installation walkthrough, QR code for quick mobile scanning, and SHA-256 integrity verification.
- **Zero Pricing / No Plans:** Strictly focused on driver accessibility, features, ergonomics, and app distribution.
- **11 Complete Responsive Pages:**
  1. `Home` (`/`)
  2. `About` (`/about`)
  3. `Features` (`/features`)
  4. `How It Works` (`/how-it-works`)
  5. `Accessibility Declaration` (`/accessibility`)
  6. `Download Center` (`/download`)
  7. `Frequently Asked Questions` (`/faq`)
  8. `Contact & Support` (`/contact`)
  9. `Privacy Policy` (`/privacy-policy`)
  10. `Terms & Conditions` (`/terms-and-conditions`)
  11. `Disclaimer & Platform Independence` (`/disclaimer`)

---

## 📦 How to Replace with Your Real APK

The website is already wired to deliver the APK file directly when users click any download button:
1. Place your final production APK file inside:
   `f:/RJriderpro/public/downloads/AG-Rider-latest.apk`
2. Update the version number, file size, or checksum in `src/data/content.ts` under `APP_CONFIG`.
3. Run `npm run build` to package it.

---

## 🌐 Deploying to Hostinger

### Option 1: Direct File Manager Upload (Recommended & Fastest)
1. In your local terminal, build the project:
   ```bash
   npm run build
   ```
2. Open your `f:/RJriderpro/dist` folder.
3. Log in to your **Hostinger hPanel**:
   - Go to **Websites** $\rightarrow$ **Manage** $\rightarrow$ **File Manager**.
   - Navigate to `public_html`.
   - Upload all files and folders located inside the `dist/` directory directly into `public_html`.
   - *(Note: Ensure `.htaccess` is uploaded as well so sub-pages like `/download` and `/features` route correctly without 404 errors).*

### Option 2: Connecting Hostinger Domain to Free Cloud Hosting (Vercel / Netlify)
If you only bought the domain on Hostinger without Web Hosting:
1. Push this project to GitHub.
2. Import the repository into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) (free).
3. In your Hostinger DNS Zone, point your domain:
   - **A Record:** `@` $\rightarrow$ Vercel IP (`76.76.21.21`)
   - **CNAME:** `www` $\rightarrow$ `cname.vercel-dns.com`

---

## 🛠️ Local Development

```bash
# Run local dev server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
