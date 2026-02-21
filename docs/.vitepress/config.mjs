import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Quran Stories',
  description: '100 Kisah Al-Uqdah al-Kubra - Narasi utuh untuk mengurai Simpul Besar melalui 100 cerita yang saling terhubung',
  lang: 'id-ID',
  
  themeConfig: {
    nav: [
      { text: 'Beranda', link: '/' },
      { text: 'Daftar Cerita', link: '/stories/' },
      { text: 'Mulai Baca', link: '/stories/01-the-big-bang' },
      { text: 'Tentang', link: '/about' }
    ],

    sidebar: [
      {
        text: '📖 Part I: Min Aina? (Darimana Kita Berasal?)',
        collapsed: false,
        items: [
          { text: '01. The Big Bang', link: '/stories/01-the-big-bang' },
          { text: '02. Expanding Universe', link: '/stories/02-expanding-universe' },
          { text: '03. The Iron (Al-Hadid)', link: '/stories/03-the-iron' },
          { text: '04. The Mountains', link: '/stories/04-the-mountains' },
          { text: '05. Deep Sea Miracles', link: '/stories/05-deep-sea-miracles' },
          { text: '06. The Bees & Nature', link: '/stories/06-the-bees' },
          { text: '07. Dunia Malaikat', link: '/stories/07-angels' },
          { text: '08. Hakikat Jin & Iblis', link: '/stories/08-jinn-and-iblis' },
          { text: '09. Penciptaan Ruh', link: '/stories/09-creation-of-soul' },
          { text: '10. Embryology', link: '/stories/10-embryology' },
          { text: '11. Nabi Adam AS', link: '/stories/11-nabi-adam-as' },
        ]
      },
      {
        text: '📖 Part II: Li Madza? (Untuk Apa Kita Hidup?)',
        collapsed: false,
        items: [
          {
            text: 'A. The Manual: Sistem Islam',
            collapsed: true,
            items: [
              { text: '12. As-Siyadah (Kedaulatan)', link: '/stories/12-as-siyadah' },
              { text: '13. No Riba Policy', link: '/stories/13-no-riba-policy' },
              { text: '14. Zakat & Infaq', link: '/stories/14-zakat-and-infaq' },
              { text: '15. SDA Milik Umum', link: '/stories/15-sda-milik-umum' },
              { text: '16. Sistem Sosial', link: '/stories/16-sistem-social' },
              { text: '17. Sistem Pendidikan', link: '/stories/17-sistem-pendidikan' },
              { text: '18. Sistem Sanksi (Uqubat)', link: '/stories/18-sistem-sanksi' },
              { text: '19. Kepemimpinan (Imamah)', link: '/stories/19-kepemimpinan' },
            ]
          },
          {
            text: 'B. The Guidance: Para Nabi',
            collapsed: true,
            items: [
              { text: '20. Nabi Idris AS', link: '/stories/20-nabi-idris-as' },
              { text: '21. Nabi Nuh AS', link: '/stories/21-nabi-nuh-as' },
              { text: '22. Nabi Hud AS', link: '/stories/22-nabi-hud-as' },
              { text: '23. Nabi Salih AS', link: '/stories/23-nabi-salih-as' },
              { text: '24. Nabi Ibrahim AS (Pencarian)', link: '/stories/24-nabi-ibrahim-as-pencarian' },
              { text: '25. Nabi Ibrahim AS (Aksi)', link: '/stories/25-nabi-ibrahim-as-aksi' },
              { text: '26. Nabi Ibrahim & Ismail AS', link: '/stories/26-nabi-ibrahim-dan-ismail-as' },
              { text: '27. Nabi Lut AS', link: '/stories/27-nabi-lut-as' },
              { text: '28. Nabi Yusuf AS (Mimpi)', link: '/stories/28-nabi-yusuf-as-mimpi' },
              { text: '29. Nabi Yusuf AS (Fitnah)', link: '/stories/29-nabi-yusuf-as-fitnah' },
              { text: '30. Nabi Yusuf AS (Kekuasaan)', link: '/stories/30-nabi-yusuf-as-kekuasaan' },
              { text: '31. Nabi Syuaib AS', link: '/stories/31-nabi-syuaib-as' },
              { text: '32. Nabi Ayyub AS', link: '/stories/32-nabi-ayyub-as' },
              { text: '33. Nabi Musa AS (Birth)', link: '/stories/33-nabi-musa-as-birth' },
              { text: '34. Nabi Musa AS (Istana)', link: '/stories/34-nabi-musa-as-istana' },
              { text: '35. Nabi Musa AS (Konfrontasi)', link: '/stories/35-nabi-musa-as-konfrontasi' },
              { text: '36. Nabi Musa & Harun AS', link: '/stories/36-nabi-musa-dan-harun-as' },
              { text: '37. Nabi Musa & Khidir AS', link: '/stories/37-nabi-musa-dan-khidir-as' },
              { text: '38. Nabi Musa & Samiri', link: '/stories/38-nabi-musa-dan-samiri' },
              { text: '39. Nabi Dawud AS', link: '/stories/39-nabi-dawud-as' },
              { text: '40. Nabi Sulaiman AS (Power)', link: '/stories/40-nabi-sulaiman-as-power' },
              { text: '41. Nabi Sulaiman AS (Wisdom)', link: '/stories/41-nabi-sulaiman-as-wisdom' },
              { text: '42. Nabi Yunus AS', link: '/stories/42-nabi-yunus-as' },
              { text: '43. Nabi Zakariya & Yahya AS', link: '/stories/43-nabi-zakariya-dan-yahya-as' },
              { text: '44. Nabi Isa AS (Mission)', link: '/stories/44-nabi-isa-as-mission' },
              { text: '45. Nabi Muhammad SAW (Makkah)', link: '/stories/45-nabi-muhammad-saw-makkah' },
              { text: '46. Nabi Muhammad SAW (Madinah)', link: '/stories/46-nabi-muhammad-saw-madinah' },
            ]
          },
          {
            text: 'C. The Filter: Real Talk',
            collapsed: true,
            items: [
              { text: '47. Sekularisme', link: '/stories/47-sekularisme' },
              { text: '48. Kapitalisme', link: '/stories/48-kapitalisme' },
              { text: '49. Liberalisme', link: '/stories/49-liberalisme' },
              { text: '50. Kritik Demokrasi', link: '/stories/50-kritik-demokrasi' },
              { text: '51. Nasionalisme', link: '/stories/51-nasionalisme' },
              { text: '52. Ghazwul Fikri', link: '/stories/52-ghazwul-fikri' },
              { text: '53. Feminisme vs Islam', link: '/stories/53-feminisme-vs-islam' },
              { text: '54. Pluralisme', link: '/stories/54-pluralisme' },
            ]
          },
          {
            text: 'D. The Character: Psikologi Pejuang',
            collapsed: true,
            items: [
              { text: '55. Sabrun Jamil', link: '/stories/55-sabrun-jamil' },
              { text: '56. Ikhlas', link: '/stories/56-ikhlas' },
              { text: '57. Husnuzan', link: '/stories/57-husnuzan' },
              { text: '58. Al-Asr', link: '/stories/58-al-asr' },
              { text: '59. Mental Health in Quran', link: '/stories/59-mental-health-in-quran' },
              { text: '60. Digital Ethics', link: '/stories/60-digital-ethics' },
            ]
          },
          {
            text: 'E. Squad Goals: Tokoh & Kaum',
            collapsed: true,
            items: [
              { text: '61. Habil & Qabil', link: '/stories/61-habil-dan-qabil' },
              { text: '62. Ashabul Kahfi', link: '/stories/62-ashabul-kahfi' },
              { text: '63. Dzulqarnain', link: '/stories/63-dzulqarnain' },
              { text: '64. Talut & Jalut', link: '/stories/64-talut-dan-jalut' },
              { text: '65. Qarun', link: '/stories/65-qarun' },
              { text: '66. Ashabul Ukhdud', link: '/stories/66-ashabul-ukhdud' },
              { text: '67. Ashabul Jannah', link: '/stories/67-ashabul-jannah' },
              { text: '68. Kaum Saba\'', link: '/stories/68-kaum-saba' },
              { text: '69. Harut & Marut', link: '/stories/69-harut-dan-marut' },
              { text: '70. Keluarga Imran', link: '/stories/70-keluarga-imran' },
              { text: '71. Luqman Al-Hakim', link: '/stories/71-luqman-al-hakim' },
              { text: '72. Dua Pemilik Kebun', link: '/stories/72-dua-pemilik-kebun' },
              { text: '73. Kaum Luth Modern', link: '/stories/73-kaum-luth-modern' },
              { text: '74. Ashabul Qaryah', link: '/stories/74-ashabul-qaryah' },
              { text: '75. Maryam AS', link: '/stories/75-maryam-as' },
              { text: '76. Asiyah (Istri Firaun)', link: '/stories/76-asiyah-istri-firaun' },
              { text: '77. Ibu Nabi Musa', link: '/stories/77-ibu-nabi-musa' },
              { text: '78. Ratu Balqis', link: '/stories/78-ratu-balqis' },
              { text: '79. Istri-Istri Nabi', link: '/stories/79-istri-istri-nabi' },
              { text: '80. Abu Bakar Ash-Shiddiq', link: '/stories/80-abu-bakar-ash-shiddiq' },
              { text: '81. Umar bin Khattab', link: '/stories/81-umar-bin-khattab' },
              { text: '82. Utsman bin Affan', link: '/stories/82-utsman-bin-affan' },
              { text: '83. Ali bin Abi Thalib', link: '/stories/83-ali-bin-abi-thalib' },
              { text: '84. Mus\'ab bin Umair', link: '/stories/84-musab-bin-umair' },
              { text: '85. Salahuddin Al-Ayyubi', link: '/stories/85-salahuddin-al-ayyubi' },
            ]
          }
        ]
      },
      {
        text: '📖 Part III: Ila Aina? (Kemana Kita Setelah Hidup?)',
        collapsed: false,
        items: [
          { text: '86. Dunia: The Playground', link: '/stories/86-dunia' },
          { text: '87. Sakaratul Maut', link: '/stories/87-sakaratul-maut' },
          { text: '88. Alam Barzakh', link: '/stories/88-alam-barzakh' },
          { text: '89. Fitnah Dajjal', link: '/stories/89-fitnah-dajjal' },
          { text: '90. Nabi Isa AS (Akhir Zaman)', link: '/stories/90-nabi-isa-as-akhir-zaman' },
          { text: '91. Tiupan Sangkakala', link: '/stories/91-tiupan-sangkakala' },
          { text: '92. Yaumul Ba\'ats', link: '/stories/92-yaumul-baats' },
          { text: '93. Yaumul Mahsyar', link: '/stories/93-yaumul-mahsyar' },
          { text: '94. Syafaat Al-Quran', link: '/stories/94-syafaat-al-quran' },
          { text: '95. Yaumul Hisab', link: '/stories/95-yaumul-hisab' },
          { text: '96. Al-Mizan', link: '/stories/96-al-mizan' },
          { text: '97. Shirath', link: '/stories/97-shirath' },
          { text: '98. Neraka', link: '/stories/98-neraka' },
          { text: '99. Surga', link: '/stories/99-surga' },
          { text: '100. Al-Wa\'d (The Promise)', link: '/stories/100-al-wad' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: 'Dibuat dengan ❤️ untuk umat Islam',
      copyright: 'Copyright © 2024'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: '#'
    },

    docFooter: {
      prev: 'Sebelumnya',
      next: 'Selanjutnya'
    },

    outline: {
      label: 'Di halaman ini'
    },

    lastUpdated: {
      text: 'Terakhir diperbarui'
    },

    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Beralih ke mode terang',
    darkModeSwitchTitle: 'Beralih ke mode gelap',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Kembali ke atas',
    langMenuLabel: 'Bahasa'
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#161B33' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'id' }],
    ['meta', { name: 'og:title', content: 'Quran Stories - The Great Reset' }],
    ['meta', { name: 'og:description', content: '100 Kisah untuk Reset Cara Berpikir Tentang Hidup, Tujuan, dan Akhirat' }],
  ],

  cleanUrls: true,
  
  appearance: true,
  
  markdown: {
    lineNumbers: false
  }
})
