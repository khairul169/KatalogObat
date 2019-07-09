
const Cetirizine = {
	nama: 'Cetirizine',
	gambar: require('../../assets/obat-img/cetirizine.jpg'),
	golongan: 'Antihistamin',
	manfaat: 'Mengatasi gejala-gejala alergi, seperti pilek dan bersin-bersin.',
	penggunaan: 'Dewasa, anak-anak usia > 2 tahun',
	sediaan: 'Tablet, Kapsul, Tablet Kunyah, Serbuk Larut (puyer), Sirop',
	deskripsi: 'Cetirizine adalah obat golongan antihistamin yang dapat digunakan untuk mengatasi gejala-gejala alergi, seperti pilek, hidung tersumbat, mata berair, bersin-bersin, rasa gatal pada mata atau hidung, serta ruam pada kulit.',
	kontraindikasi: [
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
	kontraindikasi: [
		'Pasien yang dilaporkan hipersensitif terhadap obat ini atau kortikosteroid lainnya',
		'Infeksi akut yang tidak diobati',
		'Adanya infeksi jamur'
	],
	efekSamping: [
		'Osteoporosis',
		'Nekrosis avaskular',
		'Paranoid',
		'Depresi',
		'Hilangnya massa otot',
		'Sindrom Cushing'
	],
	referensi: [
		'https://www.alodokter.com/dexamethasone',
		'https://hellosehat.com/obat/dexamethasone/',
		'https://www.alomedika.com/obat/obat-endokrin/kortikosteroid/dexamethasone',
		'https://doktersehat.com/obat-dexamethasone/'
	]
}

const Epinephrine = {
	nama: 'Epinephrine',
	gambar: require('../../assets/obat-img/epinephrine.jpg'),
	golongan: 'Agonis alfa dan beta adrenergik',
	manfaat: 'Mengatasi syok anafilaktik akibat reaksi alergi dan salah satu penanganan henti jantung.',
	penggunaan: 'Dewasa dan anak-anak',
	sediaan: 'Injeksi',
	deskripsi: "Epinephrine atau adrenalin merupakan obat yang digunakan untuk mengobati reaksi alergi yang dapat membahayakan nyawa, yaitu syok anafilaktik. Epinephrine akan meredakan reaksi alergi tersebut dengan melemaskan otot-otot saluran pernapasan dan mempersempit pembuluh darah, sehingga napas menjadi lega dan aliran darah ke sel tetap terjaga.\n\nSelain untuk mengatasi reaksi alergi, epinephrine juga diberikan saat tindakan resusitasi jantung paru, pada pasien yang mengalami henti jantung dan henti napas.",
	kontraindikasi: [
		'Kontraindikasi pada syok non anafilaksis, glaukoma sudut tertutup, penggunaan bersama hidrokarbon halogen dan siklopropan pada anestesi umum, persalinan, tirotoksikosis dan diabetes',
		'Penggunaan bersama dengan digitalis, kuinidin dapat menimbulkan aritmia',
		'Pada penggunaan intravena yang terlalu cepat dapat menimbukan stroke hemoragik dan aritmia jantung'
	],
	efekSamping: [
		'Berkeringat',
		'Mual dan muntah',
		'Gelisah',
		'Pusing',
		'Gangguan irama jantung',
		'Gangguan pernapasan',
		'Lemas',
		'Kulit pucat'
	],
	referensi: [
		'https://hellosehat.com/obat/epinephrine/',
		'https://www.alodokter.com/epinephrine',
		'https://www.alomedika.com/obat/antialergi-dan-obat-untuk-anafilaksis/obat-untuk-anafilaksis/epinefrin/kontraindikasi-dan-peringatan'
	]
}

export {
	Cetirizine,
	Dexamethasone,
	Epinephrine
}
