        function updateDateTime() {
            const dateElement = document.getElementById('tanggal');
            const timeElement = document.getElementById('jam');

            // Mengambil tanggal dan waktu sekarang
            const now = new Date();

            // Format Tanggal
            const day = now.getDate();
            const month = now.getMonth(); // Bulan dimulai dari 0 (Januari = 0)
            const year = now.getFullYear();

            // Bulan dalam Bahasa Indonesia
            const months = [
                "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
                "Juli", "Agustus", "September", "Oktober", "November", "Desember"
            ];

            // Format jam
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const formattedTime = `${hours}:${minutes}:${seconds}`;

            // Weton - Hari dan Pasaran
            const weekdays = [
                "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"
            ];
            const pasaran = [
                "Legi", "Pahing", "Pon", "Wage", "Kliwon"
            ];

            // Menghitung weton berdasarkan tanggal
            const dayOfWeek = now.getDay(); // 0 = Minggu, 1 = Senin, dst.
            const dayOfMonth = (day + dayOfWeek) % 5; // Hitung pasaran berdasarkan hari

            // Menampilkan tanggal, bulan, jam, dan weton
            dateElement.innerHTML = `<b>Tanggal:</b> ${day} ${months[month]} ${year} | ${weekdays[dayOfWeek]} ${pasaran[dayOfMonth]}`;
            timeElement.textContent = formattedTime;
        }

        // Update tanggal dan jam setiap detik
        setInterval(updateDateTime, 1000);