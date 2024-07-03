document
  .getElementById("cek-khodam-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Ambil nilai dari input nama dan tanggal_lahir
    const nama = document.getElementById("nama").value.trim(); // Trim untuk menghilangkan spasi di awal dan akhir
    const tanggal_lahir = document.getElementById("tanggal_lahir").value;

    // Menampilkan animasi loading
    document.getElementById("loading").style.display = "flex";
    document.getElementById("result").style.display = "none"; // Sembunyikan hasil sebelumnya

    // Simulasi proses cek khodam (di sini digunakan simulasi timeout)
    setTimeout(function () {
      // Sembunyikan animasi loading setelah proses selesai
      document.getElementById("loading").style.display = "none";

      // Tampilkan hasil pencarian
      const khodamName = generateRandomKhodam(); // Fungsi untuk menghasilkan nama khodam acak
      const resultNamaElement = document.getElementById("result-nama");
      const resultTanggalLahirElement = document.getElementById(
        "result-tanggal_lahir"
      );
      const resultKhodamNameElement = document.getElementById("khodam-name");

      resultNamaElement.textContent = nama;
      resultTanggalLahirElement.textContent = tanggal_lahir;
      resultKhodamNameElement.textContent = khodamName;

      // Tampilkan hasil
      document.getElementById("result").style.display = "block";

      // Sembunyikan form setelah muncul hasil
      document.getElementById("cek-khodam-form").style.display = "none";

      // Kirim data hasil ke server-side PHP
      sendDataToServer(nama, tanggal_lahir, khodamName);
    }, 2000); // Simulasi delay 2 detik untuk proses cek khodam
  });

// Fungsi untuk mengirim data hasil ke server-side PHP
function sendDataToServer(nama, tanggal_lahir, khodamName) {
  const formData = new FormData();
  formData.append("nama", nama);
  formData.append("tanggal_lahir", tanggal_lahir);
  formData.append("khodam_name", khodamName);

  fetch("../save_result.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data); // Output dari PHP (berhasil disimpan atau error)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Fungsi untuk menghasilkan nama khodam acak (contoh)
function generateRandomKhodam() {
  const khodamNames = [
    "Monyet Salto",
    "Knalpot Racing",
    "Badut Mixue",
    "Siluman Ayam Geprek",
    "Sambal Matah",
    "Kadal Gurun",
    "Badut Nolep",
    "Telor Gulung",
    "Koceng Birahi",
    "Macan Totol",
    "Kucing Oren",
    "Ular Kadut",
  ];
  const randomIndex = Math.floor(Math.random() * khodamNames.length);
  return khodamNames[randomIndex];
}

// document.getElementById('cek-khodam-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Mencegah form submit secara default

//     // Ambil nilai dari input nama dan tanggal_lahir
//     const nama = document.getElementById('nama').value.trim(); // Trim untuk menghilangkan spasi di awal dan akhir
//     const tanggal_lahir = document.getElementById('tanggal_lahir').value;

//     // Menampilkan animasi loading
//     document.getElementById('loading').style.display = 'flex';
//     document.getElementById('result').style.display = 'none'; // Sembunyikan hasil sebelumnya

//     // Simulasi proses cek khodam (di sini digunakan simulasi timeout)
//     setTimeout(function() {
//         // Sembunyikan animasi loading setelah proses selesai
//         document.getElementById('loading').style.display = 'none';

//         // Tampilkan hasil pencarian
//         const khodamName = generateRandomKhodam(); // Fungsi untuk menghasilkan nama khodam acak
//         const resultNamaElement = document.getElementById('result-nama');
//         const resultTanggalLahirElement = document.getElementById('result-tanggal_lahir');
//         const resultKhodamNameElement = document.getElementById('khodam-name');

//         resultNamaElement.textContent = nama;
//         resultTanggalLahirElement.textContent = tanggal_lahir;
//         resultKhodamNameElement.textContent = khodamName;

//         // Tampilkan hasil
//         document.getElementById('result').style.display = 'block';

//         // Sembunyikan form setelah muncul hasil
//         document.getElementById('cek-khodam-form').style.display = 'none';
//     }, 2000); // Simulasi delay 2 detik untuk proses cek khodam
// });

// // Tombol "Coba Nama Lain"
// document.getElementById('btnCobaNamaLain').addEventListener('click', function() {
//     // Sembunyikan hasil
//     document.getElementById('result').style.display = 'none';

//     // Tampilkan kembali form
//     document.getElementById('cek-khodam-form').style.display = 'block';
// });

// // Fungsi untuk menghasilkan nama khodam acak (contoh)
// function generateRandomKhodam() {
//     const khodamNames = [
//         'Khodam Al-Karim',
//         'Knalpot Racing',
//         'Badut Mixue',
//         'Siluman Ayam Geprek',
//         'Sambal Matah',
//         'Kadal Gurun',
//         'Badut Nolep',
//         'Telor Gulung',
//         'Koceng Birahi',
//         'Macan Totol',
//         '',
//         'Ular Kadut'
//     ];
//     const randomIndex = Math.floor(Math.random() * khodamNames.length);
//     return khodamNames[randomIndex];
// }

// document.getElementById('cek-khodam-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Mencegah form submit secara default

//     // Ambil nilai dari input nama dan tanggal_lahir
//     const nama = document.getElementById('nama').value.trim(); // Trim untuk menghilangkan spasi di awal dan akhir
//     const tanggal_lahir = document.getElementById('tanggal_lahir').value;

//     // Menampilkan animasi loading
//     document.getElementById('loading').style.display = 'flex';
//     document.getElementById('result').style.display = 'none'; // Sembunyikan hasil sebelumnya

//     // Simulasi proses cek khodam (di sini digunakan simulasi timeout)
//     setTimeout(function() {
//         // Sembunyikan animasi loading setelah proses selesai
//         document.getElementById('loading').style.display = 'none';

//         // Tampilkan hasil pencarian
//         const khodamName = generateRandomKhodam(); // Fungsi untuk menghasilkan nama khodam acak
//         const resultNamaElement = document.getElementById('result-nama');
//         const resultTanggalLahirElement = document.getElementById('result-tanggal_lahir');
//         const resultKhodamNameElement = document.getElementById('khodam-name');

//         resultNamaElement.textContent = nama;
//         resultTanggalLahirElement.textContent = tanggal_lahir;
//         resultKhodamNameElement.textContent = khodamName;

//         // Tampilkan hasil
//         document.getElementById('result').style.display = 'block';
//     }, 2000); // Simulasi delay 2 detik untuk proses cek khodam
// });

// // Tombol "Coba Nama Lain"
// document.getElementById('btnCobaNamaLain').addEventListener('click', function() {
//     document.getElementById('result').style.display = 'none'; // Sembunyikan hasil
//     document.getElementById('cek-khodam-form').style.display = 'block'; // Tampilkan kembali form
// });

// // Fungsi untuk menghasilkan nama khodam acak (contoh)
// function generateRandomKhodam() {
//     const khodamNames = [
//         'Khodam Al-Karim',
//         'Khodam Al-Jalil',
//         'Khodam Al-Rahman',
//         'Khodam Al-Hakim',
//         'Khodam Al-Malik'
//     ];
//     const randomIndex = Math.floor(Math.random() * khodamNames.length);
//     return khodamNames[randomIndex];
// }

// let lastSearchedName = ''; // Variabel untuk menyimpan nama terakhir yang dicari
// let lastKhodamName = ''; // Variabel untuk menyimpan nama khodam terakhir

// document.getElementById('cek-khodam-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Mencegah form submit secara default

//     // Ambil nilai dari input nama dan tanggal_lahir
//     const nama = document.getElementById('nama').value.trim(); // Trim untuk menghilangkan spasi di awal dan akhir
//     const tanggal_lahir = document.getElementById('tanggal_lahir').value;

//     // Menampilkan animasi loading
//     document.getElementById('loading').style.display = 'flex';
//     document.getElementById('result').style.display = 'none'; // Sembunyikan hasil sebelumnya

//     // Jika nama yang dimasukkan sama dengan nama terakhir yang dicari, tampilkan hasil sebelumnya
//     if (nama === lastSearchedName && lastKhodamName !== '') {
//         displayKhodamName(lastKhodamName);
//         return; // Keluar dari function karena tidak perlu melanjutkan proses
//     }

//     // Simulasi proses cek khodam (di sini digunakan simulasi timeout)
//     setTimeout(function() {
//         // Simpan nama terakhir yang dicari
//         lastSearchedName = nama;

//         // Sembunyikan animasi loading setelah proses selesai
//         document.getElementById('loading').style.display = 'none';

//         // Tampilkan hasil pencarian
//         const khodamName = generateRandomKhodam(); // Fungsi untuk menghasilkan nama khodam acak
//         displayKhodamName(khodamName);

//         // Simpan nama khodam terakhir yang ditampilkan
//         lastKhodamName = khodamName;
//     }, 2000); // Simulasi delay 2 detik untuk proses cek khodam
// });

// // Fungsi untuk menampilkan nama khodam
// function displayKhodamName(name) {
//     document.getElementById('khodam-name').textContent = name;
//     document.getElementById('result').style.display = 'block';
// }

// // Fungsi untuk menghasilkan nama khodam acak (contoh)
// function generateRandomKhodam() {
//     const khodamNames = [
//         'Khodam Al-Karim',
//         'Khodam Al-Jalil',
//         'Khodam Al-Rahman',
//         'Khodam Al-Hakim',
//         'Khodam Al-Malik'
//     ];
//     const randomIndex = Math.floor(Math.random() * khodamNames.length);
//     return khodamNames[randomIndex];
// }

// document.getElementById('cek-khodam-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Mencegah form submit secara default

//     // Ambil nilai dari input nama dan tanggal_lahir
//     const nama = document.getElementById('nama').value;
//     const tanggal_lahir = document.getElementById('tanggal_lahir').value;

//     // Menampilkan animasi loading
//     document.getElementById('loading').style.display = 'flex';
//     document.getElementById('result').style.display = 'none'; // Sembunyikan hasil sebelumnya

//     // Simulasi proses cek khodam (di sini digunakan simulasi timeout)
//     setTimeout(function() {
//         // Sembunyikan animasi loading setelah proses selesai
//         document.getElementById('loading').style.display = 'none';

//         // Tampilkan hasil pencarian
//         const khodamName = generateRandomKhodam(); // Fungsi untuk menghasilkan nama khodam acak
//         document.getElementById('khodam-name').textContent = khodamName;
//         document.getElementById('result').style.display = 'block';
//     }, 2000); // Simulasi delay 2 detik untuk proses cek khodam
// });

// // Fungsi untuk menghasilkan nama khodam acak (contoh)
// function generateRandomKhodam() {
//     const khodamNames = [
//         'Khodam Al-Karim',
//         'Khodam Al-Jalil',
//         'Khodam Al-Rahman',
//         'Khodam Al-Hakim',
//         'Khodam Al-Malik'
//     ];
//     const randomIndex = Math.floor(Math.random() * khodamNames.length);
//     return khodamNames[randomIndex];
// }

// document.getElementById('cek-khodam-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Mencegah form submit secara default

//     // Menampilkan animasi loading
//     document.getElementById('loading').style.display = 'flex';

//     // Simulasi delay untuk proses pencarian khodam (misalnya 3 detik)
//     setTimeout(function() {
//         // Sembunyikan animasi loading setelah proses selesai
//         document.getElementById('loading').style.display = 'none';

//         // Tampilkan hasil pencarian atau lanjutkan proses
//         alert('Khodam berhasil ditemukan!');
//     }, 3000); // 3000 milidetik = 3 detik
// });

// // <script>
// // // Menampilkan popup ketika tombol diklik
// // $('#popupButton').click(function() {
// //   $('#popup').fadeIn();
// //   setTimeout(function() {
// //     window.location.href = "home/";
// //   }, 3000); // Mengarahkan ke halaman beranda dalam 3 detik
// // });
// // </script>
