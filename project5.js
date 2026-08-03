const daftarProduk = [
  { nama: "Baju Kaos", stok: 5, aktif: true },
  { nama: "Celana Jeans", stok: 15, aktif: true },
  { nama: "Jaket Parka", stok: 2, aktif: false },
  { nama: "Sepatu Sneaker", stok: 3, aktif: true },
  { nama: "Topi Hitam", stok: 10, aktif: true }
];

let batasStok = 8;

function cekRestockGudang(produk, threshold) {
  let wajibRestock = [];
  for (let i = 0; i < produk.length; i++) {
    if (produk[i].stok < threshold && produk[i].aktif === true) {
      wajibRestock.push(produk[i]);
    }
  }
  return wajibRestock;
}
let hasilRestock = cekRestockGudang(daftarProduk, batasStok);

console.log("Daftar Produk yang Wajib Di-restock:");
console.log(hasilRestock);