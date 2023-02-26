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

const password = prompt('Buat password');
if( password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log('Password valid');
    } else {
        console.log('password tidak boleh ada spasi');
    }
} else {
    console.log('password minimal 6 karakter');
}