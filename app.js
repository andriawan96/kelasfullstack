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

// if bersarang
const password = prompt('Buat password');
// if( password.length >= 6){
//     if(password.indexOf(' ') === -1){
//         console.log('Password valid');
//     } else {
//         console.log('password tidak boleh ada spasi');
//     }
// } else {
//     console.log('password minimal 6 karakter');
// }
// if bersarang menggunakan logical
if(password.length >= 6 && password.indexOf(' ') === -1){
    console.log("password valid");
}else{
    console.log('password tidak memenuhin syarat');
}

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