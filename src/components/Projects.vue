<template>
  <section id="projects" class="py-24 relative z-10">
    <div class="max-w-7xl mx-auto px-4">
      
      <div class="text-center mb-16" data-aos="fade-down">
        <h2 class="text-3xl font-bold text-white">Featured <span class="text-emerald-400">Projects</span></h2>
        <p class="text-gray-400 mt-2">Koleksi aplikasi web terbaik yang telah saya kembangkan.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div v-for="(project, index) in projects" :key="index" 
             class="bg-slate-800/40 rounded-2xl overflow-hiddenRP border border-white/5 hover:border-emerald-500/50 transition group flex flex-col backdrop-blur-sm shadow-lg hover:shadow-emerald-500/10"
             data-aos="fade-up" :data-aos-delay="index * 150">
          
          <div class="h-56 bg-slate-700/50 overflow-hidden relative group-hover:shadow-inner">
            <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition z-10"></div>
            
            <img :src="project.image" :alt="project.title" class="w-full h-56 object-cover group-hover:scale-110 transition duration-700" />
            
            <div v-if="project.isTeam" class="absolute top-3 right-3 z-20 bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-md">
              Team Project
            </div>
          </div>
          
          <div class="p-6 flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition">{{ project.title }}</h3>
            
            <p class="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
              {{ project.desc }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in project.tags" :key="tag" class="text-xs bg-slate-900/80 text-emerald-400 px-2.5 py-1 rounded-md border border-emerald-500/20 font-medium">
                {{ tag }}
              </span>
            </div>

            <a :href="project.link" target="_blank" class="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-sm font-bold rounded-xl transition shadow-lg shadow-emerald-500/20 transform hover:-translate-y-1">
              Live Demo 
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Import gambar dari folder assets
// PENTING: Pastikan file gambar (majak.png, quran.png, dll) SUDAH ADA di folder 'src/assets/'
import imgMajak from '../assets/majak.png'
import imgQuran from '../assets/quran.png'
import imgSahabat from '../assets/sbc.png'
import imgGymAI from '../assets/gym.png'
import imgMeong from '../assets/kucing.png'

const projects = ref([
  {
    title: 'Majak IO',
    desc: 'Platform web inovatif yang dirancang untuk efisiensi tinggi, menampilkan antarmuka modern dan responsif untuk pengalaman pengguna yang optimal.',
    tags: ['Vue.js', 'Tailwind', 'Vite'],
    image: imgMajak, // Menggunakan gambar yang di-import
    link: 'https://majak-io.vercel.app/',
    isTeam: false
  },
  {
    title: 'Quran App',
    desc: 'Aplikasi Al-Quran digital yang memudahkan pengguna membaca, mencari, dan memahami ayat suci di mana saja dengan tampilan yang sejuk.',
    tags: ['Vue.js', 'API', 'PWA'],
    image: imgQuran, // Menggunakan gambar yang di-import
    link: 'https://quranapp-re4x.vercel.app/',
    isTeam: false
  },
  {
    title: 'Sahabat Belajar',
    desc: 'Portal E-Learning interaktif yang menghubungkan siswa dengan materi pembelajaran berkualitas. Solusi pendidikan digital yang inklusif.',
    tags: ['Education', 'Vue', 'Laravel'],
    image: imgSahabat, // Menggunakan gambar yang di-import
    link: 'https://sahabat-belajar.vercel.app/',
    isTeam: false
  },
  {
    title: 'GymAI',
    desc: 'Aplikasi kebugaran cerdas berbasis AI untuk personalisasi latihan dan nutrisi. Proyek kolaborasi tim yang mengutamakan kesehatan modern.',
    tags: ['AI Integration', 'Team Work', 'Health'],
    image: imgGymAI, // Menggunakan gambar yang di-import
    link: 'https://gymai.zicofarry.com/',
    isTeam: true
  },
  {
    title: 'Meong App',
    desc: 'Platform khusus pecinta kucing yang menyediakan informasi, layanan adopsi, dan komunitas untuk merawat hewan peliharaan kesayangan.',
    tags: ['Community', 'Pet Care', 'UI/UX'],
    image: imgMeong, // Menggunakan gambar yang di-import
    link: 'https://meong-exn8dje8y-monecruzzs-projects.vercel.app/',
    isTeam: false
  }
])
</script>