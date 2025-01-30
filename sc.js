// Fungsi untuk mendapatkan waktu dan tanggal
function updateTimeDate() {
    let now = new Date();

    // Format: DD/MM/YYYY HH:mm:ss
    let date = now.getDate().toString().padStart(2, '0') + '/' + 
              (now.getMonth() + 1).toString().padStart(2, '0') + '/' + 
              now.getFullYear();

    let time = now.getHours().toString().padStart(2, '0') + ':' + 
               now.getMinutes().toString().padStart(2, '0') + ':' + 
               now.getSeconds().toString().padStart(2, '0');

    // Gabungkan waktu dan tanggal
    document.getElementById("time-date").innerHTML = `${time} ${date}`;
}

// Update waktu dan tanggal setiap detik
setInterval(updateTimeDate, 1000);

// Panggil fungsi sekali saat halaman dimuat
updateTimeDate();