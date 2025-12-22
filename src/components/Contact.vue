<template>
  <section id="contact" class="py-24 relative z-10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-white">Let's <span class="text-emerald-400">Collaborate</span></h2>
        <p class="text-slate-400 mt-3 max-w-xl mx-auto">
          Punya ide aplikasi brilian? Atau butuh bantuan teknis? Kirim pesan, dan mari kita diskusikan solusinya.
        </p>
      </div>

      <div class="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl" data-aos="zoom-in">
        <form class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-300">Nama Lengkap</label>
              <input type="text" placeholder="John Doe" class="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition">
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-300">Email Address</label>
              <input type="email" placeholder="john@example.com" class="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition">
            </div>
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-300">Pesan / Detail Proyek</label>
            <textarea rows="5" placeholder="Ceritakan sedikit tentang proyek Anda..." class="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition resize-none"></textarea>
          </div>

          <button class="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold rounded-lg shadow-lg shadow-emerald-500/20 transition transform hover:-translate-y-1">
            Kirim Pesan Sekarang
          </button>
        </form>
      </div>

    </div>
  </section>
</template>