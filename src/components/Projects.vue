<template>
  <section id="projects" class="py-20">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16" data-aos="fade-down">
        <h2 class="text-3xl font-bold text-white">Featured <span class="text-emerald-400">Projects</span></h2>
        <p class="text-gray-400 mt-2">Beberapa karya terbaik yang pernah saya buat.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="index" 
             class="bg-slate-800/40 rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/50 transition group flex flex-col backdrop-blur-sm"
             data-aos="fade-up" :data-aos-delay="index * 150">
          <div class="h-48 bg-slate-700/50 overflow-hidden relative">
            <div class="absolute inset-0 bg-slate-900/50 group-hover:bg-transparent transition z-10"></div>
            <img :src="project.image" alt="Project" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          </div>
          <div class="p-6 flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-slate-400 text-sm mb-4 line-clamp-3 flex-1">{{ project.desc }}</p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in project.tags" :key="tag" class="text-xs bg-slate-900/80 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">
                {{ tag }}
              </span>
            </div>
            <div class="flex gap-3 mt-auto">
                <a :href="project.demo" target="_blank" class="flex-1 text-center py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg transition">Live Demo</a>
                <a :href="project.repo" target="_blank" class="flex-1 text-center py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-bold rounded-lg transition">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Sistem Informasi Kampus',
    desc: 'Platform manajemen data mahasiswa dan dosen dengan fitur absensi realtime dan rekap nilai otomatis.',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    image: 'https://placehold.co/600x400/10b981/white?text=Sistem+Kampus',
    demo: '#', repo: '#'
  },
  {
    title: 'E-Commerce Fashion',
    desc: 'Toko online lengkap dengan fitur keranjang belanja, integrasi payment gateway Midtrans, dan dashboard admin.',
    tags: ['React', 'Node.js', 'Tailwind'],
    image: 'https://placehold.co/600x400/3b82f6/white?text=E-Commerce',
    demo: '#', repo: '#'
  },
  {
    title: 'AI Image Generator',
    desc: 'Aplikasi web yang memanfaatkan API OpenAI untuk menghasilkan gambar berdasarkan teks prompt pengguna.',
    tags: ['Vue 3', 'OpenAI API', 'Vite'],
    image: 'https://placehold.co/600x400/8b5cf6/white?text=AI+Gen',
    demo: '#', repo: '#'
  }
]
</script>