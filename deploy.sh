#!/bin/bash

echo "🚀 Deploy Quran Stories ke Cloudflare Pages"
echo "============================================"

# Build
echo "📦 Building..."
npm run docs:build

# Deploy
echo "☁️  Deploying to Cloudflare..."
wrangler pages deploy docs/.vitepress/dist --project-name=quran-stories --commit-dirty=true

echo ""
echo "✅ Deploy selesai!"
echo "🌐 Website: https://quran-stories.pages.dev"
