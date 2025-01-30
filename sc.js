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
        
        function drawClock() {
            const canvas = document.getElementById("clock");
            const ctx = canvas.getContext("2d");
            const now = new Date();

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = 40;

            // 🎯 Gambar Lingkaran Jam
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.fillStyle = "#000";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#00FFFF";
            ctx.stroke();
            
            // 🎯 Gambar Titik Tengah
            ctx.beginPath();
            ctx.arc(centerX, centerY, 3, 0, 2 * Math.PI);
            ctx.fillStyle = "#00FFFF";
            ctx.fill();

            // 🎯 Ganti angka dengan teks "er new dev 0"
            ctx.fillStyle = "#00FFFF";
            ctx.font = "9px 'Press Start 2P'";
            ctx.textAlign = "center";
            ctx.fillText("er", centerX, centerY - 25);
            ctx.fillText("new", centerX + 30, centerY + 5);
            ctx.fillText("dev", centerX, centerY + 35);
            ctx.fillText("0", centerX - 30, centerY + 5);

            // 🎯 Gambar Jarum Jam
            function drawHand(angle, length, color, lineWidth) {
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(centerX + length * Math.cos(angle), centerY + length * Math.sin(angle));
                ctx.strokeStyle = color;
                ctx.lineWidth = lineWidth;
                ctx.lineCap = "round";
                ctx.stroke();
            }

            // 🎯 Konversi Waktu ke Sudut
            const hours = now.getHours() % 12;
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const hourAngle = ((hours + minutes / 60) * 30 - 90) * Math.PI / 180;
            const minuteAngle = ((minutes + seconds / 60) * 6 - 90) * Math.PI / 180;
            const secondAngle = (seconds * 6 - 90) * Math.PI / 180;

            drawHand(hourAngle, 20, "#00FFFF", 4);
            drawHand(minuteAngle, 30, "#FFFFFF", 3);
            drawHand(secondAngle, 35, "#FF0000", 2);

            requestAnimationFrame(drawClock);
        }

        drawClock();
       