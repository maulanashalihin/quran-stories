# Quran Stories Web

Website VitePress untuk menampilkan 100 Kisah Quran Stories - The Great Reset.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## 📁 Struktur Folder

```
quran-stories-web/
├── docs/                      # Konten website
│   ├── .vitepress/           # Konfigurasi VitePress
│   │   ├── config.mjs        # Konfigurasi utama
│   │   └── theme/            # Custom theme
│   │       ├── custom.css    # Styling custom
│   │       └── index.js      # Theme entry
│   ├── stories/              # Semua cerita (69 file)
│   ├── index.md              # Halaman utama
│   └── about.md              # Halaman tentang
├── package.json
└── README.md
```

## 📝 Menambah Cerita Baru

1. Buat file markdown baru di `docs/stories/` dengan format: `XX-judul-cerita.md`
2. Update `docs/.vitepress/config.mjs` untuk menambahkan link di sidebar
3. Jalankan `npm run docs:dev` untuk melihat hasilnya

## 🎨 Customisasi

- **Warna**: Edit di `docs/.vitepress/theme/custom.css`
- **Navigasi**: Edit di `docs/.vitepress/config.mjs`
- **Halaman utama**: Edit di `docs/index.md`

## 📜 License

MIT
