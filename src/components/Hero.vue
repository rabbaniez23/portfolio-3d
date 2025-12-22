<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center pt-20 lg:pt-0">
    
    <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
      
      <div class="w-full lg:w-3/5 text-center lg:text-left space-y-6">
        
        <div data-aos="fade-down">
          <span class="text-emerald-400 font-bold tracking-wider uppercase text-sm">Halo, Saya</span>
          <h1 class="text-4xl md:text-6xl font-extrabold text-white mt-2 leading-tight">
            Naufal Rizki<span class="text-blue-500"> Rabbani</span>
          </h1>
          <p class="text-xl md:text-2xl text-slate-300 mt-2 font-light">
            Informatics Student <span class="text-emerald-400">&</span> Full Stack Developer
          </p>
        </div>
        
        <p class="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0" data-aos="fade-right" data-aos-delay="100">
          Mahasiswa Ilmu Komputer yang bersemangat membangun aplikasi web responsif menggunakan <span class="text-white">Vue.js</span> dan <span class="text-white">Laravel</span>. Memiliki ketertarikan mendalam pada pengembangan solusi digital yang efisien dan *user-friendly*.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4" data-aos="fade-up" data-aos-delay="200">
          <a href="/cv.pdf" download class="group px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer">
            Download CV
          </a>
          <a href="#projects" class="group px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-full hover:border-emerald-400 hover:text-white hover:bg-emerald-500/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer">
            Lihat Project
          </a>
        </div>
      </div>

      <div class="w-full lg:w-2/5 flex justify-center relative" data-aos="zoom-in" data-aos-delay="300">
        
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-full blur-[60px] opacity-40 animate-pulse-slow animate-float"></div>
        
        <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-2 border-slate-700/50 bg-slate-900/50 backdrop-blur-sm animate-float cursor-pointer group transition-transform duration-500 hover:scale-105 hover:rotate-2">
            
            <img src="../assets/profile.jpg" alt="Profile" class="w-full h-full object-cover rounded-full border-4 border-slate-800 transition duration-500 group-hover:border-emerald-500/50" />
            
            <div class="absolute bottom-4 right-4 bg-slate-800 p-3 rounded-xl border border-slate-600 shadow-xl flex items-center gap-2 animate-bounce-slow hover:scale-110 transition cursor-pointer">
                <span class="text-2xl">👋</span>
                <div class="text-left">
                    <p class="text-white text-xs font-bold">Open for</p>
                    <p class="text-emerald-400 text-xs">Internship</p>
                </div>
            </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Keyframes untuk Floating (Melayang) */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); } /* Naik 15px */
  100% { transform: translateY(0px); }
}

/* Class animasi float */
.animate-float {
  animation: float 6s ease-in-out infinite; /* Durasi 6 detik, jalan terus */
}

/* Pulse Slow */
.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Bounce Slow untuk Badge */
.animate-bounce-slow {
  animation: bounce 3s infinite;
}

/* Tambahan: Smooth transition untuk semua efek hover */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>