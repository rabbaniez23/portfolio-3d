<template>
  <section id="skills" class="relative py-24 overflow-hidden">
    
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6">
      
      <div class="text-center mb-12" data-aos="fade-down">
        <h2 class="text-3xl font-bold text-white mb-3">
          My <span class="text-emerald-400">Tools</span>
        </h2>
        <p class="text-slate-400 text-sm">
          Tools favorite saya untuk mewujudkan ide menjadi realita.
        </p>
      </div>

      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-center">
        
        <div 
          v-for="(tech, index) in allSkills" 
          :key="tech.name"
          class="group relative flex flex-col items-center justify-center p-4 bg-slate-900/40 border border-slate-800 rounded-2xl hover:bg-slate-800/60 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 cursor-default"
          data-aos="fade-up"
          :data-aos-delay="index * 50"
        >
          <img 
            :src="tech.icon" 
            :alt="tech.name" 
            class="w-8 h-8 md:w-10 md:h-10 object-contain mb-3 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" 
          />
          
          <span class="text-xs font-medium text-slate-500 group-hover:text-white transition-colors">
            {{ tech.name }}
          </span>
          
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
// Menggabungkan semua skill jadi satu list
const allSkills = [
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
];
</script>

<style scoped>
/* Tidak perlu CSS tambahan, pakai Tailwind saja biar ringan */
</style>