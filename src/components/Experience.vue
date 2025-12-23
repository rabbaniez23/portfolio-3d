<template>
  <section id="experience" class="py-4 md:py-4 relative z-10">
    <div class="max-w-4xl mx-auto px-4">
      
      <div class="text-center mb-10 md:mb-16" data-aos="fade-down">
        <h2 class="text-2xl md:text-3xl font-bold text-white">My <span class="text-emerald-500">Education</span> History</h2>
      </div>

      <div class="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-8 md:space-y-12">
        
        <div v-for="(item, index) in timeline" :key="index" class="relative pl-6 md:pl-12" data-aos="fade-left" :data-aos-delay="index * 100">
          
          <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-500"></div>
          
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 md:mb-2">
            <h3 class="text-lg md:text-xl font-bold text-white">{{ item.role }}</h3>
            <span class="text-xs md:text-sm font-mono text-slate-400 mt-1 sm:mt-0">{{ item.period }}</span>
          </div>
          
          <h4 class="text-emerald-400 font-medium mb-2 md:mb-3 text-sm md:text-base">{{ item.place }}</h4>
          
          <p class="text-slate-400 text-sm leading-relaxed">{{ item.desc }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Data Pendidikan (Urutan dari Terbaru ke Terlama)
const timeline = [
  { 
    role: 'S1 Ilmu Komputer', 
    place: 'Universitas Pendidikan Indonesia', 
    period: 'Sekarang', 
    desc: 'Aktif mendalami Algoritma, Pengembangan Web Modern, dan Kecerdasan Buatan. Terlibat dalam berbagai proyek teknologi dan himpunan mahasiswa.' 
  },
  { 
    role: 'KMI (Setara SMA)', 
    place: 'Pondok Modern Darussalam Gontor', 
    period: 'Lulus', 
    desc: 'Pendidikan pesantren modern yang membentuk karakter disiplin, kemandirian, kepemimpinan, serta penguasaan bahasa Arab dan Inggris.' 
  },
  { 
    role: 'Siswa', 
    place: 'SMP 2 Sungailiat', 
    period: 'Lulus', 
    desc: 'Menempuh pendidikan menengah pertama dengan aktif mengikuti kegiatan sekolah dan membangun dasar akademik yang kuat.' 
  },
  { 
    role: 'Siswa', 
    place: 'SDN 9 Pemali', 
    period: 'Lulus', 
    desc: 'Pendidikan dasar yang menjadi fondasi awal kemampuan literasi, numerasi, dan pembentukan karakter.' 
  }
]
</script>