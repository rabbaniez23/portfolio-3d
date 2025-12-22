<template>
  <section id="skills" class="py-12 md:py-24 relative z-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10 md:mb-16" data-aos="fade-down">
        <h2 class="text-2xl md:text-3xl font-bold text-white">Tech <span class="text-blue-500">Stack</span></h2>
        <p class="text-gray-400 mt-2 text-sm md:text-base">Teknologi yang saya gunakan untuk berkarya.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        <div v-for="(category, index) in skillCategories" :key="index" 
             class="bg-slate-800/40 rounded-2xl p-5 md:p-6 border border-white/5 hover:border-blue-500/30 transition backdrop-blur-sm"
             data-aos="fade-up" :data-aos-delay="index * 100">
          
          <h3 class="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 border-b border-white/10 pb-2 flex items-center gap-2">
            {{ category.title }}
          </h3>
          
          <div class="flex flex-wrap gap-2 md:gap-3">
            <div v-for="tech in category.items" :key="tech" 
                 class="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-slate-900/80 rounded-lg text-slate-300 hover:text-white hover:bg-blue-600 transition cursor-default">
               <span class="text-xs md:text-sm font-medium">{{ tech }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  { title: "Languages", items: ["JavaScript (ES6+)", "PHP", "Java", "Python", "SQL"] },
  { title: "Frontend", items: ["Vue.js 3", "React", "Tailwind CSS", "Bootstrap", "Vite"] },
  { title: "Backend", items: ["Laravel", "Node.js", "MySQL", "Firebase", "REST API"] },
  { title: "Tools & Others", items: ["Git / GitHub", "Figma", "Postman", "VS Code", "Vercel"] }
]
</script>