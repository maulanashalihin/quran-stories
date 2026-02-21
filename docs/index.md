---
layout: home

hero:
  name: "Quran Stories"
  text: "The Great Reset"
  tagline: "Reset Cara Berpikirmu Tentang Hidup, Tujuan, dan Akhirat"
  image:
    src: /cover.webp
    alt: Quran Stories Cover
  actions:
    - theme: brand
      text: 📖 Mulai Membaca
      link: /stories/01-the-big-bang
    - theme: alt
      text: 🎯 Jelajahi Cerita
      link: /stories/

features:
  - icon: 🌌
    title: Min Aina?
    details: Darimana kita berasal? Eksplorasi asal-usul alam semesta, makhluk, dan manusia melalui lensa Quran yang diperkuat bukti sains modern.
    link: /stories/01-the-big-bang
    linkText: Telusuri Asal Usul →
  
  - icon: ⚔️
    title: Li Madza?
    details: Untuk apa kita hidup? Temukan makna hidup sejati melalui sistem Islam, kisah 25 Nabi, dan teladan para pemimpin peradaban.
    link: /stories/12-as-siyadah
    linkText: Temukan Misi Hidup →
  
  - icon: 🌅
    title: Ila Aina?
    details: Kemana kita akan pergi? Persiapkan perjalanan akhir dengan memahami hari akhir, hisab, dan janji keabadian.
    link: /stories/86-dunia
    linkText: Persiapkan Akhirat →
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #E5B85C 30%, #F9E09E);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #E5B85C 50%, #D4AF37 50%);
  --vp-home-hero-image-filter: blur(60px);
}

.VPHero {
  background: linear-gradient(180deg, #161B33 0%, #1A243B 50%, #0B1120 100%);
  padding: 2rem 0 4rem;
}

.VPHero .container {
  padding-top: 2rem;
}

.VPHero .name {
  background: linear-gradient(135deg, #E5B85C, #F9E09E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  line-height: 1.2;
  padding: 0.25rem 0;
  display: block;
}

.VPHero .text {
  color: #FFFFFF;
  font-weight: 600;
  line-height: 1.3;
  padding: 0.25rem 0;
}

.VPHero .tagline {
  color: #B0B8CC;
  font-size: 1.3rem;
}

.VPFeatures {
  background: linear-gradient(180deg, #0B1120 0%, #161B33 100%);
  padding: 3rem 0;
}

.VPHome {
  padding-bottom: 4rem;
}

.vp-doc {
  padding: 2rem 0;
}

.VPFeature {
  background: rgba(11, 17, 32, 0.6);
  border: 1px solid rgba(229, 184, 92, 0.15);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.VPFeature:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(229, 184, 92, 0.12);
  border-color: rgba(229, 184, 92, 0.4);
  background: rgba(11, 17, 32, 0.8);
}

.VPFeature .icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.VPFeature .title {
  color: #E5B85C;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0.75rem;
  display: block;
}

.VPFeature .details {
  color: #B0B8CC;
  line-height: 1.7;
  font-size: 0.95rem;
}

.VPFeature .link-text {
  color: #E5B85C;
  font-weight: 600;
  margin-top: 1rem;
  display: inline-block;
  transition: all 0.2s;
}

.VPFeature:hover .link-text {
  color: #F9E09E;
  transform: translateX(4px);
}

.VPButton.medium.brand {
  background: linear-gradient(135deg, #E5B85C, #D4AF37);
  color: #161B33;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(229, 184, 92, 0.25);
  transition: all 0.3s;
}

.VPButton.medium.brand:hover {
  background: linear-gradient(135deg, #F9E09E, #E5B85C);
  box-shadow: 0 8px 30px rgba(229, 184, 92, 0.4);
  transform: translateY(-2px);
}

.VPButton.medium.alt {
  background: transparent;
  border: 2px solid rgba(229, 184, 92, 0.4);
  color: #E5B85C;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s;
}

.VPButton.medium.alt:hover {
  background: rgba(229, 184, 92, 0.1);
  border-color: #E5B85C;
  transform: translateY(-2px);
}

.hero-quote {
  background: linear-gradient(135deg, rgba(229, 184, 92, 0.08), rgba(11, 17, 32, 0.4));
  border-left: 4px solid #E5B85C;
  padding: 1.5rem 2rem;
  margin: 2rem 0;
  border-radius: 0 16px 16px 0;
  font-style: italic;
  font-size: 1.15rem;
  line-height: 1.6;
  color: #E2E8F0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: visible;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0;
}

.stat-box {
  text-align: center;
  padding: 1.75rem 1rem;
  background: rgba(11, 17, 32, 0.5);
  border-radius: 16px;
  border: 1px solid rgba(229, 184, 92, 0.15);
  transition: all 0.3s;
}

.stat-box:hover {
  border-color: rgba(229, 184, 92, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(229, 184, 92, 0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #E5B85C, #F9E09E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
}

.stat-label {
  font-size: 0.9rem;
  color: #B0B8CC;
  margin-top: 0.5rem;
  font-weight: 500;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 3rem 0 1.5rem;
  padding: 0.5rem 0;
  line-height: 1.4;
  background: linear-gradient(135deg, #E5B85C, #F9E09E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  overflow: visible;
}
</style>

<div class="section-title">🤔 Pernah Merasa...</div>

<div class="hero-quote">
"Hidup ini seperti berlari di tempat — sibuk, lelah, tapi tidak tahu arahnya ke mana?"
</div>

Kita hidup di era **banjir informasi** tapi **kekeringan hikmah**. Notifikasi terus berdering, tuntutan makin bertambah, tapi satu pertanyaan fundamental sering terlupakan:

> **"Sebenarnya, untuk apa aku ada di dunia ini?"**

Materialisme dan sekularisme telah mengaburkan cara kita melihat hidup. Kita dituntut mengejar kesuksesan yang didefinisikan orang lain, bukan keberhasilan yang sesungguhnya.

**Quran Stories** hadir sebagai **The Great Reset** — sebuah kesempatan untuk mereset total cara pandang tentang hidup, tujuan, dan akhirat.

---

<div class="section-title">✨ Apa yang Akan Kamu Temukan?</div>

<div class="stats-container">
  <div class="stat-box">
    <span class="stat-number">100</span>
    <div class="stat-label">Kisah Inspiratif</div>
  </div>
  <div class="stat-box">
    <span class="stat-number">25</span>
    <div class="stat-label">Nabi & Rasul</div>
  </div>
  <div class="stat-box">
    <span class="stat-number">25+</span>
    <div class="stat-label">Tokoh Teladan</div>
  </div>
  <div class="stat-box">
    <span class="stat-number">3</span>
    <div class="stat-label">Pertanyaan Fundamental</div>
  </div>
</div>

---

### 🌌 Darimana Kita Berasal?

Bukan dongeng, tapi **bukti sains** dalam Quran yang terbukti ribuan tahun kemudian. Dari Big Bang, gunung sebagai pasak bumi, hingga penciptaan manusia dalam rahim.

> *"Mengenal Sang Pencipta adalah kunci memahami tujuan hidup."*

[Telusuri Asal Usul →](/stories/01-the-big-bang)

### ⚔️ Untuk Apa Kita Hidup?

Lebih dari sekadar mencari nafkah. Temukan:
- **Sistem Islam** yang adil dan manusiawi
- **Kisah 25 Nabi** yang relevan dengan tantanganmu hari ini
- **Kritik mendalam** terhadap sistem modern
- **Mentalitas pejuang** — sabar, ikhlas, dan penuh harapan

> *"Setiap Nabi membungi 'pelajaran' yang bisa kamu aplikasikan sekarang."*

[Temukan Misi Hidup →](/stories/12-as-siyadah)

### 🌅 Kemana Kita Akan Pergi?

Persiapkan perjalanan terakhir dengan memahami:
- Proses transisi ke alam barzakh
- Tanda-tanda hari kiamat
- Hari hisab yang detail dan adil
- Destinasi akhir: surga atau neraka

> *"Setiap perjalanan punya tujuan. Pastikan kamu tahu kemana arahmu."*

[Persiapkan Akhirat →](/stories/86-dunia)

---

<div class="section-title">🎯 Cocok Untukmu yang...</div>

- 🧠 Mencari **makna hidup** yang lebih dalam
- 📚 Butuh **inspirasi** dari kisah-kisah klasik
- 💪 Ingin **bimbingan** menghadapi tantangan modern
- 🔍 **Skeptis** dan ingin mencari kebenaran
- 🌟 Siap untuk **transformasi** cara berpikir

---

<div class="section-title">🚀 Mulai Perjalananmu</div>

<div align="center" style="margin: 2rem 0;">

**Baru di sini?**  
Mulai dari [Cerita Pertama: The Big Bang](/stories/01-the-big-bang) untuk pengalaman narasi lengkap.

**Sudah punya topik favorit?**  
[Jelajahi Semua Cerita](/stories/) dan pilih yang paling relevan.

<br>

<a href="/stories/01-the-big-bang" style="
  display: inline-block;
  background: linear-gradient(135deg, #E5B85C, #D4AF37);
  color: #161B33;
  padding: 1rem 2.5rem;
  border-radius: 16px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 8px 32px rgba(229, 184, 92, 0.3);
">📖 Mulai Membaca Sekarang</a>

<br><br>

<span style="color: #B0B8CC; font-size: 0.9rem;">Gratis • Tanpa Iklan • Untuk Semua</span>

</div>

---

<div align="center" style="margin-top: 3rem; padding: 2rem; background: rgba(11, 17, 32, 0.4); border-radius: 16px; border: 1px solid rgba(229, 184, 92, 0.15);">

### ✨ "Sesungguhnya Al-Quran ini memberi petunjuk kepada jalan yang paling lurus..."

**— QS. Al-Isra: 9**

</div>
