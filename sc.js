        const dateElement = document.getElementById("flip-date");
        const wetonElement = document.getElementById("weton");

        function updateDate() {
            const date = new Date();
            const day = date.getDate();
            const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
                                "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            const month = monthNames[date.getMonth()];
            const year = date.getFullYear();

            dateElement.innerText = `${day} ${month} ${year}`;

            // Hitung weton
            const pasaran = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];
            const hariJawa = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
            const wetonIndex = (date.getDay() + day) % 5;
            wetonElement.innerText = `${hariJawa[date.getDay()]} ${pasaran[wetonIndex]}`;
        }

        function flipDate() {
            const dateBox = document.querySelector('.date-box');
            dateBox.classList.add('flipping');
            setTimeout(() => {
                dateBox.classList.remove('flipping');
            }, 400);
        }

        setInterval(updateDate, 10000);
        updateDate();