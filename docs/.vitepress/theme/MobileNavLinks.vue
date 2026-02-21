<template>
  <!-- Komponen ini tidak merender apapun secara langsung -->
  <!-- Link navigasi akan ditambahkan ke DOM via JavaScript -->
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Fungsi untuk menambahkan link navigasi ke menu dropdown
  const addNavLinksToDropdown = () => {
    // Cari menu dropdown VPNavBarExtra
    const menu = document.querySelector('.VPNavBarExtra .VPMenu')
    if (!menu) return
    
    // Cek apakah sudah ada nav links
    if (menu.querySelector('.mobile-nav-links-custom')) return
    
    // Buat container untuk nav links
    const navContainer = document.createElement('div')
    navContainer.className = 'mobile-nav-links-custom'
    
    // Buat link navigasi
    const links = [
      { href: '/', icon: '🏠', text: 'Beranda' },
      { href: '/stories/', icon: '📚', text: 'Daftar Cerita' },
      { href: '/about', icon: 'ℹ️', text: 'Tentang' }
    ]
    
    links.forEach(link => {
      const a = document.createElement('a')
      a.href = link.href
      a.className = 'mobile-nav-link-custom'
      a.innerHTML = `<span class="nav-icon">${link.icon}</span><span>${link.text}</span>`
      navContainer.appendChild(a)
    })
    
    // Tambahkan ke menu setelah group pertama (appearance)
    const firstGroup = menu.querySelector('.group')
    if (firstGroup) {
      // Insert setelah group pertama
      firstGroup.insertAdjacentElement('afterend', navContainer)
    } else {
      // Jika tidak ada group, tambahkan di awal
      menu.insertBefore(navContainer, menu.firstChild)
    }
  }
  
  // Jalankan saat mount
  addNavLinksToDropdown()
  
  // Jalankan lagi saat DOM berubah (untuk handle client-side navigation)
  const observer = new MutationObserver(() => {
    addNavLinksToDropdown()
  })
  
  observer.observe(document.body, { childList: true, subtree: true })
  
  // Cleanup
  return () => observer.disconnect()
})
</script>

<style>
/* Style untuk nav links yang ditambahkan via JS */
.mobile-nav-links-custom {
  display: none;
}

@media (max-width: 767px) {
  .mobile-nav-links-custom {
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    border-top: 1px solid var(--vp-c-divider);
    margin-top: 8px;
  }
  
  .mobile-nav-link-custom {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    color: var(--vp-c-text-1);
    text-decoration: none;
    font-size: 14px;
    transition: background-color 0.2s, color 0.2s;
    border-radius: 6px;
    margin: 2px 8px;
  }
  
  .mobile-nav-link-custom:hover {
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-brand-1);
  }
  
  .mobile-nav-link-custom .nav-icon {
    font-size: 16px;
    width: 20px;
    text-align: center;
  }
}
</style>
