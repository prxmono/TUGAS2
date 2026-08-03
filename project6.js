let jamKerjaSeminggu = [8, 9, 8, 10, 9, 5];

function hitungGajiMingguan(jamKerja) {
  let totalJam = 0;
  for (let i = 0; i < jamKerja.length; i++) {
    totalJam += jamKerja[i];
  }

  const tarifDasar = 50000;
  const tarifLembur = 75000;
  let totalGaji = 0;

  if (totalJam > 40) {
    let jamLembur = totalJam - 40;
    totalGaji = (40 * tarifDasar) + (jamLembur * tarifLembur);
  } else {
    totalGaji = totalJam * tarifDasar;
  }
  console.log(`Total Jam Kerja: ${totalJam} jam`);
  return totalGaji;
}
let gajiBersih = hitungGajiMingguan(jamKerjaSeminggu);

console.log("Total Gaji Bersih Mingguan:");
console.log(`Rp ${gajiBersih.toLocaleString('id-ID')}`); 