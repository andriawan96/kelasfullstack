// const buah = ['pisang', 'nangka', 'jambu', 'manggis', 'kecapi'];

// for (let listBuah of buah) {
//     console.log(`Buah ${listBuah}`);
// }

const daftarBuah = [ ['pisang', 'nangka', 'jambu', ],
                    ['manggis', 'kecapi', 'mangga'],
                    ['sirsak', 'markisa', 'jamblang'] ];

for ( let row of daftarBuah) {
    for ( let buahBuahan of row ) {
        console.log(buahBuahan);
    }
}
