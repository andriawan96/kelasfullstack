function say(){
    console.log('selamat pagi');
    console.log('sugeng enjing');
    return "samlikum";
    console.log('spada');
}

// let salam = say();
// console.log(salam);

// perulangan for
// for(let i = 1; i <=20; i += 2){
//     console.log('dalam loop ke ' + i);
// }

// for(let i = 30; i >=0; i -= 3){
//     console.log('dalam loop ke ' + i);
// }

// const alat = ['pc', 'printer', 'monitor','stop kontak', 'router'];
// for( let i = 0; i < alat.length; i++){
//     console.log(i + 1, alat[i]);
// }

// nested loop
// const pilihan = 'ABCD';
// for(let i = 1; i <= 10; i++){
//     console.log(`${i}. Soal nomor ${i}:`);
//     for(let j = 0; j < pilihan.length; j++){
//         console.log(`  ${pilihan[j]}. Pilihan Jawaban`);
//     }
// }

// nested array loop
// const  studentRow = [
//     ['dodo', 'didi', 'dudu'],
//     ['kaka', 'kiki', 'kuku'],
//     ['nara','niri','nuru'],
// ];
// for(let i = 0; i < studentRow.length; i++){
//     const row = studentRow[i];
//     console.log(`Baris ke #${i + 1}`);
//         for(let j = 0; j < row.length; j++){
//             console.log(`  ${row[j]}`);
//         }
// }

// console.log(studentRow);

let situs = 'bing';
// switch(situs){
//     case 'google': console.log('ini situs google'); break;
//     case 'yahoo': console.log('ini situs yahoo'); break;
//     case 'bing': console.log('ini situs bing'); break;
//     default: console.log('tidak ada situs yg di pilih');
// }

let jumlah_barang = 100;
let total;

// if (jumlah_barang > 500){
//     total = jumlah_barang * 100;
// } else {
//     total = jumlah_barang * 150;
// }

total = jumlah_barang > 50 ? jumlah_barang * 20 : jumlah_barang * 30;
// console.log(total);

let user = 'adminn';
// let hak_akses = user === 'admin'? true : false ;
// if(hak_akses){
//     console.log("selamat datang admin ...");
// } else {
//     console.log('anda bukan admin');
// }

// for ( let i = 1; i <= 20; i = i + 2){
//     console.log(`hello ke ${i}`)
// }
// let i;
// let j;
// let x;
// for( i = 1; i <= 4; i++){
//     for( j = 1; j <= 3; j++){
//         for( x = 1; x <= 2; x++){
//                     console.log(`variabel i bernilai ${i} , variabel j bernilai ${j} , variabel x bernilai ${x}`);
//         }
//     }
// }

// let i = 100;
// while ( i > 0){
//     console.log( i + " * 5 = " + i*5);
//     i = i -5;
// }

// --==while==--
// let input = prompt('hei, ketik stop untuk berhenti');
// while(true){
//     input = prompt(input);
//     if(input.toLowerCase() === 'stop') break;
// }
// alert('ok sudah berhenti')


// game tebak2 angka

let maximun = parseInt(prompt('masukan nilai maksimal'));
while(!maximun){
    maximun = parseInt(prompt('masukan nilai maksimal'));
}

const targetNum = Math.floor(Math.random() * maximun) + 1;
console.log(targetNum);

let gues = parseInt(prompt('isi tebakan pertama kamu'));
while(parseInt(gues) !== targetNum){
    if(gues > targetNum){
        gues = prompt('terlalu tinggi, tebak lagi:');
    } else {
        gues = prompt('terlalu rendah, tebak lagi :');
    }
}
alert('selamat tebakan anda benar')