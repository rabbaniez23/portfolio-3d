<template>
  <div class="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center overflow-hidden font-sans">
    
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
    
    <div class="absolute inset-0 bg-circuit-pattern opacity-30 animate-circuit-move pointer-events-none mix-blend-screen"></div>

    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse-slow" style="animation-delay: 2s"></div>


    <div class="relative z-10 w-full max-w-4xl px-6 text-center flex flex-col items-center">
      
      <div class="relative h-40 w-full flex items-center justify-center mb-10">
        
        <transition name="fade-slide">
          <div v-if="step === 1" class="absolute w-full">
            <p class="text-sm md:text-base text-blue-300 font-mono tracking-[0.3em] uppercase mb-2">System Online</p>
            <h1 class="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Welcome to <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 animate-gradient-x">
                Monecruzz House
              </span>
            </h1>
          </div>
        </transition>

        <transition name="fade-slide">
          <div v-if="step === 2" class="absolute w-full max-w-2xl px-4">
             <div class="text-cyan-500 opacity-50 text-3xl font-serif mb-2">"</div>
             <p class="text-lg md:text-2xl text-slate-300 font-light italic leading-relaxed">
               Hidup yang tak pernah diperjuangkan, <br>
               <span class="text-white font-medium border-b border-blue-500/50 pb-1">tak akan pernah dimenangkan.</span>
             </p>
          </div>
        </transition>

        <transition name="fade-zoom">
          <div v-if="step === 3" class="absolute space-y-3">
            <h2 class="text-2xl md:text-4xl font-bold text-white">
              Let's Create <span class="text-blue-400">Magic</span>
            </h2>
            <div class="inline-block px-5 py-2 rounded-full bg-slate-800/50 border border-blue-500/30 text-xs md:text-sm text-blue-200 backdrop-blur-md">
              Prepare to dive in...
            </div>
          </div>
        </transition>

      </div> 


      <div class="w-64 md:w-80 mx-auto relative z-20">
        <div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
          <div 
            class="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 transition-all duration-300 ease-out shadow-[0_0_20px_rgba(6,182,212,0.5)] relative"
            :style="{ width: progress + '%' }"
          >
            <div class="absolute right-0 top-0 h-full w-4 bg-white/80 blur-[4px]"></div>
          </div>
        </div>
        
        <div class="flex justify-between mt-3 text-[10px] uppercase tracking-widest font-mono font-bold">
          <span class="text-slate-500" v-if="progress < 100">Loading ...</span>
          <span class="text-cyan-400 animate-pulse" v-else>Ready.</span>
          <span class="text-blue-400">{{ progress }}%</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['finish'])

const progress = ref(0)
const step = ref(1)

onMounted(() => {
  const interval = setInterval(() => {
    // Random speed loading
    progress.value += Math.random() * 1.5;
    if (progress.value > 100) progress.value = 100;
    
    // LOGIKA TAHAPAN TEKS
    // 0 - 35% : Welcome
    if (progress.value < 35) step.value = 1;
    // 35 - 75% : Kutipan
    else if (progress.value < 75) step.value = 2;
    // 75 - 100% : Final
    else step.value = 3;

    // Selesai
    if (progress.value >= 100) {
      clearInterval(interval)
      setTimeout(() => {
        emit('finish') 
      }, 1000) 
    }
  }, 40)
})
</script>

<style scoped>
/* BACKGROUND PATTERN: Circuit Board (Warna Cyan/Putih Tipis) */
.bg-circuit-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L 90 10' fill='none' stroke='rgba(6,182,212,0.3)' stroke-width='1'/%3E%3Cpath d='M10 10 L 10 90' fill='none' stroke='rgba(6,182,212,0.3)' stroke-width='1'/%3E%3Cpath d='M90 10 L 90 90' fill='none' stroke='rgba(6,182,212,0.3)' stroke-width='1'/%3E%3Cpath d='M10 90 L 90 90' fill='none' stroke='rgba(6,182,212,0.3)' stroke-width='1'/%3E%3Cpath d='M30 10 L 30 40 L 10 40' fill='none' stroke='rgba(6,182,212,0.2)' stroke-width='1'/%3E%3Cpath d='M70 10 L 70 40 L 90 40' fill='none' stroke='rgba(6,182,212,0.2)' stroke-width='1'/%3E%3Cpath d='M50 50 L 50 90' fill='none' stroke='rgba(6,182,212,0.2)' stroke-width='1' stroke-dasharray='4'/%3E%3Ccircle cx='30' cy='40' r='2' fill='rgba(59,130,246,0.4)'/%3E%3Ccircle cx='70' cy='40' r='2' fill='rgba(59,130,246,0.4)'/%3E%3C/svg%3E");
  background-size: 120px 120px;
}

/* Animasi Circuit Bergerak Miring */
@keyframes circuitMove {
  0% { background-position: 0 0; }
  100% { background-position: 120px 120px; }
}
.animate-circuit-move {
  animation: circuitMove 15s linear infinite;
}

/* Animasi Text Gradient Berjalan */
@keyframes gradient-x {
  0%, 100% { background-size: 200% 200%; background-position: left center; }
  50% { background-size: 200% 200%; background-position: right center; }
}
.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

/* Pulse Animation */
.animate-pulse-slow {
  animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

/* Transitions */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from { opacity: 0; transform: translateY(20px) scale(0.95); }
.fade-slide-leave-to { opacity: 0; transform: translateY(-20px) scale(1.05); }

.fade-zoom-enter-active { transition: all 0.8s ease; }
.fade-zoom-enter-from { opacity: 0; transform: scale(0.5); }
</style>