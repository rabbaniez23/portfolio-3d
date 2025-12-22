<template>
  <footer class="bg-slate-950 pt-16 pb-8 border-t border-white/5 relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <div class="col-span-1 md:col-span-2 space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">R</span>
            </div>
            <span class="text-2xl font-bold text-white">Ezra.</span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed max-w-sm">
            Membangun solusi digital yang presisi, estetis, dan berkinerja tinggi. Mari berkolaborasi untuk mewujudkan ide hebat Anda.
          </p>
          <div class="flex gap-4 pt-2">
            <a href="#" class="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition duration-300">
               <span class="font-bold text-xs">GH</span> </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition duration-300">
               <span class="font-bold text-xs">LI</span> </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-500 hover:bg-pink-500/10 transition duration-300">
               <span class="font-bold text-xs">IG</span> </a>
          </div>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6">Navigasi</h4>
          <ul class="space-y-3 text-sm text-slate-400">
            <li><a href="#home" class="hover:text-emerald-400 transition">Beranda</a></li>
            <li><a href="#about" class="hover:text-emerald-400 transition">Tentang Saya</a></li>
            <li><a href="#projects" class="hover:text-emerald-400 transition">Proyek</a></li>
            <li><a href="#contact" class="hover:text-emerald-400 transition">Kontak</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6">Hubungi</h4>
          <ul class="space-y-3 text-sm text-slate-400">
            <li class="flex items-center gap-2">
              <span class="text-emerald-500">📧</span>
              <span>rabbani@example.com</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-emerald-500">📍</span>
              <span>Bandung, Indonesia</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-emerald-500">💼</span>
              <span class="text-emerald-400">Open for Projects</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-600 text-sm">
          &copy; 2025 Rabbani Ezra. All rights reserved.
        </p>
        <p class="text-slate-700 text-xs">
          Designed with Vue 3 & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>