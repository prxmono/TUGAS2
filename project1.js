let bukuHarga = [50000, 50000, 50000]

function hitungTotalBuku(bukuHarganya) {
    let totalBelanja = 0
    for (let i = 0; i < bukuHarganya.length; i++) {
        totalBelanja += bukuHarganya[i]
    };
    console.log(`Total Belanja : Rp.${totalBelanja}`);

    let diskon = totalBelanja * 0.15
    if (totalBelanja >= 150000)
        console.log("Selamat Anda Mendapatkan Diskon 15% !!!")
        totalBelanja -= diskon
        console.log(`Harga Diskon : Rp.${totalBelanja}`);
}
hitungTotalBuku(bukuHarga)