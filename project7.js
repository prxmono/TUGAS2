const daftarRestoran = [
  { nama: "Soto Ayam Pak Man", rating: 4.8, buka: true },
  { nama: "Nasi Goreng Midnight", rating: 4.6, buka: false }, 
  { nama: "Warung Bu Tini", rating: 4.2, buka: true },    
  { nama: "Ayam Bakar Madu", rating: 4.5, buka: true },
  { nama: "Mie Ayam Lekker", rating: 4.7, buka: true }
];

let minRating = 4.5;

function filterRestoranFavorit(restoran, minRating) {
  let restoranFavorit = [];

  for (let i = 0; i < restoran.length; i++) {
    if (restoran[i].rating >= minRating && restoran[i].buka === true) {
      restoranFavorit.push(restoran[i].nama);
    }
  }
  return restoranFavorit;
}
let hasilFilter = filterRestoranFavorit(daftarRestoran, minRating);

console.log("Daftar Restoran Terfavorit yang Buka:");
console.log(hasilFilter);