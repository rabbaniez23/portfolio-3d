<template>
  <section id="about" class="py-24 relative overflow-hidden">
    <div class="absolute -right-20 top-20 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        
        <div class="relative group mx-auto md:mx-0">
            <div class="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-[2rem] blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
            
            <div class="relative w-[300px] h-[380px] md:w-[350px] md:h-[450px] rounded-[1.5rem] overflow-hidden border-2 border-white/10 bg-slate-800">
                <img src="../assets/profile.jpg" alt="Foto Profil" class="object-cover w-full h-full hover:scale-105 transition duration-700" />
            </div>
            
            <div class="absolute -bottom-6 -right-6 bg-slate-900 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3">
                <div class="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                    <p class="text-white font-bold text-sm">Verified</p>
                    <p class="text-xs text-gray-400">Professional</p>
                </div>
            </div>
        </div>

        <div>
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            Tentang <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Saya</span>
          </h2>
          
          <p class="text-slate-300 text-lg mb-6 leading-relaxed">
            Halo! Saya adalah seorang developer yang memiliki ketertarikan mendalam pada dunia <b class="text-white">teknologi dan seni</b>. Saya tidak hanya menulis kode, tetapi saya merancang solusi.
          </p>
          <p class="text-slate-400 mb-8">
            Fokus saya adalah menciptakan website yang tidak hanya berfungsi dengan baik (clean code), tetapi juga memiliki tampilan yang memukau dan modern.
          </p>
          
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div>
                <h3 class="text-3xl font-bold text-white">2+</h3>
                <p class="text-emerald-400 text-sm font-medium">Tahun Pengalaman</p>
            </div>
            <div>
                <h3 class="text-3xl font-bold text-white">10+</h3>
                <p class="text-blue-400 text-sm font-medium">Proyek Selesai</p>
            </div>
          </div>

          <div class="border-l-4 border-emerald-500 pl-6 py-2 bg-gradient-to-r from-emerald-900/20 to-transparent rounded-r-lg">
            <p class="text-lg text-slate-200 italic font-light">
              "Kombinasi kecerdasan logika dan keindahan visual adalah kunci dari website yang hebat."
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>