<template>
  <section id="experience" class="py-20">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-16" data-aos="fade-down">
        <h2 class="text-3xl font-bold text-white">Experience & <span class="text-blue-500">Education</span></h2>
      </div>
      <div class="relative border-l-2 border-slate-700 ml-4 md:ml-6 space-y-12">
        <div v-for="(item, index) in timeline" :key="index" class="relative pl-8 md:pl-12" data-aos="fade-left" :data-aos-delay="index * 100">
          <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2" 
               :class="item.type === 'edu' ? 'border-emerald-500' : 'border-blue-500'"></div>
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 class="text-xl font-bold text-white">{{ item.role }}</h3>
            <span class="text-sm font-mono text-slate-400">{{ item.period }}</span>
          </div>
          <h4 class="text-emerald-400 font-medium mb-3">{{ item.place }}</h4>
          <p class="text-slate-400 text-sm leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const timeline = [
  { type: 'edu', role: 'S1 Ilmu Komputer', place: 'Universitas Pendidikan Indonesia', period: '2021 - Sekarang', desc: 'Aktif dalam Himpunan Mahasiswa, Asisten Laboratorium Pemrograman Dasar, dan mempertahankan IPK 3.8.' },
  { type: 'work', role: 'Full Stack Developer Intern', place: 'PT. Teknologi Masa Depan', period: 'Jan 2024 - Apr 2024', desc: 'Membangun fitur dashboard analitik menggunakan Vue.js dan mengoptimalkan query database untuk mempercepat load time sebesar 40%.' },
  { type: 'org', role: 'Ketua Divisi Web Development', place: 'Komunitas Koding UPI', period: '2023 - 2024', desc: 'Mengadakan workshop mingguan tentang React dan Vue, serta memimpin tim dalam pembuatan website profil himpunan.' }
]
</script>