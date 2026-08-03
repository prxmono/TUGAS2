let tanggal = 30
const platNomorTerakhir = [1234, 4567, 7890, 1011]

function filterParkirGanjilGenap (date, plat) {
    if (date % 2 === 0) {
        console.log(`Tanggal <${date}> adalah Genap`) 
    } else {
        console.log(`Tanggal <${date}> adalah Ganjil`)
    }

    let platBaru = [];
    for (let i = 0; i < plat.length; i++) {
        let platAkhir = plat[i] % 10
        platBaru.push(platAkhir)
    }
    console.log("Plat")
    console.log(plat)
    console.log("Angka Terakhir")
    console.log(platBaru)

    let diizinkan = [];
    for (let i = 0; i < plat.length; i++) {
        let platAkhir = plat[i] % 10;

    if (date % 2 !== 0 && platAkhir % 2 !== 0) {
      diizinkan.push(plat[i]);
    } 

    else if (date % 2 === 0 && platAkhir % 2 === 0) {
      diizinkan.push(plat[i]);
    }
    }
    return diizinkan;
}
let hasil = filterParkirGanjilGenap(tanggal, platNomorTerakhir);

console.log("Plat yang Diizinkan Masuk");
console.log(hasil);