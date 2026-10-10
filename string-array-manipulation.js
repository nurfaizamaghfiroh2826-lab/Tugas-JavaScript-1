
/*
==========================================
JAVASCRIPT: STRING & ARRAY MANIPULATION
==========================================
*/

// ==========================================
// CASE 1: User Data Cleaner
// ==========================================

// String mentah dari form input
const rawInput = " nurfaiza_maghfiroh, amelia_putri, kayla_aurelia ";

// 1. Bersihkan whitespace di awal dan akhir string
const cleanedInput = rawInput.trim();

// 2. Ubah string menjadi array nama
const names = cleanedInput.split(",");

// 3. Format setiap nama menjadi lowercase dan
//    menghilangkan spasi liar
const formattedNames = names.map(name => name.trim().toLowerCase());

// 4. Gabungkan kembali menjadi string
const resultCase1 = formattedNames.join(" | ");

console.log("=== CASE 1: USER DATA CLEANER ===");
console.log("Hasil:", resultCase1);


// ==========================================
// CASE 2: E-Commerce Product Filter
// ==========================================

// Data produk
const products = [
    { name: "Laptop", price: 1000, active: true },
    { name: "Mouse", price: 20, active: false },
    { name: "Keyboard", price: 50, active: true }
];

// 1. Saring produk yang aktif
const activeProducts = products.filter(product => product.active === true);

// 2. Ambil nama produk dan ubah menjadi huruf kapital semua
const activeProductNames = activeProducts.map(product => product.name.toUpperCase());

// 3. Hitung total harga semua produk aktif
const totalActivePrice = activeProducts.reduce(
    (total, product) => total + product.price,
    0
);

console.log("\n=== CASE 2: E-COMMERCE PRODUCT FILTER ===");
console.log("Produk aktif:", activeProducts);
console.log("Nama produk:", activeProductNames);
console.log("Total harga:", totalActivePrice);
