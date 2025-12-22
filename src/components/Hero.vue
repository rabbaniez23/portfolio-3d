<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    
    <div class="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center w-full">
      
      <div class="w-full md:w-1/2 text-center md:text-left space-y-6">
        <div class="inline-block px-4 py-2 bg-slate-800/50 border border-emerald-500/30 rounded-full backdrop-blur-sm">
          <span class="text-emerald-400 text-xs md:text-sm font-semibold tracking-wider uppercase">✨ Open for Freelance</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold text-white leading-tight">
          Creative <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-green-500">
            Developer
          </span>
        </h1>
        
        <p class="text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Menggabungkan logika yang kuat dengan desain yang estetis. Menciptakan pengalaman web yang <span class="text-white font-semibold">cepat, responsif,</span> dan <span class="text-emerald-400 font-semibold">elegan</span>.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <a href="#projects" class="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-emerald-50 transition shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Lihat Karya
          </a>
          <a href="#contact" class="px-8 py-3 bg-transparent border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 font-semibold rounded-full transition">
            Hubungi Saya
          </a>
        </div>
      </div>

      <div class="w-full md:w-1/2 h-[400px] md:h-[600px] flex items-center justify-center relative">
        <div class="relative w-full h-full flex items-center justify-center">
            <div class="absolute w-64 h-64 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div class="absolute w-80 h-80 border border-emerald-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <div class="relative z-10 p-8 border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl rounded-2xl text-center shadow-2xl">
              <p class="text-white font-bold text-2xl tracking-widest">3D SPACE</p>
              <div class="h-1 w-20 bg-emerald-500 mx-auto my-4 rounded-full"></div>
              <p class="text-blue-200 text-sm">Tempat objek 3D nanti</p>
            </div>
        </div>
      </div>

    </div>
  </section>
</template>