
console.log("=== CASE 2: E-COMMERCE PRODUCT FILTER ===");

// Data produk
const products = [
    { name: "Laptop", price: 1000, active: true },
    { name: "Mouse", price: 20, active: false },
    { name: "Keyboard", price: 50, active: true }
];

// 1. Saring produk yang aktif
const activeProducts = products.filter(product => product.active === true);

// 2. Buat array baru berisi nama produk dengan huruf kapital semua
const productNames = activeProducts.map(product => product.name.toUpperCase());

// 3. Hitung total harga seluruh produk aktif
const totalPrice = activeProducts.reduce(
    (total, product) => total + product.price,
    0
);

// Tampilkan hasil
console.log("Semua produk:", products);
console.log("Produk aktif:", activeProducts);
console.log("Nama produk aktif:", productNames);
console.log("Total harga produk aktif:", totalPrice);
