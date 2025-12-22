<template>
  <div class="bg-slate-900 min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
    <Navbar />

    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>

    <footer id="contact" class="bg-slate-950 py-12 border-t border-white/10 text-center">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-2xl font-bold text-white mb-6">Siap Bekerja Sama?</h2>
        <p class="text-gray-400 mb-8">Mari buat sesuatu yang luar biasa bersama.</p>
        
        <div class="flex justify-center gap-6 mb-8">
          <a href="#" class="text-gray-400 hover:text-blue-500 transition">GitHub</a>
          <a href="#" class="text-gray-400 hover:text-blue-500 transition">LinkedIn</a>
          <a href="#" class="text-gray-400 hover:text-blue-500 transition">Instagram</a>
        </div>

        <p class="text-gray-600 text-sm">© 2024 Dibuat dengan Vue & Tailwind.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
</script>

<style>
/* CSS Global Tambahan jika perlu */
html {
  scroll-behavior: smooth;
}
</style>