document.addEventListener('DOMContentLoaded', function() {

    // Fungsi untuk mengupdate jam
    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('jam').textContent = timeString;
    }

    // Memperbarui jam setiap detik
    setInterval(updateTime, 1000);
    updateTime(); // Panggil sekali saat pertama kali dimuat

    // Fungsi untuk mengupdate tanggal
    function updateDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const dateString = `${day}-${month}-${year}`;
        document.getElementById('tanggal').textContent = dateString;
    }

    // Memperbarui tanggal saat halaman dimuat
    updateDate();
});