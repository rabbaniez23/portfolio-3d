<template>
  <footer class="relative z-10 border-t border-white/10 bg-slate-900/80 backdrop-blur-xl pt-16 pb-8">
    <div class="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-[120px] -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <div class="col-span-1 md:col-span-2 space-y-6">
          <div class="flex items-center gap-3 group">
            <img :src="logoImg" alt="Logo" class="w-10 h-10 object-contain group-hover:rotate-6 transition-transform duration-300" />
            <span class="text-2xl font-bold text-white tracking-tight">Personal <span class="text-emerald-400">CV</span></span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed max-w-sm">
            Membangun solusi digital yang presisi, estetis, dan berkinerja tinggi. Mari berkolaborasi untuk mewujudkan ide hebat Anda menjadi kenyataan.
          </p>
          
          <div class="flex gap-4 pt-2">
            <a href="https://github.com/rabbaniez23" target="_blank" class="social-icon group">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://instagram.com/rabbaniez23" target="_blank" class="social-icon group">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 relative inline-block">
            Navigasi
            <span class="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-emerald-500 rounded-full"></span>
          </h4>
          <ul class="space-y-3 text-sm">
            <li v-for="link in ['Home', 'About', 'Projects', 'Contact']" :key="link">
              <a :href="'#' + link.toLowerCase()" class="text-slate-400 hover:text-emerald-400 transition-all duration-300 flex items-center gap-2 group">
                <span class="w-0 group-hover:w-2 h-0.5 bg-emerald-500 transition-all duration-300"></span>
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6 relative inline-block">
            Hubungi
            <span class="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-emerald-500 rounded-full"></span>
          </h4>
          <ul class="space-y-4 text-sm text-slate-400">
            <li class="flex items-center gap-3 group">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              <span class="hover:text-white transition-colors cursor-pointer">naufalrizki@example.com</span>
            </li>
            <li class="flex items-center gap-3 group">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Bandung, Indonesia</span>
            </li>
            <li class="flex items-center gap-2 mt-4">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="text-emerald-400 font-medium text-xs tracking-wide uppercase">Open for Projects</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-sm">
          &copy; {{ new Date().getFullYear() }} <span class="text-slate-300">Naufal Rizki Rabbani</span>. All rights reserved.
        </p>
        <div class="flex items-center gap-1.5 text-slate-600 text-xs">
          <span>Built with</span>
          <span class="px-2 py-1 bg-slate-800 rounded text-emerald-400 font-medium">Vue 3</span>
          <span>&</span>
          <span class="px-2 py-1 bg-slate-800 rounded text-cyan-400 font-medium">Tailwind CSS</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logoImg from '../assets/logo.png' // Pastikan path asset ini benar
</script>

<style scoped>
.social-icon {
  @apply w-10 h-10 rounded-xl bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)];
}
</style>