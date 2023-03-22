// const buah = ['pisang', 'nangka', 'jambu', 'manggis', 'kecapi'];

// for (let listBuah of buah) {
//     console.log(`Buah ${listBuah}`);
// }

// const daftarBuah = [ ['pisang', 'nangka', 'jambu', ],
//                     ['manggis', 'kecapi', 'mangga'],
//                     ['sirsak', 'markisa', 'jamblang'] ];

// for ( let row of daftarBuah) {
//     for ( let buahBuahan of row ) {
//         console.log(buahBuahan);
//     }
// }

const studentScore = {
    dodo: 20,
    aji: 19,
    pais: 18,
    harbi: 17
};
let urut = 1;
for (let student in studentScore){
    // console.log(`Siswa ${student} no urut ${urut++} memiliki nilai/skor ${studentScore[student]}`);
}

let total = 0;
let scores = Object.values(studentScore);
for (let score of scores){
    total += score;
} 
// console.log("Nilai rata-rata : " + total / scores.length);