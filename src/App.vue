<template>
  <div class="relative min-h-screen text-white font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden bg-slate-900">
    
    <div class="fixed inset-0 z-0 perspective-container pointer-events-none">
      <div class="absolute inset-0 transform-style-3d">
        <div class="absolute inset-0 bg-grid-3d animate-grid-move"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900/90 z-10"></div>
      </div>
      <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
    </div>

    <Navbar />

    <main class="relative z-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue'; // Import komponen baru
</script>

<style>
/* CSS GLOBAL 3D GRID */
.perspective-container { perspective: 1000px; }
.transform-style-3d { transform-style: preserve-3d; }
.bg-grid-3d {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  width: 200vw; height: 200vh;
  position: absolute; top: -50%; left: -50%;
  transform: rotateX(60deg) translateZ(-100px); 
  transform-origin: center center;
}
@keyframes gridMove {
  0% { transform: rotateX(60deg) translateZ(-100px) translateY(0); }
  100% { transform: rotateX(60deg) translateZ(-100px) translateY(60px); }
}
.animate-grid-move { animation: gridMove 3s linear infinite; }
.animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
html { scroll-behavior: smooth; }
</style>