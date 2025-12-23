<template>
  <div class="relative min-h-screen text-white font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden bg-slate-950">
    
    <Transition name="fade">
      <WelcomeScreen v-if="showIntro" @finish="handleIntroFinish" />
    </Transition>

    <div v-if="!showIntro">
      
      <div class="fixed inset-0 z-0 perspective-container pointer-events-none overflow-hidden">
        <div class="absolute inset-0 z-[1] opacity-[0.03] mix-blend-overlay bg-noise"></div>

        <div class="absolute inset-0 transform-style-3d z-0">
          <div class="absolute inset-0 bg-grid-3d animate-grid-move"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950/90"></div>
        </div>

        <div class="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div class="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 4s;"></div>

        <div class="particles-container z-[1]">
          <div v-for="n in 15" :key="n" class="particle"></div>
        </div>

        <div class="stars-container z-[0]">
          <div v-for="n in 3" :key="`star-${n}`" class="shooting-star"></div>
        </div>
      </div>

      <div class="relative z-10 animate-fade-in">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Komponen
import WelcomeScreen from './components/WelcomeScreen.vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

const showIntro = ref(true);

const handleIntroFinish = () => {
  showIntro.value = false;
  
  // Refresh AOS agar animasi scroll bekerja
  nextTick(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  });
};

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
</script>

<style>
/* TRANSISI INTRO */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* ANIMASI FADE IN KONTEN */
@keyframes fadeInContent {
  from { opacity: 0; transform: scale(0.99); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
  animation: fadeInContent 1.2s ease-out forwards;
}

/* === CSS GLOBAL (BACKGROUND) === */
.bg-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E"); }

.perspective-container { perspective: 1000px; }
.transform-style-3d { transform-style: preserve-3d; }
.bg-grid-3d {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px; width: 200vw; height: 200vh; position: absolute; top: -50%; left: -50%; transform: rotateX(60deg) translateZ(-100px); transform-origin: center center;
}
@keyframes gridMove { 0% { transform: rotateX(60deg) translateZ(-100px) translateY(0); } 100% { transform: rotateX(60deg) translateZ(-100px) translateY(60px); } }
.animate-grid-move { animation: gridMove 4s linear infinite; }

.animate-pulse-slow { animation: pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

.particle { position: absolute; width: 4px; height: 4px; background: rgba(255, 255, 255, 0.1); border-radius: 50%; animation: floatUp 15s linear infinite; }
.particle:nth-child(1) { left: 10%; top: 100%; animation-duration: 12s; width: 2px; height: 2px; }
.particle:nth-child(2) { left: 20%; top: 100%; animation-duration: 15s; animation-delay: 2s; }
.particle:nth-child(3) { left: 35%; top: 100%; animation-duration: 10s; width: 3px; height: 3px; }
.particle:nth-child(4) { left: 50%; top: 100%; animation-duration: 18s; animation-delay: 5s; }
.particle:nth-child(5) { left: 65%; top: 100%; animation-duration: 14s; width: 2px; height: 2px; }
.particle:nth-child(6) { left: 80%; top: 100%; animation-duration: 11s; animation-delay: 1s; }
.particle:nth-child(7) { left: 90%; top: 100%; animation-duration: 16s; width: 5px; height: 5px; opacity: 0.05; }
@keyframes floatUp { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 20% { opacity: 0.3; } 80% { opacity: 0.3; } 100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; } }

.shooting-star { position: absolute; top: 0; left: 50%; width: 2px; height: 100px; background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.4)); animation: meteor 4s infinite linear; opacity: 0; }
.shooting-star:nth-child(1) { left: 20%; animation-delay: 0s; }
.shooting-star:nth-child(2) { left: 70%; animation-delay: 2s; animation-duration: 6s; height: 150px; }
.shooting-star:nth-child(3) { left: 40%; animation-delay: 5s; animation-duration: 3s; }
@keyframes meteor { 0% { transform: translateY(-100px); opacity: 0; } 10% { opacity: 0.5; } 20% { transform: translateY(100vh); opacity: 0; } 100% { opacity: 0; } }

html { scroll-behavior: smooth; }
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: #020617; }
::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #2563eb, #10b981); border-radius: 10px; border: 2px solid #020617; }
::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, #3b82f6, #34d399); }
</style>