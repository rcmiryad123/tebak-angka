const maxsimum = parseInt(prompt("Masukan Nilai Maksimum"));
const targetNum = Math.floor(Math.random() * maxsimum) + 1;

let guess = prompt("Masukan Nilai Tebakan Pertama Anda");
let attempts = 1;

while (guess.toLocaleLowerCase != targetNum) {
    if (guess == "menyerah") {
        break;        
    }else {
        attempts++;
        if (guess > targetNum) {
            guess = prompt("Nilai Tebakan Terlalu Tinggi, ketik 'menyerah' untuk menyerah");
        } else {
            guess = prompt("Nilai Tebakan Terlalu Rendah, ketik 'menyerah' untuk menyerah");
        }
    }
}

if (guess == "menyerah") {
    alert("Anda Menyerah, sayang sekali.");
}else {
    alert(`Selamat! Anda menebak dengan benar. Nilai target adalah ${targetNum} & Anda menebak ${attempts} kali.`);
}