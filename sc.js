// Fungsi untuk mendapatkan waktu dan tanggal
function updateTimeDate() {
    let now = new Date();

    // Nama bulan
    const bulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    // Format tanggal: DD bulan YYYY
    let date = now.getDate().toString().padStart(2, '0') + ' ' + 
              bulan[now.getMonth()] + ' ' + 
              now.getFullYear();

    // Format jam: HH:mm:ss
    let time = now.getHours().toString().padStart(2, '0') + ':' + 
               now.getMinutes().toString().padStart(2, '0') + ':' + 
               now.getSeconds().toString().padStart(2, '0');

    // Zona Waktu WIB
    let wib = "WIB (UTC+7)";

    // Menampilkan tanggal, jam, dan WIB
    document.getElementById("tanggal").innerHTML = `<b>Tanggal:</b> ${date}`;
    document.getElementById("jam").innerHTML = `<b>Jam:</b> ${time}`;
    document.getElementById("wib").innerHTML = wib;
}

// Update waktu dan tanggal setiap detik
setInterval(updateTimeDate, 1000);

// Panggil fungsi sekali saat halaman dimuat
updateTimeDate();