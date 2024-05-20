let teman = ["Rizal", "Niam", "rikhul", "Dayat"];

let hobi = ["Membaca", "Menulis", "Bersepeda", "Memasak"];

console.log("Nama Teman:");
for(let i = 0; i < teman.length; i++) {
    console.log(teman[i]);
}

console.log("Hobi:");
for(let i = 0; i < hobi.length; i++) {
    console.log(hobi[i]);
}

teman.push("Bila");
hobi.push("Dafa");

console.log("Setelah ditambah:");
console.log("Nama Teman: ", teman);
console.log("Hobi: ", hobi);

teman.pop();
hobi.pop();

console.log("Setelah dihapus:");
console.log("Nama Teman: ", teman);
console.log("Hobi: ", hobi);
