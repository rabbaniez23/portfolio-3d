<template>
  <div class="cursor-container hidden md:block">
    <div 
      ref="cursorRing"
      class="cursor-ring"
      :class="{ 'is-hover': isHover, 'is-click': isClick }"
    ></div>

    <div 
      ref="cursorDot"
      class="cursor-dot"
      :class="{ 'is-hover': isHover }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cursorRing = ref(null);
const cursorDot = ref(null);

const isHover = ref(false);
const isClick = ref(false);

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mouseup', onMouseUp);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mousedown', onMouseDown);
  window.removeEventListener('mouseup', onMouseUp);
});

const onMouseMove = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Gerakan INSTAN (Tanpa Delay)
  // Langsung tempel ke posisi mouse
  if (cursorDot.value) {
    cursorDot.value.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  }
  if (cursorRing.value) {
    cursorRing.value.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  }

  // Deteksi Hover
  const target = e.target;
  if (
    target.closest('a') || 
    target.closest('button') || 
    target.closest('.cursor-pointer') || 
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA'
  ) {
    isHover.value = true;
  } else {
    isHover.value = false;
  }
};

const onMouseDown = () => { isClick.value = true; };
const onMouseUp = () => { isClick.value = false; };
</script>

<style scoped>
:global(html) {
  cursor: none;
}
@media (max-width: 768px) {
  :global(html) { cursor: auto; }
  .cursor-container { display: none; }
}

.cursor-container {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
  z-index: 9999;
}

/* === RING KACA === */
.cursor-ring {
  position: absolute;
  top: 0; left: 0;
  
  width: 24px; height: 24px;
  margin-left: -12px; margin-top: -12px;
  
  background-color: rgba(16, 185, 129, 0.05); 
  border: 1px solid rgba(16, 185, 129, 0.5); 
  border-radius: 50%;
  backdrop-filter: blur(1px);
  
  /* PENTING: Jangan masukkan 'transform' atau 'all' di sini */
  /* Kita hanya transisi ukuran & warna, bukan posisi */
  transition: width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s;
  
  /* Supaya render gerakan lebih smooth di layar 60hz+ */
  will-change: transform; 
}

/* === DOT INTI === */
.cursor-dot {
  position: absolute;
  top: 0; left: 0;
  width: 5px; height: 5px;
  margin-left: -2.5px; margin-top: -2.5px;
  background-color: #34d399; 
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.6);
  z-index: 10;
  
  transition: opacity 0.2s, transform 0s; /* Transform 0s biar instan */
}

/* === STATE: HOVER === */
.cursor-ring.is-hover {
  width: 45px; height: 45px;
  margin-left: -22.5px; margin-top: -22.5px;
  background-color: rgba(16, 185, 129, 0.1);
  border-color: #34d399;
}

.cursor-dot.is-hover {
  opacity: 0.5;
}

/* === STATE: CLICK === */
.cursor-ring.is-click {
  width: 20px; height: 20px;
  margin-left: -10px; margin-top: -10px;
  border-width: 2px;
  border-color: #6ee7b7;
}
</style>