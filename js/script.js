document
  .getElementById("cek-khodam-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Ambil nilai dari input nama dan tanggal_lahir
    const nama = document.getElementById("nama").value.trim(); // Trim untuk menghilangkan spasi di awal dan akhir
    const tanggal_lahir = document.getElementById("tanggal_lahir").value;

    // Menampilkan animasi loading
    document.getElementById("loading").style.display = "flex";

    // Simulasi proses cek khodam (di sini digunakan simulasi timeout)
    setTimeout(function () {
      // Sembunyikan animasi loading setelah proses selesai
      document.getElementById("loading").style.display = "none";

      // Tampilkan hasil pencarian
      const khodamName = generateRandomKhodam(); // Fungsi untuk menghasilkan nama khodam acak

      // Tambahkan nama khodam ke form sebagai input tersembunyi
      const khodamNameInput = document.createElement("input");
      khodamNameInput.type = "hidden";
      khodamNameInput.name = "khodam_name";
      khodamNameInput.value = khodamName;
      document.getElementById("cek-khodam-form").appendChild(khodamNameInput);

      // Submit form
      document.getElementById("cek-khodam-form").submit();
    }, 2000); // Simulasi delay 2 detik untuk proses cek khodam
  });

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
