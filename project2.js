let ipkCalon = [
    { ipk: 3.5, pendapatanortu: 5000000 },
    { ipk: 3.5, pendapatanortu: 4000000 },
    { ipk: 3.4, pendapatanortu: 4000000 }
];

function seleksiBeasiswa(calonIpk) {
    let lulus = 0
    let tidakLulus = 0
    for (let i = 0; i < calonIpk.length; i++)

        if (calonIpk[i].ipk >= 3.5 && calonIpk[i].pendapatanortu <= 5000000) {
            console.log(`Status peserta ke ${i+1} : Lulus`)
            lulus += 1
        } else {
            console.log(`Status peserta ke ${i+1} : Tidak Lulus`)
            tidakLulus += 1
        }

    console.log(`Yang lulus : ${lulus}`);
    console.log(`Yang tidak lulus : ${tidakLulus}`);
}
seleksiBeasiswa(ipkCalon);