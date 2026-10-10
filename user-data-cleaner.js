
console.log("=== CASE 1: USER DATA CLEANER ===");

// String mentah dari form input
const rawData = " nurfaiza_maghfiroh, amelia_putri, kayla_aurelia ";

// 1. Bersihkan whitespace di awal dan akhir string
const cleanedData = rawData.trim();

// 2. Ubah string menjadi array nama
const names = cleanedData.split(",");

// 3. Format setiap nama menjadi lowercase tanpa spasi liar
const formattedNames = names.map(name => name.trim().toLowerCase());

// 4. Gabungkan kembali menjadi string dengan pemisah |
const result = formattedNames.join(" | ");

// Tampilkan hasil
console.log("Data awal:", rawData);
console.log("Data setelah dibersihkan:", cleanedData);
console.log("Array nama:", formattedNames);
console.log("Hasil akhir:", result);
