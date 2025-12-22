<template>
  <nav class="fixed w-full z-50 top-0 transition-all duration-300 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <div class="flex-shrink-0 cursor-pointer group">
          <span class="text-2xl font-bold text-white tracking-wide group-hover:text-blue-200 transition">
            Portfo<span class="text-emerald-400">lio</span><span class="text-blue-500">.</span>
          </span>
        </div>

        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="#home" class="text-gray-300 hover:text-emerald-400 transition px-3 py-2 rounded-md text-sm font-medium">Beranda</a>
            <a href="#about" class="text-gray-300 hover:text-emerald-400 transition px-3 py-2 rounded-md text-sm font-medium">Tentang</a>
            <a href="#skills" class="text-gray-300 hover:text-emerald-400 transition px-3 py-2 rounded-md text-sm font-medium">Skill</a>
            <a href="#projects" class="text-gray-300 hover:text-emerald-400 transition px-3 py-2 rounded-md text-sm font-medium">Proyek</a>
            
            <a href="#contact" class="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition transform hover:-translate-y-0.5">
              Kontak
            </a>
          </div>
        </div>

        <div class="-mr-2 flex md:hidden">
          <button type="button" class="text-gray-400 hover:text-white p-2">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  </nav>
</template>