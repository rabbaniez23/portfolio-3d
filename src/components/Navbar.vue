<template>
  <nav class="fixed w-full z-50 top-0 transition-all duration-300" 
       :class="isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/5 py-2' : 'bg-transparent py-4'">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <div class="flex-shrink-0 cursor-pointer group flex items-center gap-3">
          <img :src="logoImg" alt="Logo" class="w-16 h-16 object-contain animate-float" />
          
          <span 
            class="text-xl font-bold text-white tracking-wide relative inline-block min-w-[140px]"
            :class="{ 'glitch-active': isGlitching }"
            :data-text="displayText"
          >
            {{ displayText }}
            <span v-if="!isGlitching" class="text-emerald-500">.</span>
          </span>
        </div>

        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-1">
            <a v-for="item in menuItems" :key="item.name" :href="item.href" 
               class="px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition duration-300 relative group">
               {{ item.name }}
               <span class="absolute bottom-1 left-1/2 w-0 h-0.5 bg-emerald-400 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
            </a>
            
            <a href="#contact" class="ml-4 px-6 py-2 bg-slate-800 text-white border border-slate-600 rounded-full text-sm font-medium hover:bg-emerald-600 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
              Hire Me
            </a>
          </div>
        </div>

        <div class="-mr-2 flex md:hidden">
          <button @click="isOpen = !isOpen" type="button" class="text-gray-300 hover:text-white p-2 transition">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-show="isOpen" class="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 absolute w-full">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a v-for="item in menuItems" :key="item.name" :href="item.href" 
           @click="isOpen = false"
           class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition">
          {{ item.name }}
        </a>
         <a href="#contact" @click="isOpen = false" class="block w-full text-center mt-4 px-5 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-lg font-bold">
            Hire Me Now
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logoImg from '../assets/logo.png' // Pastikan ini benar

const isOpen = ref(false)
const isScrolled = ref(false)

// --- LOGIKA GLITCH TEXT ---
const displayText = ref('Personal cv') // Teks awal
const isGlitching = ref(false)

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Tech', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
]

// Fungsi untuk menukar teks dengan efek glitch
const swapText = () => {
  if (isGlitching.value) return; // Cegah tabrakan
  
  isGlitching.value = true; // 1. Mulai efek rusak (glitch)
  
  // 2. Tunggu sebentar (0.3 detik) lalu ganti teks
  setTimeout(() => {
    if (displayText.value === 'Personal cv') {
      displayText.value = 'Monecruzz';
    } else {
      displayText.value = 'Personal cv';
    }
  }, 300);

  // 3. Matikan efek glitch setelah selesai (0.8 detik total)
  setTimeout(() => {
    isGlitching.value = false;
  }, 800);
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Jalankan penukaran teks setiap 4 detik
  const intervalId = setInterval(swapText, 4000);
  
  // Cleanup saat komponen dihancurkan
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    clearInterval(intervalId)
  })
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* === GLITCH EFFECT CSS === */
.glitch-active {
  position: relative;
  color: white;
}

/* Layer Glitch 1 (Merah/Magenta) */
.glitch-active::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 #ff00c1;
  top: 0;
  color: white;
  background: #0f172a; /* Samakan dengan warna navbar/bg */
  overflow: hidden;
  clip-path: inset(0 90% 0 0);
  animation: noise-anim-1 2s infinite linear alternate-reverse;
}

/* Layer Glitch 2 (Biru/Cyan) */
.glitch-active::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 #00fff9;
  top: 0;
  color: white;
  background: #0f172a;
  overflow: hidden;
  clip-path: inset(0 0 90% 0);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}

@keyframes noise-anim-1 {
  0% { clip-path: inset(20% 0 80% 0); }
  20% { clip-path: inset(60% 0 10% 0); }
  40% { clip-path: inset(40% 0 50% 0); }
  60% { clip-path: inset(80% 0 5% 0); }
  80% { clip-path: inset(10% 0 70% 0); }
  100% { clip-path: inset(30% 0 40% 0); }
}

@keyframes noise-anim-2 {
  0% { clip-path: inset(10% 0 60% 0); }
  20% { clip-path: inset(30% 0 20% 0); }
  40% { clip-path: inset(70% 0 10% 0); }
  60% { clip-path: inset(20% 0 50% 0); }
  80% { clip-path: inset(50% 0 30% 0); }
  100% { clip-path: inset(0% 0 80% 0); }
}
</style>