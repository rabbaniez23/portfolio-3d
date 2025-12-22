<template>
  <section id="projects" class="py-24 bg-slate-900/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Proyek <span class="text-blue-500">Terbaru</span></h2>
        <p class="text-gray-400">Beberapa hasil karya yang sudah di-deploy.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="index" class="bg-slate-800 rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition hover:-translate-y-2 group">
          <div class="h-48 bg-slate-700 overflow-hidden relative">
            <div class="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition z-10"></div>
            <img :src="project.image" alt="Project Preview" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-400 text-sm mb-4 line-clamp-3">{{ project.desc }}</p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in project.tags" :key="tag" class="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-md border border-blue-500/20">
                {{ tag }}
              </span>
            </div>

            <a :href="project.link" target="_blank" class="block w-full text-center py-2 bg-white text-slate-900 font-bold rounded-lg hover:bg-blue-50 transition">
              Lihat Website ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Data Proyek (Ganti link dan gambar nanti)
const projects = [
  {
    title: 'Website E-Commerce',
    desc: 'Platform belanja online dengan fitur keranjang, checkout, dan integrasi payment gateway sederhana.',
    tags: ['Vue.js', 'Tailwind', 'API'],
    image: 'https://placehold.co/600x400/1e40af/white?text=E-Commerce',
    link: '#'
  },
  {
    title: 'Portfolio Modern',
    desc: 'Website portofolio pribadi dengan animasi smooth dan mode gelap, dirancang untuk menarik klien.',
    tags: ['Vue 3', 'Vite', 'CSS Animation'],
    image: 'https://placehold.co/600x400/3730a3/white?text=Portfolio',
    link: '#'
  },
  {
    title: 'Task Manager App',
    desc: 'Aplikasi manajemen tugas harian dengan fitur drag-and-drop dan penyimpanan lokal.',
    tags: ['JavaScript', 'LocalStorage', 'UI/UX'],
    image: 'https://placehold.co/600x400/115e59/white?text=Task+App',
    link: '#'
  }
]
</script>