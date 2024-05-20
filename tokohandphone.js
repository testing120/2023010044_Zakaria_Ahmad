function dapatkanJumlahProduk(productsArr) {
    let result = {}
    let daftarProduk = productsArr.produk
    for (let i = 0; i < daftarProduk.length; i++) {
        if (result[daftarProduk[i][0]] === undefined) {
            result[daftarProduk[i][0]] = daftarProduk[i][1]
        }
    }
    return result
}

function dapatkanTotalHarga(objProduk) {
    const daftarProduk = [
        ["Samsung Galaxy S21", 15000000],
        ["iPhone 13 Pro", 20000000],
        ["Xiaomi Mi 11", 10000000],
        ["Infinix Hot 10 Play", 8000000],
        ["Vivo V21", 7000000],
    ];
    let result = 0
    for (let key in objProduk) {
        for (let i = 0; i < daftarProduk.length; i++) {
            if (key === daftarProduk[i][0]) {
                result += objProduk[key] * daftarProduk[i][1]
            }
        }
    }
    return result
}

function dapatkanDiskon(statusMember, totalHarga) {
    let result = 0
    let diskon = 0.1
    if (statusMember === true) {
        result = totalHarga - (totalHarga * diskon)
    } else {
        return totalHarga
    }
    return result
}

function belanjaTeros(pelanggan) {
    let jumlahProduk = dapatkanJumlahProduk(pelanggan)
    let totalHarga = dapatkanTotalHarga(jumlahProduk)
    let diskon = dapatkanDiskon(pelanggan.member, totalHarga)
    if (pelanggan.member === true) {
        return `Hai pelanggan setia ${pelanggan.nama}! Total Harga yang harus kamu bayar adalah Rp ${diskon}`
    } else {
        return `Hai ${pelanggan.nama}! Total Harga yang harus kamu bayar adalah Rp ${totalHarga}`
    }
}

let pelanggan1 = {
    nama: "Anas",
    produk: [
        ["Samsung Galaxy S21", 2],
        ["iPhone 13 Pro", 1],
    ],
    member: true,
};

let pelanggan2 = {
    nama: "Ghani",
    produk: [
        ["Infinix Hot 10 Play", 1],
        ["Samsung Galaxy S21", 3],
        ["iPhone 13 Pro", 1],
    ],
    member: false,
};

let pelanggan3 = {
    nama: "Akhyar",
    produk: [["Xiaomi Mi 11", 2]],
    member: true,
};

console.log(belanjaTeros(pelanggan1)); 
console.log(belanjaTeros(pelanggan2)); 
console.log(belanjaTeros(pelanggan3)); 
