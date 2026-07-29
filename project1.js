let bukuHarga = [50000, 50000, 50000]

function hitungTotalBuku(bukuHarganya) {
    let totalBelanja = 0
    for (let i = 0; i < bukuHarganya.length; i++) {
        totalBelanja += bukuHarganya[i]
    }
    console.log(`Total Belanja : Rp.${totalBelanja}`)
    Let harga
    if (totalBelanja >= 150000) {
        totalBelanja - 15 / 100
    }
    console.log(`Harga Akhir : ${totalBelanja}`)
}
hitungTotalBuku(bukuHarga)