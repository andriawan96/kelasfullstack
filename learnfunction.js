function salam(data = null, nama = null){
    console.log(`Selamat ${data} kak ${nama}...`);
}

// salam('pagi', 'andriawan');
// salam('pagi', 'andr');
// salam('pagi', 'and');
// salam('pagi', 'awan');
// salam();

function jumlahkan(a, b){
    // Cek apakah inputan berupa angka
    if (typeof a !== 'number' || typeof b !== 'number'){
        return 'Bukan angka';
    }

    return a + b;
}

let hasil = jumlahkan('a', 2);
// console.log(hasil);

// ========================== 26 03 2023

// lexical function
function lamarKerja(){
    const jabatan = 'programmer';

    function orangDalama(){
        let kenalan = `Orang dalam bisa memasukan ${jabatan}`;
        console.log(kenalan);
    }
    orangDalama();
}