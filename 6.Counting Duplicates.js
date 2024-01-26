function duplicateCount(text) {
  let count = 0; // Variabel untuk menyimpan jumlah karakter yang muncul lebih dari satu kali
  let obj = {}; // Objek untuk melacak berapa kali setiap karakter muncul dalam teks

  // Loop pertama untuk mengiterasi melalui setiap karakter dalam teks
  for (let i of text) {
    i = i.toLowerCase(); // Mengubah karakter menjadi huruf kecil agar tidak bersifat case-sensitive

    // Jika karakter belum ada dalam obj, inisialisasi dengan nilai 1; jika sudah ada, inkrementasi nilai
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }

  // Loop kedua untuk menghitung berapa banyak karakter yang muncul lebih dari satu kali
  for (let i in obj) {
    if (obj[i] > 1) {
      count++;
    }
  }

  return count; // Mengembalikan jumlah karakter yang muncul lebih dari satu kali
}
