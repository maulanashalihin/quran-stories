# 🚀 Deploy ke Cloudflare Pages

## Opsi 1: Deploy via Git (GitHub/GitLab) ⭐ REKOMENDASI

Cara paling mudah dengan auto-deploy setiap push.

### Langkah-langkah:

1. **Push ke GitHub/GitLab**
   ```bash
   # Inisialisasi repo (jika belum)
   git init
   git add .
   git commit -m "Initial commit: Quran Stories website"
   
   # Push ke GitHub
   git remote add origin https://github.com/username/quran-stories.git
   git push -u origin main
   ```

2. **Setup Cloudflare Pages**
   - Login ke [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Klik **Pages** di sidebar
   - Klik **Create a project**
   - Pilih **Connect to Git**
   - Pilih repository `quran-stories`
   - Klik **Begin setup**

3. **Build Settings**
   ```
   Project name: quran-stories (atau nama yang kamu suka)
   Production branch: main
   
   Build settings:
   ├─ Build command: npm run docs:build
   ├─ Build output directory: docs/.vitepress/dist
   └─ Root directory: /
   ```

4. **Environment Variables** (jika diperlukan)
   ```
   NODE_VERSION: 18
   ```

5. **Klik Save and Deploy**
   
   Tunggu ~2 menit, lalu website akan live di:
   `https://quran-stories.pages.dev`

---

## Opsi 2: Deploy via Wrangler CLI

Cocok untuk deploy langsung tanpa Git.

### Install Wrangler
```bash
npm install -g wrangler
```

### Login ke Cloudflare
```bash
wrangler login
# Akan membuka browser untuk autentikasi
```

### Deploy
```bash
cd quran-stories-web

# Build terlebih dahulu
npm run docs:build

# Deploy ke Cloudflare Pages
wrangler pages deploy docs/.vitepress/dist --project-name=quran-stories
```

### Update Deployment
```bash
# Setelah ada perubahan
npm run docs:build
wrangler pages deploy docs/.vitepress/dist --project-name=quran-stories
```

---

## Opsi 3: Drag & Drop (Paling Cepat)

Untuk deploy instan tanpa setup:

1. Build project:
   ```bash
   npm run docs:build
   ```

2. Kompres folder `docs/.vitepress/dist` menjadi ZIP

3. Login ke [Cloudflare Pages](https://dash.cloudflare.com)

4. Klik **Create a project** → **Upload assets**

5. Drag & drop file ZIP atau folder `dist`

6. Klik **Deploy site**

---

## 🔧 Custom Domain (Opsional)

### Setup Custom Domain

1. Di Cloudflare Pages dashboard, klik project `quran-stories`

2. Tab **Custom domains**

3. Klik **Set up a custom domain**

4. Masukkan domain (contoh: `quranstories.com`)

5. Ikuti instruksi DNS yang diberikan

### DNS Records yang Diperlukan
```
Type: CNAME
Name: www (atau @ untuk root)
Target: quran-stories.pages.dev
Proxy: ON (cloud orange)
```

---

## 📋 Build Configuration

### File Konfigurasi

**`wrangler.toml`** (sudah dibuat)
```toml
name = "quran-stories"
compatibility_date = "2024-01-01"

[site]
bucket = "./docs/.vitepress/dist"
```

**`_redirects`** (sudah dibuat)
```
/*    /index.html   200
```

### Build Settings Lengkap

| Setting | Value |
|---------|-------|
| Framework | VitePress |
| Build command | `npm run docs:build` |
| Output directory | `docs/.vitepress/dist` |
| Node version | 18 |

---

## ✅ Pre-Deploy Checklist

- [ ] Build berhasil tanpa error
- [ ] Semua 100 cerita ada
- [ ] Gambar cover.webp muncul
- [ ] Navigasi berfungsi
- [ ] Search berfungsi
- [ ] Dark mode berfungsi

---

## 🔄 Auto-Deploy dengan Git

Setelah setup awal, setiap push ke branch `main` akan otomatis trigger deploy baru.

```bash
# Workflow sehari-hari
git add .
git commit -m "Update: tambah cerita baru"
git push origin main

# Cloudflare akan otomatis deploy dalam 1-2 menit
```

---

## 📊 Monitoring

Lihat analytics di Cloudflare Dashboard:
- Total requests
- Unique visitors
- Bandwidth usage
- Core Web Vitals

---

## 🆘 Troubleshooting

### Build Failed
```bash
# Coba build ulang lokal
npm run docs:build

# Check error message
```

### 404 Error
- Pastikan `_redirects` file ada di `docs/.vitepress/public/`
- Atau copy manual ke folder dist setelah build

### Assets tidak muncul
- Check `base` config di `config.mjs`
- Pastikan semua path relatif

---

## 🎉 Setelah Deploy

Website akan tersedia di:
- **Default**: `https://quran-stories.pages.dev`
- **Custom domain**: `https://quranstories.com` (jika setup)

**Selamat! Website Quran Stories sudah live!** 🌟
