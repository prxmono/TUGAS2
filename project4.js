let targetKalori = 2000;
const kaloriMakanan = [500, 700, 600, 400];

function evaluasiAsupanKalori(kalori, target) {
  let total = 0;
  for (let i = 0; i < kalori.length; i++) {
    total += kalori[i];
  }

  console.log(`Total Kalori Hari Ini: ${total} kcal`);
  console.log(`Target Kalori: ${target} kcal`);

  if (total > target) {
    return "Total kalori MELEBIHI target";
  } else if (total < target) {
    return "Total kalori KURANG dari target";
  } else {
    return "Total kalori PAS sesuai target";
  }
}
let hasil = evaluasiAsupanKalori(kaloriMakanan, targetKalori);

console.log("Hasil Evaluasi:");
console.log(hasil);