const maxsimum = parseInt(prompt("Masukan Nilai Maksimum"));
const targetNum = Math.floor(Math.random() * maxsimum) + 1;

console.log(targetNum);

let guess = prompt("Masukan Nilai Tebakan Pertama Anda");
let attempts = 1;

while (guess != targetNum) {
    if (guess == "#") {
        break;        
    }else {
        attempts++;
        if (guess > targetNum) {
            guess = prompt("Nilai Tebakan Terlalu Tinggi, ketik '#' untuk menyerah");
        } else {
            guess = prompt("Nilai Tebakan Terlalu Rendah, ketik '#' untuk menyerah");
        }
    }
}

if (guess == "#") {
    alert("Anda Menyerah, sayang sekali.");
}else {
    alert(`Selamat! Anda menebak dengan benar. Nilai target adalah ${targetNum} & Anda menebak ${attempts} kali.`);
}