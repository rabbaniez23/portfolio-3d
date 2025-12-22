<template>
  <section id="skills" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Skill & <span class="text-blue-500">Teknologi</span></h2>
        <p class="text-gray-400">Alat tempur yang saya gunakan untuk mewujudkan ide.</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="skill in skills" :key="skill.name" 
             class="p-6 bg-slate-800/50 rounded-xl border border-white/5 hover:border-blue-500/50 hover:bg-slate-800 transition group cursor-default">
          <div class="text-4xl mb-4 group-hover:scale-110 transition duration-300">{{ skill.icon }}</div>
          <h3 class="text-xl font-semibold text-white">{{ skill.name }}</h3>
          <p class="text-sm text-blue-400 mt-1">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Vue.js', icon: '💚', level: 'Advanced' },
  { name: 'Node.js', icon: '🚀', level: 'Intermediate' },
  { name: 'Tailwind CSS', icon: '🎨', level: 'Advanced' },
  { name: 'JavaScript', icon: '⚡', level: 'Advanced' },
  { name: 'Git', icon: '📦', level: 'Intermediate' },
  { name: 'Figma', icon: '🖌️', level: 'Basic' },
  { name: 'Firebase', icon: '🔥', level: 'Intermediate' },
  { name: 'Vercel', icon: '▲', level: 'Advanced' },
]
</script>