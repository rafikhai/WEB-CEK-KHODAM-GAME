<?php
// Menampilkan isi dari $_POST untuk debugging
var_dump($_POST);

// Pastikan koneksi ke database
$hostname = "localhost";
$username = "root";
$password = "";
$database = "hasil_cek_khodam";

// Membuat koneksi ke database
$conn = new mysqli($hostname, $username, $password, $database);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Mengambil data dari form
$nama = $_POST['nama'] ?? '';
$tanggal_lahir = $_POST['tanggal_lahir'] ?? '';
$khodam_name = $_POST['khodam_name'] ?? '';

// Query untuk menyimpan data ke database
$sql = "INSERT INTO hasil_cek_khodam (nama, tanggal_lahir, khodam_name) VALUES ('$nama', '$tanggal_lahir', '$khodam_name')";

if ($conn->query($sql) === TRUE) {
    // Redirect ke halaman result.html dengan query parameters
    header("Location: result?nama=$nama&tanggal_lahir=$tanggal_lahir&khodam_name=$khodam_name");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Menutup koneksi
$conn->close();
?>
