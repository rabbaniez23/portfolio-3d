<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center pt-24 lg:pt-32 pb-12">
    
    <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
      
      <div class="w-full lg:w-3/5 text-center lg:text-left space-y-5">
        
        <div data-aos="fade-down">
          <span class="text-emerald-400 font-bold tracking-wider uppercase text-xs md:text-sm">Halo, Saya</span>
          
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mt-2 leading-tight tracking-tight">
            Naufal Rizki <br>
            <span class="glitch-wrapper relative inline-block" data-text="Rabbani">
              <span class="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Rabbani
              </span>
            </span>
          </h1>

          <div class="text-lg md:text-2xl text-slate-300 mt-3 font-light h-8">
            I am a <span class="font-semibold text-emerald-400 typing-text">{{ typeValue }}</span>
            <span class="cursor-blink">|</span>
          </div>
        </div>
        
        <p class="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0" data-aos="fade-right" data-aos-delay="100">
          Mahasiswa Ilmu Komputer yang bersemangat membangun aplikasi web responsif menggunakan <span class="text-white">Vue.js</span> dan <span class="text-white">Laravel</span>.
        </p>
        
        <div class="flex items-center justify-center lg:justify-start gap-4 pb-2" data-aos="fade-up" data-aos-delay="150">
           <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-600 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-white transition group">
             <svg class="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
           </a>
           <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-600 text-slate-400 hover:text-blue-500 hover:bg-slate-800 hover:border-blue-500 transition group">
             <svg class="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg>
           </a>
           <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full border border-slate-600 text-slate-400 hover:text-pink-500 hover:bg-slate-800 hover:border-pink-500 transition group">
             <svg class="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.825-.059.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.825-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
           </a>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4" data-aos="fade-up" data-aos-delay="200">
          <a href="/cv.pdf" download class="group px-7 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer">
            Download CV
          </a>
          <a href="#projects" class="group px-7 py-3 border border-slate-600 text-slate-300 font-semibold rounded-full hover:border-emerald-400 hover:text-white hover:bg-emerald-500/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer">
            Lihat Project
          </a>
        </div>
      </div>

      <div class="w-full lg:w-2/5 flex justify-center relative" data-aos="zoom-in" data-aos-delay="300">
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-full blur-[60px] opacity-40 animate-pulse-slow animate-float"></div>
        <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-2 border-slate-700/50 bg-slate-900/50 backdrop-blur-sm animate-float cursor-pointer group transition-transform duration-500 hover:scale-105 hover:rotate-2">
            <div class="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 group-hover:border-emerald-500/50 transition duration-500">
               <img src="../assets/profile.jpg" alt="Profile" class="w-full h-full object-cover transition duration-500" />
               <div class="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
            </div>
            <div class="absolute bottom-4 right-4 bg-slate-800 p-3 rounded-xl border border-slate-600 shadow-xl flex items-center gap-2 animate-bounce-slow hover:scale-110 transition cursor-pointer z-20">
                <span class="text-2xl">👋</span>
                <div class="text-left">
                    <p class="text-white text-xs font-bold">Open for</p>
                    <p class="text-emerald-400 text-xs">Internship</p>
                </div>
            </div>
        </div>
      </div>

    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 opacity-70">
      <div class="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
        <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-scroll-dot"></div>
      </div>
      <span class="text-xs text-slate-400 tracking-widest uppercase">Scroll</span>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const typeValue = ref('');
const typeStatus = ref(false);
const arrayText = ["Full Stack Developer", "Tech Enthusiast", "Informatics Student"];
// Settingan Kecepatan Mengetik (Lebih Cepat)
const typingSpeed = 50; 
const erasingSpeed = 30;
const newTextDelay = 1500;
let arrayIndex = 0;
let charIndex = 0;

const typeText = () => {
  if (charIndex < arrayText[arrayIndex].length) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value += arrayText[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, newTextDelay);
  }
};

const eraseText = () => {
  if (charIndex > 0) {
    if (!typeStatus.value) typeStatus.value = true;
    typeValue.value = arrayText[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    typeStatus.value = false;
    arrayIndex++;
    if (arrayIndex >= arrayText.length) arrayIndex = 0;
    setTimeout(typeText, typingSpeed + 1000);
  }
};

onMounted(() => {
  setTimeout(typeText, newTextDelay + 200);
});
</script>

<style scoped>
/* CSS GLITCH EFFECT */
.glitch-wrapper {
  position: relative;
}

.glitch-wrapper::before,
.glitch-wrapper::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background: transparent; /* Transparan agar tidak menutup gradient */
  pointer-events: none;
}

/* Layer Glitch 1 (Merah/Magenta) */
.glitch-wrapper::before {
  color: #ff00c1;
  z-index: -1;
  animation: glitch-anim-1 3s infinite linear alternate-reverse;
}

/* Layer Glitch 2 (Biru/Cyan) */
.glitch-wrapper::after {
  color: #00fff9;
  z-index: -2;
  animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
}

@keyframes glitch-anim-1 {
  0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
  20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
  40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
  60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
  80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
  100% { clip-path: inset(30% 0 40% 0); transform: translate(1px, -1px); }
}

@keyframes glitch-anim-2 {
  0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
  20% { clip-path: inset(30% 0 20% 0); transform: translate(-2px, 1px); }
  40% { clip-path: inset(70% 0 10% 0); transform: translate(2px, 2px); }
  60% { clip-path: inset(20% 0 50% 0); transform: translate(-1px, -1px); }
  80% { clip-path: inset(50% 0 30% 0); transform: translate(1px, 1px); }
  100% { clip-path: inset(0% 0 80% 0); transform: translate(-2px, -2px); }
}

/* Animasi Lainnya */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.animate-bounce-slow {
  animation: bounce 3s infinite;
}
@keyframes scrollDot {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0; }
}
.animate-scroll-dot {
  animation: scrollDot 1.5s infinite;
}
.cursor-blink {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s infinite;
  color: #34d399;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>