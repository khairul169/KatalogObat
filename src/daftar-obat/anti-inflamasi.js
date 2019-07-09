
const Ibuprofen = {
	nama: 'Ibuprofen',
	gambar: require('../../assets/obat-img/ibuprofen.jpg'),
	golongan: 'Analgesik, Antipiretik',
	manfaat: 'Meredakan nyeri seperti sakit kepala, sakit gigi, nyeri haid, nyeri otot, atau arthritis.',
	penggunaan: 'Dewasa, anak-anak usia > 6 bulan',
	sediaan: 'Oral, Topikal, Injeksi (IV)',
	deskripsi: 'Ibuprofen adalah obat yang tergolong dalam kelompok obat anti-inflamasi nonsteroid dan digunakan untuk mengurangi rasa sakit akibat artritis.',
	kontraindikasi: [
		'Penderita yang hipersensitivitas terhadap obat ini',
		'Penderita yang mengalami nyeri operasi karena pembedahan bypass grafting arteri koroner (CABG), yaitu operasi pada jantung untuk meningkatkan aliran darah ke jantung',
		'Pasien yang mengalami asma, urtikaria (ruam-ruam merah karena alergi), riwayat perdarahan saluran pencernaan',
		'Bayi baru lahir dengan penyakit jantung bawaan, bayi yang dicurigai mengalami peradangan pencernaan yang disebut necrotising enterocolitis, dan bayi baru lahir dengan gangguan ginjal.',
		'Ibu pada kehamilan trimester ketiga',
		'Ibu menyusui'
	],
	efekSamping: [
		'Reaksi alergi, seperti gatal-gatal, kesulitan bernapas, bengkak pada wajah, bibir, lidah, atau tenggorokan',
		'Sakit perut, maag, diare, sembelit',
		'Kembung',
		'Pusing, sakit kepala, gugup',
		'Gatal atau ruam kulit',
		'Telinga berdenging',
		'Nyeri dada, lemas, sesak, bicara melantur, masalah penglihatan atau hilang keseimbangan',
		'Mual, nyeri perut atas, gatal, tidak napsu makan',
		'Ruam kulit merah',
		'Sakit kepala berat',
	],
	referensi: [
		'https://id.wikipedia.org/wiki/Ibuprofen',
		'https://www.alodokter.com/ibuprofen'
	]
};

const Ketorolac = {
	nama: 'Ketorolac',
	gambar: require('../../assets/obat-img/ketorolac.jpg'),
	golongan: 'Analgesik, Anti-inflamasi Nonsteroid',
	manfaat: 'Meredakan peradangan dan nyeri.',
	penggunaan: 'Dewasa dan anak-anak usia > 2 tahun',
	sediaan: 'Tablet, Injeksi, dan Tetes mata',
	deskripsi: "Ketorolac adalah obat dengan fungsi mengatasi nyeri sedang hingga nyeri berat untuk sementara. Biasanya obat ini digunakan sebelum atau sesudah prosedur medis, atau setelah operasi.\n\nObat ini bekerja dengan memblok produksi substansi alami tubuh yang menyebabkan inflamasi. Efek ini membantu mengurangi bengkak, nyeri, atau demam.",
	kontraindikasi: [
		'Tidak untuk nyeri kronis atau minor',
		'Menunjukkan hipersensitivitas terhadap ketorolac atau alergi terhadap aspirin atau NSAID lainnya',
		'Kontraindikasi untuk analgesia profilaksis',
		'Kontraindikasi selama persalinan karena dapat mempengaruhi sirkulasi janin dan menghambat kontraksi uterus',
		'Risiko perdarahan akibat terhambatnya fungsi platelet'
	],
	efekSamping: [
		'Sakit perut, mual atau muntah ringan, diare, konstipasi',
		'Heartburn ringan, nyeri perut, kembung',
		'Pusing, sakit kepala, mengantuk',
		'Berkeringat',
		'Telinga berdenging'
	],
	referensi: [
		'https://hellosehat.com/obat/ketorolac/',
		'https://www.alodokter.com/ketorolac',
		'https://doktersehat.com/ketorolac-dosis-dan-indikasi-untuk-dewasa-dan-anak-1/',
		'https://doktersehat.com/ketorolac-peringatan-tambahan-dan-kontraindikasi-3/'
	]
}

const Paracetamol = {
	nama: 'Paracetamol',
	gambar: require('../../assets/obat-img/paracetamol.jpg'),
	golongan: 'Analgesik, Antipiretik',
	manfaat: 'Melegakan sakit kepala, sengal-sengal dan sakit ringan, serta demam.',
	penggunaan: 'Dewasa, anak-anak, dan bayi',
	sediaan: 'Tablet, sirup, suppositoria, infus',
	deskripsi: 'Paracetamol (Acetaminophen) adalah obat yang biasanya digunakan untuk mengobati rasa sakit ringan hingga sedang, mulai dari sakit kepala, nyeri haid, sakit gigi, nyeri sendi, dan nyeri yang dirasakan selama flu. Paracetamol juga bisa digunakan untuk meredakan demam.',
	kontraindikasi: [
		'Penyakit hati atau ginjal',
		'Peminum alkohol berat',
		'Memiliki berat badan sangat rendah',
		'Memiliki alergi paracetamol'
	],
	efekSamping: [
		'Reaksi alergi',
		'Tekanan darah rendah dan detak jantung cepat',
		'Gangguan pada hati dan ginjal'
	],
	referensi: [
		'https://id.wikipedia.org/wiki/Parasetamol',
		'https://www.alodokter.com/paracetamol',
		'https://hellosehat.com/obat/paracetamol-acetaminophen/',
		'https://hellosehat.com/hidup-sehat/efek-samping-paracetamol/',
		'https://doktersehat.com/paracetamol-pada-dewasa/'
	]
}

const Tramadol = {
	nama: 'Tramadol',
	gambar: require('../../assets/obat-img/tramadol.jpg'),
	golongan: 'Analgesik',
	manfaat: 'Meredakan nyeri sedang hingga berat.',
	penggunaan: 'Dewasa, anak-anak usia > 4 tahun',
	sediaan: 'Kapsul, tablet, obat larut, injeksi',
	deskripsi: 'Tramadol adalah obat pereda rasa sakit yang digunakan untuk menangani nyeri sedang hingga berat (misalnya nyeri setelah operasi). Tramadol bekerja dengan cara memengaruhi reaksi kimia di dalam otak dan sistem saraf yang pada akhirnya mengurangi sensasi rasa sakit.',
	kontraindikasi: [
		'Pasien hipersensitif atau alergi terhadap obat dengan kandungan tramadol',
		'Pasien dengan alkohol, hipnotik sedatif, narkotik, psikotropika, dan obat analgesik lain yang bekerja di sistem saraf pusat',
		'Pasien dengan faktor risiko kejang, riwayat epilepsi, dan obat lain yang menurunkan ambang kejang',
		'Pasien dengan berisiko bunuh diri',
		'Pasien yang mengalami trauma kepala dengan peningkatan tekanan intrakranial',
		'Pasien ibu hamil, ibu bersalin, dan ibu menyusui'
	],
	efekSamping: [
		'Pusing dan limbung',
		'Lelah dan mengantuk',
		'Mual dan muntah',
		'Konstipasi dan sulit buang air kecil',
		'Mulut kering',
		'Perut kembung',
		'Diare'
	],
	referensi: [
		'https://id.wikipedia.org/wiki/Tramadol',
		'https://www.alodokter.com/tramadol',
		'https://hellosehat.com/obat/tramadol/',
		'https://doktersehat.com/tramadol-1/'
	]
}


export {
	Ibuprofen,
	Ketorolac,
	Paracetamol,
	Tramadol
}
