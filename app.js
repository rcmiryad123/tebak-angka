const maxsimum = parseInt(prompt("Masukan Nilai Maksimum"));
const targetNum = Math.floor(Math.random() * maxsimum) + 1;

let guess = parseInt(prompt("Masukan Nilai Tebakan Pertama Anda"));
let attempts = 1;

while (guess !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt("Nilai Tebakan Terlalu Tinggi"));
    } else {
        guess = parseInt(prompt("Nilai Tebakan Terlalu Rendah"));
    }
}

alert(`Selamat! Anda menebak dengan benar. Nilai target adalah ${targetNum} & Anda menebak ${attempts} kali.`);