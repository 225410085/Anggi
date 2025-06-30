self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('app-cache-v1').then((cache) => { // Beri nama cache versi, lebih baik untuk update
            console.log('Caching essential assets...');
            return cache.addAll([
                '/',
                '/index.html',
                '/login.html',
                '/register.html',
                '/matematika.html',
                '/bahasa_inggris.html',
                '/statistika.html',
                '/workshop.html',
                '/manifest.json', // <-- KOREKSI NAMA FILE DI SINI (dari .js ke .json)
                '/icon.png',      // <-- Tambahkan icon.png jika Anda menggunakannya
                // Jika Anda tidak memiliki file JavaScript eksternal (misalnya script.js)
                // dan semua JS Anda inline di HTML, maka Anda tidak perlu mencantumkan file JS lain.
                //
                // JIKA INI APLIKASI REACT (setelah di-build):
                // Anda harus menambahkan path ke file JS yang dibundel,
                // contoh: '/static/js/main.<hash>.js', '/static/css/main.<hash>.css'
                //
                // JIKA ANDA MEMILIKI FILE JS EKSTERNAL MURNI (bukan React):
                // Pastikan file tersebut benar-benar ada di root folder Anda.
                // Contoh: '/app.js' atau '/main.js'
            ]);
        })
        .catch((error) => {
            console.error('Failed to cache assets during install:', error);
            // Anda bisa menambahkan logic di sini jika Anda ingin service worker gagal diinstal
            // jika cache awal gagal, meskipun biasanya `waitUntil` sudah menanganinya.
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});