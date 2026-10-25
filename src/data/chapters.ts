/**
 * Data Bab dan Metadata Sejarah - COLD WAR: SHADOWS OF HISTORY
 * Memisahkan data materi sejarah dari komponen tampilan sesuai TECHNICAL_PLAN.md
 */

export interface ChapterData {
  id: string;
  number: number;
  title: string; // Judul resmi dalam bahasa Inggris (wajib)
  indonesianTitle: string; // Terjemahan / padanan dalam Bahasa Indonesia
  period: string; // Rentang tahun atau fokus waktu
  focus?: string; // Fokus tematik khusus jika relevan
  description: string; // Deskripsi singkat untuk kartu bab di peta kampanye
  summary: string; // Ringkasan mendalam untuk halaman informasi bab
  keyLocations: string[]; // Lokasi kunci dalam peristiwa
  keyEvents: string[]; // Peristiwa bersejarah utama
  keyFigures: string[]; // Tokoh-tokoh sejarah terkait
  dossierCode: string; // Kode berkas investigasi
  theater: string; // Wilayah teater geopolitik utama
}

export const CHAPTERS: ChapterData[] = [
  {
    id: "chapter-1",
    number: 1,
    title: "A Divided World",
    indonesianTitle: "Dunia yang Terbagi",
    period: "1945–1949",
    description: "Latar belakang persaingan Amerika Serikat dan Uni Soviet setelah Perang Dunia II, termasuk ketegangan yang membagi Berlin.",
    summary: "Setelah berakhirnya Perang Dunia II pada tahun 1945, koalisi Sekutu terbelah oleh benturan ideologi antara demokrasi kapitalis yang dipimpin Amerika Serikat dan komunisme yang dipimpin Uni Soviet. Perbedaan arah rekonstruksi Eropa memicu pengesahan Doktrin Truman (Maret 1947) dan Rencana Marshall (April 1948). Ketika Sekutu Barat memberlakukan reformasi mata uang Deutsche Mark di Berlin Barat pada Juni 1948, Uni Soviet membalas dengan menutup seluruh akses darat dan kanal dalam peristiwa Blokade Berlin (24 Juni 1948 – 12 Mei 1949). Menghadapi ancaman kelaparan bagi lebih dari dua juta warga, Sekutu Barat meluncurkan operasi logistik udara terbesar dalam sejarah—Operasi Jembatan Udara Berlin (Berlin Airlift)—yang berhasil menggagalkan blokade dan berujung pada pembagian permanen Jerman menjadi Jerman Barat (BRD) dan Jerman Timur (DDR) pada 1949.",
    keyLocations: ["Berlin", "Potsdam", "Washington D.C.", "Moskwa", "Frankfurt"],
    keyEvents: [
      "Konferensi Potsdam (Juli–Agustus 1945)",
      "Pidato 'Tirai Besi' Winston Churchill di Fulton (Maret 1946)",
      "Deklarasi Doktrin Truman (Maret 1947)",
      "Pemberlakuan Rencana Marshall / ERP (April 1948)",
      "Blokade Berlin & Berlin Airlift (24 Juni 1948 – 12 Mei 1949)"
    ],
    keyFigures: [
      "Harry S. Truman",
      "Joseph Stalin",
      "George F. Kennan",
      "Lucius D. Clay",
      "George C. Marshall"
    ],
    dossierCode: "BER-48-DIV",
    theater: "Eropa Tengah & Wilayah Berlin Terbagi"
  },
  {
    id: "chapter-2",
    number: 2,
    title: "The Two Alliances",
    indonesianTitle: "Dua Aliansi",
    period: "1949–1955",
    description: "Pembentukan NATO dan Pakta Warsawa serta perkembangan persaingan dua blok.",
    summary: "Ketegangan geopolitik yang semakin tajam mendorong terbentuknya aliansi militer global berlandaskan prinsip pertahanan kolektif. Pada 4 April 1949, 12 negara pendiri—terdiri atas 2 negara Amerika Utara (Amerika Serikat dan Kanada) serta 10 negara Eropa (Belgia, Denmark, Prancis, Islandia, Italia, Luksemburg, Belanda, Norwegia, Portugal, dan Britania Raya)—menandatangani Perjanjian Atlantik Utara (NATO) di Washington, D.C. Persaingan semakin meluas ke benua Asia melalui meletusnya Perang Korea (1950–1953) yang berakhir dengan Perjanjian Gencatan Senjata Panmunjom pada 27 Juli 1953 di sekitar Paralel ke-38 tanpa adanya perjanjian damai permanen. Ketika Jerman Barat resmi diterima sebagai anggota NATO pada Mei 1955, Uni Soviet merespons dengan mendirikan Pakta Warsawa bersama tujuh negara sekutunya di Eropa Timur, mengokohkan polarisasi kekuatan militer bipolar di Eropa.",
    keyLocations: ["Washington D.C.", "Warsawa", "Brusel", "Semenanjung Korea (Panmunjom)", "Bonn"],
    keyEvents: [
      "Penandatanganan Perjanjian Atlantik Utara oleh 12 Negara Pendiri NATO (4 April 1949)",
      "Uji Coba Bom Atom Pertama Uni Soviet RDS-1 (Agustus 1949)",
      "Perang Korea & Gencatan Senjata Panmunjom (1950–1953)",
      "Bergabungnya Jerman Barat ke NATO (Mei 1955)",
      "Pembentukan Pakta Warsawa di Polandia (14 Mei 1955)"
    ],
    keyFigures: [
      "Dwight D. Eisenhower",
      "Nikita Khrushchev",
      "Konrad Adenauer",
      "Kim Il-sung",
      "Syngman Rhee"
    ],
    dossierCode: "ALN-55-POL",
    theater: "Eropa Barat, Eropa Timur & Semenanjung Korea"
  },
  {
    id: "chapter-3",
    number: 3,
    title: "Thirteen Days",
    indonesianTitle: "Tiga Belas Hari",
    period: "1962",
    focus: "Krisis Rudal Kuba pada 1962",
    description: "Ketegangan antara Amerika Serikat dan Uni Soviet yang membawa dunia mendekati konflik nuklir.",
    summary: "Pada pertengahan Oktober 1962, penerbangan pesawat pengintai U-2 milik Angkatan Udara AS mengungkap pembangunan instalasi peluncuran rudal balistik nuklir jarak menengah Uni Soviet di San Cristóbal, Kuba. Keberadaan hulu ledak tersebut mengancam sebagian besar daratan Amerika Serikat hanya dalam hitungan menit. Selama 13 hari kepanikan global (16–28 Oktober 1962), Presiden John F. Kennedy membentuk komite penasihat darurat EXCOMM dan menetapkan 'karantina angkatan laut' di sekitar Kuba pada 22 Oktober 1962—memilih istilah karantina untuk menghindari deklarasi perang resmi menurut hukum internasional. Melalui saluran diplomatik rahasia berisiko tinggi antara Kennedy dan Khrushchev, malapetaka nuklir dapat dihindarkan dengan kesepakatan publik penarikan rudal Soviet dari Kuba, jaminan AS tidak menginvasi Kuba, serta komitmen rahasia penarikan rudal Jupiter milik AS dari Turki.",
    keyLocations: ["San Cristóbal (Kuba)", "Havana", "Washington D.C.", "Moskwa", "Laut Karibia"],
    keyEvents: [
      "Foto Pengintaian U-2 Menemukan Rudal di Kuba (14 Okt 1962)",
      "Pembentukan EXCOMM oleh Presiden Kennedy (16 Okt 1962)",
      "Pidato Televisi Karantina Angkatan Laut Kuba (22 Okt 1962)",
      "Insiden Penembakan Pesawat U-2 Rudolf Anderson (27 Okt 1962)",
      "Penyelesaian Krisis & Pembongkaran Rudal Soviet (28 Okt 1962)"
    ],
    keyFigures: [
      "John F. Kennedy",
      "Nikita Khrushchev",
      "Fidel Castro",
      "Robert F. Kennedy",
      "Robert McNamara"
    ],
    dossierCode: "CUB-62-CRI",
    theater: "Laut Karibia, Teluk Meksiko & Jalur Rudal Strategis"
  },
  {
    id: "chapter-4",
    number: 4,
    title: "Race Beyond Earth",
    indonesianTitle: "Perlombaan Antariksa",
    period: "1957–1969",
    focus: "Perlombaan antariksa",
    description: "Persaingan teknologi antariksa yang ditandai oleh Sputnik 1 dan misi Apollo 11.",
    summary: "Di luar gelanggang militer konvensional, penaklukan antariksa menjadi arena pertaruhan gengsi ilmu pengetahuan, supremasi teknologi roket, dan pembuktian keunggulan sistem politik. Uni Soviet mencetak keunggulan dramatis pada 4 Oktober 1957 dengan peluncuran satelit buatan pertama Sputnik 1, disusul penerbangan manusia pertama ke orbit Bumi oleh kosmonaut Yuri Gagarin pada 12 April 1961 menggunakan Vostok 1. Amerika Serikat merespons dengan pendirian NASA pada 1958 dan komitmen nasional program Apollo di bawah dorongan Presiden Kennedy, yang berpuncak pada pendaratan manusia pertama di permukaan Bulan oleh Neil Armstrong dan Buzz Aldrin dalam misi Apollo 11 pada 20 Juli 1969.",
    keyLocations: ["Kosmodrom Baikonur", "Cape Canaveral", "Houston (Pusat Kendali Misi)", "Laut Ketenangan (Bulan)"],
    keyEvents: [
      "Peluncuran Satelit Sputnik 1 oleh Uni Soviet (4 Oktober 1957)",
      "Pembentukan Lembaga Antariksa NASA di AS (Juli 1958)",
      "Penerbangan Manusia Pertama ke Antariksa - Yuri Gagarin (12 April 1961)",
      "Pidato Target Pendaratan ke Bulan oleh JFK (Mei 1961 & September 1962)",
      "Pendaratan Bersejarah Misi Apollo 11 di Bulan (20 Juli 1969)"
    ],
    keyFigures: [
      "Sergei Korolev",
      "Wernher von Braun",
      "Yuri Gagarin",
      "Neil Armstrong",
      "Buzz Aldrin"
    ],
    dossierCode: "SPC-69-APO",
    theater: "Kosmodrom Stepa Baikonur hingga Orbit Bumi & Bulan"
  },
  {
    id: "chapter-5",
    number: 5,
    title: "The Final Chapter",
    indonesianTitle: "Bab Terakhir",
    period: "1985–1991",
    description: "Perubahan politik di Eropa Timur, runtuhnya Tembok Berlin, dan pembubaran Uni Soviet.",
    summary: "Memasuki pertengahan dekade 1980-an, krisis struktural yang meliputi stagnasi ekonomi, defisit anggaran, beban belanja militer, dan bencana Chernobyl mendorong Pemimpin Soviet Mikhail Gorbachev meluncurkan agenda reformasi melalui Glasnost (keterbukaan informasi dan kebebasan sipil) serta Perestroika (restrukturisasi ekonomi). Angin perubahan ini memicu gerakan massa di Eropa Timur. Tembok Berlin secara tak terduga dibuka pada malam 9 November 1989 menyusul kekeliruan pengumuman juru bicara Günter Schabowski. Krisis politik internal, penandatanganan Perjanjian Belavezha, dan Protokol Alma-Ata berujung pada pengunduran diri Gorbachev pada 25 Desember 1991 serta pembubaran resmi Uni Soviet oleh Dewan Republik Uni Soviet Tertinggi pada 26 Desember 1991, mengakhiri Perang Dingin.",
    keyLocations: ["Berlin (Gerbang Brandenburg)", "Moskwa (Kremlin)", "Warsawa", "Praha", "Reykjavik"],
    keyEvents: [
      "Peluncuran Kebijakan Glasnost dan Perestroika (1985–1986)",
      "KTT Reykjavik antara Reagan dan Gorbachev (Oktober 1986)",
      "Pembukaan dan Runtuhnya Tembok Berlin (9 November 1989)",
      "Reunifikasi Resmi Jerman (3 Oktober 1990)",
      "Pengunduran Diri Gorbachev (25 Des) & Pembubaran Uni Soviet (26 Des 1991)"
    ],
    keyFigures: [
      "Mikhail Gorbachev",
      "Ronald Reagan",
      "George H.W. Bush",
      "Helmut Kohl",
      "Lech Wałęsa"
    ],
    dossierCode: "BER-91-FIN",
    theater: "Eropa Timur, Gerbang Brandenburg & Kremlin Moskwa"
  }
];

export function getAllChapters(): ChapterData[] {
  return CHAPTERS;
}

export function getChapterById(id: string): ChapterData | undefined {
  return CHAPTERS.find((ch) => ch.id === id);
}

export function getChapterByNumber(num: number): ChapterData | undefined {
  return CHAPTERS.find((ch) => ch.number === num);
}

export function getNextChapterId(currentId: string): string | null {
  const currentIndex = CHAPTERS.findIndex((ch) => ch.id === currentId);
  if (currentIndex >= 0 && currentIndex < CHAPTERS.length - 1) {
    return CHAPTERS[currentIndex + 1].id;
  }
  return null;
}

export function getPreviousChapterId(currentId: string): string | null {
  const currentIndex = CHAPTERS.findIndex((ch) => ch.id === currentId);
  if (currentIndex > 0) {
    return CHAPTERS[currentIndex - 1].id;
  }
  return null;
}
