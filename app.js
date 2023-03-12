// let angka = Math.random();
// console.log(angka);

// if(angka >= 0.5){
//     console.log('angka lebih besar 0.5');
// } else (
//     console.log('angka lebih keci 0.5')
// )

// const iniHari  = prompt('masukan antara senin/sabtu').toLowerCase();

// if(iniHari === 'senin'){
//     console.log('selamat bekerja kawan!');
// } else if (iniHari === 'sabtu'){
//     console.log('semoga jangan cepat berlalu');
// }else {
//     console.log('tidak ada hari yg di pilih!');
// }

// const nilai = prompt('masukan nilai ?');

// if( nilai < 50){
//     alert('nilai E');
// } else if ( nilai < 60){
//     alert('nilai D');
// } else if ( nilai < 70){
//     alert('nilai C');
// } else if ( nilai < 80){
//     alert('nilai B');
// } else if ( nilai < 100){
//     alert('nilai A');
// }

// <<<<<<< HEAD
// // if bersarang
// const password = prompt('Buat password');
// =======
// // const password = prompt('Buat password');
// >>>>>>> 1b99b0724e95b46befba128813fb4eaf70cd388c
// if( password.length >= 6){
//     if(password.indexOf(' ') === -1){
//         console.log('Password valid');
//     } else {
//         console.log('password tidak boleh ada spasi');
//     }
// } else {
//     console.log('password minimal 6 karakter');
// }
// <<<<<<< HEAD
// if bersarang menggunakan logical
// if(password.length >= 6 && password.indexOf(' ') === -1){
//     console.log("password valid");
// }else{
//     console.log('password tidak memenuhin syarat');
// }
// =======
// >>>>>>> 1b99b0724e95b46befba128813fb4eaf70cd388c

//jika prompt di cancle
// let input = prompt("Masukan nama:");
// if(input === null){
//     alert("batalkan aksi ini!");
// } else {
//     alert("halo, " + input + "!");
// }
//jika prompt di cancle
// Tampilkan prompt
// var hasil = prompt("Ketikkan sesuatu");
// Cek hasil prompt apabila cancel
// if (!hasil) {
 // Tampilkan di console
//  console.log("Prompt telah di-cancel");
// }


// let akun = prompt("Masukan password anda!");
// if(akun === "admin" || akun === "spv"){
//     console.log("di terima");
// }else{
//     console.log("sore kawala")
// }

//array

// let playlist = ['bunga','aji','bara','nara'];
// console.log(playlist);
// typeof(playlist);

// let buah = [];
// buah.push("melon");
// buah.push("jeruk");
// buah.push("anggur");

// let hewan = [];
// hewan.push("monyet");
// hewan.push("gajah");
// hewan.push("macan");

// let buahHewan = buah.concat(hewan);

// console.log(buahHewan.indexOf("ayam"));

// multi array
let board = [
    [null, null, '0'],
    [null, null, '0'],
    [null, null, '0']
];
// console.log(board[2][2]);

// let rs_toko = {
//     id: 'A0001',
//     nama: 'Wahyoo toko',
//     isOpen: true,
//     tanggalDaftar: '03-03-2023',
//     location: {
//         region: ['nasional','internasional'],
//         address: 'parigi lama - pondok aren - tangsel'
//     }
// }
// rs_toko.location.no = '20';

let buku = [
    {
        judul: 'Pemrograman PHP',
        price: 12000,
        tTerbit: 2022
    },
    {
        judul: 'Pemrograman JavaScript',
        price: 20000,
        tTerbit: 2022
    },
    {
        judul: 'Pemrograman GoLang',
        price: 25000,
        tTerbit: 2022
    },
]
buku[0].penulis = "andri"

console.log(buku[0].judul);