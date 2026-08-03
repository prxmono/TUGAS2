const daftarEmail = [
  "budi@gmail.com",
  "siti.makanan.com", 
  "ahmad@yahoo",      
  "dewi_123@office.id",
  "salah_format"   
];

function validasiDaftarEmail(emails) {
  let emailValid = [];
  let emailTidakValid = [];

  for (let i = 0; i < emails.length; i++) {
    let email = emails[i];
    if (email.includes('@') && email.includes('.')) {
      emailValid.push(email);
    } else {
      emailTidakValid.push(email);
    }
  }
  return {
    valid: emailValid,
    tidakValid: emailTidakValid
  };
}
let hasilValidasi = validasiDaftarEmail(daftarEmail);

console.log("Hasil Validasi Email:");
console.log(hasilValidasi);