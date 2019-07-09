
const Cetirizine = {
    nama: 'Cetirizine',
    gambar: require('../../assets/obat-img/cetirizine.jpg'),
    golongan: 'Antihistamin',
    manfaat: 'Mengatasi gejala-gejala alergi, seperti pilek dan bersin-bersin.',
    deskripsi: 'Cetirizine adalah obat golongan antihistamin yang dapat digunakan untuk mengatasi gejala-gejala alergi, seperti pilek, hidung tersumbat, mata berair, bersin-bersin, rasa gatal pada mata atau hidung, serta ruam pada kulit.',
    penggunaan: 'Dewasa, anak-anak usia > 2 tahun',
    sediaan: 'Tablet, Kapsul, Tablet Kunyah, Serbuk Larut (puyer), Sirop',
    kontraIndikasi: [
        'Pasien yang menderita hipersensitivitas, alergi, asma, urtikaria.',
        'Pasien yang sedang menjalani pengobatan pasca operasi pencangkokan pembuluh arteri koroner.',
        'Pasien yang memiliki riwayat perdarahan saluran cerna atau ulkus peptikum.',
        'Bayi baru lahir (neonatal) yang memiliki kelainan jantung bawaan.',
        'Ibu hamil pada trimester ketiga dan ibu menyusui.'
    ],
    efekSamping: [
        'Mengantuk',
        'Pusing',
        'Lemas dan lelah',
        'Mual',
        'Pusing',
        'Mulut kering',
        'Iritasi hidung',
        'Sakit tenggorokan',
        'Sakit perut',
        'Diare'
    ],
    referensi: [
        'https://en.wikipedia.org/wiki/Cetirizine',
        'https://www.alodokter.com/cetirizine'
    ]
}

const Dexamethasone = {
    nama: 'Dexamethasone',
    gambar: require('../../assets/obat-img/dexamethasone.jpg'),
    golongan: 'Kortikosteroid',
    manfaat: 'Mengatasi alergi dan peradangan, mual dan muntah akibat kemoterapi.',
    penggunaan: 'Dewasa dan anak-anak',
    sediaan: 'Tablet, Sirop, Injeksi, dan Infus',
    deskripsi: "Dexamethasone adalah obat golongan kortikosteroid (glukokortikoid). Obat ini mengurangi respon defensif alami tubuh dan mengurangi gejala seperti pembengkakan dan reaksi alergi.\n\nObat ini juga dapat digunakan untuk mencegah mual dan muntah yang disebabkan oleh kemoterapi kanker.",
    referensi: [
        'https://www.alodokter.com/dexamethasone',
        'https://hellosehat.com/obat/dexamethasone/'
    ]
}

export {
    Cetirizine,
    Dexamethasone
}
