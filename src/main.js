import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import and inject Speed Insights
import { injectSpeedInsights } from '@vercel/speed-insights'

const app = createApp(App)
app.mount('#app')

// SETUP ANIMASI (Scroll Up & Down)
AOS.init({
  offset: 120,      // Jarak trigger animasi
  duration: 800,    // Durasi animasi
  easing: 'ease-out-cubic',
  once: false,      // PENTING: False = animasi berulang setiap kali di-scroll
  mirror: true,     // PENTING: True = animasi jalan juga saat scroll ke atas
  anchorPlacement: 'top-bottom',
})

// Inject Speed Insights for performance monitoring
injectSpeedInsights()