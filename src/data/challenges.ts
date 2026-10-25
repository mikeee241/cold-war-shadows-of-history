/**
 * Data Tantangan dan Pengantar Misi - COLD WAR: SHADOWS OF HISTORY
 * Memisahkan data materi tantangan sejarah dari antarmuka komponen sesuai TECHNICAL_PLAN.md
 */

export interface MissionBriefing {
  chapterId: string;
  officerName: string;
  officerRole: string;
  briefingText: string[];
  directives: string[];
}

export interface HistoricalSource {
  title: string; // Judul resmi dokumen, traktat, atau arsip sejarah
  institution: string; // Lembaga kearsipan, repositori akademik, atau organisasi resmi
  url: string; // Tautan publik resmi yang dapat diverifikasi
  type?: 'Arsip Resmi' | 'Dokumen Sejarah' | 'Lembaga Pendidikan' | 'Monografi Sejarah';
  note?: string; // Catatan kontekstual singkat mengenai dokumen
}

export interface Challenge {
  id: string;
  chapterId: string;
  order: number;
  year: string;
  title: string;
  context: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  sources: HistoricalSource[]; // Referensi sumber sejarah yang dapat diperiksa
}

export const MISSION_BRIEFINGS: Record<string, MissionBriefing> = {
  "chapter-1": {
    chapterId: "chapter-1",
    officerName: "Kapten Arthur Pendelton",
    officerRole: "Perwira Pengarah Lapangan (Karakter Fiktif Narasi)",
    briefingText: [
      "Selamat datang di Berlin Barat, Penyelidik. Perang Dunia II baru saja usai, tetapi perdamaian sejati belum terwujud. Kota ini telah dirobek menjadi empat sektor pendudukan.",
      "Uni Soviet mulai menutup akses darat dan rel kereta api menuju Berlin Barat. Tugas Anda adalah memeriksa dokumen diplomasi, memahami dasar pembendungan ideologi, dan mengungkap fakta di balik operasi logistik udara terbesar dalam sejarah."
    ],
    directives: [
      "Pelajari prinsip pembendungan komunisme dalam Doktrin Truman (1947).",
      "Analisis dampak ekonomi rekonstruksi Rencana Marshall (1948).",
      "Pahami strategi Sekutu dalam Operasi Jembatan Udara Berlin (Berlin Airlift 1948–1949)."
    ]
  },
  "chapter-2": {
    chapterId: "chapter-2",
    officerName: "Komisioner Henri Laurent",
    officerRole: "Petugas Penghubung Diplomasi (Karakter Fiktif Narasi)",
    briefingText: [
      "Penyelidik, ketegangan militer di Eropa dan Asia kini memasuki babak polarisasi resmi. Blok Barat dan Blok Timur saling membentengi diri dengan pakta pertahanan militer.",
      "Kita perlu merekonstruksi bagaimana NATO dibentuk, bagaimana Perang Korea memperluas medan Perang Dingin ke Asia, dan respons Soviet melalui pendirian Pakta Warsawa."
    ],
    directives: [
      "Teliti asas pertahanan bersama Pasal 5 dalam Perjanjian Atlantik Utara (NATO 1949).",
      "Kaji eskalasi konflik Perang Korea (1950–1953) di sepanjang Paralel ke-38.",
      "Identifikasi faktor pemicu kelahiran Pakta Warsawa pada tahun 1955."
    ]
  },
  "chapter-3": {
    chapterId: "chapter-3",
    officerName: "Evelyn Carter",
    officerRole: "Analis Pengarah Dokumen (Karakter Fiktif Narasi)",
    briefingText: [
      "Situasi berada di tingkat ancaman tertinggi, Penyelidik. Pesawat mata-mata U-2 kita baru saja kembali dari Kuba dengan membawa foto-foto instalasi peluncur rudal balistik berhulu ledak nuklir.",
      "Dunia berada di ambang perang termonuklir selama tiga belas hari genting. Anda ditugaskan meninjau bukti fotografi udara, opsi tindakan karantina laut, dan diplomasi saluran belakang yang menyelamatkan peradaban manusia."
    ],
    directives: [
      "Verifikasi bukti foto instalasi rudal Soviet di Kuba pada Oktober 1962.",
      "Pahami pertimbangan Presiden Kennedy memilih 'karantina angkatan laut'.",
      "Kaji kesepakatan rahasia penarikan rudal di Kuba dan Turki."
    ]
  },
  "chapter-4": {
    chapterId: "chapter-4",
    officerName: "Dr. Walter Lindqvist",
    officerRole: "Pemandu Narasi Sains (Karakter Fiktif Narasi)",
    briefingText: [
      "Penyelidik, persaingan dua kekuatan adidaya kini menembus batas atmosfer bumi. Penaklukan ruang angkasa menjadi panggung pembuktian supremasi teknologi roket dan keunggulan ideologi.",
      "Dari kejutan peluncuran Sputnik hingga jejak kaki manusia di Bulan, Anda harus meneliti tonggak penting perlombaan antariksa yang memukau dunia."
    ],
    directives: [
      "Telusuri dampak peluncuran satelit buatan Sputnik 1 oleh Uni Soviet (1957).",
      "Pelajari penerbangan bersejarah kosmonaut Yuri Gagarin (1961).",
      "Ungkap keberhasilan pendaratan misi Apollo 11 di Bulan (1969)."
    ]
  },
  "chapter-5": {
    chapterId: "chapter-5",
    officerName: "Dr. Marek Janowski",
    officerRole: "Pemandu Narasi Arsip (Karakter Fiktif Narasi)",
    briefingText: [
      "Penyelidik, kita tiba di babak akhir Perang Dingin. Tekanan ekonomi dan aspirasi kebebasan di Eropa Timur memicu gelombang perubahan yang tak terbendung.",
      "Tugas terakhir Anda adalah menelusuri kebijakan Glasnost dan Perestroika, malam bersejarah rubuhnya Tembok Berlin, hingga pengunduran diri Mikhail Gorbachev yang menandai bubarnya Uni Soviet."
    ],
    directives: [
      "Pahami inti pembaruan Glasnost (keterbukaan) dan Perestroika (restrukturisasi).",
      "Rekonstruksi momen pembukaan dan keruntuhan Tembok Berlin (9 November 1989).",
      "Analisis peristiwa resmi pembubaran Uni Soviet pada Desember 1991."
    ]
  }
};

export const CHALLENGES: Challenge[] = [
  // ==================== BAB 1: A DIVIDED WORLD (1945–1949) ====================
  {
    id: "ch1-1",
    chapterId: "chapter-1",
    order: 1,
    year: "1947",
    title: "Prinsip Pembendungan dalam Doktrin Truman",
    context: "Pada 12 Maret 1947, Presiden AS Harry S. Truman berpidato di hadapan sidang bersama Kongres merespons ancaman perluasan komunis di Yunani dan Turki pasca-Perang Dunia II.",
    question: "Apa tujuan utama dari Doktrin Truman yang diumumkan oleh Presiden Harry S. Truman pada Maret 1947?",
    options: [
      "Membendung perluasan pengaruh dan ideologi komunisme Soviet dengan memberikan bantuan militer dan ekonomi kepada negara-negara yang terancam",
      "Menyepakati pembagian permanen zona pengaruh di Jerman bersama Uni Soviet tanpa campur tangan Sekutu Barat lain",
      "Mencabut seluruh sanksi dan reparasi perang bagi negara-negara Poros yang kalah dalam Perang Dunia II",
      "Menarik seluruh garnisun militer Amerika Serikat dari Eropa dan menerapkan kembali doktrin isolasionisme"
    ],
    correctOptionIndex: 0,
    explanation: "Doktrin Truman (12 Maret 1947) meletakkan pilar utama strategi luar negeri 'containment' (pembendungan) Amerika Serikat selama Perang Dingin. Berawal dari alokasi bantuan $400 juta bagi Yunani dan Turki, doktrin ini menegaskan bahwa AS akan mendukung bangsa-bangsa merdeka yang melawan upaya penundukan oleh kelompok minoritas bersenjata atau tekanan militer eksternal.",
    sources: [
      {
        title: "The Truman Doctrine, 1947",
        institution: "U.S. Department of State, Office of the Historian",
        url: "https://history.state.gov/milestones/1945-1952/truman-doctrine",
        type: "Arsip Resmi",
        note: "Dokumen tonggak diplomasi pembendungan (containment) kebijakan luar negeri AS."
      },
      {
        title: "President Harry S. Truman's Address to Congress (March 12, 1947)",
        institution: "National Archives and Records Administration (NARA)",
        url: "https://www.archives.gov/milestone-documents/truman-doctrine",
        type: "Dokumen Sejarah",
        note: "Transkrip resmi pidato Presiden Truman di hadapan Kongres AS."
      }
    ]
  },
  {
    id: "ch1-2",
    chapterId: "chapter-1",
    order: 2,
    year: "1948",
    title: "Program Pemulihan Ekonomi Rencana Marshall",
    context: "Setelah Perang Dunia II, kondisi perekonomian Eropa hancur lebur dengan ancaman kelaparan, inflasi parah, serta kerentanan terhadap ekspansi komunisme.",
    question: "Mengapa program bantuan European Recovery Program (ERP) atau Rencana Marshall diluncurkan oleh Amerika Serikat pada tahun 1948?",
    options: [
      "Membeli kembali persenjataan surplus Perang Dunia II dari negara-negara Eropa Timur",
      "Membangun kembali perekonomian dan infrastruktur Eropa Barat guna menciptakan stabilitas sosial yang membentengi kawasan dari komunisme",
      "Mewajibkan negara-negara Eropa menghapus mata uang nasional mereka dan beralih ke dolar AS",
      "Membentuk markas komando militer sepihak di Berlin Timur di bawah kendali tunggal Pentagon"
    ],
    correctOptionIndex: 1,
    explanation: "Diusulkan oleh Menteri Luar Negeri George C. Marshall dan disahkan pada April 1948, Rencana Marshall menyalurkan lebih dari $13,3 miliar bantuan modal, bahan bakar, mesin, dan bahan mentah ke 16 negara Eropa Barat. AS meyakini bahwa pemulihan ekonomi kapitalis dan kemakmuran rakyat merupakan penangkal paling efektif terhadap daya tarik politik komunis Soviet.",
    sources: [
      {
        title: "Marshall Plan (1948) and the European Recovery Program",
        institution: "National Archives and Records Administration (NARA)",
        url: "https://www.archives.gov/milestone-documents/marshall-plan",
        type: "Arsip Resmi",
        note: "Undang-Undang Kerjasama Ekonomi (Economic Cooperation Act of 1948)."
      },
      {
        title: "The Marshall Plan, 1948",
        institution: "U.S. Department of State, Office of the Historian",
        url: "https://history.state.gov/milestones/1945-1952/marshall-plan",
        type: "Arsip Resmi",
        note: "Tinjauan sejarah diplomasi program pemulihan ekonomi Eropa."
      }
    ]
  },
  {
    id: "ch1-3",
    chapterId: "chapter-1",
    order: 3,
    year: "1948–1949",
    title: "Operasi Jembatan Udara Berlin (Berlin Airlift)",
    context: "Pada 24 Juni 1948, Uni Soviet memutus seluruh jalur jalan raya, rel kereta api, dan kanal darat menuju Berlin Barat setelah Sekutu Barat memperkenalkan reformasi mata uang Deutsche Mark.",
    question: "Bagaimana cara Sekutu Barat mempertahankan pasokan pangan dan bahan bakar bagi lebih dari dua juta penduduk Berlin Barat selama blokade darat Soviet?",
    options: [
      "Melancarkan konvoi lapis baja menerobos pos perbatasan Jerman Timur",
      "Membangun terowongan kereta bawah tanah rahasia antara Hamburg dan Berlin Barat",
      "Menerbangkan pasokan logistik tanpa henti melalui koridor udara (Berlin Airlift) ke bandara seperti Tempelhof dan Gatow",
      "Menyerahkan pengelolaan wilayah Berlin Barat sepenuhnya kepada komando militer Uni Soviet"
    ],
    correctOptionIndex: 2,
    explanation: "Menghadapi pemutusan jalur darat oleh Soviet (24 Juni 1948 – 12 Mei 1949), Sekutu Barat di bawah arahan Jenderal Lucius D. Clay meluncurkan Operasi Jembatan Udara Berlin ('Operation Vittles'). Selama hampir 11 bulan, pesawat angkut C-47 dan C-54 melakukan lebih dari 277.000 penerbangan, memasok lebih dari 2,3 juta ton logistik penting hingga Uni Soviet terpaksa mencabut blokade tanpa memicu kontak senjata langsung.",
    sources: [
      {
        title: "The Berlin Airlift, 1948–1949",
        institution: "U.S. Department of State, Office of the Historian",
        url: "https://history.state.gov/milestones/1945-1952/berlin-airlift",
        type: "Arsip Resmi",
        note: "Rekonstruksi kronologis operasi logistik udara Sekutu di koridor Berlin."
      },
      {
        title: "The Berlin Blockade and Airlift",
        institution: "Harry S. Truman Presidential Library and Museum",
        url: "https://www.trumanlibrary.gov/education/presidential-inquiries/berlin-airlift",
        type: "Lembaga Pendidikan",
        note: "Koleksi berkas deklasifikasi kepresidenan mengenai krisis Berlin."
      }
    ]
  },

  // ==================== BAB 2: THE TWO ALLIANCES (1949–1955) ====================
  {
    id: "ch2-1",
    chapterId: "chapter-2",
    order: 1,
    year: "1949",
    title: "Pakta Pertahanan Atlantik Utara dan Doktrin Pasal 5",
    context: "Krisis Blokade Berlin mempercepat kesadaran negara-negara Barat akan perlunya aliansi pertahanan militer bersama yang mengikat Amerika Utara dan Eropa Barat.",
    question: "Berdasarkan Perjanjian Atlantik Utara yang ditandatangani pada 4 April 1949 di Washington, D.C., apa prinsip utama yang diatur dalam Pasal 5 (Article 5)?",
    options: [
      "Seluruh negara anggota wajib menghapus angkatan militer nasionalnya dan membentuk tentara bersama",
      "Serangan bersenjata terhadap salah satu negara anggota di Eropa atau Amerika Utara dianggap sebagai serangan terhadap seluruh anggota (pertahanan kolektif)",
      "Setiap keputusan operasi militer aliansi harus disetujui secara mutlak oleh hak veto Dewan Keamanan PBB",
      "Negara anggota dilarang menjalin hubungan dagang dengan negara mana pun di kawasan Asia"
    ],
    correctOptionIndex: 1,
    explanation: "Perjanjian Atlantik Utara ditandatangani pada 4 April 1949 oleh tepat 12 negara pendiri: 2 negara Amerika Utara (Amerika Serikat dan Kanada) serta 10 negara Eropa (Belgia, Denmark, Prancis, Islandia, Italia, Luksemburg, Belanda, Norwegia, Portugal, dan Britania Raya). Pasal 5 menetapkan doktrin pertahanan kolektif (collective defense), yakni komitmen saling membela jika salah satu sekutu diserang secara bersenjata.",
    sources: [
      {
        title: "The North Atlantic Treaty, Washington D.C., 4 April 1949",
        institution: "NATO Archives / North Atlantic Treaty Organization",
        url: "https://www.nato.int/cps/en/natohq/official_texts_17120.htm",
        type: "Arsip Resmi",
        note: "Teks resmi naskah Perjanjian Atlantik Utara dan perumusan klausul Pasal 5."
      },
      {
        title: "Founding Members of the Alliance",
        institution: "NATO Official Portal",
        url: "https://www.nato.int/cps/en/natohq/topics_52044.htm",
        type: "Arsip Resmi",
        note: "Daftar resmi 12 negara pendiri NATO (AS, Kanada, dan 10 negara Eropa)."
      }
    ]
  },
  {
    id: "ch2-2",
    chapterId: "chapter-2",
    order: 2,
    year: "1950–1953",
    title: "Perang Korea dan Gencatan Senjata Panmunjom",
    context: "Pada 25 Juni 1950, pasukan Korea Utara yang didukung Soviet melancarkan invasi ke Korea Selatan melintasi garis Paralel ke-38.",
    question: "Bagaimana akhir status hukum dan militer dari Perang Korea setelah perundingan di Panmunjom pada 27 Juli 1953?",
    options: [
      "Berakhir dengan traktat perdamaian permanen resmi yang menyatukan kedua belah pihak di bawah satu parlemen",
      "Berakhir dengan Perjanjian Gencatan Senjata (Armistice Agreement) dan pembentukan Zona Demiliterisasi (DMZ) di sekitar Paralel ke-38 tanpa adanya traktat perdamaian permanen",
      "Pasukan PBB berhasil menaklukkan seluruh Semenanjung Korea hingga perbatasan Sungai Yalu",
      "Kedua belah pihak sepakat menyerahkan wilayah Semenanjung Korea menjadi protektorat Uni Soviet"
    ],
    correctOptionIndex: 1,
    explanation: "Perang Korea (1950–1953) merupakan perang proksi berskala besar pertama era Perang Dingin. Permusuhan militer dihentikan melalui Perjanjian Gencatan Senjata Korea (Korean Armistice Agreement) di Panmunjom pada 27 Juli 1953, yang ditandatangani oleh Komando PBB, Korea Utara, dan Tiongkok. Perjanjian ini menetapkan gencatan senjata dan garis Zona Demiliterisasi (DMZ), tetapi bukan traktat perdamaian permanen (peace treaty), sehingga secara hukum status semenanjung masih berada dalam gencatan senjata militer.",
    sources: [
      {
        title: "The Korean War Armistice",
        institution: "National Archives and Records Administration (NARA)",
        url: "https://www.archives.gov/publications/prologue/2003/summer/korean-war-armistice",
        type: "Arsip Resmi",
        note: "Dokumentasi arsip dan telaah sejarah penandatanganan Perjanjian Gencatan Senjata Panmunjom 1953."
      },
      {
        title: "The Korean War, 1950–1953",
        institution: "U.S. Department of State, Office of the Historian",
        url: "https://history.state.gov/milestones/1945-1952/korean-war",
        type: "Arsip Resmi",
        note: "Tinjauan sejarah diplomasi dan intervensi militer PBB dalam Perang Korea."
      }
    ]
  },
  {
    id: "ch2-3",
    chapterId: "chapter-2",
    order: 3,
    year: "1955",
    title: "Kelahiran Aliansi Militer Pakta Warsawa",
    context: "Pada Mei 1955, Republik Federal Jerman (Jerman Barat) resmi diterima sebagai anggota aliansi militer NATO melalui ratifikasi Perjanjian Paris.",
    question: "Apa tindakan balasan terkoordinasi Uni Soviet terhadap masuknya Jerman Barat ke dalam NATO pada Mei 1955?",
    options: [
      "Membentuk aliansi militer Pakta Warsawa di Polandia bersama tujuh negara satelit komunis di Eropa Timur",
      "Memutuskan seluruh hubungan diplomatik dan perdagangan dengan negara-negara non-blok di Asia dan Afrika",
      "Membongkar persenjataan dan menarik seluruh pasukan Tentara Merah keluar dari Polandia dan Jerman Timur",
      "Menyerahkan pengelolaan wilayah Berlin Timur kepada pengawasan sepihak Dewan Keamanan PBB"
    ],
    correctOptionIndex: 0,
    explanation: "Sebagai respons langsung terhadap remiliterisasi dan bergabungnya Jerman Barat ke NATO, Uni Soviet mengumpulkan para sekutu Eropa Timur di Warsawa. Pada 14 Mei 1955, Uni Soviet bersama Albania, Bulgaria, Cekoslowakia, Jerman Timur, Hungaria, Polandia, dan Rumania menandatangani Perjanjian Persahabatan, Kerja Sama, dan Saling Membantu (Pakta Warsawa), mengukuhkan struktur pertahanan militer bipolar di benua Eropa.",
    sources: [
      {
        title: "The Warsaw Security Pact: May 14, 1955",
        institution: "Yale Law School - The Avalon Project",
        url: "https://avalon.law.yale.edu/20th_century/warsaw.asp"
        ,
        type: "Dokumen Sejarah",
        note: "Teks resmi traktat pendirian aliansi pertahanan militer Pakta Warsawa 1955."
      },
      {
        title: "The Warsaw Pact, 1955",
        institution: "U.S. Department of State, Office of the Historian",
        url: "https://history.state.gov/milestones/1953-1960/warsaw-treaty",
        type: "Arsip Resmi",
        note: "Analisis sejarah diplomasi respons Soviet terhadap ekspansi NATO."
      }
    ]
  },

  // ==================== BAB 3: THIRTEEN DAYS (1962) ====================
  {
    id: "ch3-1",
    chapterId: "chapter-3",
    order: 1,
    year: "1962",
    title: "Pengintaian Udara U-2 di San Cristóbal",
    context: "Pada 14 Oktober 1962, pesawat pengintai Angkatan Udara AS Lockheed U-2 terbang di atas wilayah barat Kuba.",
    question: "Bukti intelijen strategis apa yang ditemukan dari foto udara pesawat U-2 di Kuba pada Oktober 1962?",
    options: [
      "Pangkalan kapal selam militer Angkatan Laut Inggris di Teluk Guantanamo",
      "Pembangunan tapak peluncuran rudal balistik nuklir jarak menengah (MRBM) jenis SS-4 milik Soviet yang sanggup menjangkau daratan AS",
      "Konferensi rahasia Fidel Castro dengan perwakilan militer AS mengenai perjanjian perdagangan gula",
      "Uji coba peluncuran roket luar angkasa gabungan Kuba dan Prancis di lepas pantai Havana"
    ],
    correctOptionIndex: 1,
    explanation: "Foto udara yang dipotret oleh pilot Mayor Richard Heyser pada 14 Oktober 1962 dan dianalisis oleh analis intelijen foto (NPIC) pada 15 Oktober mengungkap instalasi peluncuran rudal nuklir SS-4 Sandal Soviet di San Cristóbal, Kuba. Berjarak sekitar 90 mil dari Florida dengan waktu tempuh kurang dari 15 menit, rudal ini sanggup menghantam sebagian besar kota utama di daratan Amerika Serikat.",
    sources: [
      {
        title: "The Cuban Missile Crisis, October 1962",
        institution: "U.S. Department of State, Office of the Historian",
        url: "https://history.state.gov/milestones/1961-1968/cuban-missile-crisis",
        type: "Arsip Resmi",
        note: "Dokumen deklasifikasi kronologis krisis rudal Kuba 1962."
      },
      {
        title: "Cuban Missile Crisis: Photographic Evidence",
        institution: "John F. Kennedy Presidential Library and Museum",
        url: "https://www.jfklibrary.org/learn/about-jfk/jfk-in-history/cuban-missile-crisis",
        type: "Arsip Resmi",
        note: "Koleksi foto udara pengintaian U-2 dan transkrip rekaman EXCOMM."
      }
    ]
  },
  {
    id: "ch3-2",
    chapterId: "chapter-3",
    order: 2,
    year: "1962",
    title: "Keputusan Karantina Angkatan Laut EXCOMM",
    context: "Para penasihat militer mendesak serangan udara mendadak (airstrike) dan invasi ke Kuba, namun Presiden Kennedy memilih jalur lain.",
    question: "Mengapa Presiden John F. Kennedy sengaja memilih istilah 'karantina angkatan laut' (quarantine) alih-alih 'blokade militer' dalam pidatonya pada 22 Oktober 1962?",
    options: [
      "Karena menurut hukum internasional, blokade secara resmi merupakan tindakan perang (act of war), sedangkan karantina memberi ruang diplomasi untuk mencegah perang nuklir",
      "Karena Angkatan Laut AS tidak memiliki kapal perang yang cukup untuk menjaga perairan Karibia",
      "Karena Kongres AS telah melarang pengerahan militer di seluruh belahan bumi barat",
      "Agar Uni Soviet bersedia menjual rudal balistik tersebut kepada pemerintah AS"
    ],
    correctOptionIndex: 0,
    explanation: "Dalam hukum internasional, deklarasi 'blokade' diakui sebagai tindakan perang (act of war) resmi yang dapat melegitimasi aksi balasan militer langsung dari Uni Soviet. Dengan memilih istilah selektif 'karantina' (quarantine) dengan dukungan Organisasi Negara-Negara Amerika (OAS), Kennedy memblokir pengiriman persenjataan ofensif baru ke Kuba tanpa menyatakan perang, memberi jeda krusial bagi saluran diplomasi rahasia dengan Nikita Khrushchev.",
    sources: [
      {
        title: "Proclamation 3504 - Interdiction of the Delivery of Offensive Weapons to Cuba",
        institution: "John F. Kennedy Presidential Library and Museum",
        url: "https://www.jfklibrary.org/asset-viewer/archives/JFKPOF/042/JFKPOF-042-019",
        type: "Arsip Resmi",
        note: "Teks proklamasi hukum karantina laut Kuba yang ditandatangani Presiden JFK pada 23 Oktober 1962."
      },
      {
        title: "The Cuban Missile Crisis, October 1962",
        institution: "U.S. Department of State, Office of the Historian",
        url: "https://history.state.gov/milestones/1961-1968/cuban-missile-crisis",
        type: "Arsip Resmi",
        note: "Analisis diplomasi deklasifikasi dan pelaksanaan keputusan karantina laut oleh EXCOMM."
      }
    ]
  },
  {
    id: "ch3-3",
    chapterId: "chapter-3",
    order: 3,
    year: "1962",
    title: "Kesepakatan Diplomasi dan Resolusi Krisis",
    context: "Setelah tiga belas hari ketegangan ekstrem dan insiden penembakan pesawat pengintai U-2, Kennedy dan Khrushchev mencapai titik temu.",
    question: "Apa kesepakatan bilateral antara Presiden Kennedy dan Perdana Menteri Khrushchev pada 28 Oktober 1962 yang berhasil mengakhiri krisis?",
    options: [
      "Uni Soviet menarik seluruh rudalnya dari Kuba dengan komitmen publik AS tidak menginvasi Kuba, serta janji rahasia AS menarik rudal Jupiter dari Turki",
      "Kuba diserahkan kembali menjadi koloni Spanyol di bawah pengawasan langsung Dewan Keamanan PBB",
      "Amerika Serikat membayar biaya pembangunan pangkalan rudal kepada Uni Soviet menggunakan emas murni",
      "Uni Soviet diizinkan menempatkan pangkalan militernya secara terbuka di pesisir Florida"
    ],
    correctOptionIndex: 0,
    explanation: "Krisis Rudal Kuba terselesaikan melalui perpaduan diplomasi terbuka dan komitmen rahasia. Khrushchev setuju membongkar dan memulangkan rudal Soviet dari Kuba di bawah verifikasi PBB. Sebagai gantinya, Kennedy secara terbuka berjanji AS tidak akan menginvasi Kuba. Di balik layar, melalui pertemuan rahasia Robert F. Kennedy dan Duta Besar Soviet Anatoly Dobrynin, AS juga berkomitmen mencabut rudal nuklir PGM-19 Jupiter miliknya dari Turki (dan Italia) dalam beberapa bulan berikutnya.",
    sources: [
      {
        title: "Foreign Relations of the United States, 1961–1963, Cuban Missile Crisis",
        institution: "U.S. Department of State, Office of the Historian",
        url: "https://history.state.gov/historicaldocuments/frus1961-63v11/d285",
        type: "Arsip Resmi",
        note: "Korespondensi telegram diplomatik antara John F. Kennedy dan Nikita Khrushchev."
      },
      {
        title: "Jupiter Missiles and the Endgame of the Cuban Missile Crisis",
        institution: "National Security Archive (George Washington University)",
        url: "https://nsarchive.gwu.edu/briefing-book/cuban-missile-crisis-nuclear-vault/2023-02-16/jupiter-missiles-and-endgame-cuban",
        type: "Dokumen Sejarah",
        note: "Arsip deklasifikasi mengenai kompromi rahasia penarikan rudal Jupiter AS dari Turki."
      }
    ]
  },

  // ==================== BAB 4: RACE BEYOND EARTH (1957–1969) ====================
  {
    id: "ch4-1",
    chapterId: "chapter-4",
    order: 1,
    year: "1957",
    title: "Peluncuran Sputnik 1 dan Efek Kejutan Teknologi",
    context: "Pada 4 Oktober 1957, Uni Soviet meluncurkan satelit buatan manusia pertama di dunia, Sputnik 1, dari Kosmodrom Baikonur.",
    question: "Mengapa peluncuran Sputnik 1 memicu kekhawatiran strategis mendalam ('Sputnik Crisis') bagi pemerintah dan publik Amerika Serikat?",
    options: [
      "Karena Sputnik membawa hulu ledak nuklir aktif yang siap diledakkan di atas wilayah Washington D.C.",
      "Karena keberhasilan roket peluncur R-7 membuktikan Uni Soviet telah menguasai teknologi rudal balistik antarbenua (ICBM) yang sanggup mencapai daratan AS",
      "Karena gelombang radio Sputnik melumpuhkan seluruh sistem radar militer dan jaringan kelistrikan di Amerika Utara",
      "Karena satelit tersebut secara sepihak mengklaim kepemilikan seluruh ruang angkasa bagi Uni Soviet"
    ],
    correctOptionIndex: 1,
    explanation: "Peluncuran Sputnik 1 seberat 83,6 kg membuktikan bahwa Uni Soviet berhasil menguasai teknologi roket pendorong multi-tahap berat (rudal R-7 Semyorka rancangan Sergei Korolev). Hal ini menyadarkan AS bahwa Soviet memiliki kemampuan meluncurkan hulu ledak nuklir menggunakan rudal balistik antarbenua (ICBM) langsung ke daratan Amerika Serikat. Kejutan strategis ini memicu percepatan riset luar angkasa, lahirnya badan antariksa sipil NASA pada Juli 1958, dan undang-undang National Defense Education Act.",
    sources: [
      {
        title: "Sputnik 1: The First Artificial Earth Satellite",
        institution: "NASA History Division",
        url: "https://history.nasa.gov/sputnik.html",
        type: "Arsip Resmi",
        note: "Arsip sejarah misi Sputnik 1 dan pengaruhnya terhadap pembentukan lembaga antariksa NASA."
      },
      {
        title: "Sputnik 1 Satellite Gallery & Overview",
        institution: "Smithsonian National Air and Space Museum",
        url: "https://airandspace.si.edu/multimedia-gallery/image/sputnik-1jpg",
        type: "Lembaga Pendidikan",
        note: "Galeri multimedia dan kurasi sejarah teknologi satelit buatan pertama di dunia."
      }
    ]
  },
  {
    id: "ch4-2",
    chapterId: "chapter-4",
    order: 2,
    year: "1961",
    title: "Penerbangan Kosmonaut Yuri Gagarin dengan Vostok 1",
    context: "Pada 12 April 1961, kosmonaut Soviet Letnan Senior Yuri Gagarin bersiap meluncur dari Kosmodrom Baikonur.",
    question: "Pencapaian monumental apa yang ditorehkan oleh Yuri Gagarin dalam sejarah penerbangan antariksa?",
    options: [
      "Menjadi manusia pertama yang mendarat dan berjalan di permukaan kawah Bulan",
      "Menjadi manusia pertama yang melakukan perjalanan ke luar angkasa dan berhasil mengorbit Bumi secara penuh",
      "Menjadi komandan stasiun luar angkasa permanen pertama di orbit rendah planet Mars",
      "Menemukan kandungan air dan atmosfer di kutub selatan Bulan"
    ],
    correctOptionIndex: 1,
    explanation: "Pada 12 April 1961, Yuri Gagarin mencetak sejarah peradaban manusia dengan meluncur ke antariksa menggunakan kapsul Vostok 1. Ia mengorbit Bumi selama 108 menit sebelum mendarat dengan selamat menggunakan parasut di dekat Saratov. Keberhasilan Soviet ini menjadi pemantik langsung bagi Presiden Kennedy untuk mengumumkan target nasional mengantarkan manusia mendarat di Bulan sebelum akhir dekade 1960-an.",
    sources: [
      {
        title: "First Human in Space: Yuri Gagarin on Vostok 1",
        institution: "European Space Agency (ESA) & NASA History",
        url: "https://www.esa.int/About_Us/ESA_history/50_years_of_humans_in_space/Yuri_Gagarin",
        type: "Lembaga Pendidikan",
        note: "Peringatan 50 tahun penerbangan orbit manusia pertama di luar angkasa."
      },
      {
        title: "Yuri Gagarin: First Human in Space",
        institution: "NASA Science",
        url: "https://science.nasa.gov/resource/yuri-gagarin-first-human-in-space/",
        type: "Arsip Resmi",
        note: "Ulasan sejarah NASA mengenai signifikansi penerbangan kosmonaut pertama manusia di antariksa."
      }
    ]
  },
  {
    id: "ch4-3",
    chapterId: "chapter-4",
    order: 3,
    year: "1969",
    title: "Pendaratan Bersejarah Misi Apollo 11 di Bulan",
    context: "Pada 20 Juli 1969, Lunar Module 'Eagle' dari misi Apollo 11 berhasil mendarat di Mare Tranquillitatis (Laut Ketenangan).",
    question: "Siapakah astronot yang pertama kali menginjakkan kaki di permukaan Bulan dan menyampaikan ucapan bersejarah 'That's one small step for man, one giant leap for mankind'?",
    options: [
      "Neil Armstrong, disusul oleh Buzz Aldrin, sementara Michael Collins tetap berada di orbit mengemudikan modul komando",
      "Buzz Aldrin, sementara Neil Armstrong mengendalikan sistem komunikasi modul lunar",
      "Michael Collins, yang kemudian menancapkan bendera Amerika Serikat di kawah lunar",
      "John Glenn, yang sebelumnya telah menyelesaikan misi orbit Mercury-Atlas 6"
    ],
    correctOptionIndex: 0,
    explanation: "Neil A. Armstrong adalah komandan misi Apollo 11 yang menjadi manusia pertama menginjakkan kaki di permukaan Bulan pada 20 Juli 1969 (21 Juli 02:56 UTC). Sembilan belas menit kemudian, Edwin 'Buzz' Aldrin bergabung di permukaan Bulan untuk menjalankan eksperimen sains dan mengumpulkan 21,5 kg sampel batuan, sementara Michael Collins mengorbit di atas mereka dalam Command Module Columbia. Pendaratan ini menandai pemenuhan target Kennedy dan titik puncak keunggulan AS dalam perlombaan antariksa.",
    sources: [
      {
        title: "Apollo 11 Mission Overview: First Lunar Landing",
        institution: "National Aeronautics and Space Administration (NASA)",
        url: "https://www.nasa.gov/mission/apollo-11/",
        type: "Arsip Resmi",
        note: "Arsip resmi dokumentasi misi, laporan teknis, dan transkrip audio pendaratan Apollo 11."
      },
      {
        title: "Apollo 11 Command and Lunar Modules",
        institution: "Smithsonian National Air and Space Museum",
        url: "https://airandspace.si.edu/collection-objects/lunar-module-2/nasm_A19711598000",
        type: "Lembaga Pendidikan",
        note: "Kurasi ilmiah artefak wahana pendarat modul lunar Apollo 11."
      }
    ]
  },

  // ==================== BAB 5: THE FINAL CHAPTER (1985–1991) ====================
  {
    id: "ch5-1",
    chapterId: "chapter-5",
    order: 1,
    year: "1985–1986",
    title: "Kebijakan Reformasi Glasnost dan Perestroika",
    context: "Memasuki pertengahan 1980-an, Uni Soviet dilanda stagnasi ekonomi struktural, defisit anggaran, beban belanja militer, serta ketertinggalan teknologi informasi.",
    question: "Apa pengertian mendasar dari dua kebijakan reformasi utama yang diperkenalkan oleh Pemimpin Soviet Mikhail Gorbachev?",
    options: [
      "Glasnost adalah keterbukaan politik, transparansi institusi, dan pelonggaran sensor pers; sedangkan Perestroika adalah restrukturisasi ekonomi dan desentralisasi usaha",
      "Glasnost adalah mobilisasi militer massal; sedangkan Perestroika adalah penutupan perbatasan Uni Soviet dari kontak internasional",
      "Glasnost adalah pelarangan seluruh perdagangan swasta; sedangkan Perestroika adalah penolakan bantuan teknologi dari negara Barat",
      "Glasnost adalah penyatuan mata uang negara-negara komunis; sedangkan Perestroika adalah pembubaran serikat buruh Soviet"
    ],
    correctOptionIndex: 0,
    explanation: "Mikhail Gorbachev memperkenalkan Perestroika (restrukturisasi) untuk memperbaiki sistem ekonomi komando Soviet yang macet dengan mengizinkan elemen otonomi dan pasar terbatas, serta Glasnost (keterbukaan) untuk mendorong transparansi pemerintahan, kritik terhadap birokrasi, dan pelonggaran sensor. Namun, reformasi ini membuka ruang bagi kritik terbuka terhadap kelemahan sistem komunis, memperkuat sentimen nasionalisme di republik-republik bagian, dan memicu keruntuhan bertahap kekuasaan otoriter Soviet.",
    sources: [
      {
        title: "Soviet Economic Decline and the Reforms of Mikhail Gorbachev (1985–1991)",
        institution: "U.S. Department of State, Office of the Historian",
        url: "https://history.state.gov/milestones/1989-1992/fall-of-communism",
        type: "Arsip Resmi",
        note: "Analisis diplomasi deklasifikasi mengenai dinamika reformasi internal Soviet dan runtuhnya blok timur."
      },
      {
        title: "The Fall of Communism in Eastern Europe, 1989",
        institution: "U.S. Department of State, Office of the Historian",
        url: "https://history.state.gov/milestones/1989-1992/fall-of-communism",
        type: "Arsip Resmi",
        note: "Kajian sejarah diplomasi mengenai keterkaitan kebijakan reformasi Soviet dengan runtuhnya rezim komunis di Eropa Timur."
      }
    ]
  },
  {
    id: "ch5-2",
    chapterId: "chapter-5",
    order: 2,
    year: "1989",
    title: "Momen Pembukaan dan Runtuhnya Tembok Berlin",
    context: "Pada Kamis malam, 9 November 1989, juru bicara Partai Komunis Jerman Timur (SED) Günter Schabowski mengadakan konferensi pers langsung di hadapan wartawan internasional.",
    question: "Peristiwa spesifik apa yang secara langsung memicu puluhan ribu warga Berlin mendatangi pos perbatasan dan membuka Tembok Berlin pada 9 November 1989?",
    options: [
      "Serangan rudal artileri pasukan Sekutu Barat terhadap pos perbatasan Checkpoint Charlie",
      "Pernyataan keliru Günter Schabowski dalam konferensi pers bahwa peraturan perjalanan bebas ke luar negeri mulai berlaku 'segera, tanpa penundaan'",
      "Kemenangan referendum rakyat Berlin Timur yang menuntut penggabungan darat ke negara Austria",
      "Instruksi resmi dari Presiden George H.W. Bush untuk menghancurkan tembok dengan buldoser militer"
    ],
    correctOptionIndex: 1,
    explanation: "Ketika ditanya oleh jurnalis Riccardo Ehrman mengenai kapan aturan izin perjalanan baru bagi warga Jerman Timur mulai berlaku, Günter Schabowski yang kurang mendapat pengarahan memeriksa catatannya dan menyatakan secara spontan: 'Das tritt nach meiner Kenntnis … ist das sofort, unverzüglich' (Sepengetahuan saya ... ini berlaku segera, tanpa penundaan). Siaran berita televisi langsung memicu puluhan ribu warga Berlin Timur berbondong-bondong menuju pos pemeriksaan seperti Bornholmer Straße. Petugas jaga perbatasan yang kebingungan akhirnya membuka gerbang tanpa kekerasan, menandai pembukaan dan runtuhnya Tembok Berlin pada malam 9 November 1989.",
    sources: [
      {
        title: "Die Stasi im Jahr 1989: November 1989",
        institution: "Das Bundesarchiv (Arsip Federal Jerman)",
        url: "https://www.bundesarchiv.de/themen-entdecken/online-entdecken/storys/die-stasi-im-jahr-1989/november-1989/",
        type: "Arsip Resmi",
        note: "Dokumentasi arsip resmi peristiwa pembukaan perbatasan Tembok Berlin November 1989."
      },
      {
        title: "The Fall of Communism and the Berlin Wall",
        institution: "U.S. Department of State, Office of the Historian",
        url: "https://history.state.gov/milestones/1989-1992/fall-of-communism",
        type: "Arsip Resmi",
        note: "Kajian historis deklasifikasi mengenai runtuhnya Tembok Berlin dan gelombang demokrasi di Eropa Timur."
      }
    ]
  },
  {
    id: "ch5-3",
    chapterId: "chapter-5",
    order: 3,
    year: "1991",
    title: "Pengunduran Diri Gorbachev dan Pembubaran Uni Soviet",
    context: "Setelah kudeta gagal Agustus 1991, penandatanganan Perjanjian Belavezha (8 Desember) dan Protokol Alma-Ata (21 Desember 1991) menetapkan pembentukan Persemakmuran Negara-Negara Merdeka (CIS).",
    question: "Peristiwa resmi apa pada tanggal 25–26 Desember 1991 yang secara de jure dan de facto mengakhiri eksistensi Uni Soviet (USSR) dan era Perang Dingin?",
    options: [
      "Pidato pengunduran diri Mikhail Gorbachev sebagai Presiden Soviet dan penurunan bendera palu arit di Kremlin (25 Des), diikuti deklarasi pembubaran resmi oleh Soviet Tertinggi (26 Des 1991)",
      "Deklarasi perang terbuka antara Federasi Rusia dan Ukraina di hadapan Majelis Umum PBB",
      "Penandatanganan traktat penyerahan kekuasaan Kremlin kepada pimpinan komando militer NATO di Paris",
      "Pelantikan kembali keluarga Dinasti Romanov sebagai monarki penguasa Rusia"
    ],
    correctOptionIndex: 0,
    explanation: "Pada pukul 19:38 waktu Moskwa tanggal 25 Desember 1991, Mikhail Gorbachev menyampaikan pidato pengunduran dirinya sebagai Presiden Uni Soviet di televisi nasional. Bendera merah palu arit Soviet diturunkan dari atap Kremlin dan digantikan oleh bendera triwarna Federasi Rusia. Keesokan harinya, 26 Desember 1991, Dewan Republik dari Uni Soviet Tertinggi mengesahkan Deklarasi No. 142-N yang secara resmi membubarkan Uni Soviet sebagai badan hukum internasional, mengakhiri eksistensi negara adidaya tersebut setelah 69 tahun dan menandai berakhirnya era Perang Dingin.",
    sources: [
      {
        title: "The Collapse of the Soviet Union, 1991",
        institution: "U.S. Department of State, Office of the Historian",
        url: "https://history.state.gov/milestones/1989-1992/collapse-soviet-union",
        type: "Arsip Resmi",
        note: "Analisis arsip diplomatik mengenai pembubaran resmi Uni Soviet dan transisi ke CIS."
      },
      {
        title: "The End of the Soviet Union, 1991",
        institution: "National Security Archive (George Washington University)",
        url: "https://nsarchive.gwu.edu/briefing-book/russia-programs/2021-12-21/end-soviet-union-1991",
        type: "Dokumen Sejarah",
        note: "Koleksi dokumen deklasifikasi mengenai pengunduran diri Gorbachev dan hari-hari terakhir Uni Soviet Desember 1991."
      }
    ]
  }
];

export function getChallengesByChapterId(chapterId: string): Challenge[] {
  return CHALLENGES.filter((ch) => ch.chapterId === chapterId).sort((a, b) => a.order - b.order);
}

export function getChallengeById(id: string): Challenge | undefined {
  return CHALLENGES.find((ch) => ch.id === id);
}

export function getMissionBriefing(chapterId: string): MissionBriefing | undefined {
  return MISSION_BRIEFINGS[chapterId];
}
